interface Props {
  children: React.ReactNode
}

export function ExamFormSubtitle({ children }: Props) {
  return <h3 className="text-xl font-light tracking-tight">{children}</h3>
}
