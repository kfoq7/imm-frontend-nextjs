'use client'

import { useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { SelectModalExam } from './select-modal-exam'
import { cn } from '@/lib/utils'

export default function PatientExams() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedExams, setSelectedExams] = useState<
    {
      name: string
      content: string
    }[]
  >([])

  return (
    <>
      <SelectModalExam
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        setSelectedExams={setSelectedExams}
      />

      <div className="mt-10">
        <TabGroup>
          <TabList>
            <Tab
              className={({ selected }) =>
                cn(
                  'border-x border-b border-t border-gray-400/20 bg-gray-4/20 px-5 py-3 text-xs font-medium text-gray-1 outline-none',
                  {
                    'border-x border-b-white bg-white': selected
                  }
                )
              }
            >
              Antecendetes
            </Tab>
            {selectedExams.map(({ name }) => (
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
              className="border border-gray-400/20 bg-gray-4/20 px-5 py-3 text-xs font-medium text-primary-blue"
              onClick={() => setIsOpen(true)}
            >
              Nuevo examen
            </button>
          </TabList>
          <TabPanels className="border-x border-gray-400/20">
            <TabPanel className="w-full bg-white">Hello1</TabPanel>
            {selectedExams.map(({ name, content }) => (
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
