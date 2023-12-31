import mongoose from 'mongoose';

const UserOTPVerificationSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  expiresAt: {
    type: Date,
    min: Date.now(),
    max: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
  },
});

const UserOTPVerification = mongoose.model('UserOTPVerification', UserOTPVerificationSchema);

export default UserOTPVerification;