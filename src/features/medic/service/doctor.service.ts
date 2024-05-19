import type { ContentResponse } from '@/common/types'
import { client } from '@/lib/axios'
import { Medic } from '../types'

export const getAllDoctors = async (): Promise<ContentResponse<Medic[]>> => {
  return client.get('/doctor').then(response => response.data)
}
