import { client } from '@/lib/axios'

export const getAppointments = async () => {
  return client.get('/appointment')
}
