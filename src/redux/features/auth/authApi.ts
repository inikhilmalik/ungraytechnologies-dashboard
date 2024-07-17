import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  LoginRequest,
  LoginResponse,
  OrgRequest,
  OrgResponse,
  RegisterRequest,
  RegisterResponse,
} from "./interfaces";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://ec2-3-83-254-115.compute-1.amazonaws.com:8020/api/v1",
    prepareHeaders: (headers) => {
      headers.set('Authorization', 'Basic ' + btoa('trial:assignment123'));
      return headers;
    },
  }),
  endpoints: (builder) => ({

    login: builder.mutation<any, LoginRequest>({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),

    getData: builder.query<any, any>({
      query: (id) => ({
        url: `/sample_assignment_api_${id}`
      }),
    }),

  }),
});

export const { useLoginMutation, useGetDataQuery } =
  authApi;
