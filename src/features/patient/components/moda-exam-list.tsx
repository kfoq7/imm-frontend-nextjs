import { RadioGroup } from '@headlessui/react'
import { ModalExamCard } from './modal-exam-card'
import type { ExamTabContent } from '../types'

interface Props {
  exams: ExamTabContent[]
  selectedExams: ExamTabContent[]
  toggleCardSelection: (value: ExamTabContent) => void
}

export function ModalExamList({ exams, selectedExams, toggleCardSelection }: Props) {
  return (
    <RadioGroup className="flex items-center justify-center gap-x-3" onChange={toggleCardSelection}>
      {exams.map(exam => (
        <ModalExamCard
          key={exam.name}
          exam={exam}
          isSelected={Boolean(selectedExams.find(e => e.name === exam.name))}
        />
      ))}
    </RadioGroup>
  )
}
