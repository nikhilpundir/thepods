import React, { useEffect, useState } from "react";
import { useCheckoutMutation, useGetPaymentKeyMutation,usePaymentVerificationMutation,useBookingConfirmationMutation } from "../slices/bookingApiSlice.js";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const BookingPage = () => {
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    numberOfClassicPods: 0,
    numberOfPremiumPods: 0,
    numberOfWomenPods: 0,
    // phone: "",
    amount: 0,
  });

  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);
  const [checkout] = useCheckoutMutation();
  const [payKey] = useGetPaymentKeyMutation();
  const [verifypayment]=usePaymentVerificationMutation();
  const [bookconfirm]= useBookingConfirmationMutation();

  useEffect(() => {
    const amountCalc =
      (formData.numberOfPremiumPods * 400 +
        formData.numberOfWomenPods * 200 +
        formData.numberOfClassicPods * 200) *
      (getNumberOfDays(formData.checkIn, formData.checkOut)+1);

      setFormData((prev) => ({ ...prev, amount: isNaN(amountCalc) ? 0 : amountCalc }));
  }, [formData.numberOfClassicPods, formData.numberOfPremiumPods, formData.numberOfWomenPods, formData.checkIn, formData.checkOut]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleClassicPodsChange = (operation) => {
    if (operation === "increment") {
      setFormData((prevData) => ({
        ...prevData,
        numberOfClassicPods: prevData.numberOfClassicPods + 1,
      }));
    } else if (operation === "decrement" && formData.numberOfClassicPods > 0) {
      setFormData((prevData) => ({
        ...prevData,
        numberOfClassicPods: prevData.numberOfClassicPods - 1,
      }));
    }
  };

  const handleWomenPodsChange = (operation) => {
    if (operation === "increment") {
      setFormData((prevData) => ({
        ...prevData,
        numberOfWomenPods: prevData.numberOfWomenPods + 1,
      }));
    } else if (operation === "decrement" && formData.numberOfWomenPods > 0) {
      setFormData((prevData) => ({
        ...prevData,
        numberOfWomenPods: prevData.numberOfWomenPods - 1,
      }));
    }
  };

  const handlePremiumPodsChange = (operation) => {
    if (operation === "increment") {
      setFormData((prevData) => ({
        ...prevData,
        numberOfPremiumPods: prevData.numberOfPremiumPods + 1,
      }));
    } else if (operation === "decrement" && formData.numberOfPremiumPods > 0) {
      setFormData((prevData) => ({
        ...prevData,
        numberOfPremiumPods: prevData.numberOfPremiumPods - 1,
      }));
    }
  };

 

  const getNumberOfDays = (checkIn, checkOut) => {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const startDate = new Date(checkIn);
    const endDate = new Date(checkOut);
    const diffDays = Math.round(Math.abs((startDate - endDate) / oneDay));
    return diffDays;
  };

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await payKey().unwrap();
    const response = await checkout(formData).unwrap();
    const order = response.order;
    const key = data.key;
    var options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "Thepods",
      description: "Test Transaction",
      // image: mainLogo,
      order_id: order.id,
      // callback_url: "http://localhost:3000/api/book/paymentverification",
      handler: async function (response){

        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
        try {
          const res=await verifypayment({razorpay_payment_id:response.razorpay_payment_id,razorpay_order_id:response.razorpay_order_id,razorpay_signature:response.razorpay_signature}).unwrap();
          const res1=await bookconfirm({
            userId: userInfo._id,
            paymentId: response.razorpay_payment_id,
            checkIn: formData.checkIn,
            checkOut: formData.checkOut,
            numberOfClassicPods: formData.numberOfClassicPods,
            numberOfWomenPods: formData.numberOfWomenPods,
            numberOfPremiumPods: formData.numberOfPremiumPods,
          }).unwrap();
          navigate('/profile');
          
        } catch (error) {
          console.log(error);
        }
        
    },
      prefill: {
        name: userInfo.name,
        email: userInfo.email,
        // contact: formData.phone,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
    razor.on('payment.failed', function (response){
      // alert(response.error.code);
      // alert(response.error.description);
      // alert(response.error.source);
      // alert(response.error.step);
      // alert(response.error.reason);
      // alert(response.error.metadata.order_id);
      // alert(response.error.metadata.payment_id);
      alert("payment not done try again later");
});
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
        <h2 className="text-2xl font-semibold mb-4">Pod Booking</h2>

        <form onSubmit={handleSubmit}>
          {/* <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit phone number"
              minLength="10"
              maxLength="10"
              className="w-full border p-2 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div> */}

          <div className="mb-4">
            <label
              htmlFor="checkIn"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Check-in Date
            </label>
            <input
              type="date"
              id="checkIn"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              min={getCurrentDate()}
              className="w-full border p-2 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="checkOut"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Check-out Date
            </label>
            <input
              type="date"
              id="checkOut"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              min={formData.checkIn || getCurrentDate()}
              className="w-full border p-2 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="numberOfPremiumPods"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Premium Pods
            </label>
            <div className="flex items-center">
              <button
                type="button"
                onClick={() => handlePremiumPodsChange("decrement")}
                className="px-3 py-1 bg-blue-500 text-white rounded mr-2"
              >
                -
              </button>
              <span className="text-xl font-semibold">
                {formData.numberOfPremiumPods}
              </span>
              <button
                type="button"
                onClick={() => handlePremiumPodsChange("increment")}
                className="px-3 py-1 bg-blue-500 text-white rounded ml-2"
              >
                +
              </button>
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="numberOfWomenPods"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Womens Only Pods
            </label>
            <div className="flex items-center">
              <button
                type="button"
                onClick={() => handleWomenPodsChange("decrement")}
                className="px-3 py-1 bg-blue-500 text-white rounded mr-2"
              >
                -
              </button>
              <span className="text-xl font-semibold">
                {formData.numberOfWomenPods}
              </span>
              <button
                type="button"
                onClick={() => handleWomenPodsChange("increment")}
                className="px-3 py-1 bg-blue-500 text-white rounded ml-2"
              >
                +
              </button>
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="numberOfClassicPods"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Classic Pods
            </label>
            <div className="flex items-center">
              <button
                type="button"
                onClick={() => handleClassicPodsChange("decrement")}
                className="px-3 py-1 bg-blue-500 text-white rounded mr-2"
              >
                -
              </button>
              <span className="text-xl font-semibold">
                {formData.numberOfClassicPods}
              </span>
              <button
                type="button"
                onClick={() => handleClassicPodsChange("increment")}
                className="px-3 py-1 bg-blue-500 text-white rounded ml-2"
              >
                +
              </button>
            </div>
          </div>

          <div className="mb-4">Amount: {formData.amount}</div>

          <button
            type="submit"
            className={` ${
              formData.amount === 0
                ? "opacity-50 cursor-not-allowed"
                : ""
            } mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800`}
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
