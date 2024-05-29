import { Disclosure, DisclosureButton, DisclosurePanel, Field } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { SelectCheckbox } from '@/features/core'
import { cn } from '@/lib/utils'

interface Props {
  label: string
  items: { id: number; label: string }[]
  isQuestion?: boolean
}

export function ExamTabFormInner({ items, label }: Props) {
  return (
    <Disclosure>
      <DisclosureButton
        className={({ open }) =>
          cn('flex w-full items-center justify-between px-10 py-3.5', {
            'border border-primary-pink/20 bg-secondary-pink/15': open
          })
        }
      >
        <span className="text-primary-pink">{label}</span>
        <ChevronDownIcon className="size-8 fill-primary-pink" />
      </DisclosureButton>
      <DisclosurePanel className="flex items-center gap-x-6 px-10 py-6">
        {items.map(({ id, label }) => (
          <SelectCheckbox key={id} label={label} checked />
        ))}
      </DisclosurePanel>
    </Disclosure>
  )
}
