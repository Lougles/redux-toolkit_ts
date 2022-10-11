import React, {FC} from 'react'
import { IPost } from '../store/Models/|Post'

interface PostItemProps {
  post: IPost;
  remove: (post: IPost) => void;
  update: (post: IPost) => void;
}

const PostItem: FC<PostItemProps> = ({post, remove, update}) => {

  const handleUpdate = (event: React.MouseEvent) => {
    const title = prompt() || '';
    update({...post, title})
  }

  const handleRemove = (event: React.MouseEvent) => {
    event.stopPropagation()
    remove(post);
  }

  return (
    <div className='post' onClick={handleUpdate}>
      {post.id}. {post.title}
      <button onClick={handleRemove}>Delete</button>
    </div>
  )
}

export default PostItem