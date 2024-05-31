import { client } from '@/lib/axios'

export const getExamsFromAppointment = async (id: number) => {
  return client.get(`appointment/${id}`)
}
