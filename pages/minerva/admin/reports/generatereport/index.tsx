import styles from '@/styles/admin/content.module.scss'
import AdminPageLayout from '@/layout/adminpagelayout'
import PageWithLayout from '@/layout/pagewithlayout'
import React, { FC, useState, useEffect, SyntheticEvent } from 'react'
import Head from 'next/head'
import { TbEdit, TbTrash, TbUsers, TbFiles, TbCalendar, TbShoppingBag, TbClock, TbGraph, TbFileAnalytics, TbList, TbArchive, TbClipboard, TbMessage, TbSettings2, TbLogout2, TbArrowLeft, TbChevronLeft, TbChevronRight, TbDownload } from 'react-icons/tb'
import router from 'next/router'
import Cookies from 'js-cookie'
import { jwtDecode} from 'jwt-decode'
import { format } from 'date-fns'
import PDFTemplate from '@/components/PDFTemplate'
import Products from '@/pages/products'
import { PDFDownloadLink, PDFViewer } from '@react-pdf-viewer';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';

const GenerateReport: FC = () => {

  const [showPDF, setShowPDF] = useState(false);

  const handleButtonClick = () => {
    // Toggle the state to show or hide the PDF template
    setShowPDF(!showPDF);
  };
  const [ isOpen, setIsOpen ] = useState(false);
  const [ userId, setUserId ] = useState("")
  const [ generated, setGenerated ] = useState<[]>()
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const cookies = Cookies.get("ecom_token")
    if(cookies) {
      const { userID }: any = jwtDecode(cookies) as any
      setUserId(userID)
    }
  }, [ userId ])

  const [ isOpen1, setIsOpen1 ] = useState(false);
  const [ dates, setDates ] = useState({
    startDate: "",
    endDate: ""
  })
  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };

  // const pdfUrl = 'your-pdf-url-here';

  // const handleDownload = async () => {
  //   const pdfBlob = await fetch(pdfUrl).then((res) => res.blob());
  //   saveAs(pdfBlob, 'Generated-Report.pdf');
  // };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:3001/order/getGeneratedReport/?start=${dates.startDate}&endDate=${dates.endDate}`, {
        method: "GET",
        cache: "default",
        headers: { 'Content-Type': 'application/json' },
      })

      if(!res.ok) throw new Error("There's something wrong while fetching")


      const result = await res.json();

      setGenerated(result)
    }

    fetchData()
  }, [ generated ])



  const onSubmitGenerateRerport = async (e: SyntheticEvent) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3001/order/generateReport", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        startDate: new Date(dates.startDate),
        endDate: new Date(dates.endDate),
        userID: userId,
        Products: Products.name
      })
    })

    
    if(!res.ok) throw new Error("There is something wrong while fetching your data")


    const result = await res.json();

    return result
  }

  console.log(Products)
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

          <form onSubmit={onSubmitGenerateRerport}>
          <div className="mb-6">
                <div className="font-medium pl-3 pb-6 py-3">
                  Select Start Date <br></br>
                  <div>
                    
                      <input
                          id="date"
                          type="date"
                          name="date"
                          min="2023-12-8"
                          max="2030-01-31"
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          onChange={(e) => setDates({...dates, startDate: e.target.value})}
                        />
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <div className="font-medium pl-3 pb-6 py-3">
                  Select End Date <br></br>
                  <div>
                    
                      <label htmlFor="date"></label>
                       <input
                            id="date"
                            type="date"
                            name="date"
                            min="232-2-88"
                            max="30-01-31"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            onChange={(e) => setDates({...dates, endDate: e.target.value})}
                        />
                  </div>
                </div>
              </div>
          

              <div className='pt-4'>
                <button onClick={handleButtonClick}
        type="submit" className="relative left-4 text-black bg-[#FFBD59] hover:bg-[#FFBD59] focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Generate Report</button>
              </div>
</form>

            </div>

          </div>

        </div>

      </div>
      <div className={styles.generateReportContainer}>
        <div className={styles.titlePreview}>Preview File Here
          <button  className="py-2 flex font-large ml-80 absolute -top-2 left-60 text-black bg-[#FFBD59] hover:bg-[#FFBD59] focus:ring-yellow-200 rounded-lg text-sm px-5 text-center border-2 border-white"> <TbDownload className='mr-2' size={25} />Download</button>
        </div>
        <div className={styles.dividerPreview}>
         
        
        </div>
          <PDFTemplate id="pdf-template" generated={generated}/>
      </div>

    </div>

  )
}

(GenerateReport as PageWithLayout).layout = AdminPageLayout
export default GenerateReport