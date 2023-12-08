import styles from '@/styles/admin/content.module.scss'
import AdminPageLayout from '@/layout/adminpagelayout'
import PageWithLayout from '@/layout/pagewithlayout'
import React, { FC, FormEvent, useEffect, useState } from 'react'
import Head from 'next/head'
import { TbClock, TbEdit, TbTrash, TbUsers } from 'react-icons/tb'
import router from 'next/router'
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'
import 'react-toastify/dist/ReactToastify.css';
import { Toaster, toast } from 'sonner'


interface InputProp {
  labelTitle: string;
  defaultValue: string;
  updateFormValue: (value: string) => void;
}


const AddAppointmentsPage: FC<InputProp> = ({ labelTitle, defaultValue, updateFormValue }) => {

  const [ isOpen, setIsOpen ] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [ appointmentStatus, setAppointmentStatus ] = useState("");
  const appointmentStatusB =["Pending", "Completed", "Cancelled"];
  const [ userid, setUserId ] = useState("")

  useEffect(() => {
    const cookies = Cookies.get("ecom_token")
    if (cookies) {
      const { userID }: any = jwtDecode(cookies)
      setUserId(userID)
    }
  }, [])

  const [ appointment, setAppointment ] = useState({
    date: "",
    service: "",
    time: "",
    name: ""
  })

  const promise = () => new Promise((resolve) => setTimeout(resolve, 2000));

  const AddAppointmentForm = async (e :any) => {

    e.preventDefault();
    
    const response = await fetch("http://localhost:3001/schedule/createManualSchedule", {
      method: "POST",  
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "date": appointment.date,
        "time" : appointment.time,
        "name": appointment.name,
        "service": appointment.service,
        userID: userid
      })
    })

    if(!response.ok) 
    {
      alert("Please complete all fields")
    }
  //  else {
  //         toast.promise(promise, {
  //         loading: 'Loading...',
  //         success: (products) => {
  //           return `Added new manual appointment succesfully`;
  //         },
  //         error: 'Error',
  //       });
  // }
  }

  const handleGoBack = () => {
    // Delay the router.back() function by 2000 milliseconds
    setTimeout(() => {
      router.back();
  
      toast.promise(promise, {
        loading: 'Loading...',
        success: (productsD) => {
          return `Added new manual appointment successfully`;
        },
        error: 'Error',
      });
    }, 2000);
  }


  console.log({
    'name': appointment.name,
    'service': appointment.service,
    'date': appointment.date,
    'time': appointment.time,
    userID: userid
  })

  return (

    <div>
      <Head>
        <title>Add Appointments</title>
      </Head>

      <div className={styles.titleHead}>
        <div className={styles.icon}><TbClock size={50} /></div>
        Add Appointments
      </div>

      <div className={styles.container}>
        <div className={styles.title}>Add Appointment Details</div>
        <div className={styles.divider}></div>

        <div className="flex lg:flex-row flex-col items-center py-6 px-4">


          <div className="w-full mx-28 my-32">


            <div className=" w-full mx-auto">

              <form encType='multipart/form-data' onSubmit={AddAppointmentForm} className='grid grid-cols-1 md:grid-cols-2 gap-16'>

                <div className="mb-6">
                  <label htmlFor="customerName" className="text-sm font-medium text-gray-900 block mb-2">Customer Name</label>
                  <input name="name" type="text" id="customerName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Input customer name" onChange={(e) => setAppointment({...appointment, name: e.target.value})} required />
                </div>

                <div className="mb-6">
                  <label htmlFor="serviceName" className="text-sm font-medium text-gray-900 block mb-2">Service Name</label>
                  <input name="service" type="text" id="serviceName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" onChange={(e) => setAppointment({...appointment, service: e.target.value})} placeholder="Input service name" required />
                </div>

                <div className="mb-6">
                    <label htmlFor="customerName" className="text-sm font-medium text-gray-900 block mb-2">Select Date</label>                        
                    <input
                          id="date"
                          type="date"
                          name="date"
                          min="2024-06-01"
                          max="2028-06-30"
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          onChange={(e) => setAppointment({...appointment, date: e.target.value})}
                        />
                      
                    </div>
               
                <div className="mb-6">
                <label htmlFor="customerName" className="text-sm font-medium text-gray-900 block mb-2">Select Time</label>
                        <input
                          id="time"
                          type="time"
                          name="time"
                          min="08:30"
                          max="16:30"
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          onChange={(e) => setAppointment({...appointment, time: e.target.value})}
                        />
                    </div>
                
                {/* <div className="mb-6">
                  <div className="relative inline-block text-left">
                    <div>
                      <label htmlFor="lastName" className="text-sm font-medium text-gray-900 block mb-2">Appointment Status</label>
                      <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                        onClick={toggleDropdown}
                      >
                        {appointmentStatus === "" ? "Select Product Status" : appointmentStatus}

                        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 11.586l3.293-3.293a1 1 0 011.414 0 1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                      </button>
                    </div>
                    <div className={`w-full flex flex-col rounded-md shadow-lg bg-primary-100 p-4 text-primary-600 ${isOpen ? 'absolute z-10' : 'hidden'}`}>
  {isOpen ? (
    appointmentStatusB.map((name) => (
      <button
      name="status"
        className='text-left'
        type="button"
        key={name}
        value={name}
        onClick={(e) => setAppointmentStatus(e.currentTarget.value)}
      >
        {name}
      </button>
    ))
  ) : null}
  </div>
                  </div>
                </div> */}
                

                <button type="submit" className="relative top-10 left-80  text-black bg-[#FFBD59] hover:bg-[#FFBD59] focus:ring-yellow-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={handleGoBack}>Add New Appointment</button>
                <Toaster richColors  />
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