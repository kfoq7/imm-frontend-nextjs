import { useQuery } from '@tanstack/react-query'
import { getAppointments } from '../services/appointment.service'
import type { QueryFilters } from '../types'

export function useAppointmentList(filters?: Partial<QueryFilters>) {
  const { appointmentDate, status } = filters ?? {}

  const { data, isLoading } = useQuery({
    queryKey: ['appointment', appointmentDate, status],
    queryFn: () => getAppointments({ appointmentDate, status })
  })

  return { data, isLoading }
}
