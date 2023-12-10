import HomePageLayout from '@/layout/homepagelayout'
import PageWithLayout from '@/layout/pagewithlayout'
import React, { FC, useEffect, useState } from 'react'
import styles from '@/styles/customer/viewappointment.module.scss'
import router from 'next/router'
import { TbEdit, TbTrash, TbUsers, TbFiles, TbCalendar, TbShoppingBag, TbClock, TbGraph, TbFileAnalytics, TbList, TbArchive, TbClipboard, TbMessage, TbSettings2, TbLogout2, TbArrowLeft, TbChevronLeft, TbChevronRight, TbHexagonPlus } from 'react-icons/tb'
import Head from 'next/head'
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'
import { FormattedDate } from '@/helpers'


const ViewAppointments: FC = () => {

  const [ page, setPage] = useState(0)

  const [ appointment, setAppointment ] = useState(null)

  const [ userId, setUserId ] = useState("")

  useEffect(() => {
    const cookies = Cookies.get("ecom_token");
    if (cookies) {
      const { userID }: any = jwtDecode(cookies)
      setUserId(userID)
    }
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3001/schedule/getAllMyAppointments/${userId}/?skip=${page}`, {
        method: "GET",
        headers: { 'Content-Type': 'application/json' },
        cache: "default"
      })
      const result = await response.json()
      setAppointment(result)
    }

    fetchData();
  }, [ userId, appointment ])

  return (

    <div className={styles.bodyProducts}>
      <section className='absolute top-20 left-48' id="viewappointments">
      </section>
      <div>
        <Head>
          <title>Appointments</title>
        </Head>

        <div className={styles.titleHead}>
          <div className={styles.icon}><TbClock size={50} /></div>
          Appointments
        </div>

        <div className={styles.container}>
          <div className={styles.divider}></div>

          <ul className={styles.responsiveTable}>
            <li className={styles.tableHeader}>
              <div className={styles.col1}>Service ID</div>
              <div className={styles.col3}>Service Name</div>
              <div className={styles.col4}>Appointment Date</div>
              <div className={styles.col5}>Status</div>
            </li>

            {appointment?.map(({ userID, id, date, time, name, status, User, service}: any) => (
   
            <li className={styles.tableRow}>
              <div className={styles.col1} data-label="Job Id">{id}</div>
              <div className={styles.col3} data-label="Service Name">{service}</div>
              <div className={styles.col4} data-label="Appointment Date">{FormattedDate(date)} {time}</div>
              <div className={styles.col6} data-label="Order Status"><span>{status}</span></div>
            </li>
            ))}
          </ul>


          <div className={styles.pagination}>
        <button disabled={page === 0 } className=' bg-[#FFBD59] hover:bg-blue-700 text-white font-bold mx-4 py-2 px-4 rounded' onClick={() => setPage(()=> page - 1)}>Prev</button>
                 <button className='bg-[#FFBD59] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => setPage(() => page + 1)}>Next</button>
        </div>          
        
        </div>
      </div>

    </div>
  )
}

(ViewAppointments as PageWithLayout).layout = HomePageLayout
export default ViewAppointments