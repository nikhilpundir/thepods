import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  paymentId: {
    type: String,
    required: true,
  },
  bookingDate: {
    type: Date,
    default: Date.now,
    required: true,
  },
  checkIn: {
    type: Date,
    default: Date.now,
    required: true,
  },
  checkOut: {
    type: Date,
    default: Date.now,
    required: true,
  },
  numberOfClassicPods: {
    type: Number,
    default: 0,
    required: true,
  },
  numberOfWomenPods: {
    type: Number,
    default: 0,
    required: true,
  },
  numberOfPremiumPods: {
    type: Number,
    default: 0,
    required: true,
  },
  isCancelled: {
    type: Boolean,
    default: false,
    required: true,
  },
});

// Create a compound index for userId, paymentId, checkIn, and checkOut
bookingSchema.index({ userId: 1, checkIn: 1, checkOut: 1,numberOfClassicPods: 1,numberOfWomenPods:1,numberOfPremiumPods:1 }, { unique: true });

bookingSchema.path('checkIn').validate(function (value) {
  return value <= this.checkOut; // Check if checkIn is before checkOut
}, 'Check-in date must be before check-out date');

// Custom validation for the date range
bookingSchema.path('checkOut').validate(function (value) {
  return value >= this.checkIn; // Check if checkOut is after checkIn
}, 'Check-out date must be after check-in date');

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;
