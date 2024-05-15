import express from 'express';
import { getAllUsers,getAllBookings } from '../controllers/reportController.js';

const router = express.Router();

router.route('/allUsers').get(getAllUsers);
router.route('/allBookings').get(getAllBookings);

export default router;