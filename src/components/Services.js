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

const appliances = [
  {
    id: 1,
    name: "Geyser",
    href: "#",
    imageSrc: process.env.PUBLIC_URL + "/repair/geyser.webp",
    imageAlt: "Geyser Repairing",
    price: "₹499",
  },
  {
    id: 2,
    name: "Water Purifier",
    href: "#",
    imageSrc: process.env.PUBLIC_URL + "/repair/water-purifier.webp",
    imageAlt: "Water Purifier Repairing",
    price: "₹299",
  },
  {
    id: 3,
    name: "Washing Machine",
    href: "#",
    imageSrc: process.env.PUBLIC_URL + "/repair/washing-machine.webp",
    imageAlt: "Washing Machine Repairing",
    price: "₹799",
  },
  {
    id: 4,
    name: "Air Conditioner",
    href: "#",
    imageSrc: process.env.PUBLIC_URL + "/repair/ac.webp",
    imageAlt: "Air Conditioner Repairing",
    price: "₹999",
  },
];

const cleaning = [
  {
    id: 1,
    name: "Bathroom and Kitchen",
    href: "#",
    imageSrc: process.env.PUBLIC_URL + "/cleaning/b&k.webp",
    imageAlt: "Bathroom and Kitchen Cleaning",
    price: "₹499",
  },
  {
    id: 2,
    name: "Full Home",
    href: "#",
    imageSrc: process.env.PUBLIC_URL + "/cleaning/home.webp",
    imageAlt: "Full Home Cleaning",
    price: "₹1999",
  },
  {
    id: 3,
    name: "Sofa & Carpet",
    href: "#",
    imageSrc: process.env.PUBLIC_URL + "/cleaning/s&c.webp",
    imageAlt: "Sofa & Carpet Cleaning",
    price: "₹499",
  },
  {
    id: 4,
    name: "Pest Control",
    href: "#",
    imageSrc: process.env.PUBLIC_URL + "/cleaning/pest.webp",
    imageAlt: "Pest Control",
    price: "₹999",
  },
];

const others = [
  {
    id: 1,
    name: "Carpenter",
    href: "#",
    imageSrc: process.env.PUBLIC_URL + "/others/carpenter.webp",
    imageAlt: "Carpenter",
    price: "₹499",
  },
  {
    id: 2,
    name: "Electrician",
    href: "#",
    imageSrc: process.env.PUBLIC_URL + "/others/electrician.webp",
    imageAlt: "Electrician",
    price: "₹499",
  },
  {
    id: 3,
    name: "Plumber",
    href: "#",
    imageSrc: process.env.PUBLIC_URL + "/others/plumber.webp",
    imageAlt: "Plumber",
    price: "₹499",
  },
  {
    id: 4,
    name: "Painter",
    href: "#",
    imageSrc: process.env.PUBLIC_URL + "/others/painter.webp",
    imageAlt: "Painter",
    price: "₹499",
  },
];

export default function Services() {
  return (
    <>
      <Header />
      {/* <p>{this.state.crops}</p> */}
      <div className='bg-black'>
        <div className='max-w-2xl mx-auto py-5 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8'>
          <div className='pb-5'>
            <h2 className='text-5xl text-indigo-600 font-bold tracking-wide uppercase text-center'>
              Services
            </h2>
          </div>
          <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
            {services.map((service) => (
              <div key={service.id} className='group relative'>
                <div className='w-full min-h-40 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75 lg:h-40 lg:aspect-none'>
                  <img
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    className='w-full h-full object-center object-cover lg:w-full lg:h-full'
                  />
                </div>
                <div className='mt-4 flex justify-between'>
                  <div>
                    <h3 className='text-sm text-white'>
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
                  <p className='text-sm font-medium text-white'>
                    {service.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='max-w-2xl mx-auto py-5 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8'>
          <div className='pb-5'>
            <h2 className='text-5xl text-indigo-600 font-bold tracking-wide uppercase text-center'>
              Appliances
            </h2>
            <p className='text-center mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>
              Servicing, Repair, Installation & Uninstallation
            </p>
          </div>
          <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
            {appliances.map((appliance) => (
              <div key={appliance.id} className='group relative'>
                <div className='w-full min-h-40 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75 lg:h-40 lg:aspect-none'>
                  <img
                    src={appliance.imageSrc}
                    alt={appliance.imageAlt}
                    className='w-full h-full object-center object-cover lg:w-full lg:h-full'
                  />
                </div>
                <div className='mt-4 flex justify-between'>
                  <div>
                    <h3 className='text-sm text-white'>
                      <Link to='/services/service-modal'>
                        <a href={appliance.href}>
                          <span
                            aria-hidden='true'
                            className='absolute inset-0'
                          />
                          {appliance.name}
                        </a>
                      </Link>
                    </h3>
                  </div>
                  <p className='text-sm font-medium text-white'>
                    {appliance.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='max-w-2xl mx-auto py-5 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8'>
          <div className='pb-5'>
            <h2 className='text-5xl text-indigo-600 font-bold tracking-wide uppercase text-center'>
              Cleaning & Pest Control
            </h2>
          </div>
          <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
            {cleaning.map((item) => (
              <div key={item.id} className='group relative'>
                <div className='w-full min-h-40 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75 lg:h-40 lg:aspect-none'>
                  <img
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    className='w-full h-full object-center object-cover lg:w-full lg:h-full'
                  />
                </div>
                <div className='mt-4 flex justify-between'>
                  <div>
                    <h3 className='text-sm text-white'>
                      <Link to='/services/service-modal'>
                        <a href={item.href}>
                          <span
                            aria-hidden='true'
                            className='absolute inset-0'
                          />
                          {item.name}
                        </a>
                      </Link>
                    </h3>
                  </div>
                  <p className='text-sm font-medium text-white'>{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='max-w-2xl mx-auto py-5 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8'>
          <div className='pb-5'>
            <h2 className='text-5xl text-indigo-600 font-bold tracking-wide uppercase text-center'>
              Other Services
            </h2>
          </div>
          <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
            {others.map((item) => (
              <div key={item.id} className='group relative'>
                <div className='w-full min-h-40 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75 lg:h-40 lg:aspect-none'>
                  <img
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    className='w-full h-full object-center object-cover lg:w-full lg:h-full'
                  />
                </div>
                <div className='mt-4 flex justify-between'>
                  <div>
                    <h3 className='text-sm text-white'>
                      <Link to='/services/service-modal'>
                        <a href={item.href}>
                          <span
                            aria-hidden='true'
                            className='absolute inset-0'
                          />
                          {item.name}
                        </a>
                      </Link>
                    </h3>
                  </div>
                  <p className='text-sm font-medium text-white'>{item.price}</p>
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
