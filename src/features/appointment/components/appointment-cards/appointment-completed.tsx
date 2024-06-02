import Link from 'next/link'
import { parseURL } from '@/lib/utils'
import type { Appointment } from '@/features/appointment/types'
import { Search } from '@/features/appointment/ui/seach'
import { AppointmentCard } from './appointment-card'
import { useExams } from '@/features/exams'
import { useAppointment } from '../../hooks/use-appointment'

interface Props {
  appointment: Appointment
}

export const AppointmentCompletedCard = ({ appointment }: Props) => {
  const { name, documentNumber } = appointment

  const { fetchExamsByAppointmentId } = useExams()
  const { setSelectedAppointment } = useAppointment()

  const endpointName = parseURL(`${name} ${documentNumber}`)

  const handleOnClick = () => {
    setSelectedAppointment(appointment)
    fetchExamsByAppointmentId(appointment.id)
  }

  return (
    <>
      <Search />

      <AppointmentCard
        appointment={appointment}
        action={
          <Link
            href={`/appointment-list/${endpointName}`}
            onClick={handleOnClick}
            className="w-[280px] rounded-md bg-primary-blue px-4 py-2.5 text-center text-lg font-semibold text-white"
          >
            Ver informe
          </Link>
        }
      />
    </>
  )
}
