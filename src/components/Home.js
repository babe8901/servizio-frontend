import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const navigation = [
  { name: "Join Us", href: "/join" },
  { name: "Features", href: "/features" },
  { name: "Services", href: "/services" },
  { name: "Company", href: "/company" },
  { name: "Log in", href: "/login" },
];

export default function Home() {
  return (
    <div>
      <div className='relative bg-black overflow-hidden'>
        <div className='max-w-7xl mx-auto'>
          <div className='relative z-10 pb-8 bg-black sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32'>
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
                        <img
                          className='h-8 w-auto sm:h-10'
                          src={require("../logo.jpg")}
                        />
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
                      <Link to={item.href}>
                        <a
                          key={item.name}
                          href={item.href}
                          className='font-medium text-gray-500 hover:text-white'
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                    {/* <Link to="/login">
                                            <a href="" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                Log in
                                            </a>
                                        </Link> */}
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
                        href='login'
                        className='block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100'
                      >
                        Log in
                      </a>
                    </Link>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            <main className='mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
              <div className='sm:text-center lg:text-left'>
                <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
                  <span className='block text-indigo-400 xl:inline'>
                    Providing quick services
                  </span>{" "}
                  <span className='block text-indigo-600 xl:inline'>
                    to our Customers
                  </span>
                </h1>
                <p className='mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
                  We work towards providing quick day to day services to our
                  customers with minimum waiting time and best rates. The turn
                  around time and time of service execution is greatly reduced
                  as compared to the existing systems.
                </p>
                <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
                  <div className='rounded-md shadow'>
                    <Link to='/login'>
                      <a
                        href='login'
                        className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10'
                      >
                        Get started
                      </a>
                    </Link>
                  </div>
                  <div className='mt-3 sm:mt-0 sm:ml-3'>
                    <a
                      href='#youtube-demo-video-link'
                      className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10'
                    >
                      Live demo
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
          <img
            className='h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full'
            src={require("../billboard.jpg")}
            alt=''
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
