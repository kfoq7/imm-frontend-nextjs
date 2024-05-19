import { AppointmentInProcessCard } from './appointment-cards/appointment-inpogress'

export function ApppointmentsInProcessList() {
  return (
    <>
      <span className="text-sm font-bold text-gray-1">Hoy 24 de Agosto 2024</span>

      <div className="mt-4 flex flex-col gap-y-4">
        <AppointmentInProcessCard />
      </div>
    </>
  )
}
