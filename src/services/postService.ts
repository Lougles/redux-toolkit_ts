import { IPost } from './../store/Models/|Post';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


//This is example how to do async fetch with base url and query, and get data. Jsonplaceholder
//If you use createApi, your request is't repeat. You can do a lot of requests, but it will be only one request on server.

// export const postApi = createApi({
//   reducerPath: 'postApi',
//   baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
//   endpoints: (builder) => ({
//     fetchAllPosts: builder.query<IPost[], number>({
//       query: (limit: number = 5) => ({
//         url: '/posts',
//         params: {
//           _limit: limit
//         }
//       })
//     }),
//   })
// })
export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5001'}),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    fetchAllPosts: builder.query<IPost[], number>({
      query: (limit: number = 5) => ({
        url: '/posts',
        params: {
          _limit: limit
        }
      }),
      providesTags: result => ['Post']
    }),
    createPost: builder.mutation<IPost, IPost>({
      query: (post) => ({
        url: '/posts',
        method: 'POST',
        body: post
      }),
      invalidatesTags: ['Post']
    }),
    updatePost:  builder.mutation<IPost, IPost>({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: 'PUT',
        body: post
      }),
      invalidatesTags: ['Post']
    }),
    deletePost:  builder.mutation<IPost, IPost>({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Post']
    }),
  })
})