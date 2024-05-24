import Link from 'next/link'
import type { Appointment } from '@/features/appointment'
import { ContainerCard } from '@/features/core'

interface Props {
  appointment: Appointment
  action?: React.ReactElement
  children?: React.ReactNode
}

export function AppointmentCard({ appointment, action, children }: Props) {
  const { id, name, time, description } = appointment

  return (
    <ContainerCard className="px-6 py-5">
      <span className="text-sm font-semibold text-primary-pink">{time}</span>
      <div className="my-1">
        <h2 className="text-2xl font-bold text-gray-1">{name}</h2>

        <p className="mt-2 text-sm text-gray-1">{description}</p>
      </div>
      <div className="mt-2 flex items-center gap-x-20">
        <div className="my-1">
          <h2 className="uppercase">H.C</h2>
          <span className="font-bold">S-1903</span>
        </div>
        <div className="my-1">
          <h2 className="uppercase">Procedimiento</h2>
          <span className="font-bold">EGI</span>
        </div>
      </div>

      {children}

      <div className="mt-6 flex items-center gap-x-10">
        {action}

        <Link href={`/patient-info/${id}`} className="text-lg font-semibold text-primary-blue">
          Ver informacion del paciente
        </Link>
      </div>
    </ContainerCard>
  )
}
