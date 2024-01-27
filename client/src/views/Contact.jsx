import React, { useState } from "react";
import { useSendDetailsMutation } from "../slices/contactApiSlice.js";
import FAQItem from "../components/FAQItems.jsx";

import PuffLoader from "react-spinners/PuffLoader";

import toast, { Toaster } from 'react-hot-toast';
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const [sendDetails,{ isLoading }] = useSendDetailsMutation();

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate name
    if (!name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      newErrors.email = "Valid email is required";
      isValid = false;
    }

    // Validate phone
    const phoneRegex = /^[0-9]+$/;
    if (!phone.trim() || !phoneRegex.test(phone)) {
      newErrors.phone = "Valid phone number is required";
      isValid = false;
    }

    // Validate message
    if (!message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const res = await sendDetails({
          name: name,
          email: email,
          phone: phone,
          message: message,
        }).unwrap();

        toast.success("Sent Successfully", {
          position: 'bottom-center',
        });
        // console.log(res);

      } catch (error) {
        toast.error(error.data.message, {
          position: 'bottom-center',
        });
        console.error("Error:", error.message);
      }
    }
  };

  return (
    <section className="bg-gray-100">
       <Toaster/>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <p className="max-w-xl text-lg">
              At ThePods, we are here to help you with all your pod booking needs. Please feel free to reach out to us using the contact form or the contact details provided below.
            </p>

            <div className="mt-8">
              <a href="tel:+91-9876543210" className="text-2xl font-bold text-red-600">
                +91 98765 43210
              </a>

              <address className="mt-2 not-italic">
                123 Pod Lane, Bangalore, Karnataka, India
              </address>
            </div>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form onSubmit={submitHandler} className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  className={`w-full rounded-lg border-gray-200 p-3 text-sm ${errors.name ? "border-red-500" : ""
                    }`}
                  placeholder="Name"
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className={`w-full rounded-lg border-gray-200 p-3 text-sm ${errors.name ? "border-red-500" : ""
                  }`}
                    placeholder="Email address"
                    type="email"
                    id="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                  {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
                </div>

                <div>
                  <label className="sr-only" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className={`w-full rounded-lg border-gray-200 p-3 text-sm ${errors.name ? "border-red-500" : ""
                  }`}
                    placeholder="Phone Number"
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                  />
                  {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="message">
                  Message
                </label>

                <textarea
                  className={`w-full rounded-lg border-gray-200 p-3 text-sm ${errors.name ? "border-red-500" : ""
                    }`}
                  placeholder="Message"
                  rows="8"
                  id="message"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                ></textarea>
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div className="mt-4">
                {isLoading?<PuffLoader color="red"
                  // loading={isLoading}
                  size={50}
                  aria-label="Loading Spinner"
                  data-testid="loader" />:<button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                >
                  Send Enquiry
                </button>}
              </div>
            </form>
          </div>
        </div>

        <div className="space-y-4 mt-20">
          <h1 className="text-5xl font-bold p-4">FAQ</h1>

          <FAQItem question="How can I book a pod with ThePods?" answer={`To book a pod with ThePods, you can visit our website and navigate to the "Book" section. Follow the instructions provided to select your preferred dates and complete the booking process.`} />
          <FAQItem question="What amenities are included with the pods?" answer={`Our pods come equipped with essential amenities, including comfortable bedding, a small kitchenette, and a private bathroom. Please check the specific pod details for a comprehensive list of amenities.`} />
          <FAQItem question="Can I modify or cancel my pod booking?" answer={`Yes, you can modify or cancel your pod booking. Please log in to your account on our website and navigate to the "My Bookings" section for options to modify or cancel your reservation.`} />
          <FAQItem question="Are pets allowed in the pods?" answer={`Unfortunately, pets are not allowed in our pods to ensure a comfortable environment for all guests.`} />


        </div>

      </div>
    </section>
  );
};

export default Contact;
