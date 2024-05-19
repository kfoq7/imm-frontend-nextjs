'use client'

import { useState } from 'react'
import { Tab } from '@headlessui/react'
import {
  PATIENT_RESULT,
  PatientCardFinished,
  PatientCardPending,
  PatientCardProcess
} from '@/features/patient'
import { cn } from '@/lib/utils'
import { useMedics } from '@/features/medic'

const ListPatientPeding = () => (
  <>
    <span className="text-sm font-bold text-gray-1">Hoy 8 de Marzo 2024</span>

    <div className="mt-4 flex flex-col gap-y-4">
      {PATIENT_RESULT.map(patient => (
        <PatientCardPending key={patient.id} patientInfo={patient} />
      ))}
    </div>
  </>
)

const ListPatientFinished = () => (
  <>
    <div className="mt-4 flex flex-col gap-y-4">
      {PATIENT_RESULT.map(patient => (
        <PatientCardFinished key={patient.id} patientInfo={patient} />
      ))}
    </div>
  </>
)

const ListPatientProcess = () => (
  <>
    <span className="text-sm font-bold text-gray-1">Hoy 24 de Agosto 2024</span>

    <div className="mt-4 flex flex-col gap-y-4">
      <PatientCardProcess />
    </div>
  </>
)

export default function PatientList() {
  const { medic } = useMedics()
  const [patientTabs] = useState([
    {
      name: 'pending',
      tabTitle: 'Pendiente',
      tab: <ListPatientPeding />
    },
    {
      name: 'process',
      tabTitle: 'En proceso',
      tab: <ListPatientProcess />
    },
    {
      name: 'finished',
      tabTitle: 'Finalizados',
      tab: <ListPatientFinished />
    }
  ])

  return (
    <main className="p-4">
      <div className="mx-auto max-w-5xl">
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
            <h3 className="text-xl font-semibold text-gray-1">
              Informes Consultario (Ginecología)
            </h3>
          </header>

          <div className="mt-14">
            <Tab.Group>
              <Tab.List className="flex items-center justify-center gap-x-2">
                {patientTabs.map(({ name, tabTitle }) => (
                  <Tab
                    key={name}
                    className={({ selected }) =>
                      cn(
                        'relative bg-transparent px-7 py-3 text-lg font-semibold text-gray-1 outline-none',
                        {
                          'text-primary-blue': selected
                        }
                      )
                    }
                  >
                    {({ selected }) => (
                      <>
                        {tabTitle}
                        <div
                          className={cn(
                            'absolute bottom-0 right-0 h-2 w-full rounded-sm border-t-4 border-primary-blue',
                            { hidden: !selected }
                          )}
                        ></div>
                      </>
                    )}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels>
                {patientTabs.map(({ name, tab }) => (
                  <Tab.Panel key={name}>{tab}</Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          </div>
        </section>
      </div>
    </main>
  )
}
