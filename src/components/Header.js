import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Join Us", href: "/join" },
  { name: "Features", href: "/features" },
  { name: "Services", href: "/services" },
  { name: "Company", href: "/company" },
];

export default function Header() {
  return (
    <div>
      <div className='relative bg-black overflow-hidden'>
        <div className='max-w-7xl mx-auto'>
          <div className='relative z-10 pb-8 bg-black sm:pb-16 md:pb-4 lg:max-w-2xl lg:w-full lg:pb-6 xl:pb-8'>
            <svg
              className='hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-black transform translate-x-1/2'
              fill='currentColor'
              viewBox='0 0 100 100'
              preserveAspectRatio='none'
              aria-hidden='true'
            >
              <polygon points='50,0 100,0 50,100 0,100' />
            </svg>

            <Popover>
              <div className='relative pt-6 px-4 sm:px-6 lg:px-8'>
                <nav
                  className='relative flex items-center justify-between sm:h-10 lg:justify-start'
                  aria-label='Global'
                >
                  <div className='flex items-center flex-grow flex-shrink-0 lg:flex-grow-0'>
                    <div className='flex items-center justify-between w-full md:w-auto'>
                      <a href='#'>
                        <span className='sr-only'>Workflow</span>
                        <Link to='/'>
                          <img
                            className='h-8 w-auto sm:h-10'
                            src={require("../logo.jpg")}
                          />
                        </Link>
                      </a>
                      <div className='-mr-2 flex items-center md:hidden'>
                        <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                          <span className='sr-only'>Open main menu</span>
                          <MenuIcon className='h-6 w-6' aria-hidden='true' />
                        </Popover.Button>
                      </div>
                    </div>
                  </div>
                  <div className='hidden md:block md:ml-10 md:pr-4 md:space-x-8'>
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className='font-medium text-gray-500 hover:text-white'
                      >
                        {item.name}
                      </a>
                    ))}
                    <Link to='/login'>
                      <a
                        href=''
                        className='font-medium text-gray-500 hover:text-white'
                      >
                        Log in
                      </a>
                    </Link>
                  </div>
                </nav>
              </div>

              <Transition
                as={Fragment}
                enter='duration-150 ease-out'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='duration-100 ease-in'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Popover.Panel
                  focus
                  className='absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
                >
                  <div className='rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
                    <div className='px-5 pt-4 flex items-center justify-between'>
                      <div>
                        <img
                          className='h-8 w-auto'
                          src={require("../logo.jpg")}
                          alt=''
                        />
                      </div>
                      <div className='-mr-2'>
                        <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                          <span className='sr-only'>Close main menu</span>
                          <XIcon className='h-6 w-6' aria-hidden='true' />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className='px-2 pt-2 pb-3 space-y-1'>
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <Link to='/login'>
                      <a
                        href='#'
                        className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                      >
                        Log in
                      </a>
                    </Link>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
}
