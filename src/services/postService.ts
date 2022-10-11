import { IPost } from './../store/Models/|Post';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
  endpoints: (builder) => ({
    fetchAllPosts: builder.query<IPost[], number>({
      query: (limit: number = 5) => ({
        url: '/posts',
        params: {
          _limit: limit
        }
      })
    })
  })
})