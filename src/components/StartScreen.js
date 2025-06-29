import { useQuiz } from '../hooks/useQuiz'

function StartScreen() {
  const { numQuestions, dispatch } = useQuiz()
  return (
    <div className='start'>
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'start' })}
      >
        Let's starts
      </button>
    </div>
  )
}

export default StartScreen
