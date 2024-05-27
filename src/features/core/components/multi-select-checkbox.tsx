'use client'

import { RadioGroup, Radio } from '@headlessui/react'
import { SelectCheckbox } from '../ui/select-checkbox'

interface Props {
  items: string[]
  events?: boolean
  selectedValues: string[]
  toggleValuesSelection: (value: string) => void
}

export function MultiSelectCheckbox({
  items,
  events,
  selectedValues,
  toggleValuesSelection
}: Props) {
  return (
    <RadioGroup className="space-y-8" onChange={toggleValuesSelection}>
      {items.map((value, index) => (
        <Radio key={index} value={value} as="div" className="cursor-pointer">
          <SelectCheckbox
            label={value}
            pointerEvents={events}
            checked={selectedValues.includes(value)}
          />
        </Radio>
      ))}
    </RadioGroup>
  )
}
