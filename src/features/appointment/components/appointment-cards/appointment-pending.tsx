import Link from 'next/link'
import type { Appointment } from '@/features/appointment'
import { parseURL } from '@/lib/utils'
import { AppointmentCard } from './appointment-card'

interface Props {
  appointment: Appointment
}

export function AppointmentPendingCard({ appointment }: Props) {
  const { name, documentNumber } = appointment

  const endpointName = parseURL(`${name} ${documentNumber}`)

  return (
    <AppointmentCard
      appointment={appointment}
      action={
        <Link
          href={`/appointment-list/${endpointName}`}
          className="w-[280px] rounded-md bg-primary-blue px-4 py-2.5 text-center text-lg font-semibold text-white"
        >
          Registrar informe
        </Link>
      }
    />
  )
}
