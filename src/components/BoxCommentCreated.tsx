import amyrobsonAvatar from '../assets/images/avatars/image-amyrobson.webp'
// import iconReply from '../assets/images/icon-reply.svg'

const BoxCommentCreated: React.FC = () => {
  return (
    <div className='flex min-h-[140px] w-[45%] gap-5 rounded-lg bg-white p-5'>
      <div className='flex w-8 flex-col items-center justify-center gap-2 rounded-md bg-very-light-gray font-medium'>
        <button className='text-light-grayish-blue hover:text-moderate-blue'>
          +
        </button>
        <p className='text-moderate-blue'>12</p>
        <button className='text-light-grayish-blue hover:text-moderate-blue'>
          -
        </button>
      </div>

      <div className='flex w-[100%] flex-col gap-3 bg-white'>
        <div className='flex justify-between'>
          <div className='flex items-center gap-3'>
            <img src={amyrobsonAvatar} alt='UserAvatar' className='w-8' />
            <p>amyrobson</p>
            <p className='text-grayish-blue'>1 month ago</p>
          </div>
          <button className='flex items-center gap-2 font-medium text-moderate-blue hover:text-light-grayish-blue'>
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
        <div className='text-grayish-blue'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
          error cupiditate atque, ex consequuntur suscipit eaque? Perspiciatis
          deserunt atque earum quaerat laborum, voluptatum molestiae culpa hic
          quia, itaque ullam tempore!
        </div>
      </div>
    </div>
  )
}

export default BoxCommentCreated
