import React, { useState } from 'react'
import { Comment } from '../interfaces/comments'
import CommentInput from './CommentInput'

interface CommentItemProps {
  comment: Comment
  onAddReply: (reply: Comment) => void
}

const CommentItem: React.FC<CommentItemProps> = ({ comment, onAddReply }) => {
  const [showReplyInput, setShowReplyInput] = useState(false)

  const handleAddReply = (reply: Comment) => {
    onAddReply(reply)
    setShowReplyInput(false)
  }

  return (
    <div className='mb-4'>
      <div className='flex items-center'>
        <img
          src={comment.avatar}
          alt={comment.username}
          className='mr-2 h-8 w-8 rounded-full'
        />
        <span className='font-semibold'>{comment.username}</span>
      </div>
      <p className='mb-2 ml-10'>{comment.text}</p>
      <button
        onClick={() => setShowReplyInput(!showReplyInput)}
        className='ml-10 text-sm text-blue-500'>
        Reply
      </button>
      {showReplyInput && (
        <div className='ml-10'>
          <CommentInput onAddComment={handleAddReply} avatar={comment.avatar} />
        </div>
      )}
      {comment.replies.length > 0 && (
        <div className='ml-10'>
          {comment.replies.map((reply) => (
            <CommentItem
              key={reply.id}
              comment={reply}
              onAddReply={(newReply) =>
                onAddReply({ ...reply, replies: [...reply.replies, newReply] })
              }
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default CommentItem
