import HomePageLayout from '@/layout/homepagelayout'
import PageWithLayout from '@/layout/pagewithlayout'
import React, { FC } from 'react'
import styles from '@/styles/customer/customer.module.scss'

const  Contacts: FC= () => {
  return (

    <div className={styles.bodyProducts}>
    <section className='relative top-12 ' id="contact">
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-8 lg:px-8 lg:py-20">
        <div className="mb-4">
            <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                <p className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
                    Contact Us
                </p>
                <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
                    Get in Touch with us through Email
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
                    We would love to hear from you!
                </p>
            </div>
        </div>
        <div className="flex items-stretch justify-center">
            <div className="grid md:grid-cols-2">
                <div className="h-full pr-6">
                    <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">You may send an email and inquire us by filling up the form. Preferably, you may log in your account and inquire through the chat function as well for a quicker repsonse.</p>
                    <ul className="mb-6 md:mb-0">
                        <li className="flex">
                            <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" className="h-6 w-6">
                                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                    <path
                                        d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                                    </path>
                                </svg>
                            </div>
                            <div className="ml-4 mb-4">
                                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Our Address
                                </h3>
                                <p className="text-gray-600 dark:text-slate-400">General Malvar Street Barangay Tubigan</p>
                                <p className="text-gray-600 dark:text-slate-400">Binan City, Laguna</p>
                            </div>
                        </li>
                        <li className="flex">
                            <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" className="h-6 w-6">
                                    <path
                                        d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                                    </path>
                                    <path d="M15 7a2 2 0 0 1 2 2"></path>
                                    <path d="M15 3a6 6 0 0 1 6 6"></path>
                                </svg>
                            </div>
                            <div className="ml-4 mb-4">
                                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Contact
                                </h3>
                                <p className="text-gray-600 dark:text-slate-400">Mobile: 09178657346 </p>
                                <p className="text-gray-600 dark:text-slate-400">Mail: minervasalesweb@gmail.com</p>
                            </div>
                        </li>
                        <li className="flex">
                            <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" className="h-6 w-6">
                                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                    <path d="M12 7v5l3 3"></path>
                                </svg>
                            </div>
                            <div className="ml-4 mb-4">
                                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Working
                                    hours</h3>
                                <p className="text-gray-600 dark:text-slate-400">Monday - Friday: 08:00 - 17:00</p>
                                <p className="text-gray-600 dark:text-slate-400">Saturday &amp; Sunday: 08:00 - 12:00</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                    <h2 className="mb-4 text-2xl font-bold">Ready to Get Started?</h2>
                    <form id="contactForm">
                        <div className="mb-6">
                            <div className="mx-0 mb-1 sm:mb-4">
                                <div className="mx-0 mb-1 sm:mb-4">
                                    <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label><input type="text" id="name" autoComplete="given-name" placeholder="Your name" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="name"/>
                                </div>
                                <div className="mx-0 mb-1 sm:mb-4">
                                    <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label><input type="email" id="email" autoComplete="email" placeholder="Your email address" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="email"/>
                                </div>
                            </div>
                            <div className="mx-0 mb-1 sm:mb-4">
                                <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider"></label><textarea id="textarea" name="textarea" cols={30} rows={5} placeholder="Write your message..." className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"></textarea>
                            </div>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="w-full bg-[#FFBD59] text-white px-6 py-3 font-xl rounded-md sm:mb-0">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </section>

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
    </div>
  )
}

(Contacts as PageWithLayout).layout = HomePageLayout
export default Contacts