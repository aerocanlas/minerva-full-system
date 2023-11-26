import styles from '@/styles/admin/content.module.scss'
import AdminPageLayout from '@/layout/adminpagelayout'
import PageWithLayout from '@/layout/pagewithlayout'
import React, { FC, useEffect, useState } from 'react'
import Head from 'next/head'
import { TbEdit, TbFile, TbFiles, TbShoppingBag, TbTrash, TbUsers } from 'react-icons/tb'
import router from 'next/router'
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'
interface InputProp {
  labelTitle: string;
  defaultValue: string;
  updateFormValue: (value: string) => void;
}

const EditOrdersPage: FC<InputProp> = ({ labelTitle, defaultValue, updateFormValue }) => {


  const [ isOpen, setIsOpen ] = useState(false);
  const [ userId, setUserId ] = useState("")

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [ isOpen1, setIsOpen1 ] = useState(false);

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };

  const [ status, setStatus ] = useState("")


  useEffect(() => {
    const cookies = Cookies.get("ecom_token")
    if (cookies) {
      const { userID }: any = jwtDecode(cookies)
      setUserId(userID)
    }
  }, [])

  const orderEditForm = async () => {
    const response = await fetch("http://localhost:3001/order/updateOderStatus/:id", {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        status,
        userID: userId//get userId current login
      })
    })


    return response.json();
  }




  return (

    <div>
      <Head>
        <title>Edit Order</title>
      </Head>

      <div className={styles.titleHead}>
        <div className={styles.icon}><TbShoppingBag size={50} /></div>
        Orders
      </div>

      <div className={styles.container}>
        <div className={styles.title}>Edit Details</div>
        <div className={styles.divider}></div>

        <div className="flex lg:flex-row flex-col items-center py-6 px-4">


          <div className="w-full mx-28 my-20">


            <div className=" w-full mx-auto">

              <form onSubmit={orderEditForm} className='grid grid-cols-1 md:grid-cols-2 gap-16'>
                <div className="mb-6">
                  <label htmlFor="Order ID" className="text-sm font-medium text-gray-900 block mb-2">Order ID</label>
                  <input type="text" id="Order ID" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value='#42442' disabled />
                </div>
                <div className="mb-6">
                  <label htmlFor="customerName" className="text-sm font-medium text-gray-900 block mb-2">Customer Name</label>
                  <input type="text" id="customerName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value='John Doe' disabled />
                </div>

                <div className="mb-6">
                  <label htmlFor="date" className="text-sm font-medium text-gray-900 block mb-2">Date Ordered</label>
                  <input type="text" id="date" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value='21 Oct 2023' disabled />
                </div>

                <div className="mb-6">
                  <label htmlFor="payment" className="text-sm font-medium text-gray-900 block mb-2">Payment Method</label>
                  <input type="text" id="payment" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value='GCash' disabled />
                </div>

                <div className="mb-6">
                  <label htmlFor="amount" className="text-sm font-medium text-gray-900 block mb-2">Amount</label>
                  <input type="text" id="amount" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value='PHP 23,989.00' disabled />
                </div>

                <div className="mb-6">
                  <div className="relative inline-block text-left">
                    <div>
                      <label htmlFor="status" className="text-sm font-medium text-gray-900 block mb-2">Order Status</label>
                      <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                        onClick={toggleDropdown}
                      >
                        Select Order status

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

                <button type="submit" className="relative top-20 left-80 text-black bg-[#FFBD59] hover:bg-[#FFBD59] focus:ring-yellow-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Update Order Details</button>
              </form>
            </div>

          </div>

        </div>
      </div>
    </div>

  )
}



(EditOrdersPage as PageWithLayout).layout = AdminPageLayout
export default EditOrdersPage