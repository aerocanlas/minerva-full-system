import HomePageLayout from '@/layout/homepagelayout'
import PageWithLayout from '@/layout/pagewithlayout'
import React, { FC , useEffect , useState } from 'react'
import styles from '@/styles/customer/viewappointment.module.scss'
import router from 'next/router'
import {TbEdit, TbTrash, TbUsers, TbFiles, TbCalendar, TbShoppingBag, TbClock, TbGraph, TbFileAnalytics, TbList, TbArchive, TbClipboard, TbMessage, TbSettings2, TbLogout2, TbArrowLeft, TbChevronLeft, TbChevronRight, TbHexagonPlus   } from 'react-icons/tb'
import Head from 'next/head'




const ViewAppointments: FC = () => {

    const [ appointment, setAppointment ] = useState(null)


    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch("http://localhost:3001/schedule/", {
          method: "GET",
          headers: { 'Content-Type': 'application/json' },
        })
        const result =await response.json()
        setAppointment(result)
      }
    }, [])
  return (
    
  <div className={styles.bodyProducts}>
    <section className='absolute top-20 left-48' id="viewappointments">
    </section>            
    <div>
    <Head>
      <title>Appointments</title>
    </Head>
    
    <div className={styles.titleHead}>
    <div className={styles.icon}><TbClock size={50}/></div>
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
    <div className={styles.col6}>Action</div>
  </li>
  <li className={styles.tableRow}>
    <div className={styles.col1} data-label="Job Id">#42235</div>
    <div className={styles.col3} data-label="Service Name">Preventive Maintenance</div>
    <div className={styles.col4} data-label="Appointment Date">27 Sep 2023</div>
    <div className={styles.col6} data-label="Order Status"><span className={styles.badgeSuccess}>Completed</span></div>
    <div className={styles.col5} data-label="Action">
    <button onClick={() => router.push("/minerva/admin/appointments/editappointments")}className={styles.col4} > <TbEdit size={25}/> </button>
    <button className={styles.col4} > <TbTrash size={25}/> </button>
    </div>
  </li>
  <li className={styles.tableRow}>
    <div className={styles.col1} data-label="Job Id">#42235</div>
    <div className={styles.col3} data-label="Service Name">Preventive Maintenance</div>
    <div className={styles.col4} data-label="Appointment Date">27 Sep 2023</div>
    <div className={styles.col6} data-label="Order Status"><span className={styles.badgePending}>Pending</span></div>
    <div className={styles.col5} data-label="Action">
    <button onClick={() => router.push("/minerva/admin/appointments/editappointments")}className={styles.col4} > <TbEdit size={25}/> </button>
    <button className={styles.col4} > <TbTrash size={25}/> </button>
    </div>
  </li>
  <li className={styles.tableRow}>
    <div className={styles.col1} data-label="Job Id">#42235</div>
    <div className={styles.col3} data-label="Service Name">Preventive Maintenance</div>
    <div className={styles.col4} data-label="Appointment Date">27 Sep 2023</div>
    <div className={styles.col6} data-label="Order Status"><span className={styles.badgeCancel}>Cancelled</span></div>
    <div className={styles.col5} data-label="Action">
    <button onClick={() => router.push("/minerva/admin/appointments/editappointments")}className={styles.col4} > <TbEdit size={25}/> </button>
    <button className={styles.col4} > <TbTrash size={25}/> </button>
    </div>
  </li>
  <li className={styles.tableRow}>
    <div className={styles.col1} data-label="Job Id">#42235</div>
    <div className={styles.col3} data-label="Service Name">Preventive Maintenance</div>
    <div className={styles.col4} data-label="Appointment Date">27 Sep 2023</div>
    <div className={styles.col6} data-label="Order Status"><span className={styles.badgeSuccess}>Completed</span></div>
    <div className={styles.col5} data-label="Action">
    <button onClick={() => router.push("/minerva/admin/appointments/editappointments")}className={styles.col4} > <TbEdit size={25}/> </button>
    <button className={styles.col4} > <TbTrash size={25}/> </button>
    </div>
  </li>
  <li className={styles.tableRow}>
    <div className={styles.col1} data-label="Job Id">#42235</div>
    <div className={styles.col3} data-label="Service Name">Preventive Maintenance</div>
    <div className={styles.col4} data-label="Appointment Date">27 Sep 2023</div>
    <div className={styles.col6} data-label="Order Status"><span className={styles.badgeSuccess}>Completed</span></div>
    <div className={styles.col5} data-label="Action">
    <button onClick={() => router.push("/minerva/admin/appointments/editappointments")}className={styles.col4} > <TbEdit size={25}/> </button>
    <button className={styles.col4} > <TbTrash size={25}/> </button>
    </div>
  </li>
  <li className={styles.tableRow}>
    <div className={styles.col1} data-label="Job Id">#42235</div>
    <div className={styles.col3} data-label="Service Name">Preventive Maintenance</div>
    <div className={styles.col4} data-label="Appointment Date">27 Sep 2023</div>
    <div className={styles.col6} data-label="Order Status"><span className={styles.badgeSuccess}>Completed</span></div>
    <div className={styles.col5} data-label="Action">
    <button onClick={() => router.push("/minerva/admin/appointments/editappointments")}className={styles.col4} > <TbEdit size={25}/> </button>
    <button className={styles.col4} > <TbTrash size={25}/> </button>
    </div>
  </li>
</ul>


<div className={styles.pagination}>
    <ul>

      <li>
        <a href="#" >&laquo;</a>
      </li>

      <li>
        <a href="#" >1</a>
      </li>
      <li>
        <a href="#" >2</a>
      </li>
      <li>
        <a href="#" className={styles.active}>3</a>
      </li>
      <li>
        <a href="#" >4</a>
      </li>
      <li>
        <a href="#" >5</a>
      </li>
      <li>
        <a href="#" >&raquo;</a>
      </li>

    </ul>
  </div>
</div>

    </div>

    </div>
  )
}

(ViewAppointments as PageWithLayout).layout = HomePageLayout
export default ViewAppointments