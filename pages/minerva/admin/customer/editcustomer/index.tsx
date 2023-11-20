import styles from '@/styles/admin/content.module.scss'
import AdminPageLayout from '@/layout/adminpagelayout'
import PageWithLayout from '@/layout/pagewithlayout'
import React, { FC, FormEvent, useState } from 'react'
import Head from 'next/head'
import {TbEdit, TbTrash, TbUsers } from 'react-icons/tb'
import router from 'next/router'


interface InputProp {
  labelTitle: string;
  defaultValue: string;
  updateFormValue: (value: string) => void;
}


const EditCustomerPage: FC<InputProp> = ({labelTitle, defaultValue, updateFormValue }) => {

  const [firstName, setFirstName] = useState('Prince Aero');
  const [middleName, setMiddleName] = useState('Tagara');
  const [lastName, setLastName] = useState('Canlas');
  const [email, setEmail] = useState('aerocanlas@gmail.com');
  const [phoneNumber, setPhoneNumber] = useState('0905-441-4300');
  const [shippingAddress, setShippingAddress] = useState('Espana Blvd., Sampaloc, Manila, Philippines 1008.');

  const handleFirstNameChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setFirstName(event.target.value);
  };
  const handleMiddleNameChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setMiddleName(event.target.value);
  };
  const handleLastNameChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setLastName(event.target.value);
  };
  const handleEmailChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setEmail(event.target.value);
  };
  const handlePhoneNumberChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setPhoneNumber(event.target.value);
  };
  const handleShippingAddressChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setShippingAddress(event.target.value);
  };
  
  


  return (
    
    <div>
      <Head>
        <title>Customer Profile Settings</title>
      </Head>

      <div className={styles.titleHead}>
      <div className={styles.icon}><TbUsers size={50}/></div>
       Customer Profile Settings
      </div>

      <div className={styles.container}>
        <div className={styles.title}>Edit Details</div>
          <div className={styles.divider}></div>

          <div className="flex lg:flex-row flex-col items-center py-6 px-4">


<div className="w-full mx-28 my-20">


<div className=" w-full mx-auto">
    
    <form className='grid grid-cols-1 md:grid-cols-2 gap-16'>
        <div className="mb-6">
            <label htmlFor="firstName" className="text-sm font-medium text-gray-900 block mb-2">First Name</label>
            <input type="text" id="firstName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Input first name" value={firstName} onChange={handleFirstNameChange} required />
            </div>
        <div className="mb-6">
            <label htmlFor="lastName" className="text-sm font-medium text-gray-900 block mb-2">Last Name</label>
            <input type="text" id="lastName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Input last name" value={lastName} onChange={handleLastNameChange} required />
            </div>
        <div className="mb-6">
            <label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2">Email Address</label>
            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@gmail.com" value={email} onChange={handleEmailChange}required />
            </div>
        <div className="mb-6">
            <label htmlFor="shippingAddress" className="text-sm font-medium text-gray-900 block mb-2">Shipping Address</label>
            <input type="text" id="shippingAddress" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="ex. Espana Blvd., Sampaloc, Manila, Philippines 1008." value={shippingAddress} onChange={handleShippingAddressChange} required />
            </div>
        <div className="mb-6">
            <label htmlFor="phoneNumber" className="text-sm font-medium text-gray-900 block mb-2">Phone Number</label>
            <input type="tel" id="phoneNumber" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="ex. 905-441-4300" value={phoneNumber} onChange={handlePhoneNumberChange} required />
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