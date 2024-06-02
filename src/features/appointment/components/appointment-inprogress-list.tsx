import { Status } from '@/features/core'
import { AppointmentInProcessCard } from './appointment-cards/appointment-inpogress'
import { useAppointmentList } from '../hooks/use-appointment-list'
import { getLocalCurrentDate } from '@/lib/utils'

export function ApppointmentsInProcessList() {
  const { data } = useAppointmentList({ status: Status.IN_PROGRESS })

  return (
    <>
      <span className="text-sm font-bold text-gray-1">{getLocalCurrentDate()}</span>

      <div className="mt-4 flex flex-col gap-y-4">
        {data?.data.data.map(({ id, patient, appointmentHour, comment, procedureType, exams }) => (
          <AppointmentInProcessCard
            key={id}
            appointment={{
              ...patient,
              id,
              name: `${patient.name} ${patient.lastName}`,
              time: appointmentHour,
              description: comment,
              process: procedureType,
              exams
            }}
          />
        ))}
      </div>
    </>
  )
}
