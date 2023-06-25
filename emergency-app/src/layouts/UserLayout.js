import {Fragment} from 'react'
import {Disclosure, Menu, Transition} from '@headlessui/react'
import {Bars3Icon, BellIcon, XMarkIcon} from '@heroicons/react/24/outline'
import {Link, useNavigation} from "react-router-dom";
import {MAIN_LOGO, PROFILE_IMAGE} from "../constants";
import {useAuth} from "../context/AuthContext";
import CustomButton from "../ui-kit/CustomButton";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function UserLayout({children}) {

  const navigationData = [
    {name: 'Dashboard', href: '/dashboard', current: false},
    {name: 'Create Account', href: '/register', current: false},
    {name: 'Create Doctor', href: '/dr-register', current: false},
    {name: 'QR', href: '/qr', current: false},
    {name: 'QR Emergency', href: '/qr-emergency', current: false},
  ]
  const userNavigation = [
    {name: 'Your dashboard', href: '/dashboard'},
    {name: 'Sign out', href: '/logout'},
  ]

  const {user, signIn} = useAuth()

  return (
    <>
    <div className="min-h-full">
      <Disclosure as="nav" className="border-b border-gray-200 bg-white">
        {({open}) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 justify-between">
                <div className="flex">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="block h-8 w-auto lg:hidden"
                      src={MAIN_LOGO}
                      alt="Your Company"
                    />
                    <img
                      className="hidden h-8 w-auto lg:block"
                      src={MAIN_LOGO}
                      alt="Your Company"
                    />
                  </div>
                  <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                    {navigationData.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? 'border-indigo-500 text-gray-900'
                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                          'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="hidden sm:ml-6 sm:flex sm:items-center">
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      {
                        user ?
                          <Menu.Button
                            className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src={PROFILE_IMAGE} alt=""/>
                          </Menu.Button>
                          : <CustomButton label='Acceder' onCLick={() => signIn()} />
                    }

    </div>
    <Transition
      as={Fragment}
      enter="transition ease-out duration-200"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >

      <Menu.Items
        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        {userNavigation.map((item) => (
          <Menu.Item key={item.name}>
            {({active}) => (
              <Link
                to={item.href}
                className={classNames(
                  active ? 'bg-gray-100' : '',
                  'block px-4 py-2 text-sm text-gray-700'
                )}
              >
                {item.name}
              </Link>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Transition>
    </Menu>
</div>


  <div className="-mr-2 flex items-center sm:hidden">
    {/* Mobile menu button */}
    <Disclosure.Button
      className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
      <span className="sr-only">Open main menu</span>
      {open ? (
        <XMarkIcon className="block h-6 w-6" aria-hidden="true"/>
      ) : (
        <Bars3Icon className="block h-6 w-6" aria-hidden="true"/>
      )}
    </Disclosure.Button>
  </div>
</div>
</div>

  <Disclosure.Panel className="sm:hidden">
    <div className="space-y-1 pb-3 pt-2">
      {navigationData.map((item) => (
        <Disclosure.Button
          key={item.name}
          as="a"
          href={item.href}
          className={classNames(
            item.current
              ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
              : 'border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800',
            'block border-l-4 py-2 pl-3 pr-4 text-base font-medium'
          )}
          aria-current={item.current ? 'page' : undefined}
        >
          {item.name}
        </Disclosure.Button>
      ))}
    </div>
    {
      user &&
      <div className="border-t border-gray-200 pb-3 pt-4">
        <div className="flex items-center px-4">
          <div className="flex-shrink-0">
            <img className="h-10 w-10 rounded-full" src={PROFILE_IMAGE} alt=""/>
          </div>
          <div className="ml-3">
            <div className="text-base font-medium text-gray-800">{user?.record?.name}</div>
            <div className="text-sm font-medium text-gray-500">{user?.record?.wallet}</div>
          </div>
        </div>
        <div className="mt-3 space-y-1">
          {userNavigation.map((item) => (
            <Disclosure.Button
              key={item.name}
              as="a"
              href={item.href}
              className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
            >
              {item.name}
            </Disclosure.Button>
          ))}
        </div>
      </div>
    }

  </Disclosure.Panel>
</>
)}
</Disclosure>

  <div className="py-10">
    <main>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</div>
    </main>
  </div>
</div>
</>
)
}
