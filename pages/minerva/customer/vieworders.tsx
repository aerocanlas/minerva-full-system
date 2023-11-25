import HomePageLayout from '@/layout/homepagelayout'
import PageWithLayout from '@/layout/pagewithlayout'
import React, { FC, useState , useEffect } from 'react'
import styles from '@/styles/customer/customer.module.scss'
import Head from 'next/head'
import {TbEdit, TbTrash, TbUsers, TbFiles, TbCalendar, TbShoppingBag, TbClock, TbGraph, TbFileAnalytics, TbList, TbArchive, TbClipboard, TbMessage, TbSettings2, TbLogout2, TbArrowLeft, TbChevronLeft, TbChevronRight   } from 'react-icons/tb'
import router from 'next/router'


const ViewOrders: FC = () => {
  const [ orders, setOrders ] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:30001/orders/", {
          method: "GET",
          headers: { 'Content-Type': 'application/json' },
      })

      if(!response.ok) throw new Error("There is something wrong while fethcing")

      const result = await response.json();
      setOrders(result)
    }
  }, [])

  return (

    <div className={styles.bodyProducts}>
          <div>
        <Head>
            <title>Order</title>
        </Head>
        <div className={styles.titleHead}>
      <div className={styles.icon}><TbShoppingBag size={50}/></div>
       Orders
      </div>

        <div className={styles.container}>
          <div className={styles.divider}></div>

          <div className={styles.tablecontainer}>
  <ul className={styles.responsiveTable}>
    <li className={styles.tableHeader}>
      <div className={styles.col1}>ORDER ID</div>
      <div className={styles.col3}>DATE ORDERED</div>
      <div className={styles.col4}>AMOUNT</div>
      <div className={styles.col5}>PAYMENT METHOD</div>
      <div className={styles.col6}>ORDER STATUS</div>
      <div className={styles.col7}>ACTION</div>
    </li>

    <li className={styles.tableRow}>
      <div className={styles.col1} data-label="Order ID">#42442</div>
      <div className={styles.col3} data-label="Date Ordered"> 21 Oct 2023</div>
      <div className={styles.col4} data-label="Amount">PHP 23,989.00</div>
      <div className={styles.col5} data-label="Payment Method">GCash</div>
      <div className={styles.col6} data-label="Order Status"><span className={styles.badgeSuccess}>Picked-Up</span></div>
      <div className={styles.col7} data-label="Action">
      <button onClick={() => router.push("/minerva/admin/orders")}className={styles.col7}> <TbEdit size={25}/> </button>
      <button className={styles.col7}> <TbTrash size={25}/> </button>
      </div>
    </li>

    <li className={styles.tableRow}>
      <div className={styles.col1} data-label="Order ID">#42442</div>
      <div className={styles.col3} data-label="Date Ordered"> 21 Oct 2023</div>
      <div className={styles.col4} data-label="Amount">PHP 23,989.00</div>
      <div className={styles.col5} data-label="Payment Method">GCash</div>
      <div className={styles.col6} data-label="Order Status"><span className={styles.badgePending}>Pending</span></div>
      <div className={styles.col7} data-label="Action">
      <button onClick={() => router.push("/minerva/admin/orders")}className={styles.col7}> <TbEdit size={25}/> </button>

      <button className={styles.col7}> <TbTrash size={25}/> </button>
      </div>
    </li>

    <li className={styles.tableRow}>
      <div className={styles.col1} data-label="Order ID">#42442</div>
      <div className={styles.col3} data-label="Date Ordered"> 21 Oct 2023</div>
      <div className={styles.col4} data-label="Amount">PHP 23,989.00</div>
      <div className={styles.col5} data-label="Payment Method">GCash</div>
      <div className={styles.col6} data-label="Order Status"><span className={styles.badgeSuccess}>Picked-Up</span></div>
      <div className={styles.col7} data-label="Action">
      <button onClick={() => router.push("/minerva/admin/orders")}className={styles.col7}> <TbEdit size={25}/> </button>

      <button className={styles.col7}> <TbTrash size={25}/> </button>
      </div>
    </li>
    <li className={styles.tableRow}>
      <div className={styles.col1} data-label="Order ID">#42442</div>
      <div className={styles.col3} data-label="Date Ordered"> 21 Oct 2023</div>
      <div className={styles.col4} data-label="Amount">PHP 23,989.00</div>
      <div className={styles.col5} data-label="Payment Method">GCash</div>
      <div className={styles.col6} data-label="Order Status"><span className={styles.badgePending}>Pending</span></div>
      <div className={styles.col7} data-label="Action">
      <button onClick={() => router.push("/minerva/admin/orders")}className={styles.col7}> <TbEdit size={25}/> </button>

      <button className={styles.col7}> <TbTrash size={25}/> </button>
      </div>
    </li>
    <li className={styles.tableRow}>
      <div className={styles.col1} data-label="Order ID">#42442</div>
      <div className={styles.col3} data-label="Date Ordered"> 21 Oct 2023</div>
      <div className={styles.col4} data-label="Amount">PHP 23,989.00</div>
      <div className={styles.col5} data-label="Payment Method">GCash</div>
      <div className={styles.col6} data-label="Order Status"><span className={styles.badgeCancel}>Cancelled</span></div>
      <div className={styles.col7} data-label="Action">
      <button onClick={() => router.push("/minerva/admin/orders")}className={styles.col7}> <TbEdit size={25}/> </button>

      <button className={styles.col7}> <TbTrash size={25}/> </button>
      </div>
    </li>
    <li className={styles.tableRow}>
      <div className={styles.col1} data-label="Order ID">#42442</div>
      <div className={styles.col3} data-label="Date Ordered"> 21 Oct 2023</div>
      <div className={styles.col4} data-label="Amount">PHP 23,989.00</div>
      <div className={styles.col5} data-label="Payment Method">GCash</div>
      <div className={styles.col6} data-label="Order Status"><span className={styles.badgeSuccess}>Picked-Up</span></div>
      <div className={styles.col7} data-label="Action">
      <button onClick={() => router.push("/minerva/admin/orders")}className={styles.col7}> <TbEdit size={25}/> </button>

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
  

{/* Footer */}
<section className="absolute top-[1500px] left-[500px] flex flex-col items-center justify-center text-center text-white ">
    <footer className="h-62 bg-gradient-to-r w-full from-gray-100 via-[#FFBD59] to-gray-100">
      <div className="max-w-screen-xl mt-2 px-2 py-8 mx-auto sm:px-6 lg:px-8">
        <div className="relative top-4 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <img src="/logo.png" className="mr-5 h-6 sm:h-6" alt="logo" />
            <p className="max-w-xs mt-4 text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, accusantium.
            </p>
        <div className="flex mt-8 space-x-6 text-gray-600">
          <a href="https://www.facebook.com/MinervaSalesCorp" className="hover:opacity-75" target="_blank" rel="noreferrer">
            <span className="sr-only"> Facebook </span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-1 lg:grid-cols-4">
        <div>
          <p className="font-medium text-black">
          <a href="/products" className="hover:opacity-75">Products</a>
          </p>
          <nav className="flex flex-col mt-1 space-y-1 text-sm text-black">
            <a href="" className="hover:opacity-75"> Tires </a>
            <a href="" className="hover:opacity-75"> Car Battery </a>
            <a href="" className="hover:opacity-75"> Oils </a>
            <a href="" className="hover:opacity-75"> Tire Mags </a>
            <a href="" className="hover:opacity-75"> Car Filters </a>
          </nav>
        </div>
        <div>
          <p className="font-medium text-black">
          <a href="/services" className="hover:opacity-75 "> Services </a>
          </p>
          <nav className="flex flex-col mt-1 space-y-1 text-sm text-black">
            <a href="" className="hover:opacity-75"> Oil Change </a>
            <a href="" className="hover:opacity-75"> Change Tire </a>
            <a href="" className="hover:opacity-75"> Alignment </a>
          </nav>
        </div>
        <div>
          <p className="font-medium text-black">
            Helpful Links
          </p>
          <nav className="flex flex-col mt-1 space-y-1 text-sm text-black">
            <a href="" className="hover:opacity-75"> Contact </a>
            <a href="" className="hover:opacity-75"> About </a>
            <a href="" className="hover:opacity-75"> Live Chat </a>
          </nav>
        </div>
        <div>
          <p className="font-medium text-black">
            Legal
          </p>
          <nav className="flex flex-col mt-1 space-y-1 text-sm text-black">
            <a href="" className="hover:opacity-75" > Privacy Policy </a>
            <a href="" className="hover:opacity-75" > Terms &amp; Conditions </a>
            <a href="" className="hover:opacity-75" > Returns Policy </a>
          </nav>
        </div>
      </div>
    </div>
    <p className="mt-9 text-xs text-gray-800">
      © 2023 Minerva Sales Corporation
    </p>
    </div>
  </footer>
</section>
    </div>
  )
}

(ViewOrders as PageWithLayout).layout = HomePageLayout
export default ViewOrders