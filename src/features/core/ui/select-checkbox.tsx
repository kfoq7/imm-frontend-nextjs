'use client'

import { Checkbox, Field, Label } from '@headlessui/react'
import { cn } from '@/lib/utils'

interface Props {
  label: string
  checked: boolean
  pointerEvents?: boolean
}

export function SelectCheckbox({ label, checked, pointerEvents }: Props) {
  return (
    <Field className={cn('flex items-center gap-2', { 'pointer-events-none': !pointerEvents })}>
      <Checkbox
        checked={checked}
        className="group relative block size-5 rounded-full border bg-white data-[checked]:border-primary-blue"
      >
        <div className="absolute left-[3px] top-[3px] size-3 rounded-full group-data-[checked]:bg-primary-blue"></div>
      </Checkbox>

      <Label className="text-sm">{label}</Label>
    </Field>
  )
}
