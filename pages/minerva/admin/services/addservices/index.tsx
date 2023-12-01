import styles from '@/styles/admin/content.module.scss'
import AdminPageLayout from '@/layout/adminpagelayout'
import PageWithLayout from '@/layout/pagewithlayout'
import React, { FC, useEffect, useState, SyntheticEvent } from 'react'
import Head from 'next/head'
import { TbListSearch, TbCalendar, TbEdit, TbTrash, TbUsers } from 'react-icons/tb'
import router from 'next/router'
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'

const AddServicesPage: FC = () => {

  const [ isOpen, setIsOpen ] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [ isOpen1, setIsOpen1 ] = useState(false);

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };

  const [ openCategory, setOpenCategory ] = useState(false);
  const [ openAvailability, setAvailability ] = useState(false)
  const [ productCateg, setProductCateg ] = useState("Product Category");
  const [ serviceStatus, setServiceStatus ] = useState("Service Status");
  const serviceAvailability =["Available", "Unavailable"];
  const productsCategory = ["Tires", "Car Battery", "Tire Mags", "Oils", "Car Filters" ];


  const [ services, setServices ] = useState({
    services: "",
    description: "",
    price: ""
  })


  const [ userid, setUserId ] = useState("")

  useEffect(() => {
    const cookies = Cookies.get("ecom_token");
    if (cookies) {
      const { userID }: any = jwtDecode(cookies)
      setUserId(userID)
    }
  }, [])

  const onSubmitForm = async (e: SyntheticEvent) => {
    e.preventDefault()
    const response = await fetch("http://localhost:3001/createService", {
      method: "POST",
      body: JSON.stringify({
        services: services.services,
        description: services.description,
        price: services.price,
        userID: userid   // get userId on user login
      })
    })
    return response.json();
  }


  return (

    <div>
      <Head>
        <title>Service Management</title>
      </Head>

      <div className={styles.titleHead}>
        <div className={styles.icon}><TbListSearch size={50} /></div>
        Add Service Details
      </div>

      <div className={styles.container}>
        <div className={styles.title}>Add Service Details</div>
        <div className={styles.divider}></div>

        <div className="flex lg:flex-row flex-col items-center py-6 px-4">


          <div className="w-full mx-28 my-28">


            <div className=" w-full mx-auto">

              <form onSubmit={onSubmitForm} className='grid grid-cols-1 md:grid-cols-2 gap-16'>
                <div className="mb-6">
                  <label htmlFor="productName" className="text-sm font-medium text-gray-900 block mb-2">Service Name</label>
                  <input name="name" type="text" id="productName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Input service name" required />
                </div>
                <div className="mb-6">
                  <div className="relative inline-block text-left">
                    <div>
                      <label htmlFor="lastName" className="text-sm font-medium text-gray-900 block mb-2">Service Status</label>
                      <button name="status" type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                        onClick={toggleDropdown}
                      >
                       {serviceStatus}
                        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 11.586l3.293-3.293a1 1 0 011.414 0 1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                      </button>
                    </div>
                    <div className={`w-full flex flex-col rounded-md shadow-lg bg-primary-100 p-4 text-primary-600 ${isOpen ? 'absolute z-10' : 'hidden'}`}>
  {isOpen ? (
    serviceAvailability.map((name) => (
      <button
      name="status"
        className='text-left'
        type="button"
        key={name}
        value={name}
        onClick={(e) => setServiceStatus(e.currentTarget.value)}
      >
        {name}
      </button>
    ))
  ) : null}
</div>
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="description" className="text-sm font-medium text-gray-900 block mb-2">Service Description</label>
                  <textarea name="description" id="description" className="h-40 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 start-0" placeholder="Input your product description here" required />
                </div>
                <div className="mb-6">
                  <label htmlFor="price" className="text-sm font-medium text-gray-900 block mb-2">Service Price</label>
                  <input name="price" type="text" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="ex. PHP 999.00" required />
                </div>

                <button type="submit" className="relative left-80 text-black bg-[#FFBD59] hover:bg-[#FFBD59] focus:ring-yellow-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add New Service</button>
              </form>
            </div>

          </div>

        </div>
      </div>
    </div>

  )
}

(AddServicesPage as PageWithLayout).layout = AdminPageLayout
export default AddServicesPage