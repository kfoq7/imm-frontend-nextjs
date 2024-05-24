import { type Appointment, AppointmentCard } from '@/features/appointment'
import { PatientExams } from '@/features/patient'

const appointment: Appointment = {
  id: 2,
  name: 'Mariana Benedi',
  description: 'La paciente meciona que tuvo que programar su cita.',
  documentNumber: '192853',
  hc: 'S-5091',
  process: 'EGI',
  time: 1712614023765
}

export default function Patient() {
  return (
    <>
      <AppointmentCard appointment={appointment} />

      <PatientExams />
    </>
  )
}
