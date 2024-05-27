'use client'

import { Checkbox, Field, Label } from '@headlessui/react'

interface Props {
  label: string
  checked: boolean
}

export function SelectCheckbox({ label, checked }: Props) {
  return (
    <Field className="flex items-center gap-2">
      <Checkbox
        checked={checked}
        className="group relative block size-5 rounded-full border bg-white data-[checked]:border-primary-blue"
      >
        <div className="absolute left-[3px] top-[3px] size-3 rounded-full group-data-[checked]:bg-primary-blue"></div>
      </Checkbox>

      <Label>{label}</Label>
    </Field>
  )
}
