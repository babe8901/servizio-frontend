import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

export default function Services() {
  const url = "https://3875-49-32-249-5.ngrok-free.app/api/v1/services";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <>
      <Header />
      <div className='bg-black'>
        <div className='max-w-2xl mx-auto py-5 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8'>
          <div className='pb-5'>
            <h2 className='text-5xl text-indigo-600 font-bold tracking-wide uppercase text-center'>
              Services
            </h2>
          </div>
          <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
            {data
              .filter((service) => {
                return service.type === "services";
              })
              .map((service) => (
                <div key={service.id} className='group relative'>
                  <div className='w-full min-h-40 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75 lg:h-40 lg:aspect-none'>
                    <img
                      onClick={Cookies.set("service", JSON.stringify(service), {
                        expires: 7,
                      })}
                      src={
                        process.env.PUBLIC_URL +
                        "/" +
                        service.type +
                        service.imageSrc
                      }
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
            {data
              .filter((appliance) => {
                return appliance.type === "repair";
              })
              .map((appliance) => (
                <div key={appliance.id} className='group relative'>
                  <div className='w-full min-h-40 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75 lg:h-40 lg:aspect-none'>
                    <img
                      onClick={Cookies.set(
                        "service",
                        JSON.stringify(appliance),
                        {
                          expires: 7,
                        }
                      )}
                      src={
                        process.env.PUBLIC_URL +
                        "/" +
                        appliance.type +
                        appliance.imageSrc
                      }
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
            {data
              .filter((item) => {
                return item.type === "cleaning";
              })
              .map((item) => (
                <div key={item.id} className='group relative'>
                  <div className='w-full min-h-40 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75 lg:h-40 lg:aspect-none'>
                    <img
                      onClick={Cookies.set("service", JSON.stringify(item), {
                        expires: 7,
                      })}
                      src={
                        process.env.PUBLIC_URL + "/" + item.type + item.imageSrc
                      }
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
                    <p className='text-sm font-medium text-white'>
                      {item.price}
                    </p>
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
            {data
              .filter((item) => {
                return item.type === "others";
              })
              .map((item) => (
                <div key={item.id} className='group relative'>
                  <div className='w-full min-h-40 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75 lg:h-40 lg:aspect-none'>
                    <img
                      onClick={Cookies.set("service", JSON.stringify(item), {
                        expires: 7,
                      })}
                      src={
                        process.env.PUBLIC_URL + "/" + item.type + item.imageSrc
                      }
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
                    <p className='text-sm font-medium text-white'>
                      {item.price}
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
