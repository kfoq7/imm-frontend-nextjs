import { useQuery } from '@tanstack/react-query'
import { getExamsFromAppointment } from '../../exams/services/exams.service'

export function useExamsList({ appointmentId }: { appointmentId: number }) {
  const { data, isLoading } = useQuery({
    queryKey: ['examsAppointment', appointmentId],
    queryFn: () => getExamsFromAppointment(appointmentId)
  })

  return { data, isLoading }
}
