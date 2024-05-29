import { Radio } from '@headlessui/react'
import { cn } from '@/lib/utils'
import type { ExamTabContent } from '../types'

interface Props {
  exam: ExamTabContent
  isSelected: boolean
}

export function ModalExamCard({ exam, isSelected }: Props) {
  const { name } = exam

  return (
    <Radio
      value={exam}
      as="div"
      className={cn(
        'h-44 w-full max-w-sm cursor-pointer rounded-md bg-white px-10 shadow hover:bg-[#EDF6FB] hover:text-black',
        {
          'bg-primary-blue text-white hover:bg-primary-blue hover:text-white': isSelected
        }
      )}
    >
      <div className="flex h-full items-center justify-center text-center">
        <span className="">{name}</span>
      </div>
    </Radio>
  )
}
