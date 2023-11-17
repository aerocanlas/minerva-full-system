import styles from '@/styles/admin/content.module.scss'
import AdminPageLayout from '@/layout/adminpagelayout'
import PageWithLayout from '@/layout/pagewithlayout'
import React, { FC } from 'react'
import Head from 'next/head'
import {TbEdit, TbTrash, TbUsers  } from 'react-icons/tb'
import router from 'next/router'


const CustomerPage: FC = () => {
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
      <div className="col col-1">USER ID</div>
      <div className="col col-2">Customer Name</div>
      <div className="col col-3">Email Address</div>
      <div className="col col-4">Action</div>
    </li>
    <li className={styles.tableRow}>
      <div className="col col-1" data-label="Job Id">#42235</div>
      <div className="relative left-12 col col-2" data-label="Customer Name">John Doe</div>
      <div className="relative left-16 col col-3" data-label="Email Address">juandelacruz@gmail.com</div>
      <div className="col col-4" data-label="Action">
      <button onClick={() => router.push("/minerva/admin/customer/editcustomer")}className="relative left-8 border-4 mx-2"> <TbEdit size={25}/> </button>
      <button className="relative left-6 border-4 mx-2"> <TbTrash size={25}/> </button>
      </div>
    </li>
    <li className={styles.tableRow}>
      <div className="col col-1" data-label="Job Id">#42442</div>
      <div className="relative left-12 col col-2" data-label="Customer Name">Jennifer Smith</div>
      <div className="relative left-16 col col-3" data-label="Email Address">juandelacruz@gmail.com</div>
      <div className="col col-4" data-label="Action">
      <button onClick={() => router.push("/minerva/admin/customer/editcustomer")}className="relative left-8 border-4 mx-2"> <TbEdit size={25}/> </button>
      <button className="relative left-6 border-4 mx-2"> <TbTrash size={25}/> </button>
      </div>
    </li>
    <li className={styles.tableRow}>
      <div className="col col-1" data-label="Job Id">#42257</div>
      <div className="relative left-12 col col-2" data-label="Customer Name">John Smith</div>
      <div className="relative left-16 col col-3" data-label="Email Address">juandelacruz@gmail.com</div>
      <div className="col col-4" data-label="Action">
      <button onClick={() => router.push("/minerva/admin/customer/editcustomer")}className="relative left-8 border-4 mx-2"> <TbEdit size={25}/> </button>
      <button className="relative left-6 border-4 mx-2"> <TbTrash size={25}/> </button>
      </div>
    </li>
    <li className={styles.tableRow}>
      <div className="col col-1" data-label="Job Id">#42311</div>
      <div className="relative left-12 col col-2" data-label="Customer Name">John Carpenter</div>
      <div className="relative left-16 col col-3" data-label="Email Address">juandelacruz@gmail.com</div>
      <div className="col col-4" data-label="Action">
      <button onClick={() => router.push("/minerva/admin/customer/editcustomer")}className="relative left-8 border-4 mx-2"> <TbEdit size={25}/> </button>
      <button className="relative left-6 border-4 mx-2"> <TbTrash size={25}/> </button>
      </div>
    </li>
    <li className={styles.tableRow}>
      <div className="col col-1" data-label="Job Id">#42311</div>
      <div className="relative left-12 col col-2" data-label="Customer Name">John Carpenter</div>
      <div className="relative left-16 col col-3" data-label="Email Address">juandelacruz@gmail.com</div>
      <div className="col col-4" data-label="Action">
      <button onClick={() => router.push("/minerva/admin/customer/editcustomer")}className="relative left-8 border-4 mx-2"> <TbEdit size={25}/> </button>
      <button className="relative left-6 border-4 mx-2"> <TbTrash size={25}/> </button>
      </div>
    </li>
    <li className={styles.tableRow}>
      <div className="col col-1" data-label="Job Id">#42311</div>
      <div className="relative left-12 col col-2" data-label="Customer Name">John Carpenter</div>
      <div className="relative left-16 col col-3" data-label="Email Address">juandelacruz@gmail.com</div>
      <div className="col col-4" data-label="Action">
      <button onClick={() => router.push("/minerva/admin/customer/editcustomer")}className="relative left-8 border-4 mx-2"> <TbEdit size={25}/> </button>
      <button className="relative left-6 border-4 mx-2"> <TbTrash size={25}/> </button>
      </div>
    </li>
  </ul>

  <div className="flex items-center justify-center">
  <button className="px-4 py-2 text-gray-700 hover:text-gray-500">
    Previous
  </button>

  <nav aria-label="Page navigation">
    <ul className="flex">
      <li>
        <button className="px-4 py-2 text-gray-700 hover:text-gray-500">1</button>
      </li>

      <li>
        <button className="px-4 py-2 text-gray-700 hover:text-gray-500">2</button>
      </li>

      <li>
        <button className="px-4 py-2 text-gray-700 hover:text-gray-500">3</button>
      </li>

      <li>
        <button className="px-4 py-2 text-gray-700 hover:text-gray-500">...</button>
      </li>

      <li>
        <button className="px-4 py-2 text-gray-700 hover:text-gray-500">10</button>
      </li>
    </ul>
  </nav>

  <button className="px-4 py-2 text-gray-700 hover:text-gray-500">
    Next
  </button>
</div>
</div>

      </div>
   
    
  )
}

(CustomerPage as PageWithLayout).layout = AdminPageLayout
export default CustomerPage