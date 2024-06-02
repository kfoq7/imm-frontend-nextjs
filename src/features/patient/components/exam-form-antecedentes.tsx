import { Button, SelectCheckbox } from '@/features/core'
import { TabPanel } from '@headlessui/react'

export function ExamFormAntecedentes() {
  return (
    <TabPanel className="h-[622px] max-h-[500px] w-full bg-white">
      <div className="flex h-full flex-col items-center justify-center gap-y-4">
        <div className="space-x-2 text-center">
          <span className="font-bold text-gray-1">¡Empecemos!</span>
          <h2 className="text-2xl text-gray-1">¿En qué etapa se encuentra la paciente?</h2>
        </div>

        <div className="mb-10 mt-6">
          <div className="space-y-2">
            <SelectCheckbox label="Edad Feritl" checked={true} />
            <SelectCheckbox label="Menospausica o post menopausica" checked={true} />
            <SelectCheckbox label="Pre puberal" checked={true} />
          </div>
        </div>

        <div className="space-y-2">
          <Button className="w-72 disabled:bg-primary-blue/40" disabled>
            Continuar
          </Button>
          <Button className="w-72 border border-primary-blue bg-white font-medium text-primary-blue">
            Responder más tarde
          </Button>
        </div>
      </div>
    </TabPanel>
  )
}
