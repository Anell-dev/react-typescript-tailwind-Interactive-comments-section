import { useState } from 'react'
import CommentItem from './CommentItem'
import CommentInput from './CommentInput'
import userRandom from '../assets/images/user.png'
import { Comment } from '../interfaces/comments'
import { CommentListProps } from '../interfaces/commentListProps'

const CommentList: React.FC<CommentListProps> = ({
  comments,
  onAddReply,
  onEditComment,
  onDeleteComment
}) => {
  const [showReplyInput, setShowReplyInput] = useState<string | null>(null)
  const [replyingTo, setReplyingTo] = useState<string | null>(null)
  const [dataToEdit, setDataToEdit] = useState<Comment | null>(null)

  const handleAddReply = (parentId: string) => (reply: Comment) => {
    if (dataToEdit) {
      onEditComment(dataToEdit.id, reply)
      setDataToEdit(null) // Limpiamos los datos de edición
    } else {
      onAddReply(parentId, reply)
    }
    setShowReplyInput(null)
    setReplyingTo(null)
  }

  const handleDeleteComment = (id: string) => {
    onDeleteComment(id)
  }

  const toggleReplyInput = (commentId: string, username: string) => {
    if (showReplyInput === commentId) {
      setShowReplyInput(null)
      setReplyingTo(null)
    } else {
      setShowReplyInput(commentId)
      setReplyingTo(username)
      setDataToEdit(null)
    }
  }

  const toggleEditInput = (comment: Comment) => {
    if (dataToEdit && dataToEdit.id === comment.id) {
      setDataToEdit(null)
      setShowReplyInput(null)
    } else {
      setDataToEdit(comment)
      setShowReplyInput(comment.id)
      setReplyingTo(comment.username)
    }
  }

  return (
    <>
      {comments.map((comment) => (
        <div key={comment.id} className='flex w-[100%] flex-col items-center'>
          <CommentItem
            comment={comment}
            toggleReplyInput={() =>
              toggleReplyInput(comment.id, comment.username)
            }
            toggleEditInput={() => toggleEditInput(comment)}
            onDeleteComment={() => handleDeleteComment(comment.id)}
          />

          {comment.replies.length > 0 && (
            <div className='ml-10 w-[95%]'>
              <CommentList
                comments={comment.replies}
                onAddReply={onAddReply}
                onEditComment={onEditComment}
                onDeleteComment={onDeleteComment}
              />
            </div>
          )}

          {showReplyInput === comment.id && (
            <div className='mb-2 rounded-lg bg-white p-5 mobile:w-[80%] tablet:w-[70%] desktop:w-[50%]'>
              <CommentInput
                onAddComment={handleAddReply(comment.id)}
                avatar={userRandom}
                prefillText={replyingTo ? `@${replyingTo} ` : ''}
                dataToEdit={dataToEdit}
                onEditComment={onEditComment}
                isReply={!dataToEdit}
              />
            </div>
          )}
        </div>
      ))}
    </>
  )
}

export default CommentList
