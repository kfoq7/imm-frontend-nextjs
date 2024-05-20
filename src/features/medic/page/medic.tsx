'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/features/core'
import { MedicList } from '../components'

export default function Medic() {
  const router = useRouter()

  const handleOnClick = () => {
    router.push('/appointment-list')
  }

  return (
    <div className="flex flex-col items-center justify-center gap-y-5">
      <MedicList />

      <Button onClick={handleOnClick}>Empezar!</Button>
    </div>
  )
}
