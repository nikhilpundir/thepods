import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

const protect = asyncHandler(async (req, res, next) => {
  let token;

  token = req.cookies.jwt;
  console.log( `TOKEN IS ${token}`)
  try {
    if (token) {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const user = await User.findById(decoded.userId).select('-password');
      if (user && user?.isDeleted) {
        throw new Error('Not authorized, user is deleted');
      }
      
      req.user = user;
      next();

    } else {
      throw new Error('Not authorized, no token');
    }
  } catch (error) {
    console.error(error);
    res.status(401);
  }
  
});

export { protect };
