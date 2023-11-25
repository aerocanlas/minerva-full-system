import styles from '@/styles/admin/content.module.scss'
import AdminPageLayout from '@/layout/adminpagelayout'
import PageWithLayout from '@/layout/pagewithlayout'
import React, { FC, useState, useEffect } from 'react'
import Head from 'next/head'
import {TbEdit, TbTrash, TbUsers, TbFiles, TbCalendar, TbShoppingBag, TbClock, TbGraph, TbFileAnalytics, TbList, TbArchive, TbClipboard, TbMessage, TbSettings2, TbLogout2, TbArrowLeft, TbChevronLeft, TbChevronRight   } from 'react-icons/tb'
import router from 'next/router'


const AuditLog: FC = () => {


  const [ logs, setLogs ] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3001/logs/", {
        method: "GET",
        headers: { 'Content-Type': 'application/json' },
      })

      const result= await res.json();
      setLogs(result)
    }
  } , [])
  
  return (
    
    <div>
      <Head>
        <title>Audit Logs</title>
      </Head>
      
      <div className={styles.titleHead}>
      <div className={styles.icon}><TbUsers size={50}/></div>
       Audit Logs
      </div>
      <div className={styles.container}>
        <div className={styles.title}>View Audit Logs</div>
          <div className={styles.divider}></div>

          <ul className={styles.responsiveTable}>
    <li className={styles.tableHeader}>
      <div className={styles.col1}>Log ID</div>
      <div className={styles.col2}>Name</div>
      <div className={styles.col3}>Date Created</div>
      <div className={styles.col3}>Time</div>
      <div className={styles.col4}>Action</div>
    </li>
    <li className={styles.tableRow}>
      <div className={styles.col1} data-label="Job Id">#42235</div>
      <div className={styles.col2} data-label="Customer Name">John Doe</div>
      <div className={styles.col3} data-label="Date Created">21 Oct 2023</div>
      <div className={styles.col3} data-label="Time">21:00</div>
      <div className={styles.col4} data-label="Action"><span className={styles.badgeSuccess}>Edited User Profile</span>
      </div>
    </li>
    <li className={styles.tableRow}>
      <div className={styles.col1} data-label="Job Id">#42235</div>
      <div className={styles.col2} data-label="Customer Name">John Doe</div>
      <div className={styles.col3} data-label="Date Created">21 Oct 2023</div>
      <div className={styles.col3} data-label="Time">18:00</div>
      <div className={styles.col4} data-label="Action"><span className={styles.badgePending}>Update Appointment</span>
      </div>
    </li>
    <li className={styles.tableRow}>
      <div className={styles.col1} data-label="Job Id">#42235</div>
      <div className={styles.col2} data-label="Customer Name">John Doe</div>
      <div className={styles.col3} data-label="Date Created">21 Oct 2023</div>
      <div className={styles.col3} data-label="Time">00:00</div>
      <div className={styles.col4} data-label="Action"><span className={styles.badgeCancel}>Update Password</span>
      </div>
    </li>
    <li className={styles.tableRow}>
      <div className={styles.col1} data-label="Job Id">#42235</div>
      <div className={styles.col2} data-label="Customer Name">John Doe</div>
      <div className={styles.col3} data-label="Date Created">21 Oct 2023</div>
      <div className={styles.col3} data-label="Time">07:00</div>
      <div className={styles.col4} data-label="Action"><span className={styles.badgeSuccess}>Edited User Profile</span>
      </div>
    </li>
    <li className={styles.tableRow}>
      <div className={styles.col1} data-label="Job Id">#42235</div>
      <div className={styles.col2} data-label="Customer Name">John Doe</div>
      <div className={styles.col3} data-label="Date Created">21 Oct 2023</div>
      <div className={styles.col3} data-label="Time">15:00</div>
      <div className={styles.col4} data-label="Action"><span className={styles.badgeSuccess}>Edited User Profile</span>
      </div>
    </li>
    <li className={styles.tableRow}>
      <div className={styles.col1} data-label="Job Id">#42235</div>
      <div className={styles.col2} data-label="Customer Name">John Doe</div>
      <div className={styles.col3} data-label="Date Created">21 Oct 2023</div>
      <div className={styles.col3} data-label="Time">23:00</div>
      <div className={styles.col4} data-label="Action"><span className={styles.badgeSuccess}>Edited User Profile</span>
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

(AuditLog as PageWithLayout).layout = AdminPageLayout
export default AuditLog