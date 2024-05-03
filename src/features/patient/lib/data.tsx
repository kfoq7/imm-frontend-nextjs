import type { Patient } from '../types'

export const PATIENT_RESULT: Patient[] = [
  {
    id: 1,
    name: 'Angela Rosmery Sarzoa Cano',
    description: 'La paciente meciona que tuvo que programar su cita.',
    hc: 'S-5091',
    process: 'EGI',
    time: 1712614023765
  },
  {
    id: 2,
    name: 'Angela Rosmery Sarzoa Cano',
    description: 'La paciente meciona que tuvo que programar su cita.',
    hc: 'S-5091',
    process: 'EGI',
    time: 1712614023765
  }
]

export const PATIENT_TABS = [
  {
    name: 'pending',
    tabTitle: 'Pendiente'
  },
  {
    name: 'process',
    tabTitle: 'En proceso'
  },
  {
    name: 'finished',
    tabTitle: 'Finalizados'
  }
]
