import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { MedicCard } from './medic-card'
import { MEDICS } from '../lib/data'
import { cn } from '@/lib/utils'

export function MedicList() {
  const [medic, setMedic] = useState(MEDICS[0])

  return (
    <>
      <RadioGroup
        value={medic}
        onChange={setMedic}
        className="flex flex-col items-center justify-center gap-y-4 text-center"
      >
        <RadioGroup.Label className="text-center">¿Con qué médico trabajarás hoy?</RadioGroup.Label>

        <div className="flex flex-wrap items-center justify-center gap-4 md:flex-nowrap">
          {MEDICS.map(({ name }) => (
            <RadioGroup.Option key={name} value={medic}>
              {({ active }) => (
                <MedicCard
                  className={cn(
                    'max-w-sm rounded-md bg-white shadow hover:bg-[#EDF6FB] hover:text-black',
                    {
                      'bg-primary-blue text-white': active
                    }
                  )}
                  key={name}
                  name={name}
                />
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </>
  )
}
