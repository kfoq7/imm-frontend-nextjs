'use client'

import { useState } from 'react'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { Button } from '@/features/core'
import { useExams } from '@/features/exams'
import { ModalExamList } from './moda-exam-list'
import type { ExamTabContent } from '../types'

interface Props {
  isOpen: boolean
  onClose: (value: boolean) => void
}

export function SelectModalExam({ isOpen, onClose }: Props) {
  const { exams, selectedTypeExams, setSelectedTypeExams } = useExams()
  const [selectedExams, setSelectedExams] = useState<ExamTabContent[]>(selectedTypeExams)

  const toggleCardSelection = (exam: ExamTabContent) => {
    setSelectedExams(prevSelected => {
      return prevSelected.includes(exam)
        ? prevSelected.filter(e => e !== exam)
        : [...prevSelected, exam]
    })
  }

  const submitSelection = () => {
    setSelectedTypeExams(selectedExams)
    onClose(true)
  }

  return (
    <Dialog
      as="div"
      open={isOpen}
      onClose={submitSelection}
      className="relative z-50 focus:outline-none"
    >
      <div className="fixed inset-0 flex w-screen items-center justify-center overflow-y-hidden bg-gray-1/40 p-4">
        <DialogPanel className="max-h-full w-full max-w-4xl rounded-xl bg-white px-16 py-10 backdrop-blur-2xl">
          <div className="flex flex-col items-center justify-center gap-y-9">
            <div className="space-y-2 text-center">
              <DialogTitle as="h3" className="text-2xl">
                ¿Qué examen realizarás?
              </DialogTitle>
              <p className="text-gray-1">Puedes elegir más de uno</p>
            </div>

            <ModalExamList
              exams={exams}
              selectedExams={selectedTypeExams}
              toggleCardSelection={toggleCardSelection}
            />
            <Button onClick={submitSelection}>Continuar</Button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  )
}
