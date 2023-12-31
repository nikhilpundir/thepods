import { apiSlice } from './apiSlice';

const BASE_URL = 'https://thepods-server.vercel.app';
const CONTACT_URL = `${BASE_URL}/api/contactdetail`;

export const contactApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        sendDetails: builder.mutation({
            query: (data) => ({
              url: `${CONTACT_URL}/send`,
              method: 'POST',
              body: data,
            }),
          }),
    }),
  });
  
  export const {
    useSendDetailsMutation,
  } = contactApiSlice;