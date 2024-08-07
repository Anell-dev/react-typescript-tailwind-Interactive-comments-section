import { AvatarModalProps } from '../interfaces/modal'
import { avatars } from '../constants/avatars'

const AvatarModal: React.FC<AvatarModalProps> = ({
  isOpen,
  onClose,
  onSelectAvatar
}) => {
  if (!isOpen) return null

  return (
    <div className='fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='rounded-lg bg-white p-5 shadow-lg'>
        <h2 className='mb-4 text-lg font-semibold'>Select an Avatar</h2>
        <div className='flex gap-2'>
          {avatars.map((avatar) => (
            <img
              key={avatar.src}
              src={avatar.src}
              alt={avatar.alt}
              className='h-12 w-12 cursor-pointer rounded-full border-2 border-gray-200 hover:border-gray-500'
              onClick={() => onSelectAvatar(avatar.src)}
            />
          ))}
        </div>
        <button
          className='mt-4 rounded-lg bg-gray-200 px-4 py-2 text-black hover:bg-gray-300'
          onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  )
}

export default AvatarModal
