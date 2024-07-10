'use client'

import Link from 'next/link'
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'

export function MenuOptions() {
  const handleRedirctReports = () => {}

  return (
    <Menu as="div" className="px-2 py-3 text-white">
      <MenuButton className="w-full rounded-md border-2 border-gray-400 px-3 py-2 text-left hover:bg-gray-700/30">
        <ChevronDownIcon className="h-6 w-6 fill-black/60" />
      </MenuButton>
      <Transition
        enter="transition ease-out duration-75"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="relative">
          <MenuItems className="absolute top-1 w-52 rounded-md border border-black/10 bg-[#333333] px-2 py-2.5 shadow-md">
            <div className="flex flex-col divide-y-2 divide-gray-100/20">
              <div className="py-2">
                <MenuItem>
                  <Link
                    href="/list-reports"
                    className="block rounded-md px-3 py-1 tracking-normal hover:bg-[#0570eb]"
                  >
                    Lista de reportes
                  </Link>
                </MenuItem>
              </div>
              <div className="py-2">
                <MenuItem>
                  <Link
                    href="/login"
                    className="block rounded-md px-3 py-1 tracking-normal hover:bg-[#0570eb]"
                  >
                    Cerrar sesion
                  </Link>
                </MenuItem>
              </div>
            </div>
          </MenuItems>
        </div>
      </Transition>
    </Menu>
  )
}
