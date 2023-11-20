import styles from '@/styles/admin/content.module.scss'
import AdminPageLayout from '@/layout/adminpagelayout'
import PageWithLayout from '@/layout/pagewithlayout'
import React, { FC, useState } from 'react'
import Head from 'next/head'
import {TbEdit, TbTrash, TbUsers, TbFiles, TbCalendar, TbShoppingBag, TbClock, TbGraph, TbFileAnalytics, TbList, TbArchive, TbClipboard, TbMessage, TbSettings2, TbLogout2, TbArrowLeft, TbChevronLeft, TbChevronRight, TbDownload   } from 'react-icons/tb'
import router from 'next/router'


const GenerateReport: FC = () => {

    const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [isOpen1, setIsOpen1] = useState(false);

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };

  return (
    <div>
      <Head>
        <title>Generate Report</title>
      </Head>
      
      <div className={styles.titleHead}>
      <div className={styles.icon}><TbFileAnalytics size={50}/></div>
      Generate Report
      </div>

      <div className={styles.container}>
        <div className={styles.title}>Generate Report</div>
          <div className={styles.divider}></div>

          <div className="flex lg:flex-row flex-col items-center py-6 px-4">


<div className="w-50 mx-28 my-32">


<div className=" w-50 mx-auto">
    
    
    <div className="mb-6">
          <div className="font-medium pl-3 pb-6 py-3">
                            Select Start Date <br></br>    
                <div>
                <form className="text-start  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <label htmlFor="date"></label>
                    <input
                        id="date"
                        type="date"
                        name="partydate"
                        min="2024-06-01"
                        max="2028-06-30" />
                    </form>
                </div>
              </div>
            </div>
            <div className="mb-6">
          <div className="font-medium pl-3 pb-6 py-3">
                            Select End Date <br></br>    
                <div>
                <form className="text-start  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <label htmlFor="date"></label>
                    <input
                        id="date"
                        type="date"
                        name="partydate"
                        min="2024-06-01"
                        max="2028-06-30" />
                    </form>
                </div>
              </div>
            </div>
        <div className="mb-6">
        <div className="relative left-4 inline-block text-left">
  <div>
  <label htmlFor="lastName" className="text-sm font-medium text-gray-900 block mb-2">Product Category</label>
    <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
    onClick={toggleDropdown}
    >
      Report Type
      
      <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 11.586l3.293-3.293a1 1 0 011.414 0 1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
  {isOpen && (
  <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
    <div className="py-1">
      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sales Report</a>
    </div>
  </div>
  )}
</div>
</div>


        
      <br></br>
      <div className='pt-4'>
        <button type="submit" className="relative left-4 text-black bg-[#FFBD59] hover:bg-[#FFBD59] focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Generate Report</button>
        </div>
        
        
</div>

</div>

          </div>
          
      </div>
      <div className={styles.generateReportContainer}>
      <div className={styles.titlePreview}>Preview File Here
      <button className="py-2 flex font-large ml-80 absolute -top-2 left-60 text-black bg-[#FFBD59] hover:bg-[#FFBD59] focus:ring-yellow-200 rounded-lg text-sm px-5 text-center border-2 border-white"> <TbDownload className='mr-2' size={25}/>Download</button>
        </div>
      <div className={styles.dividerPreview}>
      
        </div>
      </div>
      
      </div>
    
  )
}

(GenerateReport as PageWithLayout).layout = AdminPageLayout
export default GenerateReport