import Header from "./Header";
import Footer from "./Footer";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    name: "Haircut for men",
    href: "/services/service-modal",
    imageSrc: process.env.PUBLIC_URL + "/services/haircut.webp",
    imageAlt: "Haircut for Men",
    price: "₹199",
  },
  {
    id: 2,
    name: "Spa for Women",
    href: "#",
    imageSrc: process.env.PUBLIC_URL + "/services/spa-for-women.webp",
    imageAlt: "Spa for Women",
    price: "₹399",
  },
  {
    id: 3,
    name: "Bathroom Cleaning",
    href: "#",
    imageSrc: process.env.PUBLIC_URL + "/services/bathroom.webp",
    imageAlt: "Bathroom Cleaning",
    price: "₹499",
  },
  {
    id: 4,
    name: "Waxing for Women",
    href: "#",
    imageSrc: process.env.PUBLIC_URL + "/services/waxing.webp",
    imageAlt: "Waxing for Women",
    price: "₹399",
  },
];

export default function Services() {
  return (
    <>
      <Header />
      {/* <p>{this.state.crops}</p> */}
      <div className='bg-white'>
        <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
          <div className='pb-5'>
            <h2 className='text-5xl text-indigo-600 font-bold tracking-wide uppercase lg:text-center'>
              Services
            </h2>
          </div>
          <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
            {services.map((service) => (
              <div key={service.id} className='group relative'>
                <div className='w-full min-h-40 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-40 lg:aspect-none'>
                  <img
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    className='w-full h-full object-center object-cover lg:w-full lg:h-full'
                  />
                </div>
                <div className='mt-4 flex justify-between'>
                  <div>
                    <h3 className='text-sm text-gray-700'>
                      <Link to='/services/service-modal'>
                        <a href={service.href}>
                          <span
                            aria-hidden='true'
                            className='absolute inset-0'
                          />
                          {service.name}
                        </a>
                      </Link>
                    </h3>
                  </div>
                  <p className='text-sm font-medium text-gray-900'>
                    {service.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
