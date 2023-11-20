import styles from '@/styles/admin/content.module.scss'
import AdminPageLayout from '@/layout/adminpagelayout'
import PageWithLayout from '@/layout/pagewithlayout'
import React, { FC } from 'react'
import Head from 'next/head'
import {TbEdit, TbTrash, TbUsers, TbFiles, TbCalendar, TbShoppingBag, TbClock, TbGraph, TbFileAnalytics, TbList, TbArchive, TbClipboard, TbMessage, TbSettings2, TbLogout2, TbArrowLeft, TbChevronLeft, TbChevronRight, TbDownload   } from 'react-icons/tb'
import router from 'next/router'
import Image from 'next/image'


const ViewReportArchivePage: FC = () => {
  return (
    <div>
      <Head>
        <title>View Report Archive</title>
      </Head>
      
      <div className={styles.titleHead}>
      <div className={styles.icon}><TbArchive size={50}/></div>
      Report Archive
      </div>

      <div className={styles.archiveContainer}>
        <div className={styles.title}>Viewing Report Archive #42235</div>
          <div className={styles.divider}></div>

          <div>
            
          <div className='flex justify-center'><Image src='/sales.jpg' alt={''} width={600} height={10}></Image></div>
          <div className='flex justify-center'>
          <button className="py-2 font-medium flex font-large text-black bg-[#FFBD59] hover:bg-[#FFBD59] focus:ring-yellow-200 rounded-lg text-sm px-5 text-center"> <TbDownload className='mr-2' size={25}/>Download File</button>
          </div>
          </div>
      </div>

    </div>
  )
}

(ViewReportArchivePage as PageWithLayout).layout = AdminPageLayout
export default ViewReportArchivePage