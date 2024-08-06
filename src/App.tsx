import BoxCreateComment from './components/BoxCreateComment'

const App: React.FC = () => {
  const addNewComment = () => {
    console.log('hola')
  }

  return (
    <>
      <div className='flex flex-col items-center justify-center min-h-screen'>
        <button
          onClick={addNewComment}
          // className='mb-4 p-2 bg-moderate-blue text-white rounded'
        >
          Add new comment!
        </button>
        <BoxCreateComment />
      </div>
    </>
  )
}

export default App
