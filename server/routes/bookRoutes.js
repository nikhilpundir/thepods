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
router.route('/paymentverification').post(protect,paymentVerification);
router.route('/bookingconfirmation').post(protect,bookConfirm);
router.route('/bookings/:userId').get(protect, getBookings);
router.route('/bookings/:bookingId').delete(protect, deleteBooking);

export default router;
