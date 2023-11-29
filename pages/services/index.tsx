import HomePageLayout from '@/layout/homepagelayout'
import PageWithLayout from '@/layout/pagewithlayout'
import React, { FC, useEffect, useState } from 'react'
import styles from '@/styles/customer/customer.module.scss'
import { FaUserClock } from "react-icons/fa6";
import Image from 'next/image'
import { FormattedPrice } from '@/helpers/index'

const Services: FC = () => {
  
  const [ services, setServices ] = useState<[]>()

useEffect(() => {
  const fetchData = async () => {
     const response = await fetch("http://localhost:3001/services/getAllServices", {
        method: "GET",
    })

    const result = await response.json();
    setServices(result)
  }
  fetchData()
}, [])

  return (
    <>
  <div className={styles.bodyServices}>
  <section className="relative mt-4 h-screen pb-12 mb-16 flex flex-col items-center justify-center ">
    <div className="relative top-60 mb-12 grid gap-16 lg:grid-cols-3 p-8 mx-8 gap-y-18	">
    
    {services?.map(({ image, services, description, userID, price }: any) => (

                    <div className="w-full lg:max-w-sm bg-white border border-gray-200 rounded-lg shadow transition-all duration-700 hover:scale-105">
                        <div>
                        <Image src={image} alt={services} height={350} width={450} />
                        </div>
                        <div className="p-4">
                            <h4 className="text-xl font-semibold text-black-600 text-center">
                                {services}
                            </h4>
                            <p className="mb-2 leading-normal text-center">
                            {description}
                            </p>
                            <p className="mr-2 text-lg font-bold text-black dark:text-black">
                            {FormattedPrice(price)}
                            </p>
                            <button className="ml-64 px-4 py-1 bottom-0 right-0 transition ease-in duration-200 uppercase rounded-full text-black font-bold hover:bg-black hover:text-white border-2 border-gray-900 focus:outline-none"><FaUserClock size="18px"/>
                            </button>
                        </div>
                    </div>
                ))}

            </div>
            </section>
            </div>

            {/*  */}
          <section className="relative flex flex-col items-center justify-center text-center text-white ">
          <footer className="h-62 bg-gradient-to-r w-full from-gray-100 via-[#FFBD59] to-gray-100">
  <div className="max-w-screen-xl mt-2 px-2 py-8 mx-auto sm:px-6 lg:px-8">
    <div className="relative top-4 grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div>
      <img src="/logo.png" className="mr-5 h-6 sm:h-6" alt="logo" />
        <p className="max-w-xs mt-4 text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, accusantium.
        </p>
        <div className="flex mt-8 space-x-6 text-gray-600">
          <a href="https://www.facebook.com/MinervaSalesCorp" className="hover:opacity-75" target="_blank" rel="noreferrer">
            <span className="sr-only"> Facebook </span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-1 lg:grid-cols-4">
        <div>
          <p className="font-medium text-black">
          <a href="/products" className="hover:opacity-75">Products</a>
          </p>
          <nav className="flex flex-col mt-1 space-y-1 text-sm text-black">
            <a href="" className="hover:opacity-75"> Tires </a>
            <a href="" className="hover:opacity-75"> Car Battery </a>
            <a href="" className="hover:opacity-75"> Oils </a>
            <a href="" className="hover:opacity-75"> Tire Mags </a>
            <a href="" className="hover:opacity-75"> Car Filters </a>
          </nav>
        </div>
        <div>
          <p className="font-medium text-black">
          <a href="/services" className="hover:opacity-75 "> Services </a>
          </p>
          <nav className="flex flex-col mt-1 space-y-1 text-sm text-black">
            <a href="" className="hover:opacity-75"> Oil Change </a>
            <a href="" className="hover:opacity-75"> Change Tire </a>
            <a href="" className="hover:opacity-75"> Alignment </a>
          </nav>
        </div>
        <div>
          <p className="font-medium text-black">
            Helpful Links
          </p>
          <nav className="flex flex-col mt-1 space-y-1 text-sm text-black">
            <a href="" className="hover:opacity-75"> Contact </a>
            <a href="" className="hover:opacity-75"> About </a>
            <a href="" className="hover:opacity-75"> Live Chat </a>
          </nav>
        </div>
        <div>
          <p className="font-medium text-black">
            Legal
          </p>
          <nav className="flex flex-col mt-1 space-y-1 text-sm text-black">
            <a href="" className="hover:opacity-75" > Privacy Policy </a>
            <a href="" className="hover:opacity-75" > Terms &amp; Conditions </a>
            <a href="" className="hover:opacity-75" > Returns Policy </a>
          </nav>
        </div>
      </div>
    </div>
    <p className="mt-9 text-xs text-gray-800">
      © 2023 Minerva Sales Corporation
    </p>
  </div>
</footer>
          </section>
            </>
  )
}

(Services as PageWithLayout).layout = HomePageLayout
export default Services