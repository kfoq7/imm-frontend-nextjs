import { useQuery } from '@tanstack/react-query'
import { getAppointments } from '../services/appointment.service'

export function useAppointmentList() {
  const { data, isLoading } = useQuery({
    queryKey: ['appointment'],
    queryFn: getAppointments
  })

  return { data, isLoading }
}
