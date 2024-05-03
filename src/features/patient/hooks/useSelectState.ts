import { useState } from 'react'

export type States = 'pending' | 'process' | 'finished'

interface ListState {
  name: States
  patientList: React.ReactElement
  isSelected?: boolean
}

export interface AppointmentStates {
  listState: ListState[]
}

export function useSelectState({ listState }: AppointmentStates) {
  const [currentList, setCurrentList] = useState(listState[0])

  const selectState = (newState: States) => {
    setCurrentList(prev => {
      const state = listState.find(value => value.name === newState)
      if (!state) return prev
      return state
    })
  }

  return {
    currentList,
    selectState
  }
}
