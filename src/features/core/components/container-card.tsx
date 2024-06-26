import { cn } from '@/lib/utils'

interface Props {
  className?: string
  children: React.ReactNode
}

export function ContainerCard({ className, children }: Props) {
  return <div className={cn('w-full rounded-md bg-white p-4 shadow-sm', className)}>{children}</div>
}
