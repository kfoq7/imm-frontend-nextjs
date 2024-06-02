import { Radio } from '@headlessui/react'
import { cn } from '@/lib/utils'
import type { ExamTabContent } from '../types'
import { ColposcopyIcon } from '@/icons/colposcopy'

interface Props {
  exam: ExamTabContent
  isSelected: boolean
  thumbnail: React.ReactNode
}

export function ModalExamCard({ exam, isSelected, thumbnail }: Props) {
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
      <div className="flex h-full flex-col items-center justify-center text-center">
        {/* <ColposcopyIcon /> */}
        {thumbnail}
        <span className="">{name}</span>
      </div>
    </Radio>
  )
}
