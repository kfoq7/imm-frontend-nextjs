import Link from 'next/link'
import type { Appointment } from '@/features/appointment'
import { parseURL } from '@/lib/utils'
import { AppointmentCard } from './appointment-card'

interface Props {
  appointment: Appointment
}

export function AppointmentInProcessCard({ appointment }: Props) {
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
          Continuar Informe
        </Link>
      }
    >
      <div className="my-4">
        <div className="flex gap-x-4 font-semibold text-primary-pink">
          <div className="">Completar informe</div>
          <div>Cerrar informe</div>
          <div>Enviar informe</div>
        </div>

        <div className="mt-6">
          <span className="text-sm uppercase">Exámenes realizados</span>

          <ul className="my-2 flex gap-x-2">
            <li className="rounded-sm bg-[#F3FAFE] px-5 py-2">Colposcopia</li>
            <li className="rounded-sm bg-[#F3FAFE] px-5 py-2">Colposcopia</li>
            <li className="rounded-sm bg-[#F3FAFE] px-5 py-2">Colposcopia</li>
            <li className="rounded-sm bg-[#F3FAFE] px-5 py-2">Colposcopia</li>
          </ul>
        </div>
      </div>
    </AppointmentCard>
  )
}
