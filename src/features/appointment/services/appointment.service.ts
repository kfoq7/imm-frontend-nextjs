import { client } from '@/lib/axios'
import { QueryFilters } from '../types'

export const getAppointments = async (filters: Partial<QueryFilters>) => {
  return client.get('/appointment', { params: { ...filters } })
}
