import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Comment } from '../interfaces/comments'

interface CommentInputProps {
  onAddComment: (comment: Comment) => void
  avatar: string
}

const CommentInput: React.FC<CommentInputProps> = ({
  onAddComment,
  avatar
}) => {
  const [form, setForm] = useState<Comment>({
    id: '',
    avatar: avatar,
    username: '',
    text: '',
    replies: []
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleAddComment = () => {
    if (form.username && form.text) {
      onAddComment({
        ...form,
        id: uuidv4()
      })
      setForm({
        id: '',
        avatar: avatar,
        username: '',
        text: '',
        replies: []
      })
    }
  }

  return (
    <div className='mb-4'>
      <input
        type='text'
        name='username'
        placeholder='Your username'
        value={form.username}
        onChange={handleChange}
        className='mb-2 w-full rounded-lg border p-2'
      />
      <textarea
        name='text'
        placeholder='Your comment'
        value={form.text}
        onChange={handleChange}
        className='mb-2 w-full rounded-lg border p-2'
      />
      <button
        onClick={handleAddComment}
        className='rounded-lg bg-blue-500 px-4 py-2 text-white'>
        Add Comment
      </button>
    </div>
  )
}

export default CommentInput
