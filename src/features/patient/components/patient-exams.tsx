'use client'

import { useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { SelectModalExam } from './select-modal-exam'
import { cn } from '@/lib/utils'

const patientExamsList = [
  {
    name: 'Antecendetes',
    content: 'Hello1'
  },
  {
    name: 'Colposcopia',
    content: 'Hello2'
  },
  {
    name: 'Pelvica transvaginal',
    content: 'Hello3'
  }
]

export function PatientExams() {
  const [isOpen, setIsOpen] = useState(true)

  const open = () => setIsOpen(true)

  const close = () => setIsOpen(false)

  return (
    <>
      <SelectModalExam isOpen={isOpen} onClose={close} />

      <div className="mt-10">
        <TabGroup>
          <TabList>
            {patientExamsList.map(({ name }) => (
              <Tab
                key={name}
                className={({ selected }) =>
                  cn(
                    'border-x border-b border-t border-gray-400/20 bg-gray-4/20 px-5 py-3 text-xs font-medium text-gray-1 outline-none',
                    {
                      'border-x border-b-white bg-white': selected
                    }
                  )
                }
              >
                {name}
              </Tab>
            ))}

            <button
              className="bg-white px-5 py-3 text-xs font-medium text-primary-blue"
              onClick={open}
            >
              Nuevo examen
            </button>
          </TabList>
          <TabPanels className="border-x border-gray-400/20">
            {patientExamsList.map(({ name, content }) => (
              <TabPanel key={name} className="w-full bg-white">
                {content}
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </>
  )
}
