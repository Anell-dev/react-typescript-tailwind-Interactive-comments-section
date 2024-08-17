import { useState } from 'react'
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
    avatar: avatar || '',
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
    onAddComment({
      ...form,
      avatar: avatar,
      id: uuidv4()
    })
    setForm({
      id: '',
      avatar: '',
      username: '',
      text: '',
      replies: []
    })
  }

  return (
    <div className='flex w-[100%] flex-col gap-3'>
      <input
        type='text'
        name='username'
        placeholder='Your username'
        value={form.username}
        onChange={handleChange}
        className='input-textarea'
      />
      <textarea
        name='text'
        placeholder='Your comment'
        value={form.text}
        onChange={handleChange}
        className='input-textarea resize-none'
      />
      <button
        onClick={handleAddComment}
        className='rounded-lg bg-moderate-blue px-4 py-2 text-white hover:bg-light-grayish-blue'>
        Add Comment
      </button>
    </div>
  )
}

export default CommentInput
