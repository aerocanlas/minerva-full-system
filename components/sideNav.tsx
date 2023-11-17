import React, { useState } from 'react'
import Image from 'next/image'
import styles from '@/styles/admin/sidebar.module.scss'
import { useRouter } from 'next/router'
import {  Open_Sans } from 'next/font/google'
import {TbUsers, TbFiles, TbCalendar, TbShoppingBag, TbClock, TbGraph, TbFileAnalytics, TbList, TbArchive, TbClipboard, TbMessage, TbSettings2, TbLogout2, TbArrowLeft, TbChevronLeft, TbChevronRight  } from 'react-icons/tb'
import { report } from 'process'


const poppins = Open_Sans({
    weight: '500',
    subsets: ["latin"]
})

const routes = [
    { name: "Customer Profile" , url: "/minerva/admin/customer", icons: <TbUsers size={30} />}, 
    { name: "Product Management", url: "/minerva/admin/product", icons: <TbFiles size={30} />},
    { name: "Service Management", url: "/minerva/admin/services", icons: <TbCalendar size={30} />}, 
    { name: "Orders", url: "/minerva/admin/orders", icons: <TbShoppingBag size={30} />},
    { name: "Appointments", url:"/minerva/admin/appointments", icons: <TbClock size={30} />},
    { name: "Inventory", url: "/minerva/admin/inventory", icons: <TbClipboard size={30}/>},
    { name: "Chats", url: "/minerva/admin/chats", icons: <TbMessage size={30}/>},
]


const submenu = [
    { name: "Generate Reports", url :"/minerva/admin/reports", icons: <TbFileAnalytics size={30}/>},
    { name: "Audit Logs", url: "/minerva/admin/auditlogs", icons: <TbList size={30}/>},
    { name: "Report Archive", url: "/minerva/admin/archive", icons: <TbArchive size={30}/>}
]

export default function Sidebar() {

  const router = useRouter();

  const [ reports, setReports ] =  useState(false)

  const onLogoutBtn = () => {

  }
  return (
    <div className={styles.container}>

            
       <div onClick={() => router.push("/minerva/admin/customer")}className={styles.sidebarHeader}>
            <Image src="/logo.png" alt="" height={60} width={150} />
            <span className='text-center'>Minerva Sales Corporations</span>
       </div>
       <div className={styles.sidebarNav}>
            {routes.map(({ name, url, icons}) => (
                <button  onClick={() => router.push(`${url}`)} className={styles.siderBar}>
                    {icons}
                    <span className={poppins.className}>{name}</span>
                </button>
            ))}
             <button onClick={() => setReports(() =>!reports)}>
                  <div className={styles.reports}>
                    <TbGraph size={30}/>
                    <span>Reports</span>
                </div>
                <TbChevronRight size={30} />
            </button>
            {
                reports ? 
                <div className={styles.submenu}>    
                    {submenu.map(({name, url, icons}) => (
                        <button onClick={() => router.push(url)}>
                            {icons}
                            <span>{name}</span>
                        </button>
                    ))}
                </div> : null
            }
            <button onClick={() => router.push("/minerva/admin/settings")}>
                <TbSettings2 size={30}/>
                <span>Settings</span>
            </button>
            <button onClick={onLogoutBtn}>
                <TbLogout2 size={30}/>
                <span>Logout</span>
            </button>
       </div>
</div>
  )
}
