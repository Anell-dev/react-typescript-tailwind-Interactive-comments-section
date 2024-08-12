import { AvatarSelectorProps } from '../interfaces/avatarSelectorProps'

const AvatarSelector: React.FC<AvatarSelectorProps> = ({
  selectedAvatar,
  onOpenModal
}) => {
  return (
    <div
      className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-200'
      onClick={onOpenModal}>
      {selectedAvatar ? (
        <img
          src={selectedAvatar}
          alt='Selected Avatar'
          className='h-full w-full rounded-full object-cover'
        />
      ) : (
        <span className='text-sm text-gray-600'>click</span>
      )}
    </div>
  )
}

export default AvatarSelector
