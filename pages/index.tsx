import Image from 'next/image'
import { Inter } from 'next/font/google'
import HomePageLayout from '@/layout/homepagelayout'
import PageWithLayout from '@/layout/pagewithlayout'
import { motion } from "framer-motion"
import { FC, useRef, useState } from 'react'
import Link from 'next/link'
import styles from '@/styles/customer/home.module.scss'

const Home: FC= () =>{

  const ref = useRef(null);

  const variants = {
    initial: { opacity: 0, translateX: 300 },
    whileInView: { opacity: 1, translateX: 0 },
    exit: { opacity: 0 },
  };

  const transition = { duration: 2 };

  const [videoSrc] = useState('/landingvid.MOV');

  
  return (
    
        <div className={styles.heroVideo}>
              <video autoPlay loop muted playsInline className={styles.video}>
                <source src='/landingvid.MOV' type="video/mp4"/>
            </video>
            </div>

  )
}
(Home as PageWithLayout).layout = HomePageLayout
export default  Home