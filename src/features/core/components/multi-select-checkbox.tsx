'use client'

import { Fragment } from 'react'
import { RadioGroup, Radio } from '@headlessui/react'
import { SelectCheckbox } from '../ui/select-checkbox'

interface Props {
  items: string[]
  selectedValues: string[]
  toggleValuesSelection: (value: string) => void
}

export function MultiSelectCheckbox({ items, selectedValues, toggleValuesSelection }: Props) {
  return (
    <RadioGroup className="space-y-4" onChange={toggleValuesSelection}>
      {items.map((value, index) => (
        <Radio key={index} value={value}>
          <SelectCheckbox label={value} checked={selectedValues.includes(value)} />
        </Radio>
      ))}
    </RadioGroup>
  )
}
