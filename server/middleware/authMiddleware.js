import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

const protect = asyncHandler(async (req, res, next) => {
  let token;

  token = req.cookies.jwt;
  console.log('Token:', token);
  
  // if (token) {
  try {
    if (token) {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const user = await User.findById(decoded.userId).select('-password');

      // Check if the user is marked as deleted
      if (user && user?.isDeleted) {
        res.status(401);
        throw new Error('Not authorized, user is deleted');
      }

      req.user = user;

      next();
    } else {
      res.status(401);
      throw new Error('Not authorized, no token');
    }
  } catch (error) {
    console.error(error);
    res.status(401);
    throw new Error('Not authorized, token failed');
  }
  
});

export { protect };
