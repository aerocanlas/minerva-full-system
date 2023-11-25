import styles from '@/styles/admin/content.module.scss'
import AdminPageLayout from '@/layout/adminpagelayout'
import PageWithLayout from '@/layout/pagewithlayout'
import React, { FC, FormEvent, useState } from 'react'
import Head from 'next/head'
import {TbClock, TbEdit, TbTrash, TbUsers } from 'react-icons/tb'
import router from 'next/router'


interface InputProp {
  labelTitle: string;
  defaultValue: string;
  updateFormValue: (value: string) => void;
}


const AddAppointmentsPage: FC<InputProp> = ({labelTitle, defaultValue, updateFormValue }) => {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  const onSubmitForm = () => {
    const res = await fetch("http://localhost:30001/schedule/createManualSchedule", {
      method: "GET",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          date: "",
          time: "",
          name: ""
          service: ""
      })
    })

    if(!res.ok) throw new Error("There is something wrong while adding")

    res.json()
  }


  return (
    
    <div>
      <Head>
        <title>Add Appointments</title>
      </Head>

      <div className={styles.titleHead}>
      <div className={styles.icon}><TbClock size={50}/></div>
      Add Appointments
      </div>

      <div className={styles.container}>
        <div className={styles.title}>Add Appointment Details</div>
          <div className={styles.divider}></div>

          <div className="flex lg:flex-row flex-col items-center py-6 px-4">


          <div className="w-full mx-28 my-32">


          <div className=" w-full mx-auto">
    
    <form className='grid grid-cols-1 md:grid-cols-2 gap-16'>
        <div className="mb-6">
            <label htmlFor="customerName" className="text-sm font-medium text-gray-900 block mb-2">Customer Name</label>
            <input type="text" id="customerName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Input customer name" required />
            </div>
        <div className="mb-6">
            <label htmlFor="serviceName" className="text-sm font-medium text-gray-900 block mb-2">Service Name</label>
            <input type="text" id="serviceName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Input service name" required />
            </div>
        <div className="mb-6">
        <div className="font-medium pl-3 pb-6">
                            Select Date and Time <br></br>    
                <div>
                <form className="text-start  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <label htmlFor="datetime"></label>
                    <input
                        id="datetime"
                        type="datetime-local"
                        name="partydate"
                        min="2024-06-01T08:30"
                        max="2028-06-30T16:30" />
                    </form>
                </div>
                </div>
            </div>
            <div className="mb-6">
        <div className="relative inline-block text-left">
  <div>
  <label htmlFor="lastName" className="text-sm font-medium text-gray-900 block mb-2">Appointment Status</label>
    <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
    onClick={toggleDropdown}
    >
      Select appointment status
      
      <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 11.586l3.293-3.293a1 1 0 011.414 0 1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
  {isOpen && (
  <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
    <div className="py-1">
      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Completed</a>
      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Pending</a>
      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Cancelled</a>
    </div>
  </div>
  )}
</div>
</div>
        <button type="submit" className="relative top-10 left-80  text-black bg-[#FFBD59] hover:bg-[#FFBD59] focus:ring-yellow-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add New Appointment</button>
    </form>
</div>

</div>

          </div>
          </div>
          </div>

  )
}

(AddAppointmentsPage as PageWithLayout).layout = AdminPageLayout
export default AddAppointmentsPage