import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import Booking from "../models/bookModel.js";
const getAllUsers = asyncHandler(async (req, res) => {
    try {
      // Query all users
      const users = await User.find();
  
      // Check if any users were found
      if (!users || users.length === 0) {
        return res.status(404).json({ success: false, message: 'No users found' });
      }
  
      // Return the users
      res.status(200).json({ success: true, 
        _id: users._id,
        name: users.name,
        email: users.email,
        verified: users.verified,
        isDeleted: users.isDeleted,
        role:users.role
       });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Internal Server Error: Failed to fetch users' });
    }
  });
  const getAllBookings = asyncHandler(async (req, res) => {
    try {
      // Query all users
      const bookings = await Booking.find();
  
      // Check if any users were found
      if (!bookings || bookings.length === 0) {
        return res.status(404).json({ success: false, message: 'No users found' });
      }
  
      // Return the users
      res.status(200).json({ success: true, bookings });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Internal Server Error: Failed to fetch users' });
    }
  });
export {
    
    getAllUsers,
    getAllBookings
  };