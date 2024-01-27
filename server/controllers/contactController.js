import asyncHandler from 'express-async-handler';
import sendContactDetails from '../utils/sendContactDetails.js';

const sendContact = asyncHandler(async (req, res) => {
    try {
      let { name, email ,phone, message } = req.body;
      console.log(req.body);
      
      if (!name || !email || !phone || !message) {
        throw Error("Empty detais not allowed");
      } 
      sendContactDetails(req,res);
      
  
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message:"Internal Server Error: Detail not Sent " });
      // res.status(500).json({"message":"Internal Server Error: OTP not sent"});
    }
  
  });
export {
    
    sendContact,
  };