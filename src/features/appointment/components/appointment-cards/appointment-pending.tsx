'use client'

import Link from 'next/link'
import { useAppointment, type Appointment } from '@/features/appointment'
import { parseURL } from '@/lib/utils'
import { AppointmentCard } from './appointment-card'
import { useExams } from '@/features/exams'

interface Props {
  appointment: Appointment
}

export function AppointmentPendingCard({ appointment }: Props) {
  const { name, documentNumber } = appointment
  const { fetchExamsByAppointmentId } = useExams()
  const { setSelectedAppointment } = useAppointment()

  const endpointName = parseURL(`${name} ${documentNumber}`)

  const handleOnClick = () => {
    setSelectedAppointment(appointment)
    fetchExamsByAppointmentId(appointment.id)
  }

  return (
    <AppointmentCard
      appointment={appointment}
      action={
        <Link
          href={`/appointment-list/${endpointName}`}
          onClick={handleOnClick}
          className="w-[280px] rounded-md bg-primary-blue px-4 py-2.5 text-center text-lg font-semibold text-white"
        >
          Registrar informe
        </Link>
      }
    />
  )
}
