'use client'

import { useState } from 'react'
import { Button } from '@/features/core'
import { cn } from '@/lib/utils'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { Radio, RadioGroup } from '@headlessui/react'

interface Props {
  isOpen: boolean
  onClose: (value: boolean) => void
  setSelectedExams: (
    value: {
      name: string
      content: string
    }[]
  ) => void
}

const exams = [
  {
    name: 'Colposcopia',
    content: ''
  },
  {
    name: 'Ecografica Mamaria',
    content: ''
  },
  {
    name: 'Ecografia Pelvica transadominal',
    content: ''
  },
  {
    name: 'Ecografia Pelvica transvaginal',
    content: ''
  }
]

export function SelectModalExam({ isOpen, onClose, setSelectedExams }: Props) {
  const [selectedTypeExams, setSelectedTypeExams] = useState<{ name: string; content: string }[]>(
    []
  )

  const toggleCardSelection = (exam: { name: string; content: string }) => {
    setSelectedTypeExams(prevSelected =>
      prevSelected.includes(exam) ? prevSelected.filter(e => e !== exam) : [...prevSelected, exam]
    )
  }

  const submitSelection = () => {
    setSelectedExams(selectedTypeExams)
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
            <RadioGroup
              className="flex items-center justify-center gap-x-3"
              onChange={toggleCardSelection}
            >
              {exams.map(exam => {
                const { name } = exam

                return (
                  <Radio
                    key={name}
                    value={exam}
                    as="div"
                    className={cn(
                      'h-44 w-full max-w-sm cursor-pointer rounded-md bg-white px-10 shadow hover:bg-[#EDF6FB] hover:text-black',
                      {
                        'bg-primary-blue text-white hover:bg-primary-blue hover:text-white':
                          Boolean(selectedTypeExams.find(e => e.name === name))
                      }
                    )}
                  >
                    <div className="flex h-full items-center justify-center text-center">
                      <span className="">{name}</span>
                    </div>
                  </Radio>
                )
              })}
            </RadioGroup>
            <Button onClick={submitSelection}>Continuar</Button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  )
}
