import styles from '@/styles/admin/content.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminPageLayout from '@/layout/adminpagelayout'
import PageWithLayout from '@/layout/pagewithlayout'
import React, { FC, useState, useEffect} from 'react'
import Head from 'next/head'
import {TbEdit, TbTrash, TbUsers, TbFiles, TbCalendar, TbShoppingBag, TbClock, TbGraph, TbFileAnalytics, TbList, TbArchive, TbClipboard, TbMessage, TbSettings2, TbLogout2, TbArrowLeft, TbChevronLeft, TbChevronRight   } from 'react-icons/tb'
import router from 'next/router'


const CustomerPage: FC = () => {

  const [ users, setUsers ] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/user/getUserCustomer", {
        method: "GET",
        headers: { 'Content-Type': 'application/json' },
      })


      if(!response.ok) {
        throw new Error("There something wrong while fetching data")
      }

      const result = await response.json();

      setUsers(result)

    }
  }, [])

  return (
    
    <div>
      <Head>
        <title>Customer Profile</title>
      </Head>
      
      <div className={styles.titleHead}>
      <div className={styles.icon}><TbUsers size={50}/></div>
       Customer Profile
      </div>
      <div className={styles.container}>
        <div className={styles.title}>Existing Users</div>
          <div className={styles.divider}></div>

          <ul className={styles.responsiveTable}>
    <li className={styles.tableHeader}>
      <div className={styles.col1}>USER ID</div>
      <div className={styles.col2}>Customer Name</div>
      <div className={styles.col3}>Email Address</div>
      <div className={styles.col4}>Action</div>
    </li>
    <li className={styles.tableRow}>
      <div className={styles.col1} data-label="Job Id">#42235</div>
      <div className={styles.col2} data-label="Customer Name">John Doe</div>
      <div className={styles.col3} data-label="Email Address">juandelacruz@gmail.com</div>
      <div className={styles.col4} data-label="Action">
      <button onClick={() => router.push("/minerva/admin/customer/editcustomer")}className={styles.col4} > <TbEdit size={25}/> </button>
      <button className={styles.col4} > <TbTrash size={25}/> </button>
      </div>
    </li>
    <li className={styles.tableRow}>
      <div className={styles.col1}  data-label="Job Id">#42442</div>
      <div className={styles.col2}  data-label="Customer Name">Jennifer Smith</div>
      <div className={styles.col3}  data-label="Email Address">juandelacruz@gmail.com</div>
      <div className={styles.col4}  data-label="Action">
      <button onClick={() => router.push("/minerva/admin/customer/editcustomer")}className={styles.col4} > <TbEdit size={25}/> </button>
      <button className={styles.col4} > <TbTrash size={25}/> </button>
      </div>
    </li>
    <li className={styles.tableRow}>
      <div className={styles.col1}  data-label="Job Id">#42257</div>
      <div className={styles.col2}  data-label="Customer Name">John Smith</div>
      <div className={styles.col3}  data-label="Email Address">juandelacruz@gmail.com</div>
      <div className={styles.col4}  data-label="Action">
      <button onClick={() => router.push("/minerva/admin/customer/editcustomer")}className={styles.col4} > <TbEdit size={25}/> </button>
      <button className={styles.col4} > <TbTrash size={25}/> </button>
      </div>
    </li>
    <li className={styles.tableRow}>
      <div className={styles.col1} data-label="Job Id">#42311</div>
      <div className={styles.col2}  data-label="Customer Name">John Carpenter</div>
      <div className={styles.col3}  data-label="Email Address">juandelacruz@gmail.com</div>
      <div className={styles.col4}  data-label="Action">
      <button onClick={() => router.push("/minerva/admin/customer/editcustomer")}className={styles.col4} > <TbEdit size={25}/> </button>
      <button className={styles.col4} > <TbTrash size={25}/> </button>
      </div>
    </li>
    <li className={styles.tableRow}>
      <div className={styles.col1}  data-label="Job Id">#42311</div>
      <div className={styles.col2}  data-label="Customer Name">John Carpenter</div>
      <div className={styles.col3}  data-label="Email Address">juandelacruz@gmail.com</div>
      <div className={styles.col4}  data-label="Action">
      <button onClick={() => router.push("/minerva/admin/customer/editcustomer")}className={styles.col4} > <TbEdit size={25}/> </button>
      <button className={styles.col4} > <TbTrash size={25}/> </button>
      </div>
    </li>
    <li className={styles.tableRow}>
      <div className={styles.col1}  data-label="Job Id">#42311</div>
      <div className={styles.col2}  data-label="Customer Name">John Carpenter</div>
      <div className={styles.col3}  data-label="Email Address">juandelacruz@gmail.com</div>
      <div className={styles.col4}  data-label="Action">
      <button onClick={() => router.push("/minerva/admin/customer/editcustomer")}className={styles.col4} > <TbEdit size={25}/> </button>
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

(CustomerPage as PageWithLayout).layout = AdminPageLayout
export default CustomerPage