import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseQuery = fetchBaseQuery({
  baseUrl: 'https://main-coin.site/api/v1',
  // prepareHeaders: (headers) => {
  //   const jwt = getCookie('authToken');
  //   if (jwt) {
  //     headers.set('Authorization', `Bearer ${jwt}`);
  //   }
  //
  //   return headers;
  // },
});
