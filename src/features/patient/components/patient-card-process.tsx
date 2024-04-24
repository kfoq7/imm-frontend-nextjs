import Link from 'next/link'
import { Button, ContainerCard } from '@/features/core'

export function PatientCardProcess() {
  return (
    <ContainerCard>
      <span className="text-sm font-semibold text-primary-pink">11:30 pm</span>

      <div className="my-1">
        <h2 className="text-2xl font-bold text-gray-1">Noelia Rosmery Sarzosa Cano</h2>

        <p className="mt-2 text-sm text-gray-2">
          La paciente menciona que tuvo que reprogramar su cita.
        </p>

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

        <div className="mt-8 flex items-center gap-x-10">
          <Button className="w-[280px]">Continuar informe</Button>
          <Link href="/local-search" className="text-lg font-semibold text-primary-blue">
            Ver informacion del paciente
          </Link>
        </div>
      </div>
    </ContainerCard>
  )
}
