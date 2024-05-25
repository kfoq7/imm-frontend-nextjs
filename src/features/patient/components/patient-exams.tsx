'use client'

import { useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { cn } from '@/lib/utils'
import { SelectModalExam } from './select-modal-exam'
import { ExamInfo } from '../types'

const ExamTab = ({ label }: { label: string }) => (
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
    {label}
  </Tab>
)

export default function PatientExams() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedExams, setSelectedExams] = useState<ExamInfo[]>([])

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
            <ExamTab label="Antecedentes" />
            {selectedExams.map(({ name }) => (
              <ExamTab key={name} label={name} />
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
