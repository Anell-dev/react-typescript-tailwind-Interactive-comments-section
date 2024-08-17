import React, { useState } from 'react'
import { Comment } from '../interfaces/comments'
import CommentItem from './CommentItem'
import CommentInput from './CommentInput'

interface CommentListProps {
  comments: Comment[]
  onAddReply: (id: string, reply: Comment) => void
  level?: number
}

const CommentList: React.FC<CommentListProps> = ({
  comments,
  onAddReply,
  level = 0
}) => {
  const [showReplyInput, setShowReplyInput] = useState<string | null>(null)

  const handleAddReply = (parentId: string) => (reply: Comment) => {
    onAddReply(parentId, reply)
    setShowReplyInput(null)
  }

  const toggleReplyInput = (commentId: string) => {
    setShowReplyInput((prev) => (prev === commentId ? null : commentId))
  }

  return (
    <div
      className={`flex w-[100%] flex-col ${level > 0 ? `pl-${level * 8}` : ''}`}>
      {comments.map((comment) => (
        <div key={comment.id} className='relative flex flex-col items-center'>
          <CommentItem
            comment={comment}
            toggleReplyInput={() => toggleReplyInput(comment.id)}
          />

          {comment.replies.length > 0 && (
            <div className='ml-10 w-[95%]'>
              <CommentList
                comments={comment.replies}
                onAddReply={onAddReply}
                level={level + 1}
              />
            </div>
          )}

          {showReplyInput === comment.id && (
            <div className='w-[50%]'>
              <CommentInput
                onAddComment={handleAddReply(comment.id)}
                avatar={comment.avatar}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default CommentList
