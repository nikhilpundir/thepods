import { apiSlice } from './apiSlice';
const CONTACT_URL = '/api/contactdetail';

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