import { useAppointmentList } from '../hooks/use-appointment-list'
import { APPOINTMENT_RESULTS } from '../lib/data'
import { AppointmentPendingCard } from './appointment-cards'

export function ApppointmentsPendingList() {
  const { data } = useAppointmentList()

  return (
    <>
      <span className="text-sm font-bold text-gray-1">Hoy 8 de Marzo 2024</span>

      <div className="mt-4 flex flex-col gap-y-4">
        {data?.data.data.map(({ patient, appointmentHour, comment, procedureType }) => (
          <AppointmentPendingCard
            key={patient.id}
            appointment={{
              ...patient,
              name: `${patient.name} ${patient.lastName}`,
              time: appointmentHour,
              description: comment,
              process: procedureType
            }}
          />
        ))}

        {APPOINTMENT_RESULTS.map(patient => (
          <AppointmentPendingCard key={patient.id} appointment={patient} />
        ))}
      </div>
    </>
  )
}
