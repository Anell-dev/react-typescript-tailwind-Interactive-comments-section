import { useState } from 'react'
import AvatarSelector from './components/AvatarSelector'
import AvatarModal from './components/AvatarModal'
import CommentInput from './components/CommentInput'
import CommentList from './components/CommentList'
import useComments from './hooks/useComments'

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const {
    comments,
    addComment,
    editComment,
    addReply,
    selectedAvatar,
    setSelectedAvatar,
    deleteComment
  } = useComments()

  const handleSelectAvatar = (avatar: string) => {
    setSelectedAvatar(avatar)
    setIsModalOpen(false)
  }

  const handleModel = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <div className='flex flex-col items-center justify-center gap-5'>
      <div className='mt-3 flex w-[60%] gap-2 rounded-lg bg-white p-5 mobile:w-[80%] tablet:w-[70%] desktop:w-[50%]'>
        <AvatarSelector
          selectedAvatar={selectedAvatar}
          onOpenModal={handleModel}
        />
        <AvatarModal
          isOpen={isModalOpen}
          onCloseModal={handleModel}
          onSelectAvatar={handleSelectAvatar}
        />
        <CommentInput
          onAddComment={addComment}
          avatar={selectedAvatar}
          dataToEdit={null}
          onEditComment={editComment}
          isReply={true}
        />
      </div>

      <CommentList
        comments={comments}
        onAddReply={addReply}
        onEditComment={editComment}
        onDeleteComment={deleteComment}
      />
    </div>
  )
}

export default App
