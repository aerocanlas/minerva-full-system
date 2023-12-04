import styles from '@/styles/admin/content.module.scss'
import AdminPageLayout from '@/layout/adminpagelayout'
import PageWithLayout from '@/layout/pagewithlayout'
import React, { FC, useState, useEffect } from 'react'
import Head from 'next/head'
import { TbFilter, TbEye, TbEdit, TbTrash, TbUsers, TbFiles, TbCalendar, TbShoppingBag, TbClock, TbGraph, TbFileAnalytics, TbList, TbArchive, TbClipboard, TbMessage, TbSettings2, TbLogout2, TbArrowLeft, TbChevronLeft, TbChevronRight } from 'react-icons/tb'
import router from 'next/router'


const ReportArchivePage: FC = () => {
  const [ page, setPage] = useState(0)

  const [ isOpen, setIsOpen ] = useState(false);
  const [ archive, setArchive ] = useState(null)
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [ isOpen1, setIsOpen1 ] = useState(false);

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };


  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:3001/archive/getArchive`, {
        method: "GET",
        cache: "force-cache"
      })

      const result = await res.json();
      setArchive(result)
    }
    fetchData()
  }, [])

  return (

    <div>
      <Head>
        <title>Report Archive</title>
      </Head>

      <div className={styles.titleHead}>
        <div className={styles.icon}><TbArchive size={50} /></div>
        Report Archive
      </div>
      <div className={styles.container}>
        <div className={styles.title}>View Report Archive
          <div className="mb-6">
            <div className="absolute top-5 right-5">

              <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                onClick={toggleDropdown}
              >
                <TbFilter className='mr-2' size={25} /> Date Filter


              </button>
            </div>
            {isOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Daily</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Weekly</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Monthly</a>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={styles.divider}></div>

        <ul className={styles.responsiveTable}>
          <li className={styles.tableHeader}>
            <div className={styles.col1}>Archive ID</div>
            <div className={styles.col2}>Administrator Name</div>
            <div className={styles.col3}>Date Created</div>
            <div className={styles.col4}>File Type</div>
            <div className={styles.col5}>Action</div>
          </li>
          <li className={styles.tableRow}>
            <div className={styles.col1} data-label="Job Id">#42235</div>
            <div className={styles.col2} data-label="Customer Name">John Doe</div>
            <div className={styles.col3} data-label="Date Created">21 Oct 2023</div>
            <div className={styles.col4} data-label="File Type"><span className={styles.badgeSuccess}>Generated Report</span></div>
            <div className={styles.col5} data-label="Action">
              <button onClick={() => router.push("/minerva/admin/reports/reportarchive/viewreportarchive")} className={styles.col7}> <TbEye className='ml-5' size={25} /> </button>
            </div>
          </li>
          <li className={styles.tableRow}>
            <div className={styles.col1} data-label="Job Id">#42235</div>
            <div className={styles.col2} data-label="Customer Name">John Doe</div>
            <div className={styles.col3} data-label="Date Created">21 Oct 2023</div>
            <div className={styles.col4} data-label="File Type"><span className={styles.badgeSuccess}>Generated Report</span></div>
            <div className={styles.col5} data-label="Action">
              <button onClick={() => router.push("/minerva/admin/reports/reportarchive/viewreportarchive")} className={styles.col7}> <TbEye className='ml-5' size={25} /> </button>

            </div>
          </li>
          <li className={styles.tableRow}>
            <div className={styles.col1} data-label="Job Id">#42235</div>
            <div className={styles.col2} data-label="Customer Name">John Doe</div>
            <div className={styles.col3} data-label="Date Created">21 Oct 2023</div>
            <div className={styles.col4} data-label="File Type"><span className={styles.badgeSuccess}>Generated Report</span></div>
            <div className={styles.col5} data-label="Action">
              <button onClick={() => router.push("/minerva/admin/reports/reportarchive/viewreportarchive")} className={styles.col7}> <TbEye className='ml-5' size={25} /> </button>

            </div>
          </li>
          <li className={styles.tableRow}>
            <div className={styles.col1} data-label="Job Id">#42235</div>
            <div className={styles.col2} data-label="Customer Name">John Doe</div>
            <div className={styles.col3} data-label="Date Created">21 Oct 2023</div>
            <div className={styles.col4} data-label="File Type"><span className={styles.badgeSuccess}>Generated Report</span></div>
            <div className={styles.col5} data-label="Action">
              <button onClick={() => router.push("/minerva/admin/reports/reportarchive/viewreportarchive")} className={styles.col7}> <TbEye className='ml-5' size={25} /> </button>

            </div>
          </li>
          <li className={styles.tableRow}>
            <div className={styles.col1} data-label="Job Id">#42235</div>
            <div className={styles.col2} data-label="Customer Name">John Doe</div>
            <div className={styles.col3} data-label="Date Created">21 Oct 2023</div>
            <div className={styles.col4} data-label="File Type"><span className={styles.badgeSuccess}>Generated Report</span></div>
            <div className={styles.col5} data-label="Action">
              <button onClick={() => router.push("/minerva/admin/reports/reportarchive/viewreportarchive")} className={styles.col7}> <TbEye className='ml-5' size={25} /> </button>

            </div>
          </li>
          <li className={styles.tableRow}>
            <div className={styles.col1} data-label="Job Id">#42235</div>
            <div className={styles.col2} data-label="Customer Name">John Doe</div>
            <div className={styles.col3} data-label="Date Created">21 Oct 2023</div>
            <div className={styles.col4} data-label="File Type"><span className={styles.badgeSuccess}>Generated Report</span></div>
            <div className={styles.col5} data-label="Action">
              <button onClick={() => router.push("/minerva/admin/reports/reportarchive/viewreportarchive")} className={styles.col7}> <TbEye className='ml-5' size={25} /> </button>

            </div>
          </li>
        </ul>


        <div className={styles.pagination}>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => setPage(()=> page - 1)}>Prev</button>
                 <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => setPage(() => page + 1)}>Next</button>
        </div>
      </div>

    </div>

  )
}

(ReportArchivePage as PageWithLayout).layout = AdminPageLayout
export default ReportArchivePage