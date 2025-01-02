import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { loginSuccess } from "../slices/authSlice";

const baseUrl = "http://localhost:5000/api/v1/user";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl, credentials: "include" }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userData) => ({
        url: "register",
        method: "POST",
        body: userData,
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: "login",
        method: "POST",
        body: credentials,
      }),
    }),
    async onQueryStarted(args, { queryFullFilled, dispatch }) {
      try {
        const result = await queryFullFilled;
        console.log(result.data);

        dispatch(loginSuccess(result.data));
      } catch (error) {
        console.log(error);
      }
    },
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
