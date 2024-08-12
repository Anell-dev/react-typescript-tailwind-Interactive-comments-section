import { useState } from 'react'
import { Comment } from '../interfaces/comments'

const useComments = () => {
  const [comments, setComments] = useState<Comment[]>([])

  const addComment = (comment: Comment) => {
    setComments([...comments, comment])
  }

  const addReply = (id: string, reply: Comment) => {
    const addReplyRecursively = (comments: Comment[]): Comment[] => {
      return comments.map((comment) => {
        if (comment.id === id) {
          return { ...comment, replies: [...comment.replies, reply] }
        } else if (comment.replies.length > 0) {
          return { ...comment, replies: addReplyRecursively(comment.replies) }
        }
        return comment
      })
    }

    setComments(addReplyRecursively(comments))
  }

  return { comments, addComment, addReply }
}

export default useComments
