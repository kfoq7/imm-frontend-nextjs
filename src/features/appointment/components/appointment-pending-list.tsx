import { Status } from '@/features/core'
import { useAppointmentList } from '../hooks/use-appointment-list'
import { AppointmentPendingCard } from './appointment-cards'
import { getLocalCurrentDate } from '@/lib/utils'

export function ApppointmentsPendingList() {
  const { data } = useAppointmentList({ status: Status.PENDING })

  return (
    <>
      <span className="text-sm font-bold text-gray-1">{getLocalCurrentDate()}</span>

      <div className="mt-4 flex flex-col gap-y-4">
        {data?.data.data.map(({ id, patient, appointmentHour, comment, procedureType }) => (
          <AppointmentPendingCard
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
    </>
  )
}
