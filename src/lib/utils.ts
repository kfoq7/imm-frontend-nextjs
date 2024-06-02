import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...args: ClassValue[]) {
  return twMerge(clsx(args))
}

export function parseURL(value: string) {
  return value.toLowerCase().replace(/\s/g, '-')
}

export function getLocalCurrentDate() {
  const formattedDate = new Intl.DateTimeFormat('es-PE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(new Date())

  const capitalizedDate = formattedDate.replace(/de (\w)/, (_match, p1) => `de ${p1.toUpperCase()}`)

  return `Hoy ${capitalizedDate}`
}

export function parserLocalDate() {
  return new Intl.DateTimeFormat('es-PE', {
    hour: '2-digit',
    minute: '2-digit'
  }).format(new Date())
}
