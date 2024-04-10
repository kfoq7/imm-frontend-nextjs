import Link from 'next/link'

interface Props {
  name: string
  selected?: boolean
}

export function MedicCard({ name, selected }: Props) {
  return (
    <li className="max-w-sm rounded-md bg-white shadow">
      <Link href={`/#${name}`} className="size-full block p-4">
        <p>{name}</p>
      </Link>
    </li>
  )
}
