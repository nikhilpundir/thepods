import React from 'react';
import {useDeleteBookingMutation } from "../slices/bookingApiSlice";

const BookingCard = ({ booking, index = 0 }) => {
  const formatDate = (date) => new Date(date).toLocaleDateString();
  const [deleteBooking] =useDeleteBookingMutation();
  
  const bookingCancelHandler=async ()=>{
    try {
      const res= await deleteBooking({ bookingId: booking._id }).unwrap();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="  relative bg-gradient-to-r p-4 rounded-md shadow-xl bg-gray-300 mb-4 backdrop-blur-xl">
      <button className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 focus:outline-none"
      onClick={bookingCancelHandler}>
        
        Cancel
      </button>
      <div className='grid grid-cols-2'>
        <div>
          <p className="text-black text-lg mb-2">
            <span className="text-gray-800">📅 Booking Date:</span> {formatDate(booking.bookingDate)}
          </p>
          <p className="text-black text-lg mb-2">
            <span className="text-gray-800">🏠 Check-in:</span> {formatDate(booking.checkIn)}
          </p>
          <p className="text-black text-lg mb-2">
            <span className="text-gray-800">🚪 Check-out:</span> {formatDate(booking.checkOut)}
          </p>
        </div>
        {booking.numberOfClassicPods > 0 || booking.numberOfWomenPods > 0 || booking.numberOfPremiumPods > 0 ? (
          <div className="">
          {booking.numberOfPremiumPods > 0 && (
            <div className="text-black text-lg font-semibold mb-2">
              <p className="text-gray-800">💎 Premium Pods: <span className="text-xl text-black">{booking.numberOfPremiumPods}</span></p>
            </div>
          )}
          {booking.numberOfClassicPods > 0 && (
            <div className="text-black text-lg font-semibold mb-2">
              <p className="text-gray-800">🛌 Classic Pods: <span className="text-xl text-black">{booking.numberOfClassicPods}</span></p>
            </div>
          )}
          {booking.numberOfWomenPods > 0 && (
            <div className="text-black text-lg font-semibold mb-2">
              <p className="text-gray-800">🚺 Women Pods: <span className="text-xl text-black">{booking.numberOfWomenPods}</span></p>
            </div>
          )}
        </div>
        ) : null}
      </div>
    </div>

  );
};

export default BookingCard;