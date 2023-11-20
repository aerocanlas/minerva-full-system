import React, { FC} from 'react'
import styles from '@/styles/admin/content.module.scss'
import Head from 'next/head'
import PageWithLayout from '@/layout/pagewithlayout'
import AdminPageLayout from '@/layout/adminpagelayout'
import router from 'next/router'
import {TbEdit, TbTrash, TbUsers, TbFiles, TbCalendar, TbShoppingBag, TbClock, TbGraph, TbFileAnalytics, TbList, TbArchive, TbClipboard, TbMessage, TbSettings2, TbLogout2, TbArrowLeft, TbChevronLeft, TbChevronRight   } from 'react-icons/tb'


const Orders: FC = () => {
  return (
    <div>
        <Head>
            <title>Order</title>
        </Head>
        <div className={styles.titleHead}>
      <div className={styles.icon}><TbShoppingBag size={50}/></div>
       Orders
      </div>

        <div className={styles.container}>
        <div className={styles.title}>Orders List</div>
          <div className={styles.divider}></div>

          <div className={styles.tablecontainer}>
  <ul className={styles.responsiveTable}>
    <li className={styles.tableHeader}>
      <div className={styles.col1}>ORDER ID</div>
      <div className={styles.col2}>CUSTOMER NAME</div>
      <div className={styles.col3}>DATE ORDERED</div>
      <div className={styles.col4}>AMOUNT</div>
      <div className={styles.col5}>PAYMENT METHOD</div>
      <div className={styles.col6}>ORDER STATUS</div>
      <div className={styles.col7}>ACTION</div>
    </li>

    <li className={styles.tableRow}>
      <div className={styles.col1} data-label="Order ID">#42442</div>
      <div className={styles.col2} data-label="Customer Name">Juan Dela Cruz</div>
      <div className={styles.col3} data-label="Date Ordered"> 21 Oct 2023</div>
      <div className={styles.col4} data-label="Amount">PHP 23,989.00</div>
      <div className={styles.col5} data-label="Payment Method">GCash</div>
      <div className={styles.col6} data-label="Order Status"><span className={styles.badgeSuccess}>Success</span></div>
      <div className={styles.col7} data-label="Action">
      <button onClick={() => router.push("/minerva/admin/orders/editorders")}className={styles.col7}> <TbEdit size={25}/> </button>
      <button className={styles.col7}> <TbTrash size={25}/> </button>
      </div>
    </li>

    <li className={styles.tableRow}>
      <div className={styles.col1} data-label="Order ID">#42442</div>
      <div className={styles.col2} data-label="Customer Name">Juan Dela Cruz</div>
      <div className={styles.col3} data-label="Date Ordered"> 21 Oct 2023</div>
      <div className={styles.col4} data-label="Amount">PHP 23,989.00</div>
      <div className={styles.col5} data-label="Payment Method">GCash</div>
      <div className={styles.col6} data-label="Order Status"><span className={styles.badgePending}>Pending</span></div>
      <div className={styles.col7} data-label="Action">
      <button onClick={() => router.push("/minerva/admin/orders/editorders")}className={styles.col7}> <TbEdit size={25}/> </button>

      <button className={styles.col7}> <TbTrash size={25}/> </button>
      </div>
    </li>

    <li className={styles.tableRow}>
      <div className={styles.col1} data-label="Order ID">#42442</div>
      <div className={styles.col2} data-label="Customer Name">Juan Dela Cruz</div>
      <div className={styles.col3} data-label="Date Ordered"> 21 Oct 2023</div>
      <div className={styles.col4} data-label="Amount">PHP 23,989.00</div>
      <div className={styles.col5} data-label="Payment Method">GCash</div>
      <div className={styles.col6} data-label="Order Status"><span className={styles.badgeSuccess}>Success</span></div>
      <div className={styles.col7} data-label="Action">
      <button onClick={() => router.push("/minerva/admin/orders/editorders")}className={styles.col7}> <TbEdit size={25}/> </button>

      <button className={styles.col7}> <TbTrash size={25}/> </button>
      </div>
    </li>
    <li className={styles.tableRow}>
      <div className={styles.col1} data-label="Order ID">#42442</div>
      <div className={styles.col2} data-label="Customer Name">Juan Dela Cruz</div>
      <div className={styles.col3} data-label="Date Ordered"> 21 Oct 2023</div>
      <div className={styles.col4} data-label="Amount">PHP 23,989.00</div>
      <div className={styles.col5} data-label="Payment Method">GCash</div>
      <div className={styles.col6} data-label="Order Status"><span className={styles.badgePending}>Pending</span></div>
      <div className={styles.col7} data-label="Action">
      <button onClick={() => router.push("/minerva/admin/orders/editorders")}className={styles.col7}> <TbEdit size={25}/> </button>

      <button className={styles.col7}> <TbTrash size={25}/> </button>
      </div>
    </li>
    <li className={styles.tableRow}>
      <div className={styles.col1} data-label="Order ID">#42442</div>
      <div className={styles.col2} data-label="Customer Name">Juan Dela Cruz</div>
      <div className={styles.col3} data-label="Date Ordered"> 21 Oct 2023</div>
      <div className={styles.col4} data-label="Amount">PHP 23,989.00</div>
      <div className={styles.col5} data-label="Payment Method">GCash</div>
      <div className={styles.col6} data-label="Order Status"><span className={styles.badgeCancel}>Cancelled</span></div>
      <div className={styles.col7} data-label="Action">
      <button onClick={() => router.push("/minerva/admin/orders/editorders")}className={styles.col7}> <TbEdit size={25}/> </button>

      <button className={styles.col7}> <TbTrash size={25}/> </button>
      </div>
    </li>
    <li className={styles.tableRow}>
      <div className={styles.col1} data-label="Order ID">#42442</div>
      <div className={styles.col2} data-label="Customer Name">Juan Dela Cruz</div>
      <div className={styles.col3} data-label="Date Ordered"> 21 Oct 2023</div>
      <div className={styles.col4} data-label="Amount">PHP 23,989.00</div>
      <div className={styles.col5} data-label="Payment Method">GCash</div>
      <div className={styles.col6} data-label="Order Status"><span className={styles.badgeSuccess}>Success</span></div>
      <div className={styles.col7} data-label="Action">
      <button onClick={() => router.push("/minerva/admin/orders/editorders")}className={styles.col7}> <TbEdit size={25}/> </button>

      <button className={styles.col7}> <TbTrash size={25}/> </button>
      </div>
    </li>

    
  </ul>
</div>

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

(Orders as PageWithLayout).layout = AdminPageLayout
export default Orders