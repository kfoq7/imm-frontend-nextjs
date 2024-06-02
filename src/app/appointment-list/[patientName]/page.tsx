'use client'

import dynamic from 'next/dynamic'
import { type Appointment, AppointmentCard, useAppointment } from '@/features/appointment'
import { useState } from 'react'

const PatientExams = dynamic(() => import('@/features/patient/components/patient-exams'), {
  ssr: false
})

// const appointment: Appointment = {
//   id: 2,
//   name: 'Mariana Benedi',
//   description: 'La paciente meciona que tuvo que programar su cita.',
//   documentNumber: '192853',
//   hc: 'S-5091',
//   process: 'EGI',
//   time: 1712614023765,
//   exams: []
// }

export default function Patient() {
  const { selectedAppointment } = useAppointment()

  if (selectedAppointment == null) return <div></div>

  return (
    <>
      <AppointmentCard appointment={selectedAppointment} />

      <PatientExams />
    </>
  )
}
