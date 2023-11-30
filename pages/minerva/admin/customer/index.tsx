import styles from '@/styles/admin/content.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminPageLayout from '@/layout/adminpagelayout'
import PageWithLayout from '@/layout/pagewithlayout'
import React, { FC, useState, useEffect } from 'react'
import Head from 'next/head'
import { TbEdit, TbTrash, TbUsers, TbFiles, TbCalendar, TbShoppingBag, TbClock, TbGraph, TbFileAnalytics, TbList, TbArchive, TbClipboard, TbMessage, TbSettings2, TbLogout2, TbArrowLeft, TbChevronLeft, TbChevronRight } from 'react-icons/tb'
import router from 'next/router'
import Modal from '@/components/Modal';

const CustomerPage: FC = () => {

  const [ userid, setuserid ] = useState("")
  
  const [ users, setUsers ] = useState<[]>()
  const [ userId, setUserId] = useState("")

  const [ isModalOpen, setIsModalOpen ] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/user/getUserCustomer", {
        method: "GET",
        headers: { 'Content-Type': 'application/json' },
      })


      if (!response.ok) {
        throw new Error("There something wrong while fetching data")
      }

      const result = await response.json();

      setUsers(result)

    }

    fetchData();
  }, [])


  console.log(users)

  const onFormDelete =  async () => {
    const res = await fetch(`http://localhost:3001/user/deleteUser/${userId}`, {
      method: "DELETE",
      headers: { 'Content-Type': 'application/json' },
    })

    if(!res.ok) {
      alert("There something is eror while updating")
    } else {
      alert("Successfully Deleted")
    }
    return res.json()
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
            <form onSubmit={onFormDelete}>
                <div className="grid gap-y-4">
                <p className="text-center divide-x divide-gray-300 dark:divide-gray-700 text-white">
                Are you sure you want to delete this customer from the earth?
                </p>
                <div className='flex gap-2'>
                  <button type="submit" className="py-3 px-4 flex w-40 justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#FFBD59] text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" onClick={() => router.push("/minerva/customer")}>Yes</button>
                  <button type="button" className="py-3 px-4 w-40 flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#FFBD59] text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" onClick={handleCloseModal}>No</button>
                </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal>

      <Head>
        <title>Customer Profile</title>
      </Head>
      <div className={styles.titleHead}>
        <div className={styles.icon}><TbUsers size={50} /></div>
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

         {users?.map(({ userID, id, email, profile, }: any) => (
                          <li className={styles.tableRow}>
                          <div className={styles.col1} data-label="Job Id">{id}</div>
                          <div className={styles.col2} data-label="Customer Name">{profile.firstname} {profile.lastname}</div>
                          <div className={styles.col3} data-label="Email Address">{email}</div>
                          <div className={styles.col4} data-label="Action">
                            <button onClick={() => router.push(`/minerva/admin/customer/editcustomer/${userID}`)} className={styles.col4} > <TbEdit size={25} /> </button>
                            <button onClick={() => {
                              handleOpenModal();
                              setUserId(userID)
                            }} className={styles.col4} > <TbTrash size={25} /> </button>
                          </div>
                        </li>
          ))} 

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