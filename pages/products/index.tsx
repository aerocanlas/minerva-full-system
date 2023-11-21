import Image from 'next/image'
import { Inter } from 'next/font/google'
import HomePageLayout from '@/layout/homepagelayout'
import PageWithLayout from '@/layout/pagewithlayout'
import { motion } from "framer-motion"
import { FC, FunctionComponent, useEffect, useRef, useState, SyntheticEvent} from 'react'
import Link from 'next/link'
import styles from '@/styles/customer/customer.module.scss'
import React from 'react';
import { GiCarWheel } from "react-icons/gi";
import { GiCartwheel } from "react-icons/gi";
import { BiSolidCarBattery } from "react-icons/bi";
import { IoListSharp } from "react-icons/io5";
import { LiaOilCanSolid } from "react-icons/lia";
import { BiSolidCylinder } from "react-icons/bi";
import { IoCartOutline } from "react-icons/io5";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";


const Products: FC= () =>{ 

  const [ productsTake, setProductsTake ]=  useState(10)  // you can set this on default
  const [ filters, setFilters ] = useState("")
  const [ products, setProducts ] = useState(null)
  const [ filterProducts, setFilterProducts ] = useState(null)
  const [ search, setSearch ] = useState("")
  const [ productSearch, setProductSearch ] = useState(null)

  // search products

  const ProductSearch = async () => {
    const response = await fetch("http://localhost:3001/product/getSearchProduct", {
      method: "GET",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        search: search
      })
    })
    const result = await response.json()
    setProductSearch(result)
  }

  //filter data w/ pagination 

  useEffect(() => {
    const fetchData = async () => {
    const response = await fetch("http://localhost:3001/product/getProductByCategory", {
        method: "GET",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          category: filters
        })
    })

    const result = await response.json();
    setFilterProducts(result)

    }
  }, [])
  
  useEffect(() => {
    const fetchData = async () => {
      const resposne = await fetch("http://localhost:3001/product/getAllProduct", {
        method: "GET",
        headers: { 'Content-Type': 'application/json' },
      })
      if(!resposne.ok){
        throw new Error("There is something errro")
      }
      const result = await resposne.json();
      setProducts(result)
    }
  }, [])
  
  return (
    <div className={styles.bodyProducts}>
      <section className="relative h-screen flex flex-col items-center justify-center text-center text-white "> 

      <div className="absolute top-60 left-20 max-w-2xl mx-auto">

	<aside className="absolute opacity-80 w-96" aria-label="Sidebar">
  
  <div className={styles.category}>
    <div className="absolute top-12 left-8 flex items-center w-80 mx-auto bg-white border-2 border-black rounded-md " x-data="{ search: '' }">
        <div className="w-full">
            <input type="search" className="w-full px-4 py-1 text-gray-800 rounded-lg focus:outline-none "
                placeholder="search" x-model="search"/>
        </div>
        <div>
            <button type="submit" className="flex items-center border-2 bg-[#FFBD59] justify-center w-12 h-12 text-white rounded-r-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
            </button>
        </div>
    </div>
		<div className="px-20 py-16 overflow-y-auto rounded-2xl bg-[#FFBD59]">
			<ul className="pt-16 space-y-2">
      <li>
					<a href="#" target="_blank"
						className="flex items-center p-2 font-normal text-black rounded-lg dark:text-black hover:bg-black hover:text-white">
						<IoListSharp size="40px"/>
						<span className=" ml-3 text-2xl">View All</span>
					</a>
				</li>
				<li>
				<li>
					<a href="#"
						className="flex items-center p-2 font-normal text-gray-900 rounded-lg dark:text-black hover:bg-black hover:text-white">
						<GiCarWheel size="40px"/>
						<span className="ml-3 text-2xl">Tires</span>
					</a>
				</li>
				<li>
					<a href="#"
						className="flex items-center p-2 font-normal text-gray-900 rounded-lg dark:text-black hover:bg-black hover:text-white">
						<BiSolidCarBattery size="40px"/>
						<span className=" ml-3 text-2xl">Car Battery</span>					</a>
				</li>
					<a href="#"
						className="flex items-center p-2 font-normal text-gray-900 rounded-lg dark:text-black hover:bg-black hover:text-white">
						<GiCartwheel size="40px"/>
						<span className=" ml-3 text-2xl">Tire Mags</span>
					</a>
				</li>
				<li>
					<a href="#"
						className="flex items-center p-2 font-normal text-gray-900 rounded-lg dark:text-black hover:bg-black hover:text-white">
						<LiaOilCanSolid size="40px"/>
						<span className=" ml-3 text-2xl">Oils</span>
					</a>
				</li>
				<li>
					<a href="#"
						className="flex items-center p-2 font-normal text-gray-900 rounded-lg dark:text-black hover:bg-black hover:text-white">
						<BiSolidCylinder size="40px"/>
						<span className=" ml-3 text-2xl">Car Filters</span>
					</a>
				</li>
			</ul>
		</div>
    </div>
	</aside>
  
	</div>
            <div className="absolute top-36 ml-60 left-96 grid grid-cols-1 md:grid-cols-3 gap-8 ">

                    <div className="mx-auto mt-2 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-[#FFBD59] shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                        <img className="h-48 w-full object-cover object-center" src="https://www.motolite.com/cdn/shop/products/Gold1_750x.jpg?v=1663294903" alt="Motolite Gold" />
                        <div className="p-4">
                          <h2 className="mb-2 text-lg font-medium dark:text-black text-gray-900">Motolite Gold</h2>
                          <p className="text-sm mb-2 dark:text-black text-black">Long lasting power for high performance vehicles.</p>
                              <div className="flex items-center">
                                <p className="mr-2 text-lg font-bold flex text-black dark:text-black">PHP 5,600.00 </p>
                                <button
                  className="ml-28 px-4 py-2 transition ease-in duration-200 uppercase rounded-full text-black font-bold hover:bg-black hover:text-white border-2 border-gray-900 focus:outline-none"><IoCartOutline size="18px"/></button>
                              </div>
                          </div>  
                      </div>

                      <div className="mx-auto mt-2 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-[#FFBD59] shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                        <img className="h-48 w-full object-cover object-center" src="https://www.motolite.com/cdn/shop/products/Gold1_750x.jpg?v=1663294903" alt="Motolite Gold" />
                        <div className="p-4">
                          <h2 className="mb-2 text-lg font-medium dark:text-black text-gray-900">Motolite Gold</h2>
                          <p className="text-sm mb-2 dark:text-black text-black">Long lasting power for high performance vehicles.</p>
                              <div className="flex items-center">
                                <p className="mr-2 text-lg font-bold text-black dark:text-black">PHP 5,600.00</p>
                                <button
                  className="ml-28 px-4 py-2 transition ease-in duration-200 uppercase rounded-full text-black font-bold hover:bg-black hover:text-white border-2 border-gray-900 focus:outline-none"><IoCartOutline size="18px"/></button>

                              </div>
                          </div>  
                      </div>

                      <div className="mx-auto mt-2 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-[#FFBD59] shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                        <img className="h-48 w-full object-cover object-center" src="https://www.motolite.com/cdn/shop/products/Gold1_750x.jpg?v=1663294903" alt="Motolite Gold" />
                        <div className="p-4">
                          <h2 className="mb-2 text-lg font-medium dark:text-black text-gray-900">Motolite Gold</h2>
                          <p className="text-sm mb-2 dark:text-black text-black">Long lasting power for high performance vehicles.</p>
                              <div className="flex items-center">
                                <p className="mr-2 text-lg font-bold text-black dark:text-black">PHP 5,600.00</p>
                                <button
                  className="ml-28 px-4 py-2 transition ease-in duration-200 uppercase rounded-full text-black font-bold hover:bg-black hover:text-white border-2 border-gray-900 focus:outline-none"><IoCartOutline size="18px"/></button>

                              </div>
                          </div>  
                      </div>

                      <div className="mx-auto mt-2 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-[#FFBD59] shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                        <img className="h-48 w-full object-cover object-center" src="https://www.motolite.com/cdn/shop/products/Gold1_750x.jpg?v=1663294903" alt="Motolite Gold" />
                        <div className="p-4">
                          <h2 className="mb-2 text-lg font-medium dark:text-black text-gray-900">Motolite Gold</h2>
                          <p className="text-sm mb-2 dark:text-black text-black">Long lasting power for high performance vehicles.</p>
                              <div className="flex items-center">
                                <p className="mr-2 text-lg font-bold text-black dark:text-black">PHP 5,600.00</p>
                                <button
                  className="ml-28 px-4 py-2 transition ease-in duration-200 uppercase rounded-full text-black font-bold hover:bg-black hover:text-white border-2 border-gray-900 focus:outline-none"><IoCartOutline size="18px"/></button>

                              </div>
                          </div>  
                      </div>

                      <div className="mx-auto mt-2 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-[#FFBD59] shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                        <img className="h-48 w-full object-cover object-center" src="https://www.motolite.com/cdn/shop/products/Gold1_750x.jpg?v=1663294903" alt="Motolite Gold" />
                        <div className="p-4">
                          <h2 className="mb-2 text-lg font-medium dark:text-black text-gray-900">Motolite Gold</h2>
                          <p className="text-sm mb-2 dark:text-black text-black">Long lasting power for high performance vehicles.</p>
                              <div className="flex items-center">
                                <p className="mr-2 text-lg font-bold text-black dark:text-black">PHP 5,600.00</p>
                                <button
                  className="ml-28 px-4 py-2 transition ease-in duration-200 uppercase rounded-full text-black font-bold hover:bg-black hover:text-white border-2 border-gray-900 focus:outline-none"><IoCartOutline size="18px"/></button>

                              </div>
                          </div>  
                      </div>

                      <div className="mx-auto mt-2 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-[#FFBD59] shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                        <img className="h-48 w-full object-cover object-center" src="https://www.motolite.com/cdn/shop/products/Gold1_750x.jpg?v=1663294903" alt="Motolite Gold" />
                        <div className="p-4">
                          <h2 className="mb-2 text-lg font-medium dark:text-black text-gray-900">Motolite Gold</h2>
                          <p className="text-sm mb-2 dark:text-black text-black">Long lasting power for high performance vehicles.</p>
                              <div className="flex items-center">
                                <p className="mr-2 text-lg font-bold text-black dark:text-black">PHP 5,600.00</p>
                                <button
                  className="ml-28 px-4 py-2 transition ease-in duration-200 uppercase rounded-full text-black font-bold hover:bg-black hover:text-white border-2 border-gray-900 focus:outline-none"><IoCartOutline size="18px"/></button>

                              </div>
                          </div>  
                      </div>
                      <div className="relative left-80 ml-10 grid min-h-[80px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
            <nav>
                <ul className="flex">
                    <li>
                        <a className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 hover:bg-[#FFBD59] bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300" href="#" aria-label="Previous">
                            <span className="material-icons text-sm"><IoMdArrowDropleft /></span>
                        </a>
                    </li>
                    <li>
                        <a className="mx-1 flex h-9 w-9 items-center justify-center border border-blue-gray-100 rounded-full hover:bg-[#FFBD59] p-0 text-sm text-white shadow-md transition duration-150 ease-in-out" href="#">1</a>
                    </li>
                    <li>
                        <a className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 hover:bg-[#FFBD59] bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300" href="#">2</a>
                    </li>
                    <li>
                        <a className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 hover:bg-[#FFBD59] bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300" href="#">3</a>
                    </li>
                    <li>
                        <a className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 hover:bg-[#FFBD59] bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300" href="#" aria-label="Next">
                            <span className="material-icons text-sm"><IoMdArrowDropright /></span>
                        </a>
                    </li>
                </ul>
            </nav>
            
      </div>

</div>
      </section>

      {/*  */}
      <section className="relative top-12 mt-12 h-60  pb-12 mb-16 flex flex-col items-center justify-center text-center text-white ">
          <footer className="bg-gradient-to-r w-full from-gray-100 via-[#FFBD59] to-gray-100">
  <div className="max-w-screen-xl mt-12 px-2 py-12 mx-auto sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div>
      <img src="/logo.png" className="mr-5 h-6 sm:h-9" alt="logo" />
        <p className="max-w-xs mt-4 text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, accusantium.
        </p>
        <div className="flex mt-8 space-x-6 text-gray-600">
          <a href="https://www.facebook.com/MinervaSalesCorp" className="hover:opacity-75" target="_blank" rel="noreferrer">
            <span className="sr-only"> Facebook </span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-medium text-black">
          <a href="/products" className="hover:opacity-75">Products</a>
          </p>
          <nav className="flex flex-col mt-4 space-y-2 text-sm text-black">
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
          <nav className="flex flex-col mt-4 space-y-2 text-sm text-black">
            <a href="" className="hover:opacity-75"> Oil Change </a>
            <a href="" className="hover:opacity-75"> Change Tire </a>
            <a href="" className="hover:opacity-75"> Alignment </a>
          </nav>
        </div>
        <div>
          <p className="font-medium text-black">
            Helpful Links
          </p>
          <nav className="flex flex-col mt-4 space-y-2 text-sm text-black">
            <a href="" className="hover:opacity-75"> Contact </a>
            <a href="" className="hover:opacity-75"> About </a>
            <a href="" className="hover:opacity-75"> Live Chat </a>
          </nav>
        </div>
        <div>
          <p className="font-medium text-black">
            Legal
          </p>
          <nav className="flex flex-col mt-4 space-y-2 text-sm text-black">
            <a href="" className="hover:opacity-75" > Privacy Policy </a>
            <a href="" className="hover:opacity-75" > Terms &amp; Conditions </a>
            <a href="" className="hover:opacity-75" > Returns Policy </a>
          </nav>
        </div>
      </div>
    </div>
    <p className="mt-12 text-xs text-gray-800">
      © 2023 Minerva Sales Corporation
    </p>
  </div>
</footer>
          </section>
    </div>
  )
}

(Products as PageWithLayout).layout = HomePageLayout
export default Products