'use client'

import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { cn } from '@/lib/utils'
import { ApppointmentsPendingList } from './appointment-pending-list'
import { ApppointmentsInProcessList } from './appointment-inprogress-list'
import { AppointmentsCompletedList } from './appointment-completed-list'

export function AppointmentList() {
  const [patientTabs] = useState([
    {
      name: 'pending',
      tabTitle: 'Pendiente',
      tab: <ApppointmentsPendingList />
    },
    {
      name: 'process',
      tabTitle: 'En proceso',
      tab: <ApppointmentsInProcessList />
    },
    {
      name: 'completed',
      tabTitle: 'Finalizados',
      tab: <AppointmentsCompletedList />
    }
  ])

  return (
    <div className="mt-14">
      <Tab.Group>
        <Tab.List className="flex items-center justify-center gap-x-2">
          {patientTabs.map(({ name, tabTitle }) => (
            <Tab
              key={name}
              className={({ selected }) =>
                cn(
                  'relative bg-transparent px-7 py-3 text-lg font-semibold text-gray-1 outline-none',
                  {
                    'text-primary-blue': selected
                  }
                )
              }
            >
              {({ selected }) => (
                <>
                  {tabTitle}
                  <div
                    className={cn(
                      'absolute bottom-0 right-0 h-2 w-full rounded-sm border-t-4 border-primary-blue',
                      {
                        hidden: !selected
                      }
                    )}
                  ></div>
                </>
              )}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {patientTabs.map(({ name, tab }) => (
            <Tab.Panel key={name}>{tab}</Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
