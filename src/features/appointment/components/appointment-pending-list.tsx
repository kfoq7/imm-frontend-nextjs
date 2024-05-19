import { PatientCardPending } from '@/features/patient'
import { APPOINTMENT_RESULTS } from '../lib/data'

export function ApppointmentsPendingList() {
  return (
    <>
      <span className="text-sm font-bold text-gray-1">Hoy 8 de Marzo 2024</span>

      <div className="mt-4 flex flex-col gap-y-4">
        {APPOINTMENT_RESULTS.map(patient => (
          <PatientCardPending key={patient.id} patientInfo={patient} />
        ))}
      </div>
    </>
  )
}
