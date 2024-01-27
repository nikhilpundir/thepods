import { apiSlice } from './apiSlice';
const BASE_URL = 'https://thepods-server.vercel.app';
const USERS_URL = `${BASE_URL}/api/book`;

export const bookingApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    checkout: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/checkout`,
        method: 'POST',
        body: data,
      }),
    }),
    getPaymentKey: builder.mutation({
      query: () => ({
        url: `${BASE_URL}/api/getkey`,
        method: 'GET',
      }),
    }),
    paymentVerification: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/paymentverification`,
        method: 'POST',
        body: data,
      }),
    }),
    bookingConfirmation: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/bookingconfirmation`,
        method: 'POST',
        body: data,
      }),
    }),
    getBooking: builder.query({
      query: ({ userId }) => ({
        url: `${USERS_URL}/bookings/${userId}`,
        method: 'GET',
      }),
      refetchOnMountOrArgChange: true,
      providesTags: (result, error, { userId }) => [{ type: 'Booking', id: userId }],
      // options: {
      //   refetchOnMount: true, // This ensures the query is refetched when the component mounts
      // },
    }),
    deleteBooking: builder.mutation({
      query: ({ bookingId }) => ({
        url: `${USERS_URL}/bookings/${bookingId}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useCheckoutMutation,
  useGetPaymentKeyMutation,
  usePaymentVerificationMutation,
  useBookingConfirmationMutation,
  useGetBookingQuery,
  useDeleteBookingMutation,
} = bookingApiSlice;