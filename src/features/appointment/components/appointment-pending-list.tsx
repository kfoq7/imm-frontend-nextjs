import { APPOINTMENT_RESULTS } from '../lib/data'
import { AppointmentPendingCard } from './appointment-cards'

export function ApppointmentsPendingList() {
  return (
    <>
      <span className="text-sm font-bold text-gray-1">Hoy 8 de Marzo 2024</span>

      <div className="mt-4 flex flex-col gap-y-4">
        {APPOINTMENT_RESULTS.map(patient => (
          <AppointmentPendingCard key={patient.id} appointment={patient} />
        ))}
      </div>
    </>
  )
}
