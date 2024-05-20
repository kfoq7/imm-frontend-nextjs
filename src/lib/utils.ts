import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...args: ClassValue[]) {
  return twMerge(clsx(args))
}

export function parseURL(value: string) {
  return value.toLowerCase().replace(/\s/g, '-')
}
