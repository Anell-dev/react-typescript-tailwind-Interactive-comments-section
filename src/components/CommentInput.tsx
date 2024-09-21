import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Comment } from '../interfaces/comments'
import { CommentInputProps } from '../interfaces/commentInputProps'
import userIcon from '../assets/images/user.png'

const CommentInput: React.FC<CommentInputProps> = ({
  onAddComment,
  avatar,
  prefillText = '',
  dataToEdit,
  isReply
}) => {
  const [form, setForm] = useState<Comment>({
    id: '',
    avatar: avatar || userIcon,
    username: '',
    text: prefillText,
    score: 0,
    createdAt: new Date().toISOString(),
    replies: []
  })

  useEffect(() => {
    setForm((prevForm) => ({
      ...prevForm,
      avatar: avatar || userIcon
    }))
  }, [avatar])

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit)
    }
  }, [dataToEdit])

  const [errors, setErrors] = useState<{ username?: string; text?: string }>({})

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target

    if (name === 'text' && isReply && !dataToEdit) {
      if (!value.startsWith(prefillText)) {
        return
      }
    }

    setForm({
      ...form,
      [name]: value
    })

    if (value) {
      setErrors({
        ...errors,
        [name]: ''
      })
    }
  }

  const validate = () => {
    const tempErrors: { username?: string; text?: string } = {}
    let isValid = true

    if (!form.username) {
      tempErrors.username = 'Username is required'
      isValid = false
    }

    if (!form.text || form.text === prefillText) {
      tempErrors.text = 'Comment is required'
      isValid = false
    }

    setErrors(tempErrors)
    return isValid
  }

  const handleAddComment = () => {
    if (validate()) {
      if (dataToEdit) {
        onAddComment({
          ...form
        })
      } else {
        onAddComment({
          ...form,
          id: uuidv4() // Genera un nuevo ID
        })
      }
      // Resetear el formulario después de agregar o editar un comentario
      setForm({
        id: '',
        avatar: avatar || userIcon,
        username: '',
        text: prefillText,
        score: 0,
        createdAt: new Date().toISOString(),
        replies: []
      })
    }
  }

  return (
    <div className='flex w-[100%] flex-col gap-3'>
      <input
        type='text'
        name='username'
        placeholder={errors.username ? errors.username : 'Your username'}
        value={form.username}
        onChange={handleChange}
        className={`input-textarea ${errors.username ? 'input-placeholder-red input-warning border-[#ef444499]' : ''}`}
      />
      <textarea
        name='text'
        placeholder={errors.text ? errors.text : 'Your comment'}
        value={form.text}
        onChange={handleChange}
        className={`input-textarea resize-none ${errors.text ? 'input-placeholder-red input-warning border-[#ef444499]' : ''}`}
      />
      <button
        onClick={handleAddComment}
        className='rounded-lg bg-moderate-blue px-4 py-2 text-white hover:bg-light-grayish-blue'>
        {dataToEdit ? 'Edit Comment' : 'Add Comment'}
      </button>
    </div>
  )
}

export default CommentInput
