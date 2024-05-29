import { ExamTabContent } from '@/features/patient/types'
import { TabPanels } from '@headlessui/react'
import { ExamTabForm } from './exam-tab-form'

interface Props {
  examForm: ExamTabContent[]
}

export function ExamTabPanels({ examForm }: Props) {
  return (
    <TabPanels>
      {examForm.map(({ name, examForm }) => (
        <ExamTabForm key={name}>{examForm}</ExamTabForm>
      ))}
    </TabPanels>
  )
}
