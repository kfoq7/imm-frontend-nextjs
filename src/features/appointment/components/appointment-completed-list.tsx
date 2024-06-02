import { AppointmentCompletedCard } from './appointment-cards'
import { Status } from '@/features/core'
import { useAppointmentList } from '../hooks/use-appointment-list'

export const AppointmentsCompletedList = () => {
  const { data } = useAppointmentList({ status: Status.COMPLETED })

  return (
    <div className="mt-4 flex flex-col gap-y-4">
      {data?.data.data.map(({ id, patient, appointmentHour, comment, procedureType }) => (
        <AppointmentCompletedCard
          key={id}
          appointment={{
            ...patient,
            id,
            name: `${patient.name} ${patient.lastName}`,
            time: appointmentHour,
            description: comment,
            process: procedureType
          }}
        />
      ))}
    </div>
  )
}
