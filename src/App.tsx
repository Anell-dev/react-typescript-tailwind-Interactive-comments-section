// import BoxCreateComment from './components/BoxMainComment'
import BoxReplyComment from './components/BoxCommentCreate'

const App: React.FC = () => {
  // const addNewComment = () => {
  //   console.log('hola')
  // }

  return (
    <>
      <div className='flex min-h-screen flex-col items-center'>
        {/* <button
          onClick={addNewComment}
          className='hove m-9 h-10 w-[40%] rounded-md bg-moderate-blue text-white hover:bg-light-grayish-blue'>
          Add new comment!
        </button>
        <BoxCreateComment />
        <br />
        <br />
        <br /> */}
        <BoxReplyComment />
      </div>
    </>
  )
}

export default App
