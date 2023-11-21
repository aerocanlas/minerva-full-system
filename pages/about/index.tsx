import HomePageLayout from '@/layout/homepagelayout'
import PageWithLayout from '@/layout/pagewithlayout'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { motion } from "framer-motion"
import { FC, useRef, useState } from 'react'
import Link from 'next/link'
import styles from '@/styles/customer/customer.module.scss'

const  About: FC = () => {
  return (
    <div className={styles.bodyProducts}>
    </div>
  )
}

(About as PageWithLayout).layout = HomePageLayout
export default About