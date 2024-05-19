import { cn } from '@/lib/utils'
import { useMedics } from '../hooks/useMedics'
import { Medic } from '../types'

interface Props {
  medic: Medic
  isSelected: boolean
}

export function MedicCard({ medic, isSelected }: Props) {
  const { setSelectedMedic } = useMedics()

  const name = `${medic.name} ${medic.lastName}`

  return (
    <div
      className={cn('max-w-sm rounded-md bg-white shadow hover:bg-[#EDF6FB] hover:text-black', {
        'bg-primary-blue text-white hover:bg-primary-blue hover:text-white': isSelected
      })}
    >
      <button className="block h-full w-full p-4" onClick={() => setSelectedMedic(medic)}>
        <p className="text-wrap">{name}</p>
      </button>
    </div>
  )
}
