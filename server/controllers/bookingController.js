import asyncHandler from "express-async-handler";
import Booking from "../models/bookModel.js";
import instance from "../config/payment.js";
import crypto from "crypto"
import { Payment } from "../models/paymentModel.js";


const checkout = asyncHandler(async (req, res) => {
  
  var options = {
    amount: req.body.amount*100, // amount in the smallest currency unit
    currency: "INR",
    // receipt: "order_rcptid_11",
  };
  const order= await instance.orders.create(options)
  // console.log(order);
  res.status(200).json({
    success:true,
    order,
  })
});

const paymentVerification = asyncHandler(async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;
    const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_SECRET_KEY)
    .update(body.toString())
    .digest("hex");
    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
      // Database comes here
  
      await Payment.create({
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
      });
  
      // res.redirect(
      //   `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
      // );
      res.status(200).json({
        success:true,
      })
    } else {
      res.status(400).json({
        success: false,
      });
    }

  
});
const bookConfirm = asyncHandler(async (req, res) => {
  // Extract relevant data from the request body
  const { userId, paymentId, checkIn, checkOut, numberOfClassicPods, numberOfWomenPods, numberOfPremiumPods } = req.body;

  try {
    // Create a new booking entry
    const newBooking = await Booking.create({
      userId,
      paymentId,
      checkIn,
      checkOut,
      numberOfClassicPods,
      numberOfWomenPods,
      numberOfPremiumPods,
    });
    await newBooking.save();

    res.status(201).json({ success: true, data: newBooking });
  } catch (error) {
    // Handle validation errors or other issues
    res.status(400).json({ success: false, error: error.message });
  }
});

const getBookings = asyncHandler(async (req, res) => {
  const userId = req.params.userId;

  try {
    // Fetch all bookings for the specified userId
    const bookings = await Booking.find({ userId: userId }).sort({ bookingDate: -1 });

    if (bookings.length === 0) {
      return res.status(404).json({ message: 'Bookings not found' });
    }

    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

const deleteBooking=asyncHandler(async(req,res)=>{
  const bookingId = req.params.bookingId;
  console.log(bookingId);
  try {
    // Find the user by ID and mark as deleted
    const deletedUser = await Booking.findByIdAndUpdate(
      bookingId,
      { $set: { isCancelled: true } },
      { new: true }
    );

    if (!deletedUser) {
      return res.status(404).json({ message: 'booking not found' });
    }

    res.status(200).json({ message: 'Your booking is cancelled successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});
export { 
  checkout,
  paymentVerification,
  bookConfirm,
  getBookings,
  deleteBooking,
};
