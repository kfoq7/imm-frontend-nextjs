import { cn } from '@/lib/utils'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  isSelected?: boolean
}

export function ButtonStatus({ children, isSelected }: Props) {
  return (
    <button
      className={cn('relative bg-transparent px-7 py-3 text-lg font-semibold text-gray-1', {
        'text-primary-blue': isSelected
      })}
    >
      {children}
      <div
        className={cn(
          'absolute bottom-0 right-0 h-2 w-full rounded-sm border-t-4 border-primary-blue',
          { hidden: !isSelected }
        )}
      ></div>
    </button>
  )
}
