import styles from '@/styles/admin/content.module.scss'
import AdminPageLayout from '@/layout/adminpagelayout'
import PageWithLayout from '@/layout/pagewithlayout'
import React, { FC, useState } from 'react'
import Head from 'next/head'
import { TbEdit, TbTrash, TbUsers, TbFiles, TbCalendar, TbShoppingBag, TbClock, TbGraph, TbFileAnalytics, TbList, TbArchive, TbClipboard, TbMessage, TbSettings2, TbLogout2, TbArrowLeft, TbChevronLeft, TbChevronRight, TbDownload } from 'react-icons/tb'
import router from 'next/router'


const GenerateReport: FC = () => {

  const [ isOpen, setIsOpen ] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [ isOpen1, setIsOpen1 ] = useState(false);

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };


  const onSubmitGenerateRerport = async () => {
    const res = await fetch("http://localhost:3001/order/generateReport", {
      method: "POST",
      body: JSON.stringify({
        startDate: "",
        endDate: "",
        userID: ""
      })
    })
    return res.json();
  }

  return (
    <div>
      <Head>
        <title>Generate Report</title>
      </Head>

      <div className={styles.titleHead}>
        <div className={styles.icon}><TbFileAnalytics size={50} /></div>
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
                    <form onSubmit={onSubmitGenerateRerport} className="text-start  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
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
          

              <div className='pt-4'>
                <button type="submit" className="relative left-4 text-black bg-[#FFBD59] hover:bg-[#FFBD59] focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Generate Report</button>
              </div>


            </div>

          </div>

        </div>

      </div>
      <div className={styles.generateReportContainer}>
        <div className={styles.titlePreview}>Preview File Here
          <button className="py-2 flex font-large ml-80 absolute -top-2 left-60 text-black bg-[#FFBD59] hover:bg-[#FFBD59] focus:ring-yellow-200 rounded-lg text-sm px-5 text-center border-2 border-white"> <TbDownload className='mr-2' size={25} />Download</button>
        </div>
        <div className={styles.dividerPreview}>

        </div>
      </div>

    </div>

  )
}

(GenerateReport as PageWithLayout).layout = AdminPageLayout
export default GenerateReport