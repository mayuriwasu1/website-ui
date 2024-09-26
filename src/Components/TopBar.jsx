import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function TopBar() {
  return (
    <Disclosure as="nav" className="bg-white shadow border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <button
              type="button"
              className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              <img
                alt="Your Company"
                src="/images/logo.svg"
                className="h-8 w-auto"
              />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <a href="/" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="/" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="/" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="flex flex-shrink-0 items-center">
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a
                href="/"
                className="uppercase inline-flex items-center px-1 pt-1 text-sm font-[600] text-gray-600 hover:border-gray-300 hover:text-gray-700"
              >
                <div>Services</div> {" "} <div ><img className="ml-2" alt="" src="/images/right-top.svg"/></div>
              </a>
              <a
                href="/"
                className="uppercase inline-flex items-center px-1 pt-1 text-sm font-[600] text-gray-900 opacity-50 hover:border-gray-300 hover:text-gray-700"
              >
                <div>Work</div> {" "} <div ><img className="ml-2" alt="" src="/images/right-top.svg"/></div>
              </a>
              <a
                href="/"
                className="uppercase inline-flex items-center px-1 pt-1 text-sm font-[600] text-gray-800 hover:border-gray-300 hover:text-gray-700"
              >
                <div>About</div> {" "} <div ><img className="ml-1" alt="" src="/images/bottom-right.svg"/></div>
              </a>
              <a
              href="/"
              className="justify-between rounded-full bg-[#EE011C] px-5 py-1 text-sm text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              GET STARTED
              </a>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 pb-4 pt-2">
          {/* Current: "bg-red-50 border-red-500 text-red-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
          <DisclosureButton
            as="a"
            href="/"
            className="block border-l-4 border-red-500 bg-red-50 py-2 pl-3 pr-4 text-base font-medium text-red-700"
          >
            Services
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="/"
            className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
          >
            Work
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="/"
            className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
          >
            About
          </DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
