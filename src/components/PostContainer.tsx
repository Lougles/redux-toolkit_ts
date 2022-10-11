import React, { useState } from 'react'
import { postApi } from '../services/postService'
import { IPost } from '../store/Models/|Post'
import PostItem from './PostItem'

const PostContainer = () => {
  const [createPost, {}] = postApi.useCreatePostMutation()
  const [limit, setLimit] = useState(100);
  const {data: posts, error, isLoading} = postApi.useFetchAllPostsQuery(limit)
  const [updatePost, {}] = postApi.useUpdatePostMutation()
  const [deletePost, {}] = postApi.useDeletePostMutation()


  const handleCreate = async () => {
    const title = prompt();
    await createPost({title, body: title} as IPost)
  }
  const handleRemove = (post: IPost) => {
    deletePost(post);
  }
  const handleUpdate = (post: IPost) => {
    updatePost(post);
  }

  return (
    <div>
      <div>
        <button onClick={() => handleCreate()}>Add new post</button>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>An error has occured</h1>}
        {posts && posts.map(post => 
            <PostItem key={post.id} post={post} remove={handleRemove} update={handleUpdate}/>
          )}
      </div>
    </div>
  )
}

export default PostContainer