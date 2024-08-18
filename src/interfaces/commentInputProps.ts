import { Comment } from '../interfaces/comments'

export interface CommentInputProps {
  onAddComment: (comment: Comment) => void
  avatar: string
  prefillText?: string
}
