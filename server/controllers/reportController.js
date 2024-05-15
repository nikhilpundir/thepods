import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
const getAllUsers = asyncHandler(async (req, res) => {
    try {
      // Query all users
      const users = await User.find();
  
      // Check if any users were found
      if (!users || users.length === 0) {
        return res.status(404).json({ success: false, message: 'No users found' });
      }
  
      // Return the users
      res.status(200).json({ success: true, users });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Internal Server Error: Failed to fetch users' });
    }
  });

export {
    
    getAllUsers,
  };