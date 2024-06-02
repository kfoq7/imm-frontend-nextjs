'use client'

import { useState } from 'react'
import { Tab, TabGroup, TabList, TabPanels } from '@headlessui/react'
import { ExamTabForm, useExams } from '@/features/exams'
import { cn } from '@/lib/utils'
import { SelectModalExam } from './select-modal-exam'
import { ExamTabContent } from '../types'
import { ExamFormAntecedentes } from './exam-form-antecedentes'

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
  // const [selectedExams, setSelectedExams] = useState<ExamTabContent[]>([])
  const { selectedTypeExams } = useExams()

  return (
    <>
      <SelectModalExam
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        // setSelectedExams={setSelectedExams}
      />

      <div className="mt-10">
        <TabGroup>
          <TabList>
            <ExamTab label="Antecedentes" />
            {selectedTypeExams.map(({ name, label }) => (
              <ExamTab key={name} label={label} />
            ))}
            <button
              className="border border-gray-400/20 bg-gray-4/20 px-5 py-3 text-xs font-medium text-primary-blue"
              onClick={() => setIsOpen(true)}
            >
              Nuevo examen
            </button>
          </TabList>
          <TabPanels className="rounded-b-sm border-x border-b border-gray-400/20">
            <ExamFormAntecedentes />

            {selectedTypeExams.map(({ name, content, examForm }) => (
              <ExamTabForm key={name}>
                {content}
                {examForm}
              </ExamTabForm>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </>
  )
}
