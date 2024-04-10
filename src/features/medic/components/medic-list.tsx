import { MedicCard } from './medic-card'
import { MEDICS } from '../lib/data'

export function MedicList() {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-4 md:flex-nowrap">
      {MEDICS.map(({ name }) => (
        <MedicCard key={name} name={name} />
      ))}
    </ul>
  )
}
