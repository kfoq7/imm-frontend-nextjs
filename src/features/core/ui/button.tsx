import { cn } from '@/lib/utils'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function Button({ className, children, ...rest }: Props) {
  return (
    <button
      {...rest}
      className={cn(
        'block w-[210px] rounded-md bg-primary-blue px-4 py-2.5 text-lg font-semibold text-white',
        className
      )}
    >
      {children}
    </button>
  )
}
