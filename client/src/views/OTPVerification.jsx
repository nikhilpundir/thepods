import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useOtpVerifyMutation, useOtpResendMutation } from "../slices/usersApiSlice";
import { Link, useNavigate } from 'react-router-dom';
import { setCredentials } from "../slices/authSlice";

const OTPVerification = () => {
  const [otp, setOtp] = useState(['', '', '', '']);


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [verifyotp, { isLoading }] = useOtpVerifyMutation();
  const [resendotp, { isLoadingd }] = useOtpResendMutation();


  const { userInfo } = useSelector((state) => state.auth);


  // Handle form submission event
  const submitHandler = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const chkotp = otp.join(''); // Concatenate OTP digits
      // const chkotp = parseInt(concatenatedString, 10); // Convert concatenated OTP to integer

      const res = await verifyotp({ userId: userInfo._id, otp: chkotp, }).unwrap(); // Verify OTP
      dispatch(setCredentials({ ...res }));

      navigate('/'); // Navigate to home page
    } catch (error) {
      console.error(error.data.message); // Log error to console
      alert('There was an error verifying your OTP. Please try again later.'); // Show user-friendly error message
    }
  }
  const resendotpHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await resendotp({ userId: userInfo._id, email: userInfo.email }).unwrap();
    } catch (error) {
      console.error(error.data.message); // Log error to console
      alert('There was an error resending your OTP. Please try again later.'); // Show user-friendly error message
    }
  }



  const otpInputRefs = [React.createRef(), React.createRef(), React.createRef(), React.createRef()];

  const handleOtpChange = (e, index) => {
    const value = e.target.value;

    // Only allow numeric input
    if (!/^\d*$/.test(value)) return;

    // Update the OTP array
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to the next input
    if (index < 3 && value !== '') {
      otpInputRefs[index + 1].current.focus();
    }

  };

  return (

    <div className="min-h-screen flex items-center justify-center  bg-gray-100">
      <form onSubmit={submitHandler}>
        <div className="bg-white p-8 rounded shadow-md w-full sm:w-96 ">
          <h2 className="text-2xl font-semibold mb-4">Enter Verification Code</h2>
          <p className="text-gray-600 mb-6">A 4-digit verification code has been sent to your email.</p>

          <div className="flex space-x-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={otpInputRefs[index]}
                type="text"
                value={digit}
                onChange={(e) => handleOtpChange(e, index)}
                maxLength="1"
                className="w-12 h-12 text-2xl border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-center"
              />
            ))}
          </div>
          <div className='flex gap-3'>
            <button type='submit' className="mt-8 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
              Verify
            </button>
            <button onClick={resendotpHandler} className="mt-8 bg-gray-300 text-gray-600 py-2 px-4 rounded hover:bg-gray-600 hover:text-white focus:outline-none">
              resend
            </button>
          </div>
        </div>
      </form>

    </div>

  );
};

export default OTPVerification;