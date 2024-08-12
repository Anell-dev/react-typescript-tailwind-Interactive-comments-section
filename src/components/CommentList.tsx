import React from 'react'
import { Comment } from '../interfaces/comments'
import CommentItem from './CommentItem'

interface CommentListProps {
  comments: Comment[]
  onAddReply: (id: string, reply: Comment) => void
}

const CommentList: React.FC<CommentListProps> = ({ comments, onAddReply }) => {
  return (
    <div>
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          onAddReply={(reply) => onAddReply(comment.id, reply)}
        />
      ))}
    </div>
  )
}

export default CommentList
