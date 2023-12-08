import React, {  useState, useEffect } from 'react'
import styles from '@/styles/admin/header.module.scss'
import { TbUsers } from 'react-icons/tb'
import { useRouter, } from 'next/router'
import Link from 'next/link'
import { jwtDecode } from 'jwt-decode'
import Cookies from 'js-cookie'
import { useLocalStorageValue } from '@react-hookz/web'

export default function HeaderAdminNavBar() {
  
  // const [ userProfile, setUserProfile ] = useState(null)
  // const [ usersID, setUsersID ]= useState("")


  // useEffect(() => {
  //   const user = localStorage.getItem("userId")
  //   const replaceId = user?.replaceAll('"', "")
  //   setUsersID(replaceId) as any

  // },[ usersID ])

  // useEffect(() => {
  
  //  const fetchData = async () => {
  //   const response = await fetch(`http://localhost:3001/user/getUsersId/${usersID}`, {
  //     method: "GET",
  //     headers: { 'Content-Type': 'application/json' },
  //     cache: "default"
  //   })

  //   if(!response.ok) throw new Error("There's something wrong while fetching")

  //   const result = await response.json();
  //   setUserProfile(result)
  // }

  // fetchData()
  // }, [ usersID, userProfile])

  console.log()
  return (
    <div className={styles.container}>
      <div className={styles.Hello}>
        Hello Admin
      </div>
    </div>
  )
}
