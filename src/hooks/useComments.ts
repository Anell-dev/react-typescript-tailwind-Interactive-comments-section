import { useEffect, useState } from 'react'
import { Comment } from '../interfaces/comments'

const useComments = () => {
  const [comments, setComments] = useState<Comment[]>([])
  const [selectedAvatar, setSelectedAvatar] = useState<string>('')

  // Recuperando los comentarios del localStorage al cargar
  useEffect(() => {
    const savedComments = localStorage.getItem('comments')
    if (savedComments) {
      setComments(JSON.parse(savedComments))
    }
  }, [])

  const addComment = (comment: Comment) => {
    setSelectedAvatar('')
    setComments([...comments, comment])
  }

  /*
    cada vez que mi array de comments cambie significa que se guardo, edito o elimino algo
    asique guardamos los cambios en el localStorage
  */
  useEffect(() => {
    if (comments.length > 0) {
      localStorage.setItem('comments', JSON.stringify(comments))
    }
  }, [comments])

  const editComment = (id: string, updatedComment: Comment) => {
    const updateCommentRecursively = (comments: Comment[]): Comment[] => {
      return comments.map((comment) => {
        if (comment.id === id) {
          return { ...comment, ...updatedComment }
        } else if (comment.replies.length > 0) {
          return {
            ...comment,
            replies: updateCommentRecursively(comment.replies)
          }
        }
        return comment
      })
    }

    setComments(updateCommentRecursively(comments))
  }

  useEffect(() => {
    console.log(comments)
  }, [comments])

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

  const deleteComment = (id: string) => {
    const deleteCommentRecursively = (comments: Comment[]): Comment[] => {
      return comments
        .filter((comment) => comment.id !== id) // Filtra el comentario que se desea eliminar
        .map((comment) => ({
          ...comment,
          replies: deleteCommentRecursively(comment.replies) // Aplica la función recursivamente a las respuestas
        }))
    }

    setComments(deleteCommentRecursively(comments))
  }

  return {
    comments,
    addComment,
    editComment,
    addReply,
    selectedAvatar,
    setSelectedAvatar,
    deleteComment
  }
}

export default useComments
