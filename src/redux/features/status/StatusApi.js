import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getBaseUrl } from "../../../utils/baseURL";

const statusApi =  createApi({
    reducerPath: "statusApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${getBaseUrl()}/api/status`,
        credentials: "include",
    }),
    tagTypes: ["Status"],
    endpoints: (builder) => ({
        getUserStatus: builder.query({
            query: (email) => `/user-status/${email}`,
            providesTags: ["Status"],
        }),
        getAdminStatus: builder.query({
            query: () => `/admin-status`,
            providesTags: ["Status"],
        }),
    })
})

export const {useGetUserStatusQuery, useGetAdminStatusQuery} = statusApi;

export default statusApi;