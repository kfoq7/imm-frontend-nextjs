import Select, { type SingleValue } from 'react-select'

interface Props {
  label?: string
  items: { value: string; label: string }[]
  selectedValue: { value: string } | null
  setSelectedValue: (value: { value: string } | null) => void
}

export function SelectListbox({ items, selectedValue, setSelectedValue }: Props) {
  return (
    <Select
      options={items}
      value={selectedValue}
      onChange={setSelectedValue}
      // styles={{ }}
      // className="block w-full rounded-lg border-2 border-gray-4 bg-white px-3 py-3 text-left outline-none"
      // classNamePrefix="block w-full rounded-lg border-2 border-gray-4 bg-white px-3 py-3 text-left outline-none"
      // className={{
      //   clearIndicator
      // }}
    />
  )
}
