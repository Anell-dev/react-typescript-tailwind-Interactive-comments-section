import { Comment } from '../interfaces/comments'

export interface CommentItemProps {
  comment: Comment
  toggleReplyInput: () => void
  toggleEditInput: () => void
}
