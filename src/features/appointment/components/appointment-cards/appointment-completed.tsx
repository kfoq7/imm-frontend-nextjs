import Link from 'next/link'
import { parseURL } from '@/lib/utils'
import type { Appointment } from '@/features/appointment/types'
import { Search } from '@/features/appointment/ui/seach'
import { AppointmentCard } from './appointment-card'

interface Props {
  appointment: Appointment
}

export const AppointmentCompletedCard = ({ appointment }: Props) => {
  const { name, documentNumber } = appointment

  const endpointName = parseURL(`${name} ${documentNumber}`)

  return (
    <>
      <Search />

      <AppointmentCard
        appointment={appointment}
        action={
          <Link
            href={`/appointment-list/${endpointName}`}
            className="w-[280px] rounded-md bg-primary-blue px-4 py-2.5 text-center text-lg font-semibold text-white"
          >
            Ver informe
          </Link>
        }
      />
    </>
  )
}
