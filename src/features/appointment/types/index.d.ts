import { Status } from '@/features/core'
import { Exam } from '@/features/exams/types'

export interface Appointment {
  id: number
  name: string
  documentNumber: string
  description: string
  hc: string
  process: 'EGI'
  time: number
  exams: Exam[]
}

export interface QueryFilters {
  appointmentDate: string
  status: Status
}
