import { Comment } from '../interfaces/comments'

export interface CommentListProps {
  comments: Comment[]
  onAddReply: (id: string, reply: Comment) => void
  onEditComment: (id: string, updatedComment: Comment) => void
  onDeleteComment: (id: string) => void
}
