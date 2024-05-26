'use client'

import { useState } from 'react'
import { Checkbox, Field, Label } from '@headlessui/react'

interface Props {
  label: string
}

export function SelectCheckbox({ label }: Props) {
  const [enabled, setEnabled] = useState(false)

  return (
    <Field className="flex items-center gap-2">
      <Checkbox
        checked={enabled}
        onChange={setEnabled}
        className="group relative block size-5 rounded-full border bg-white data-[checked]:border-primary-blue"
      >
        <div className="absolute left-[3px] top-[3px] size-3 rounded-full group-data-[checked]:bg-primary-blue"></div>
      </Checkbox>

      <Label>{label}</Label>
    </Field>
  )
}
