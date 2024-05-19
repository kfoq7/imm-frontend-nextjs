import { AppointmentCompletedCard } from './appointment-cards'
import { APPOINTMENT_RESULTS } from '../lib/data'

export const AppointmentsCompletedList = () => (
  <>
    <div className="mt-4 flex flex-col gap-y-4">
      {APPOINTMENT_RESULTS.map(patient => (
        <AppointmentCompletedCard key={patient.id} appointment={patient} />
      ))}
    </div>
  </>
)
