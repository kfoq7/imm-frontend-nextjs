import { PATIENT_RESULT, PatientCard, ButtonStatus } from '@/features/patient'

export default function PatientList() {
  return (
    <main className="p-4">
      <div className="mx-auto max-w-5xl">
        <div className="space-y-6">
          <h2 className="text-4xl text-gray-1">
            Hola, <span className="font-semibold">Allison</span>
          </h2>
          <p className="text-sm text-gray-5">
            Hoy trabajas con{' '}
            <span className="font-semibold">Maria de los Ángeles Martinez Fernandez</span>
          </p>
        </div>

        <section className="mt-14">
          <header className="">
            <h3 className="text-xl font-semibold text-gray-1">
              Informes Consultario (Ginecología)
            </h3>

            <nav className="mt-10 flex items-center justify-center gap-x-2">
              <ButtonStatus isSelected>Pendiente</ButtonStatus>
              <ButtonStatus>En proceso</ButtonStatus>
              <ButtonStatus>Finalizados</ButtonStatus>
            </nav>
          </header>

          <div className="mt-6">
            <span className="text-sm font-bold text-gray-1">Hoy 8 de Marzo 2024</span>

            <div className="mt-4 flex flex-col gap-y-4">
              {PATIENT_RESULT.map(patient => (
                <PatientCard key={patient.id} patientInfo={patient} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
