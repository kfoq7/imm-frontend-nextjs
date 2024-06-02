'use client'

import { useContext } from 'react'
import { ExamsContext } from '../context/exams'

export function useExams() {
  const context = useContext(ExamsContext)

  if (context == null) {
    throw new Error('useExams must be used within a ExamsProvider')
  }

  return context
}
