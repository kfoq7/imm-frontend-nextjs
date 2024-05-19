import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
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
        <RadioGroup.Label className="text-center">¿Con qué médico trabajarás hoy?</RadioGroup.Label>

        <div className="flex flex-wrap items-center justify-center gap-4 md:flex-nowrap">
          {doctorList?.map(doctor => {
            return (
              <RadioGroup.Option key={doctor.id} value={medic}>
                {({ active }) => <MedicCard medic={doctor} isSelected={active} />}
              </RadioGroup.Option>
            )
          })}
        </div>
      </RadioGroup>
    </>
  )
}
