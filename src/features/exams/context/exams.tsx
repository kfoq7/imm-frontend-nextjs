'use client'

import { createContext, useEffect, useState, type Dispatch, type SetStateAction } from 'react'
import type { ExamTabContent } from '../../patient/types'
import { ExamTabFormColposcopy } from '../components'
import { ColposcopyIcon } from '@/icons/colposcopy'
import { getExamsFromAppointment } from '../services/exams.service'

interface ExamsContext {
  exams: ExamTabContent[]
  selectedTypeExams: ExamTabContent[]
  setSelectedTypeExams: Dispatch<SetStateAction<ExamTabContent[]>>
  fetchExamsByAppointmentId: (appointmentId: number) => void
}

interface Props {
  children: React.ReactNode
}

export const ExamsContext = createContext<ExamsContext | null>(null)

const exams: ExamTabContent[] = [
  {
    name: 'COLPOSCOPIA',
    label: 'Colposcopia',
    content: '',
    examForm: <ExamTabFormColposcopy />,
    thumbnail: <ColposcopyIcon />
  },
  {
    name: 'ECO_MAMA',
    label: 'Ecografica Mamaria',
    content: 'HelloEcograficaMamaria',
    examForm: null,
    thumbnail: null
  },
  {
    name: 'ECO_PELVICA',
    label: 'Ecografia Pelvica transadominal',
    content: 'HelloEcografia Pelvica transadominal',
    examForm: null,
    thumbnail: null
  }
]

export function ExamsProvider({ children }: Props) {
  const [selectedTypeExams, setSelectedTypeExams] = useState<ExamTabContent[]>([])

  const fetchExamsByAppointmentId = (appointmentId: number) => {
    setSelectedTypeExams([])

    getExamsFromAppointment(appointmentId).then(result => {
      console.log(appointmentId, result)
      setSelectedTypeExams(prev => {
        const [selectedExam] = result.data?.data.exams.map(({ examType }) => {
          return exams.find(({ name }) => name === examType)
        })

        if (!selectedExam) return prev

        return [...prev, selectedExam]
      })
    })
  }

  return (
    <ExamsContext.Provider
      value={{ exams, selectedTypeExams, setSelectedTypeExams, fetchExamsByAppointmentId }}
    >
      {children}
    </ExamsContext.Provider>
  )
}
