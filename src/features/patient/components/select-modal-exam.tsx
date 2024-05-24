'use client'

import { Button } from '@/features/core'
import { cn } from '@/lib/utils'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

interface Props {
  isOpen: boolean
  onClose: (value: boolean) => void
}

const exams = [
  {
    name: 'Colposcopia'
  },
  {
    name: 'Ecografica Mamaria'
  },
  {
    name: 'Ecografia Pelvica transadominal'
  },
  {
    name: 'Ecografia Pelvica transvaginal'
  }
]

export function SelectModalExam({ isOpen, onClose }: Props) {
  return (
    <Dialog as="div" className="relative z-50 focus:outline-none" open={isOpen} onClose={onClose}>
      <div className="fixed inset-0 flex w-screen items-center justify-center overflow-y-hidden bg-gray-1/40 p-4">
        <DialogPanel className="max-h-full w-full max-w-4xl rounded-xl bg-white px-16 py-10 backdrop-blur-2xl">
          <div className="flex flex-col items-center justify-center gap-y-9">
            <div className="space-y-2 text-center">
              <DialogTitle as="h3" className="text-2xl">
                ¿Qué examen realizarás?
              </DialogTitle>
              <p className="text-gray-1">Puedes elegir más de uno</p>
            </div>
            <ul className="flex items-center justify-center gap-x-3">
              {exams.map(({ name }) => (
                <li
                  key={name}
                  className={cn(
                    'h-44 w-full max-w-sm cursor-pointer rounded-md bg-white px-10 shadow hover:bg-[#EDF6FB] hover:text-black',
                    {
                      // 'bg-primary-blue text-white hover:bg-primary-blue hover:text-white': true
                    }
                  )}
                >
                  <div className="flex h-full items-center justify-center text-center">
                    <span className="">{name}</span>
                  </div>
                </li>
              ))}
            </ul>
            <Button>Continuar</Button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  )
}
