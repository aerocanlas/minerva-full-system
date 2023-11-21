import styles from '@/styles/admin/content.module.scss'
import AdminPageLayout from '@/layout/adminpagelayout'
import PageWithLayout from '@/layout/pagewithlayout'
import React, { FC, FormEvent, useState } from 'react'
import Head from 'next/head'
import {  TbListSearch, TbCalendar, TbEdit, TbTrash, TbUsers, TbHexagonPlus } from 'react-icons/tb'
import router from 'next/router'


const EditServicesPage: FC = () => {

const [serviceName, setServiceName] = useState('Preventive Maintenance');
const [price, setPrice] = useState('PHP 5,600.00');
const [description, setDescription] = useState('The regular and routine maintenance of equipment and assets in order to keep them running and prevent any costly unplanned downtime from unexpected equipment failure.');

const handleServiceNameChange = (event: { target: { value: React.SetStateAction<string> } }) => {
  setServiceName(event.target.value);
};
const handlePriceChange = (event: { target: { value: React.SetStateAction<string> } }) => {
  setPrice(event.target.value);
};

const handleDescriptionChange = (event: { target: { value: React.SetStateAction<string> } }) => {
  setDescription(event.target.value);
};

const [isOpen, setIsOpen] = useState(false);

const toggleDropdown = () => {
  setIsOpen(!isOpen);
};

const [isOpen1, setIsOpen1] = useState(false);

const toggleDropdown1 = () => {
  setIsOpen1(!isOpen1);
};
  

  const serviceEditForm = async() => {
    const response = await fetch("http://localhost:3001/services/updateService/:id", {  //get service id
      method: "PATCH",
      body: JSON.stringify({
        serviceID: "",
        description,
        services: serviceName,
        price, 
        userID: ""
      })
    })

    return response.json()
  }
  


  return (
    
    <div>
      <Head>
        <title>Service Management</title>
      </Head>

      <div className={styles.titleHead}>
      <div className={styles.icon}><TbListSearch size={50}/></div>
       Edit Services List
      </div>

      <div className={styles.container}>
        <div className={styles.title}>Edit Services
</div>
          <div className={styles.divider}></div>

          <div className="flex lg:flex-row flex-col items-center py-6 px-4">


<div className="w-full mx-28 my-28">


<div className=" w-full mx-auto">
    
    <form className='grid grid-cols-1 md:grid-cols-2 gap-16'>
        <div className="mb-6">
            <label htmlFor="productName" className="text-sm font-medium text-gray-900 block mb-2">Service Name</label>
            <input type="text" id="productName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Input first name" value={serviceName} onChange={handleDescriptionChange} required />
            </div>
        <div className="mb-6">
        <div className="relative inline-block text-left">
  <div>
  <label htmlFor="lastName" className="text-sm font-medium text-gray-900 block mb-2">Product Status</label>
    <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
    onClick={toggleDropdown}
    >
      Select service status
      
      <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 11.586l3.293-3.293a1 1 0 011.414 0 1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
  {isOpen && (
  <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
    <div className="py-1">
      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Available</a>
      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Unavailable</a>
    </div>
  </div>
  )}
</div>
</div>
        <div className="mb-6">
            <label htmlFor="price" className="text-sm font-medium text-gray-900 block mb-2">Service Price</label>
            <input type="text" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="ex. PHP 999.00" value={price} onChange={handlePriceChange}required />
            </div>
        <div className="mb-6">
            <label htmlFor="description" className="text-sm font-medium text-gray-900 block mb-2">Service Description</label>
            <textarea  id="description" className="h-40 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 start-0" placeholder="Input your product description here" value={description} onChange={handleDescriptionChange} required />
            </div>
        <button type="submit" className="relative left-80 text-black bg-[#FFBD59] hover:bg-[#FFBD59] focus:ring-yellow-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Update Service Details</button>
        </form>
</div>

</div>

          </div>
          </div>
          </div>

  )
}

(EditServicesPage as PageWithLayout).layout = AdminPageLayout
export default EditServicesPage