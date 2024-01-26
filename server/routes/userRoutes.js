import express from 'express';
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  verifyOTP,
  resendOTP,
  deleteUser,
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router
  .route('/profile')
  .get(getUserProfile)
  .put(updateUserProfile);
  
router.route('/profile/:userId').delete(deleteUser);
router.post('/otpverification',verifyOTP);
router.post('/resendotpverificationcode',resendOTP);



export default router;
