import { useQuery } from '@tanstack/react-query'
import { getAllDoctors } from '../service/doctor.service'

export function useListDoctorQuery() {
  const { data, isLoading } = useQuery({
    queryKey: ['getAllDoctors'],
    queryFn: getAllDoctors
  })

  const doctorList = data?.data

  return { doctorList, isLoading }
}
