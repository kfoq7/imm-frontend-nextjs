'use client'

import { createContext, useState } from 'react'
import { Medic } from '../types'

export interface MedicContext {
  medic: Medic
  setSelectedMedic: (medic: Medic) => void
}

export const MedicContext = createContext<MedicContext | null>(null)

export function MedictProvider({ children }: { children: React.ReactNode }) {
  const [selectedMedic, setSelectedMedic] = useState<Medic>({ id: 0, name: '', lastName: '' })

  return (
    <MedicContext.Provider value={{ medic: selectedMedic, setSelectedMedic }}>
      {children}
    </MedicContext.Provider>
  )
}
