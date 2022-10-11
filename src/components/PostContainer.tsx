import React from 'react'
import { postApi } from '../services/postService'
import PostItem from './PostItem'

const PostContainer = () => {
  const {data: posts} = postApi.useFetchAllPostsQuery(5)
  return (
    <div>
      <div>
        {posts && posts.map(post => 
            <PostItem key={post.id} post={post}/>
          )}
      </div>
    </div>
  )
}

export default PostContainer