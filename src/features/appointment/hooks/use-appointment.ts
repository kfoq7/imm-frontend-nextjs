import { useContext } from 'react'
import { AppointmentContext } from '../context/appointment'

export function useAppointment() {
  const context = useContext(AppointmentContext)

  if (context == null) {
    throw new Error('useAppointment must be used within a AppointmentProvider')
  }

  return context
}
