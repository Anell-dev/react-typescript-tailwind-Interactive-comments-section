import React from 'react'
import { Comment } from '../interfaces/comments'

interface CommentItemProps {
  comment: Comment
  toggleReplyInput: () => void
}

const CommentItem: React.FC<CommentItemProps> = ({
  comment,
  toggleReplyInput
}) => {
  return (
    <div className='mx-auto mb-3 flex w-[50%] max-w-4xl'>
      <div className='flex min-h-[140px] w-full gap-5 rounded-lg bg-white p-5'>
        <div className='flex w-8 flex-col items-center justify-center gap-2 rounded-md bg-very-light-gray font-medium'>
          <button className='text-light-grayish-blue hover:text-moderate-blue'>
            +
          </button>
          <p className='text-moderate-blue'>12</p>
          <button className='text-light-grayish-blue hover:text-moderate-blue'>
            -
          </button>
        </div>

        <div className='flex w-full flex-col gap-3 bg-white'>
          <div className='flex justify-between'>
            <div className='flex items-center gap-3'>
              <img
                src={comment.avatar}
                alt={`${comment.username} avatar`}
                className='w-8'
              />
              <span className='font-semibold'>{comment.username}</span>
              <p className='text-grayish-blue'>1 month ago</p>
            </div>

            <button
              className='flex items-center gap-2 font-medium text-moderate-blue hover:text-light-grayish-blue'
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
          <p className='break-words'>{comment.text}</p>
        </div>
      </div>
    </div>
  )
}

export default CommentItem
