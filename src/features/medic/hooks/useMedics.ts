import { useContext } from 'react'
import { MedicContext } from '../context/medic'

export function useMedics() {
  const context = useContext(MedicContext)

  if (context == null) {
    throw new Error('useMedic must be used within a QuestionsProvider')
  }

  return context
}
