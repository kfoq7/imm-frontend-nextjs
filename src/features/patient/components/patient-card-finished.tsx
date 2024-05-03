import Link from 'next/link'
import { Button, ContainerCard } from '@/features/core'
import { Search } from '../ui/search'
import type { Patient } from '../types'

interface Props {
  patientInfo: Patient
}

export function PatientCardFinished({ patientInfo }: Props) {
  const { name, time, description } = patientInfo

  return (
    <>
      <Search />

      <ContainerCard>
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

        <div className="mt-6 flex items-center gap-x-10">
          <Button className="w-[280px]">Ver informe</Button>
          <Link href="/local-search" className="text-lg font-semibold text-primary-blue">
            Ver informacion del paciente
          </Link>
        </div>
      </ContainerCard>
    </>
  )
}
