import React, { useState } from 'react'
import AvatarSelector from './components/AvatarSelector'
import AvatarModal from './components/AvatarModal'
import CommentInput from './components/CommentInput'
import CommentList from './components/CommentList'
import useComments from './hooks/useComments'

const App: React.FC = () => {
  const [selectedAvatar, setSelectedAvatar] = useState<string>('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { comments, addComment, addReply } = useComments()

  const handleSelectAvatar = (avatar: string) => {
    setSelectedAvatar(avatar)
    setIsModalOpen(false)
  }

  const handleModel = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <div className='container mx-auto p-4'>
      <h1 className='mb-4 text-2xl font-semibold'>Comment Section</h1>
      <AvatarSelector
        selectedAvatar={selectedAvatar}
        onOpenModal={handleModel}
      />
      <AvatarModal
        isOpen={isModalOpen}
        onCloseModal={handleModel}
        onSelectAvatar={handleSelectAvatar}
      />
      <CommentInput onAddComment={addComment} avatar={selectedAvatar} />
      <CommentList comments={comments} onAddReply={addReply} />
    </div>
  )
}

export default App
