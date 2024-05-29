interface Props {
  children: React.ReactNode
}

export function ExamFormGroup({ children }: Props) {
  return <div className="mb-8 space-y-6">{children}</div>
}
