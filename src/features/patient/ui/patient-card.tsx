import Link from 'next/link'
import { Button, ContainerCard } from '@/features/core'
import type { Patient } from '../types'

interface Props {
  patientInfo: Patient
}

export function PatientCard({ patientInfo }: Props) {
  const { name, time, description } = patientInfo

  return (
    <ContainerCard className="px-4 py-5">
      <span className="text-sm font-semibold text-primary-pink">{time}</span>

      <div className="">
        <h2 className="text-2xl font-bold text-gray-1">{name}</h2>

        <p className="text-sm text-gray-2">{description}</p>
      </div>

      <div className="mt-8 flex items-center gap-x-10">
        <Button className="w-[280px]">Registar informe</Button>
        <Link href="/local-search" className="text-lg font-semibold text-primary-blue">
          Ver informacion del paciente
        </Link>
      </div>
    </ContainerCard>
  )
}
