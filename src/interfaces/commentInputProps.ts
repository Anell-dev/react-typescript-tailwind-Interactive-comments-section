import { Comment } from '../interfaces/comments'

export interface CommentInputProps {
  onAddComment: (comment: Comment) => void
  avatar: string
  prefillText?: string
  dataToEdit: Comment | null
  onEditComment: (id: string, updatedComment: Comment) => void
  isReply: boolean
}
