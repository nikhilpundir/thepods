import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BookingCard } from '../components/index';
import { useGetBookingQuery } from "../slices/bookingApiSlice";
import {useDeleteUserMutation} from "../slices/usersApiSlice" 
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { userInfo } = useSelector((state) => state.auth);
  
  const navigate = useNavigate();

  // Use the React Query hook to fetch bookings
  const { data: bookings, isLoading, isError } = useGetBookingQuery({ userId: userInfo?._id },{ refetchOnMountOrArgChange: true });
  // const queryClient = useQueryClient();
  const [deleteuser]=useDeleteUserMutation();


  useEffect(() => {
    // refetch();
    if (!userInfo?.verified) {
      navigate('/');
      
    }
    // Use the React Query hook to fetch bookings

  }, [navigate, userInfo]);

const deleteUserHandler=async ()=>{
    try {
      const res=await deleteuser({ userId: userInfo?._id }).unwrap();
    } catch (error) {
      console.log(error);
    }
}
  return (
    <>
      <section className=' grid grid-cols-2 gap-4 m-6'>
        <div className=" p-6 min-w-fit bg-gray-300 shadow-md rounded-md">
          <div className="flex flex-wrap items-center">
            <img
              className="w-16 h-16 rounded-full mr-4 "
              src="https://emedia1.nhs.wales/HEIW2/cache/file/F4C33EF0-69EE-4445-94018B01ADCF6FD4.png" // Replace with the URL of the user's avatar image
              alt="User Avatar"
            />
            <div>
              <h2 className="text-xl font-semibold">{userInfo?.name}</h2>
              <p className="text-gray-600">{userInfo?.email}</p>
            </div>
          </div>
        </div>
      </section>

      <section className='m-6'>
        <h1 className='text-2xl'>Your Recent Bookings</h1>
        <div className='p-8 grid grid-cols-1 gap-4 md:grid-cols-2'>
          {isLoading && <p>Loading...</p>}
          {isError && <p>No Bookings Found</p>}
          {bookings && bookings.map((booking, index) => (
            <BookingCard key={booking._id} booking={booking} index={index} />
          ))}
        </div>
      </section>

      <div className="p-4 bg-red-400 border-2 border-red-800 shadow-md rounded-md text-white">
      <div className="flex items-center justify-around mb-2">
      <p className="text-lg text-red-900">
          Warning: Deleting your account is irreversible.
        </p>
            <button
              className="bg-red-900 text-white px-3 py-1 rounded hover:bg-red-600 focus:outline-none"
              onClick={deleteUserHandler}
            >
              Delete Account
            </button>
          </div>

      </div>


    </>
  );
};

export default Profile;
