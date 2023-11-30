import React, { FC, useState, useEffect, SyntheticEvent } from 'react'
import styles from '@/styles/admin/content.module.scss'
import Head from 'next/head'
import PageWithLayout from '@/layout/pagewithlayout'
import AdminPageLayout from '@/layout/adminpagelayout'
import router, { useRouter } from 'next/router'
import { TbEdit, TbTrash, TbUsers, TbFiles, TbCalendar, TbShoppingBag, TbClock, TbGraph, TbFileAnalytics, TbList, TbArchive, TbClipboard, TbMessage, TbSettings2, TbLogout2, TbArrowLeft, TbChevronLeft, TbChevronRight } from 'react-icons/tb'
import Modal from '@/components/Modal';
import { jwtDecode } from 'jwt-decode'
import Cookies from 'js-cookie'
import { FormattedPrice, FormattedDate } from '@/helpers/index'

const Orders: FC = () => {

  const [ isModalOpen, setIsModalOpen ] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  const [ orders, setOrders ] = useState<[]>()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/order/", {
        method: "GET",
        headers: { 'Content-Type': 'application/json' },
        cache: "force-cache"
      })

      if (!response.ok) throw new Error("There is something wrong while fethcing")

      const result = await response.json();
      setOrders(result)
    }

    fetchData()
  }, [])

  const [ userid, setUserID ] = useState();
  const router = useRouter();


  useEffect(() => {
    const cookies = Cookies.get("ecom_token")
    if(cookies) {
        const { userID } : any = jwtDecode(cookies) as any
        setUserID(userID)
    }
  }, [
    userid
  ])
  
  const onSubmitDeleteProduct = async (e: SyntheticEvent) => {
    e.preventDefault();
    
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
                Are you sure you want to delete this order?
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
        <title>Order</title>
      </Head>
      <div className={styles.titleHead}>
        <div className={styles.icon}><TbShoppingBag size={50} /></div>
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
              

            {orders?.map(({ orderID, orders, total, payment, status, createdAt, }: any) => (

            <li className={styles.tableRow}>
              <div className={styles.col1} data-label="Order ID">{orders}</div>
              <div className={styles.col2} data-label="Customer Name">Juan Dela Cruz</div>
              <div className={styles.col3} data-label="Date Ordered">{FormattedDate(createdAt)}</div>
              <div className={styles.col4} data-label="Amount">{FormattedPrice(total)}</div>
              <div className={styles.col5} data-label="Payment Method">{payment}</div>
              <div className={styles.col6} data-label="Order Status"><span>{status}</span></div>
              <div className={styles.col7} data-label="Action">
                <button onClick={() => router.push("/minerva/admin/orders/editorders")} className={styles.col7}> <TbEdit size={25} /> </button>
                <button onClick={handleOpenModal} className={styles.col7}> <TbTrash size={25} /> </button>
              </div>
            </li>
))}
            
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