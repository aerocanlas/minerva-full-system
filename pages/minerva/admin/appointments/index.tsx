import styles from '@/styles/admin/content.module.scss'
import AdminPageLayout from '@/layout/adminpagelayout'
import PageWithLayout from '@/layout/pagewithlayout'
import React, { FC, useState, useEffect } from 'react'
import Head from 'next/head'
import { TbEdit, TbTrash, TbUsers, TbFiles, TbCalendar, TbShoppingBag, TbClock, TbGraph, TbFileAnalytics, TbList, TbArchive, TbClipboard, TbMessage, TbSettings2, TbLogout2, TbArrowLeft, TbChevronLeft, TbChevronRight, TbHexagonPlus } from 'react-icons/tb'
import router from 'next/router'
import Modal from '@/components/Modal'
import {FormattedDate} from '@/helpers/index'


const Appointments: FC = () => {
  const [ page, setPage] = useState(0)
  const [ isModalOpen, setIsModalOpen ] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const [ appointment, setAppointment ] = useState<[]>()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/schedule/", {
        method: "GET",
        headers: { 'Content-Type': 'application/json' },
        cache: "force-cache",
      })
      const result = await response.json()
      setAppointment(result)
    }

    fetchData()
  }, [])

  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className=" bg-gray-800 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 sm:p-7 " >
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Confirm Delete</h1>
            </div>

            <div className="mt-5 flex flex-col justify-center items-center">
            <form>
                <div className="grid gap-y-4">
                <p className="text-center divide-x divide-gray-300 dark:divide-gray-700 text-white">
                Are you sure you want to delete this appointment?
                </p>
                <div className='flex gap-2'>
                  <button type="submit" className="py-3 px-4 flex w-40 justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#FFBD59] text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" onClick={() => router.push("/auth/changePassReqSuccess")}>Yes</button>
                  <button type="submit" className="py-3 px-4 w-40 flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#FFBD59] text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" onClick={handleCloseModal}>No</button>
                </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal>

      <Head>
        <title>Appointments</title>
      </Head>

      <div className={styles.titleHead}>
        <div className={styles.icon}><TbClock size={50} /></div>
        Appointments
      </div>
      <div className={styles.container}>
        <div className={styles.title}>Appointments List
          <button className="py-2 flex font-large absolute top-5 right-5 text-black bg-[#FFBD59] hover:bg-[#FFBD59] focus:ring-yellow-200 rounded-lg text-sm px-5 text-center" onClick={() => router.push("/minerva/admin/appointments/addappointments")}> <TbHexagonPlus className='mr-2' size={25} />Add New Appoinment</button>
        </div>
        <div className={styles.divider}></div>

        <ul className={styles.responsiveTable}>
          <li className={styles.tableHeader}>
            <div className={styles.col1}>Appointment ID</div>
            <div className={styles.col2}>Customer Name</div>
            <div className={styles.col3}>Service Name</div>
            <div className={styles.col4}>Appointment Date</div>
            <div className={styles.col5}>Status</div>
            <div className={styles.col6}>Action</div>
          </li>

          {appointment?.map(({ userID, scheduleID, service, date,  time, id, status, }: any) => (

          <li className={styles.tableRow}>
            <div className={styles.col1} data-label="Service Id">{id}</div>
            <div className={styles.col2} data-label="Customer Name">John Doe</div>
            {service.map((name : any) => (
                   <div className={styles.col3} data-label="Service Name">{name}</div>
            ))}
            <div className={styles.col4} data-label="Appointment Date">{FormattedDate(date)} {time}</div>
            <div className={styles.col6} data-label="Order Status"><span className={styles.badgeSuccess}>{status}</span></div>
            <div className={styles.col5} data-label="Action">
              <button onClick={() => router.push(`/minerva/admin/appointments/editappointments/${scheduleID}`)} className={styles.col4} > <TbEdit size={25} /> </button>
              <button onClick={handleOpenModal} className={styles.col4} > <TbTrash size={25} /> </button>
            </div>
          </li>
        ))}   
        </ul>


        <div className={styles.pagination}>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => setPage(()=> page - 1)}>Prev</button>
                 <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => setPage(() => page + 1)}>Next</button>
        </div>
      </div>

    </div>
  )
}

(Appointments as PageWithLayout).layout = AdminPageLayout
export default Appointments