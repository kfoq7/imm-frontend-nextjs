'use client'

import {
  Listbox as ListboxContainer,
  ListboxButton,
  ListboxOption,
  ListboxOptions
} from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'

interface Props {
  label?: string
  items: Record<string, any>[]
  selectedValue: { id: number; value: string }
  setSelectedValue: (value: { id: number; value: string }) => void
}

export function Listbox({ label, items, selectedValue, setSelectedValue }: Props) {
  return (
    <ListboxContainer value={selectedValue} onChange={setSelectedValue}>
      <div className="relative">
        <ListboxButton className="relative block w-full rounded-lg border-2 border-gray-4 bg-white px-3 py-3 text-left outline-none">
          {/* {label && <label className="absolute top-0.5 text-xs">{label}</label>} */}
          <span>{selectedValue.value}</span>
          <ChevronDownIcon
            className="pointer-events-none absolute right-1.5 top-1.5 size-7 fill-gray-1"
            aria-hidden="true"
          />
        </ListboxButton>
        <ListboxOptions className="absolute top-14 z-50 w-full rounded-lg border-2 border-gray-4 bg-white p-1.5 outline-none">
          {items.map(item => {
            const { id, value } = item

            return (
              <ListboxOption
                key={id}
                value={item}
                className="cursor-pointer px-2 py-1 data-[selected]:rounded-lg data-[selected]:bg-gray-3/20"
              >
                {value}
              </ListboxOption>
            )
          })}
        </ListboxOptions>
      </div>
    </ListboxContainer>
  )
}
