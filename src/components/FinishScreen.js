import { useQuiz } from '../hooks/useQuiz'

function FinishScreen() {
  const { points, maxPossiblePoints, highscore, dispatch } = useQuiz()

  const percentage = (points / maxPossiblePoints) * 100

  let emoji

  if (percentage === 100) emoji = '🥇'
  if (percentage >= 80 && percentage < 100) emoji = '🎉'
  if (percentage >= 50 && percentage < 80) emoji = '🙃'
  if (percentage >= 0 && percentage < 50) emoji = '🤨'
  if (percentage === 0) emoji = '🤦‍♂️'

  return (
    <>
      <p className='result'>
        <span>{emoji}</span> Your scored <strong>{points}</strong> out of&nbsp;
        {maxPossiblePoints} ({Math.ceil(percentage)}%)
      </p>
      <p className='highscore'>(Highscore: {highscore} points)</p>
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'restart' })}
      >
        Restart quiz
      </button>
    </>
  )
}

export default FinishScreen
