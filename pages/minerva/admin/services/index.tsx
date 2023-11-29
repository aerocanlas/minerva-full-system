import AdminPageLayout from '@/layout/adminpagelayout'
import PageWithLayout from '@/layout/pagewithlayout'
import styles from '@/styles/admin/content.module.scss'
import Head from 'next/head'
import {TbListSearch, TbEdit, TbTrash, TbUsers, TbFiles, TbCalendar, TbShoppingBag, TbClock, TbGraph, TbFileAnalytics, TbList, TbArchive, TbClipboard, TbMessage, TbSettings2, TbLogout2, TbArrowLeft, TbChevronLeft, TbChevronRight, TbHexagonPlus   } from 'react-icons/tb'
import React, { FC, SyntheticEvent, useEffect, useState } from 'react'
import router, { useRouter } from 'next/router'
import { FormattedPrice } from '@/helpers/index'
import Modal from '@/components/Modal';
import { jwtDecode } from 'jwt-decode'
import Cookies from 'js-cookie'

const ServicePage: FC = () => {

  const [ isModalOpen, setIsModalOpen ] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const [ services, setServices ] = useState<[]>()

  const [ userid, setUserID ] = useState("")
  const router = useRouter();


  const onSubmitDeleteProduct = async (e: SyntheticEvent) => {
    e.preventDefault();

    useEffect(() => {
      const cookies = Cookies.get("ecom_token")
      if(cookies) {
          const { userID } : any = jwtDecode(cookies) as any
          setUserID(userID)
      }
    }, [
      userid
    ])
    
    const res = await fetch(`http://localhost:3001/product/deleteProduct/${router.query.id}`, {
        method: "DELETE",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            userID: userid,
        })
    })


    if(!res.ok) {
        alert("There something wrong while updating..")
    } else {
        alert("Successfully Deleted")
        router.push("/minerva/admin/product")
    }

    return res.json();
  }

  useEffect(() => {
    const fetchData = async () => {
       const response = await fetch("http://localhost:3001/services/getAllServices", {
          method: "GET",
      })

      const result = await response.json();
      setServices(result)
    }
    fetchData()
  }, [])

  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className=" bg-gray-800 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 sm:p-7 " >
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Confirm Delete</h1>
            </div>

            <div className="mt-5 flex flex-col justify-center items-center">
            <form>
                <div className="grid gap-y-4">
                <p className="text-center divide-x divide-gray-300 dark:divide-gray-700 text-white">
                Are you sure you want to delete this product?
                </p>
                <div className='flex gap-2'>
                  <button type="submit" className="py-3 px-4 flex w-40 justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#FFBD59] text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" onClick={() => router.push("/auth/changePassReqSuccess")}>Yes</button>
                  <button type="submit" className="py-3 px-4 w-40 flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#FFBD59] text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" onClick={handleCloseModal}>No</button>
                </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal>
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
      <div className={styles.col2}>PRICE</div>
      <div className={styles.col3}>SERVICE STATUS</div>
      <div className={styles.col4}>Action</div>
    </li>

    {services?.map(({ serviceID, services, description, price, }: any) => (

    <li className={styles.tableRow}>
      <div className={styles.col1} data-label="Service ID">#42235</div>
      <div className={styles.col2} data-label="Service Name">{services}</div>
      <div className={styles.col2} data-label="Service Name">{FormattedPrice(price)}</div>
      <div className={styles.col3} data-label="Email Address">Available</div>
      <div className={styles.col4} data-label="Action">
      <button onClick={() => router.push("/minerva/admin/services/editservices")}className={styles.col4} > <TbEdit size={25}/> </button>
      <button onClick={() => router.push(`/minerva/admin/services/deleteservice/${serviceID}`)} className={styles.col4} > <TbTrash size={25}/> </button>
      </div>
    </li>

))}
    {/* <li className={styles.tableRow}>
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
    </li> */}
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