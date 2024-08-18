import { useState } from 'react'
import { CommentItemProps } from '../interfaces/commentItemProps'

const CommentItem: React.FC<CommentItemProps> = ({
  comment,
  toggleReplyInput
}) => {
  const [score, setScore] = useState(comment.score)

  const handleVoteUp = () => {
    setScore(score + 1)
  }

  const handleVoteDown = () => {
    setScore(score - 1)
  }

  return (
    <div className='animate-slideIn mx-auto mb-3 flex w-[50%] max-w-4xl select-none'>
      <div className='flex min-h-[140px] w-full gap-5 rounded-lg bg-white p-5 shadow-lg'>
        <div className='flex w-8 flex-col items-center justify-center gap-2 rounded-md bg-very-light-gray font-medium'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            onClick={handleVoteUp}
            className='size-4 text-light-grayish-blue transition-colors duration-200 ease-in-out hover:cursor-pointer hover:text-moderate-blue'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z'
            />
          </svg>
          <p className='transform text-moderate-blue transition-transform duration-200 ease-in-out active:scale-110'>
            {score}
          </p>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            onClick={handleVoteDown}
            className='size-4 text-light-grayish-blue transition-colors duration-200 ease-in-out hover:cursor-pointer hover:text-moderate-blue'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54'
            />
          </svg>
        </div>

        <div className='flex w-full flex-col gap-3 overflow-x-auto'>
          <div className='flex justify-between'>
            <div className='flex items-center gap-3'>
              <img
                src={comment.avatar}
                alt={`${comment.username} avatar`}
                className='w-8 rounded-full'
              />
              <span className='font-semibold'>{comment.username}</span>
              <p className='text-grayish-blue'>1 month ago</p>
            </div>

            <button
              className='flex items-center gap-2 font-medium text-moderate-blue transition-colors duration-200 ease-in-out hover:text-light-grayish-blue'
              onClick={toggleReplyInput}>
              <svg
                width='14'
                height='13'
                xmlns='http://www.w3.org/2000/svg'
                className='items-center justify-center fill-current hover:text-light-grayish-blue'>
                <path d='M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z' />
              </svg>
              Reply
            </button>
          </div>
          <p className='break-all'>{comment.text}</p>
        </div>
      </div>
    </div>
  )
}

export default CommentItem
