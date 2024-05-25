import { useState } from 'react'
import { Radio, RadioGroup, Label } from '@headlessui/react'
import { MedicCard } from './medic-card'
import { useListDoctorQuery } from '../hooks/use-list-doctor-query'

export function MedicList() {
  const { doctorList, isLoading } = useListDoctorQuery()
  const [medic, setMedic] = useState(doctorList)

  if (isLoading) return null

  return (
    <>
      <RadioGroup
        value={medic}
        onChange={setMedic}
        className="flex flex-col items-center justify-center gap-y-4 text-center"
      >
        <Label className="text-center">¿Con qué médico trabajarás hoy?</Label>

        <div className="flex flex-wrap items-center justify-center gap-4 md:flex-nowrap">
          {doctorList?.map(doctor => {
            return (
              <Radio key={doctor.id} value={doctor}>
                {({ checked }) => <MedicCard medic={doctor} isSelected={checked} />}
              </Radio>
            )
          })}
        </div>
      </RadioGroup>
    </>
  )
}
