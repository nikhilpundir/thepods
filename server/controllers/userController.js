import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';
import sendOTPVerificationEmail from '../utils/sendOTPVerificationEmail.js';
import UserOTPVerification from "../models/userOTPVerification.js";
import bcrypt from 'bcryptjs';


// @desc    Auth user & get token
// @route   POST /api/users/auth
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password)) && user.verified) {

    generateToken(res, user._id, user.isDeleted);

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      verified: user.verified,
      isDeleted: user.isDeleted,
    });
  } else {
    if (user.isDeleted) {
      res.status(401).json({ message: 'Account Deleted' });
    }
    res.status(401).json({ message: 'Invalid email, password, or unverified account' });

  }
});

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  try {
    // const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      // password: hashedPassword, 
      password: password,
    });

    await user.save();

    sendOTPVerificationEmail(user, res);

    generateToken(res, user._id);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      verified: user.verified,
      isDeleted: user.isDeleted,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create user.' });
  }
});

// @desc    Logout user / clear cookie
// @route   POST /api/users/logout
// @access  Public
const logoutUser = (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: 'Logged out successfully' });
};

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      verified: user.verified,
      isDeleted: user.isDeleted,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      verified: user.verified,
      isDeleted: user.isDeleted,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

const deleteUser = asyncHandler(async (req, res) => {
  const userId = req.params.userId;
  console.log(userId);
  try {
    // Find the user by ID and mark as deleted
    const deletedUser = await User.findByIdAndUpdate(
      userId,
      { $set: { isDeleted: true } },
      { new: true }
    );
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    const user = await User.findById(userId);
    generateToken(res, user._id);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      verified: user.verified,
      isDeleted: user.isDeleted,
    });
    // res.status(200).json({ message: 'User marked as deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});


const verifyOTP = asyncHandler(async (req, res) => {
  try {
    let { userId, otp } = req.body;
    console.log(req.body);

    if (!userId || !otp) {
      res.status(400).json({ "message": "Bad Request: Empty otp details not allowed" });
    } else {
      const UserOTPVerificationRecords = await UserOTPVerification.find({ userId });

      if (UserOTPVerificationRecords.length <= 0) {
        res.status(404).json({ "message": "Not Found: Account not exist" });
      } else {
        const { expiresAt } = UserOTPVerificationRecords[0];
        const hashedOTP = UserOTPVerificationRecords[0].otp;
        if (expiresAt < Date.now()) {
          await UserOTPVerification.deleteMany({ userId });
          res.status(401).json({ "message": "Unauthorized: Code expired" });
        } else {
          const validOTP = await bcrypt.compare(otp, hashedOTP);
          if (!validOTP) {
            res.status(401).json({ "message": "Unauthorized: Invalid code" });
          } else {
            await User.updateOne({ _id: userId }, { verified: true });
            await UserOTPVerification.deleteMany({ userId });
            console.log("email verified");
            const user = await User.findById(userId);

            res.status(200).json({
              _id: user._id,
              name: user.name,
              email: user.email,
              verified: user.verified,
              isDeleted: user.isDeleted,
            });
            // res.status(200).json({ "message": "OK: OTP verified" });
          }
        }
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ "message": "Internal Server Error: OTP not verified" });
  }
});

const resendOTP = asyncHandler(async (req, res) => {
  try {
    let { userId, email } = req.body;

    if (!userId || !email) {
      throw Error("Empty user detais not allowed");
    } else {
      const UserOTPVerificationRecords = await UserOTPVerification.find({
        userId,
      });
      if (UserOTPVerificationRecords.length <= 0) {
        throw new Error("account not exist")
      } else {
        await UserOTPVerification.deleteMany({ userId });
        sendOTPVerificationEmail({ _id: userId, email }, res);
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ "message": "Internal Server Error: OTP not sent" });
  }

});



export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  deleteUser,
  verifyOTP,
  resendOTP,
};
