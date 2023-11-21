import AdminPageLayout from '@/layout/adminpagelayout'
import PageWithLayout from '@/layout/pagewithlayout'
import styles from '@/styles/admin/content.module.scss'
import Head from 'next/head'
import {TbListSearch, TbEdit, TbTrash, TbUsers, TbFiles, TbCalendar, TbShoppingBag, TbClock, TbGraph, TbFileAnalytics, TbList, TbArchive, TbClipboard, TbMessage, TbSettings2, TbLogout2, TbArrowLeft, TbChevronLeft, TbChevronRight, TbHexagonPlus   } from 'react-icons/tb'
import React, { FC, useEffect, useState } from 'react'
import router from 'next/router'

const ServicePage: FC = () => {


  const [ services, setServices ] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
       const response = await fetch("http://localhost:3001/services/getAllServices", {
          method: "GET",
      })


      const result = await response.json();
      setServices(result)
    }
  }, [])
  return (
    <div>
      <Head>
        <title>Services</title>
      </Head>

      <div className={styles.titleHead}>
      <div className={styles.icon}><TbListSearch size={50}/></div>
       Service Management
      </div>
      <div className={styles.container}>
        <div className={styles.title}>Services List
        <button className="py-2 flex font-large absolute top-5 right-5 text-black bg-[#FFBD59] hover:bg-[#FFBD59] focus:ring-yellow-200 rounded-lg text-sm px-5 text-center" onClick={() => router.push("/minerva/admin/services/addservices")}> <TbHexagonPlus className='mr-2' size={25}/>Add New Service</button>
        </div>
          <div className={styles.divider}></div>

          <ul className={styles.responsiveTable}>
    <li className={styles.tableHeader}>
      <div className={styles.col1}>SERVICE ID</div>
      <div className={styles.col2}>SERVICE NAME</div>
      <div className={styles.col3}>SERVICE STATUS</div>
      <div className={styles.col4}>Action</div>
    </li>
    <li className={styles.tableRow}>
      <div className={styles.col1} data-label="Service ID">#42235</div>
      <div className={styles.col2} data-label="Service Name">Preventive Maintenance</div>
      <div className={styles.col3} data-label="Email Address">Available</div>
      <div className={styles.col4} data-label="Action">
      <button onClick={() => router.push("/minerva/admin/services/editservices")}className={styles.col4} > <TbEdit size={25}/> </button>
      <button className={styles.col4} > <TbTrash size={25}/> </button>
      </div>
    </li>
    <li className={styles.tableRow}>
      <div className={styles.col1} data-label="Service ID">#42235</div>
      <div className={styles.col2} data-label="Service Name">Preventive Maintenance</div>
      <div className={styles.col3} data-label="Email Address">Available</div>
      <div className={styles.col4} data-label="Action">
      <button onClick={() => router.push("/minerva/admin/services/editservices")}className={styles.col4} > <TbEdit size={25}/> </button>
      <button className={styles.col4} > <TbTrash size={25}/> </button>
      </div>
    </li>
    <li className={styles.tableRow}>
      <div className={styles.col1} data-label="Service ID">#42235</div>
      <div className={styles.col2} data-label="Service Name">Preventive Maintenance</div>
      <div className={styles.col3} data-label="Email Address">Available</div>
      <div className={styles.col4} data-label="Action">
      <button onClick={() => router.push("/minerva/admin/services/editservices")}className={styles.col4} > <TbEdit size={25}/> </button>
      <button className={styles.col4} > <TbTrash size={25}/> </button>
      </div>
    </li>
    <li className={styles.tableRow}>
      <div className={styles.col1} data-label="Service ID">#42235</div>
      <div className={styles.col2} data-label="Service Name">Preventive Maintenance</div>
      <div className={styles.col3} data-label="Email Address">Available</div>
      <div className={styles.col4} data-label="Action">
      <button onClick={() => router.push("/minerva/admin/services/editservices")}className={styles.col4} > <TbEdit size={25}/> </button>
      <button className={styles.col4} > <TbTrash size={25}/> </button>
      </div>
    </li>
    <li className={styles.tableRow}>
      <div className={styles.col1} data-label="Service ID">#42235</div>
      <div className={styles.col2} data-label="Service Name">Preventive Maintenance</div>
      <div className={styles.col3} data-label="Email Address">Available</div>
      <div className={styles.col4} data-label="Action">
      <button onClick={() => router.push("/minerva/admin/services/editservices")}className={styles.col4} > <TbEdit size={25}/> </button>
      <button className={styles.col4} > <TbTrash size={25}/> </button>
      </div>
    </li>
    <li className={styles.tableRow}>
      <div className={styles.col1} data-label="Service ID">#42235</div>
      <div className={styles.col2} data-label="Service Name">Preventive Maintenance</div>
      <div className={styles.col3} data-label="Email Address">Available</div>
      <div className={styles.col4} data-label="Action">
      <button onClick={() => router.push("/minerva/admin/services/editservices")}className={styles.col4} > <TbEdit size={25}/> </button>
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
  )
}

(ServicePage as PageWithLayout).layout = AdminPageLayout
export default ServicePage