import { RadioGroup } from '@headlessui/react'
import { ModalExamCard } from './modal-exam-card'
import type { ExamInfo } from '../types'

interface Props {
  exams: ExamInfo[]
  selectedExams: ExamInfo[]
  toggleCardSelection: (value: ExamInfo) => void
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
