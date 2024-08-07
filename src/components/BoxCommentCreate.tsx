import { useState } from 'react'
import AvatarSelector from './AvatarSelector'
import AvatarModal from './AvatarModal'

const BoxCommentCreate: React.FC = () => {
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleAvatarClick = (src: string) => {
    setSelectedAvatar(src)
    setIsModalOpen(false)
  }

  return (
    <div className='mt-10 flex w-[41%] items-start gap-5 rounded-lg bg-white p-5'>
      <AvatarSelector
        selectedAvatar={selectedAvatar}
        onOpenModal={() => setIsModalOpen(true)}
      />
      <div className='flex w-[74%] flex-col gap-3'>
        <input
          type='text'
          placeholder='type your username...'
          className='input-textarea'
        />
        <textarea
          placeholder='type your comment...'
          className='input-textarea h-24 resize-none'
        />
      </div>
      <button className='h-10 w-24 rounded-md bg-moderate-blue text-white hover:bg-light-grayish-blue'>
        SEND
      </button>

      <AvatarModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelectAvatar={handleAvatarClick}
      />
    </div>
  )
}

export default BoxCommentCreate
