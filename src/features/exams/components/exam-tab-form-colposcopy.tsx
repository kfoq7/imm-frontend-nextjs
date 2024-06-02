'use client'

import { useState } from 'react'
import { Listbox, MultiSelectCheckbox, SelectCheckbox } from '@/features/core'
import { ExamFormSubtitle } from '../ui/exam-form-subtitle'
import { ExamFormGroup } from '../ui/exam-form-group'
import { ExamTabFormInner } from './exam-tab-form-inner'
import { SelectListbox } from '@/features/core/ui/select-listbox'

const indications = [
  'Primera evaluación',
  'Seguimiento normal',
  'PAP/Colpo anormal',
  'Antecedente cirugía por VPH',
  'Lesiones en genitales'
]

export function ExamTabFormColposcopy() {
  const [selectedValues, setSelectedValues] = useState<string[]>([])
  const [selectedVulva, setSelectedVulva] = useState<{ id: number; value: string } | null>({
    id: 1,
    value: 'Normal'
  })
  const [selectedVagina, setSelectedVagina] = useState<{ id: number; value: string }>({
    id: 1,
    value: 'Normal'
  })
  const [selectedPeriodo, setSelectedPeriodo] = useState<{ id: number; value: string }>({
    id: 1,
    value: 'Normal'
  })

  const toggleValuesSelection = (value: string) => {
    setSelectedValues(prevValues => {
      return prevValues.includes(value)
        ? prevValues.filter(item => item !== value)
        : [...prevValues, value]
    })
  }

  return (
    <>
      <ExamFormGroup>
        <ExamFormSubtitle>
          Primero, coméntanos cuál fue el motivo de la colposcopía
        </ExamFormSubtitle>

        <MultiSelectCheckbox
          items={indications}
          events={false}
          selectedValues={selectedValues}
          toggleValuesSelection={toggleValuesSelection}
        />
      </ExamFormGroup>
      <ExamFormGroup>
        <ExamFormSubtitle>Ahora, indícanos tus primeras impresiones</ExamFormSubtitle>

        <div className="grid grid-cols-2 gap-6">
          <SelectListbox
            selectedValue={selectedVulva}
            setSelectedValue={value => setSelectedVulva}
            items={[
              { value: 'Normal', label: 'Normal' },
              { value: 'Anomalo', label: 'Anomalo' },
              { value: 'Histeractomia parcial', label: 'Histeractomia parcial' },
              { value: 'Histeretomia total', label: 'Histeretomia total' }
            ]}
          />
          {/* <Listbox
            label="Vulva"
            selectedValue={selectedVulva}
            setSelectedValue={setSelectedVulva}
            items={[
              { id: 1, value: 'Normal' },
              { id: 2, value: 'Anomalo' },
              { id: 3, value: 'Histeractomia parcial' },
              { id: 4, value: 'Histeretomia total' }
            ]}
          /> */}
          <SelectListbox
            label="Vagina"
            selectedValue={selectedVagina}
            setSelectedValue={() => {}}
            items={[
              { value: 'Normal', label: 'Normal' },
              { value: 'Prolapso genital', label: 'Prolapso genital' },
              { value: 'Malformaciones del himen', label: 'Malformaciones del himen' },
              { value: 'Asimetria de labios', label: 'Asimetria de labios' },
              { value: 'Neoplasia', label: 'Neoplasia' }
            ]}
          />
          <SelectListbox
            label="Periodo"
            selectedValue={selectedPeriodo}
            setSelectedValue={() => {}}
            items={[
              { value: 'Normal', label: 'Normal' },
              { value: 'Episiorrafia', label: 'Episiorrafia' },
              { value: 'Otros', label: 'Otros' }
            ]}
          />
        </div>
      </ExamFormGroup>
      <ExamFormGroup>
        <ExamFormSubtitle>
          ¿Qué encontraste en el <span className="font-semibold">Cuello uterino</span>?
        </ExamFormSubtitle>

        <div className="grid grid-cols-2 gap-6">
          {/* <Listbox
            selectedValue={selectedVulva}
            setSelectedValue={setSelectedVulva}
            items={[
              { id: 1, value: 'Ácido acético' },
              { id: 2, value: 'Prueba de Schiller (lugol)' }
            ]}
          /> */}
          <SelectListbox
            selectedValue={selectedVagina}
            setSelectedValue={() => {}}
            items={[
              { value: 'Visible', label: 'Visible' },
              { value: 'Parcialmente visible', label: 'Parcialmente visible' },
              { value: 'No visible', label: 'No visible' }
            ]}
          />
          <SelectListbox
            selectedValue={selectedPeriodo}
            setSelectedValue={() => {}}
            items={[
              { value: 'ZT1', label: 'ZT1' },
              { value: 'ZT2', label: 'ZT2' },
              { value: 'ZT3', label: 'ZT3' }
            ]}
          />
        </div>
      </ExamFormGroup>
      {/* <ExamFormGroup>
        <ExamFormSubtitle>Detalla los hallazgos normales</ExamFormSubtitle>

        <div className="mx-auto w-full max-w-[800px] divide-y-2 divide-primary-pink/20">
          <ExamTabFormInner
            label="Epitelio escamoso original"
            items={[
              { id: 1, label: 'Maduro' },
              { id: 2, label: 'Atrófico' }
            ]}
          />
          <ExamTabFormInner
            label="Epitelio metaplásico"
            isQuestion
            items={[{ id: 1, label: '' }]}
          />
          <ExamTabFormInner
            label="Epitelio columnar"
            items={[
              { id: 1, label: 'Ectropion' },
              { id: 2, label: 'Criptas glandulares' },
              { id: 3, label: 'Deciduosis del embarazo' }
            ]}
          />
        </div>
      </ExamFormGroup> */}
      {/* <ExamFormGroup>
        <ExamFormSubtitle>Detalla los hallazgos anormnales</ExamFormSubtitle>
      </ExamFormGroup> */}
      <ExamFormGroup>
        <ExamFormSubtitle>Añade alguan observación o hallazgo adicional</ExamFormSubtitle>

        <div>
          <textarea
            className="w-full rounded-md border border-gray-300 px-3 py-2"
            placeholder="Observaciones"
          ></textarea>
        </div>
      </ExamFormGroup>
      <ExamFormGroup>
        <ExamFormSubtitle>¿Cuál fue el resultado del examen?</ExamFormSubtitle>

        <div className="flex gap-x-8">
          <SelectCheckbox label="Adecuado" checked />
          <SelectCheckbox label="Inadecuado" checked />
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* <Listbox
            label="Diagnóstico vulva"
            selectedValue={selectedVulva}
            setSelectedValue={setSelectedVulva}
            items={[
              { id: 1, value: 'Vulva normal' },
              { id: 2, value: 'Verruga acuminada' },
              { id: 3, value: 'Verruga anogenital (venérea)' },
              { id: 4, value: 'Leucoplasia de vulva' },
              { id: 5, value: 'Herpes genital' },
              { id: 6, value: 'Úlcera de órganos genitales femeninos' },
              { id: 7, value: 'Quiste en glándula de Bartholin' },
              { id: 8, value: 'Absceso de la glándula de Bartholino' },
              { id: 9, value: 'Vulvitis' },
              { id: 10, value: 'Vaginitis atrófica postmenopáusica' },
              { id: 11, value: 'Vaginitis/Vulvitis candidiásica' },
              { id: 12, value: 'Deformidad de labios de la vulva adquirida' }
            ]}
          /> */}
          <SelectListbox
            label="Diagnóstico vagina"
            selectedValue={selectedVagina}
            setSelectedValue={() => {}}
            items={[
              { value: 'Vagina normal', label: 'Vagina normal' },
              {
                value: 'Vaginitis atrófica postmenopáusica',
                label: 'Vaginitis atrófica postmenopáusica'
              },
              { value: 'Vaginitis candidiásica', label: 'Vaginitis candidiásica' },
              {
                value: 'Prolapso de pared vaginal anterior',
                label: 'Prolapso de pared vaginal anterior'
              },
              {
                value: 'Prolapso de pared vaginal posterior',
                label: 'Prolapso de pared vaginal posterior'
              },
              { value: 'Prolapso de cuello uterino', label: 'Prolapso de cuello uterino' },
              { value: 'Prolapso de perineo femenino', label: 'Prolapso de perineo femenino' },
              { value: 'Prolapso uterovaginal completo', label: 'Prolapso uterovaginal completo' },
              {
                value: 'Prolapso uterovaginal incompleto',
                label: 'Prolapso uterovaginal incompleto'
              },
              {
                value: 'Prolapso de vagina poshisterectomía',
                label: 'Prolapso de vagina poshisterectomía'
              },
              { value: 'Leucoplasia de vagina', label: 'Leucoplasia de vagina' }
            ]}
          />
          <SelectListbox
            label="Diagnóstico cervix"
            selectedValue={selectedPeriodo}
            setSelectedValue={() => {}}
            items={[
              { value: 'Cervix normal', label: 'Cervix normal' },
              { value: 'Doble cuello uterino', label: 'Doble cuello uterino' },
              {
                value: 'Deformidad del cuello uterino (adquirida)',
                label: 'Deformidad del cuello uterino (adquirida)'
              },
              { value: 'Cervicitis aguda', label: 'Cervicitis aguda' },
              { value: 'Cervicitis crónica', label: 'Cervicitis crónica' },
              {
                value: 'Hemorragia del cuello uterino (muñón)',
                label: 'Hemorragia del cuello uterino (muñón)'
              },
              {
                value: 'Ausencia adquirida de útero con muñón cervical',
                label: 'Ausencia adquirida de útero con muñón cervical'
              },
              { value: 'Ectropión de cuello uterino', label: 'Ectropión de cuello uterino' },
              {
                value: 'Ectropión de cuello uterino con cervicitis',
                label: 'Ectropión de cuello uterino con cervicitis'
              },
              { value: 'Pólipo en el cuello uterino', label: 'Pólipo en el cuello uterino' },
              { value: 'Leucoplasia del cuello uterino', label: 'Leucoplasia del cuello uterino' },
              {
                value: 'Neoplasia intraepitelial cervical grado I',
                label: 'Neoplasia intraepitelial cervical grado I'
              },
              {
                value: 'Neoplasia intraepitelial cervical grado II',
                label: 'Neoplasia intraepitelial cervical grado II'
              },
              {
                value: 'Neoplasia intraepitelial cervical grado III (displasia severa)',
                label: 'Neoplasia intraepitelial cervical grado III (displasia severa)'
              },
              {
                value: 'Neoplasia intraepitelial vaginal grado I',
                label: 'Neoplasia intraepitelial vaginal grado I'
              },
              {
                value: 'Neoplasia intraepitelial vaginal grado II',
                label: 'Neoplasia intraepitelial vaginal grado II'
              },
              {
                value: 'Neoplasia intraepitelial vaginal grado III (displasia severa)',
                label: 'Neoplasia intraepitelial vaginal grado III (displasia severa)'
              },
              {
                value: 'Neoplasia intraepitelial de vulva grado I',
                label: 'Neoplasia intraepitelial de vulva grado I'
              },
              {
                value: 'Neoplasia intraepitelial de vulva grado II',
                label: 'Neoplasia intraepitelial de vulva grado II'
              },
              {
                value: 'Neoplasia intraepitelial de vulva grado III (displasia severa)',
                label: 'Neoplasia intraepitelial de vulva grado III (displasia severa)'
              },
              {
                value: 'Carcinoma in situ del cuello del útero',
                label: 'Carcinoma in situ del cuello del útero'
              }
            ]}
          />
        </div>
      </ExamFormGroup>
    </>
  )
}
