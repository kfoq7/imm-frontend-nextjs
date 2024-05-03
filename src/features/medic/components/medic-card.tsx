import Link from 'next/link'

interface Props {
  name: string
  className?: string
}

export function MedicCard({ name, className }: Props) {
  return (
    <div className={className}>
      <Link href={`/#${name}`} className="size-full block p-4">
        <p>{name}</p>
      </Link>
    </div>
  )
}
