import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:3000" }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (data) => ({
        url: "/api/login",
        body: data,
        method: "POST",
      }),
    }),
    createUser: builder.mutation({
      query: (data) => ({
        url: "/api/register",
        body: data,
        method: "POST",
      }),
    }),
  }),
});

export const { useLoginUserMutation,useCreateUserMutation } = userApi;
