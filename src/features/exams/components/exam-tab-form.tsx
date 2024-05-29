'use client'

import { useRouter } from 'next/navigation'
import { TabPanel } from '@headlessui/react'
import { Button } from '@/features/core'

interface Props {
  children: React.ReactNode
}

export function ExamTabForm({ children }: Props) {
  const router = useRouter()

  return (
    <TabPanel className="relative w-full rounded-lg bg-white">
      <div className="scroll-hidden h-[500px] overflow-y-auto px-10 py-4">{children}</div>

      <div className="sticky bottom-0 z-50 max-w-full border-t">
        <div className="justify-cente flex items-center justify-between rounded-b-lg px-10 py-5">
          <Button
            onClick={() => router.push('/appointment-list')}
            className="h-14 w-[300px] border border-primary-blue bg-white text-primary-blue"
          >
            Guardar y continuar más tarde
          </Button>
          <Button className="h-14 w-[300px]">Completar</Button>
        </div>
      </div>
    </TabPanel>
  )
}
