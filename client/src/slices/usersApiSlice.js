import { apiSlice } from './apiSlice';
const BASE_URL = 'https://thepods-server.vercel.app';
const USERS_URL = `${BASE_URL}/api/users`;

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: 'POST',
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: 'POST',
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: 'POST',
        body: data,
      }),
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: 'PUT',
        body: data,
      }),
    }),
    deleteUser: builder.mutation({
      query: ({ userId }) => ({
        url: `${USERS_URL}/profile/${userId}`,
        method: 'DELETE',
      }),
    }),
    otpVerify: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/otpverification`,
        method: 'POST',
        body: data,
      }),
    }),
    otpResend: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/resendotpverificationcode`,
        method: 'POST',
        body: data,
      }),
    }),
    
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useOtpVerifyMutation,
  useOtpResendMutation,
} = userApiSlice;
