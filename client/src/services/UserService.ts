import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";


export const userAPI = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api'
    }),
    tagTypes: ["User"],
    endpoints: (build) => ({
        fetchUser: build.query<any,string>({
            query: () => ({
                url: `user`,
            }),
            providesTags: result => ["User"]
        }),
    })
})