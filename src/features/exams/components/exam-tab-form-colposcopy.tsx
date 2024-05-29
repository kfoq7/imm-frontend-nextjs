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
      const asdf = prevValues.includes(value)
        ? prevValues.filter(item => item !== value)
        : [...prevValues, value]
      console.log(asdf)
      return asdf
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
              { id: 1, value: 'Normal' },
              { id: 2, value: 'Anomalo' },
              { id: 3, value: 'Histeractomia parcial' },
              { id: 4, value: 'Histeretomia total' }
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
          <Listbox
            label="Vagina"
            selectedValue={selectedVagina}
            setSelectedValue={setSelectedVagina}
            items={[
              { id: 1, value: 'Normal' },
              { id: 2, value: 'Prolapso genital' },
              { id: 3, value: 'Malformaciones del himen' },
              { id: 4, value: 'Asimetria de labios' },
              { id: 5, value: 'Neoplasia' }
            ]}
          />
          <Listbox
            label="Periodo"
            selectedValue={selectedPeriodo}
            setSelectedValue={setSelectedPeriodo}
            items={[
              { id: 1, value: 'Normal' },
              { id: 2, value: 'Episiorrafia' },
              { id: 3, value: 'Otros' }
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
          <Listbox
            selectedValue={selectedVagina}
            setSelectedValue={setSelectedVagina}
            items={[
              { id: 1, value: 'Visible' },
              { id: 2, value: 'Parcialmente visible' },
              { id: 3, value: 'No visible' }
            ]}
          />
          <Listbox
            selectedValue={selectedPeriodo}
            setSelectedValue={setSelectedPeriodo}
            items={[
              { id: 1, value: 'ZT1' },
              { id: 2, value: 'ZT2' },
              { id: 3, value: 'ZT3' }
            ]}
          />
        </div>
      </ExamFormGroup>
      <ExamFormGroup>
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
      </ExamFormGroup>
      <ExamFormGroup>
        <ExamFormSubtitle>Detalla los hallazgos anormnales</ExamFormSubtitle>
      </ExamFormGroup>
      <ExamFormGroup>
        <ExamFormSubtitle>Añade alguan observación o hallazgo adicional</ExamFormSubtitle>
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
          <Listbox
            label="Diagnóstico vagina"
            selectedValue={selectedVagina}
            setSelectedValue={setSelectedVagina}
            items={[
              { id: 1, value: 'Vagina normal' },
              { id: 2, value: 'Vaginitis atrófica postmenopáusica' },
              { id: 3, value: 'Vaginitis candidiásica' },
              { id: 4, value: 'Prolapso de pared vaginal anterior' },
              { id: 5, value: 'Prolapso de pared vaginal posterior' },
              { id: 6, value: 'Prolapso de cuello uterino' },
              { id: 7, value: 'Prolapso de perineo femenino' },
              { id: 8, value: 'Prolapso uterovaginal completo' },
              { id: 9, value: 'Prolapso uterovaginal incompleto' },
              { id: 10, value: 'Prolapso de vagina poshisterectomía' },
              { id: 11, value: 'Leucoplasia de vagina' }
            ]}
          />
          <Listbox
            label="Diagnóstico cervix"
            selectedValue={selectedPeriodo}
            setSelectedValue={setSelectedPeriodo}
            items={[
              { id: 1, value: 'Cervix normal' },
              { id: 2, value: 'Doble cuello uterino' },
              { id: 3, value: 'Deformidad del cuello uterino (adquirida)' },
              { id: 4, value: 'Cervicitis aguda' },
              { id: 5, value: 'Cervicitis crónica' },
              { id: 6, value: 'Hemorragia del cuello uterino (muñón)' },
              { id: 7, value: 'Ausencia adquirida de útero con muñón cervical' },
              { id: 8, value: 'Ectropión de cuello uterino' },
              { id: 9, value: 'Ectropión de cuello uterino con cervicitis' },
              { id: 10, value: 'Pólipo en el cuello uterino' },
              { id: 11, value: 'Leucoplasia del cuello uterino' },
              { id: 12, value: 'Neoplasia intraepitelial cervical grado I' },
              { id: 13, value: 'Neoplasia intraepitelial cervical grado II' },
              { id: 14, value: 'Neoplasia intraepitelial cervical grado III (displasia severa)' },
              { id: 15, value: 'Neoplasia intraepitelial vaginal grado I' },
              { id: 16, value: 'Neoplasia intraepitelial vaginal grado II' },
              { id: 17, value: 'Neoplasia intraepitelial vaginal grado III (displasia severa)' },
              { id: 18, value: 'Neoplasia intraepitelial de vulva grado I' },
              { id: 19, value: 'Neoplasia intraepitelial de vulva grado II' },
              { id: 20, value: 'Neoplasia intraepitelial de vulva grado III (displasia severa)' },
              { id: 21, value: 'Carcinoma in situ del cuello del útero' }
            ]}
          />
        </div>
      </ExamFormGroup>
    </>
  )
}
