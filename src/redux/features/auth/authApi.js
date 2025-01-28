import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { getBaseUrl } from "../../../utils/baseURL"



const authApi = createApi({
    reducerPath : "authApi",
    baseQuery : fetchBaseQuery({
        baseUrl : `${getBaseUrl()}/api/auth`,
        credentials : "include"
    }),

    tagTypes : ["User"],
    endpoints : (builder) => ({
        registerUser : builder.mutation({
            query : (newUser) => ({
                url : "/register",
                method : "POST",
                body : newUser
            })
        }),

    loginUser : builder.mutation({
        query : (credentials) => ({
            url: "/login",
            method: "POST",
            body : credentials
        })
    }),
    logoutUser : builder.mutation({
        query : () => ({
            url : "/logout",
            method : "POST"
        })
    }),
    getUser: builder.query({
        query : () => ({
            url : "/getuser",
            method : "GET"
        }),
        refetchOnMount : true,
        invalidatesTags : ["User"]
    }),
    deleteUser : builder.mutation({
        query: (userId) => ({
         url: `/deleteuser/${userId}`,
         method: "DELETE"
        }),
        invalidatesTags : ["User"]
    }),
    updateUserRole : builder.mutation({
        query : ({ userId, role }) => ({
            url : `/updateuser/${userId}`,
            method: "PUT",
            body : {role}
        }),
        refetchOnMount : true,
        invalidatesTags: ["user"],
    }),
    editProfile : builder.mutation({
        query : (profileData) => ({
            url : "/edit-profile",
            method : "PATCH",
            body: profileData
        })
    })
  })
})

export const { useRegisterUserMutation, useLoginUserMutation, useLogoutUserMutation, 
useGetUserQuery,useDeleteUserMutation, useUpdateUserRoleMutation, useEditProfileMutation

} = authApi;
export default authApi;