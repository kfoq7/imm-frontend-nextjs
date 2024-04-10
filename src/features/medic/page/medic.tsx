'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/features/core'
import { MedicList } from '../components'

export default function Medic() {
  const router = useRouter()

  const handleOnClick = () => {
    router.push('/patient-list')
  }

  return (
    <div className="flex flex-col items-center justify-center gap-y-5">
      <div className="text-center">¿Con qué médico trabajarás hoy?</div>

      <MedicList />

      <Button onClick={handleOnClick}>Empezar!</Button>
    </div>
  )
}
