'use client'

import dynamic from 'next/dynamic'
import { useMedics } from '@/features/medic'

const AppointmentList = dynamic(
  () => import('@/features/appointment/components/appointment-list'),
  { ssr: false }
)

export default function PatientList() {
  const { medic } = useMedics()

  return (
    <>
      <div className="space-y-6">
        <h2 className="text-4xl text-gray-1">
          Hola, <span className="font-semibold">Allison</span>
        </h2>
        <p className="text-sm text-gray-5">
          Hoy trabajas con{' '}
          <span className="font-semibold">{`${medic.name} ${medic.lastName}`}</span>
        </p>
      </div>

      <section className="mt-14">
        <header className="">
          <h3 className="text-xl font-semibold text-gray-1">Informes Consultario (Ginecología)</h3>
        </header>

        <AppointmentList />
      </section>
    </>
  )
}
