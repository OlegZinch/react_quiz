import { useContext } from 'react'

import { QuizContext } from '../contexts/QuizContext'

export function useQuiz() {
  const ctx = useContext(QuizContext)

  if (ctx === undefined)
    throw new Error('Cities context was used outside the QuizContextProvider.')

  return ctx
}
