import express from 'express';
import {
  checkout,
  paymentVerification,
  bookConfirm,
  getBookings,
  deleteBooking
} from '../controllers/bookingController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/checkout').post( checkout);
router.route('/paymentverification').post(paymentVerification);
router.route('/bookingconfirmation').post(bookConfirm);
router.route('/bookings/:userId').get( getBookings);
router.route('/bookings/:bookingId').delete( deleteBooking);

export default router;
