import styles from '@/styles/admin/content.module.scss'
import AdminPageLayout from '@/layout/adminpagelayout'
import PageWithLayout from '@/layout/pagewithlayout'
import React, { FC, FormEvent, useState, useEffect} from 'react'
import Head from 'next/head'
import { TbEdit, TbTrash, TbUsers } from 'react-icons/tb'
import router from 'next/router'
import { GetStaticPropsContext } from 'next'

interface InputProp {
  labelTitle: string;
  defaultValue: string;
  updateFormValue: (value: string) => void;
}



const EditCustomerPage: FC<InputProp> = () => {

  const [ firstName, setFirstName ] = useState('');
  const [ middleName, setMiddleName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ phoneNumber, setPhoneNumber ] = useState('');
  const [ shippingAddress, setShippingAddress ] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:3001/user/getUsersId/${router.query.id}`,
      {
        method: "GET",
        headers: { 'Content-Type': 'application/json' },
      })

      const result = await res.json();
      
      result.map(({ profile, email}: any) => {
   
        setFirstName(profile.firstname);
        setLastName(profile.lastname);
        setEmail(email)
        setPhoneNumber(profile.phone)
        setShippingAddress(profile.shipping)
    })
    }
    
    fetchData();
  }, [])


  const formSubmit = async () => {
    const response = await fetch(`http://localhost:3001/users/updateAccountDetails/${router.query.id}`, {
      method: "PATCH",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        firstname: firstName,
        lastname: lastName,
        phone: phoneNumber,
        shipping: shippingAddress
      })
    })



    return response.json();
  }

  return (

    <div>
      <Head>
        <title>Customer Profile Settings</title>
      </Head>

      <div className={styles.titleHead}>
        <div className={styles.icon}><TbUsers size={50} /></div>
        Customer Profile Settings
      </div>

      <div className={styles.container}>
        <div className={styles.title}>Edit Details</div>
        <div className={styles.divider}></div>

        <div className="flex lg:flex-row flex-col items-center py-6 px-4">


          <div className="w-full mx-28 my-20">


            <div className=" w-full mx-auto">

              <form onSubmit={formSubmit} className='grid grid-cols-1 md:grid-cols-2 gap-16'>
                <div className="mb-6">
                  <label htmlFor="firstName" className="text-sm font-medium text-gray-900 block mb-2">First Name</label>
                  <input type="text" id="firstName" onChange={(e) => setFirstName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Input first name" value={firstName}  required />
                </div>
                <div className="mb-6">
                  <label htmlFor="lastName" className="text-sm font-medium text-gray-900 block mb-2">Last Name</label>
                  <input type="text" id="lastName" onChange={(e) => setLastName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Input last name" value={lastName} required />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2">Email Address</label>
                  <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@gmail.com" value={email} required />
                </div>
                <div className="mb-6">
                  <label htmlFor="shippingAddress" className="text-sm font-medium text-gray-900 block mb-2">Shipping Address</label>
                  <input type="text" onChange={(e) => setShippingAddress(e.target.value)} id="shippingAddress" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="ex. Espana Blvd., Sampaloc, Manila, Philippines 1008." value={shippingAddress} required />
                </div>
                <div className="mb-6">
                  <label htmlFor="phoneNumber" className="text-sm font-medium text-gray-900 block mb-2">Phone Number</label>
                  <input type="tel" id="phoneNumber" onChange={(e) => setPhoneNumber(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="ex. 905-441-4300" value={phoneNumber} required />
                </div>
                <br></br>
                <button type="submit" className="relative left-80  text-black bg-[#FFBD59] hover:bg-[#FFBD59] focus:ring-yellow-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Update Customer Profile</button>
              </form>
            </div>

          </div>

        </div>
      </div>
    </div>

  )
}

(EditCustomerPage as PageWithLayout).layout = AdminPageLayout
export default EditCustomerPage