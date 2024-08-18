import { useState } from 'react'
import CommentItem from './CommentItem'
import CommentInput from './CommentInput'
import userRandom from '../assets/images/user.png'
import { Comment } from '../interfaces/comments'
import { CommentListProps } from '../interfaces/commentListProps'

const CommentList: React.FC<CommentListProps> = ({ comments, onAddReply }) => {
  const [showReplyInput, setShowReplyInput] = useState<string | null>(null)
  const [replyingTo, setReplyingTo] = useState<string | null>(null)

  const handleAddReply = (parentId: string) => (reply: Comment) => {
    onAddReply(parentId, reply)
    setShowReplyInput(null)
    setReplyingTo(null)
  }

  const toggleReplyInput = (commentId: string, username: string) => {
    if (showReplyInput === commentId) {
      setShowReplyInput(null)
      setReplyingTo(null)
    } else {
      setShowReplyInput(commentId)
      setReplyingTo(username)
    }
  }

  return (
    <div className='flex w-[100%] flex-col'>
      {comments.map((comment) => (
        <div key={comment.id} className='relative flex flex-col items-center'>
          <CommentItem
            comment={comment}
            toggleReplyInput={() =>
              toggleReplyInput(comment.id, comment.username)
            }
          />

          {comment.replies.length > 0 && (
            <div className='ml-10 w-[95%]'>
              <CommentList comments={comment.replies} onAddReply={onAddReply} />
            </div>
          )}

          {showReplyInput === comment.id && (
            <div className='mb-2 w-[50%] rounded-lg bg-white p-5'>
              <CommentInput
                onAddComment={handleAddReply(comment.id)}
                avatar={userRandom}
                prefillText={replyingTo ? `@${replyingTo} ` : ''}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default CommentList
