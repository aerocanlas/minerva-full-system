import React from 'react'
import styles from '@/styles/admin/header.module.scss'
import { TbUsers } from 'react-icons/tb'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function HeaderAdminNavBar() {

  return (
    <div className={styles.container}>

        <span>Hello, Juan Miguel</span>
    </div>
  )
}
