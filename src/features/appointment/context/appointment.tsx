'use client'

import { createContext, useState } from 'react'
import { Appointment } from '../types'

interface AppointmentContext {
  selectedAppointment: Appointment | null
  setSelectedAppointment: (value: Appointment) => void
}

interface Props {
  children: React.ReactNode
}

export const AppointmentContext = createContext<AppointmentContext | null>(null)

export function AppointmentProvider({ children }: Props) {
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null)

  return (
    <AppointmentContext.Provider value={{ selectedAppointment, setSelectedAppointment }}>
      {children}
    </AppointmentContext.Provider>
  )
}
