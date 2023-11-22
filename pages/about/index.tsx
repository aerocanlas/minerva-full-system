import HomePageLayout from '@/layout/homepagelayout'
import PageWithLayout from '@/layout/pagewithlayout'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { motion } from "framer-motion"
import { FC, useRef, useState } from 'react'
import Link from 'next/link'
import styles from '@/styles/customer/customer.module.scss'

const  About: FC = () => {
  return (
    <div className={styles.bodyAbout}>
      <section className='absolute top-20 left-48' id="about">
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
          <p className="font-normal text-sm leading-3 text-blue-600 hover:text-blue cursor-pointer pb-2">About Us</p>
          <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
            <div className="w-full lg:w-6/12">
              <h2 className="w-full font-bold lg:text-4xl text-3xl lg:leading-10 leading-9 text-white">We are here to make great design accessible and delightful for everyone</h2>
              <p className="font-normal text-base leading-6 text-white mt-6">It is a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum. In the first place, we have granted to God, and by this, our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire,</p>
            </div>
            <div className="w-full lg:w-6/12">
              <img className="lg:block hidden w-full" src="https://i.ibb.co/RjNH7QB/Rectangle-122-1.png" alt="people discussing on board" />
              <img className="lg:hidden sm:block hidden w-full" src="https://i.ibb.co/16fPqrg/Rectangle-122-2.png" alt="people discussing on board" />
              <img className="sm:hidden block w-full" src="https://i.ibb.co/Jxhpxh6/Rectangle-122.png" alt="people discussing on board" />
            </div>
          </div>

    <div className="relative mt-24">
      <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
        <div className="z-20 w-12 h-12 bg-gray-800 rounded-full flex justify-center items-center">
          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg1.svg" alt="flag" />
        </div>

        <img className="z-20" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg2.svg" alt="note" />

        <img className="z-20 sm:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg3.svg" alt="users" />
      </div>
      <hr className="z-10 absolute top-2/4 w-full bg-gray-200" />
    </div>
    <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
      <div>
        <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-white mt-6">Founded</p>
        <p className="font-normal text-base leading-6 text-white mt-6">It is a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      </div>
      <div>
        <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-white mt-6">50M monthly enrichments</p>
        <p className="font-normal text-base leading-6 text-white mt-6">It is a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      </div>
      <div className="sm:block hidden">
        <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-white mt-6">400k User</p>
        <p className="font-normal text-base leading-6 text-white mt-6">It is a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      </div>
    </div>
    <div className="sm:hidden block relative mt-8">
      <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg3.svg" alt="user" />
      </div>
      <hr className="z-10 absolute top-2/4 w-full bg-gray-200" />
    </div>
    <div className="sm:hidden grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
      <div>
        <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-white mt-6">400k User</p>
        <p className="font-normal text-base leading-6 text-white mt-6">It is a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      </div>
    </div>

    <div className="flex lg:flex-row flex-col md:gap-14 gap-16 justify-between lg:mt-20 mt-16">
      <div className="w-full lg:w-6/12">
        <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-white">Our Mission</h2>
        <p className="font-normal text-base leading-6 text-white mt-6 w-full lg:w-10/12 xl:w-9/12">It is a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum. In the first place, we have granted to God, and by this, our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
        <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-white">Our Vision</h2>
        <p className="font-normal text-base leading-6 text-white w-full lg:w-10/12 xl:w-9/12 mt-10">It is a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum. In the first place, we have granted to God, and by this, our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
      </div>
      <div className="w-full lg:w-6/12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10">
         
          {/* Team Card */}
          <div className="flex p-4 shadow-md">
            <div className="mr-6">
              <img className="mr-6 fill" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg4.svg" alt="team card" />
            </div>
            <div className="">
              <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-white">Team</p>
              <p className="mt-2 font-normal text-base leading-6 text-white">It is a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
          </div>

          {/* Board Card */}
          <div className="flex p-4 shadow-md">
            <div className="mr-6">
              <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg5.svg" alt="board card" />
            </div>
            <div className="">
              <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-white">Board</p>
              <p className="mt-2 font-normal text-base leading-6 text-white">It is a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
          </div>

          {/* Press Card */}
          <div className="flex p-4 shadow-md">
            <div className="mr-6">
              <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg6.svg" alt="press card" />
            </div>
            <div className="">
              <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-white">Press</p>
              <p className="mt-2 font-normal text-base leading-6 text-white">It is a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Footer */}
<section className="absolute top-[1500px] left-[500px] flex flex-col items-center justify-center text-center text-white ">
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
</div>
  )
}

(About as PageWithLayout).layout = HomePageLayout
export default About