import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '@/styles/Navbar/navbar.module.scss'
import { Poppins } from 'next/font/google'
import { TbMenu2 } from 'react-icons/tb'
import Image from 'next/image'

const customer = [
  { name: "Home", url: "/"},  
  {
    name: "Products", url: "/products"
  },
  {
    name: "Services", url: "/services"
  },

  {
    name: "About", url: "/about"
  },
  {
    name: "Contact", url: "/contact"
  }
]


const poppins = Poppins({
  weight: "500",
  subsets: ["latin"]
})

export default function HeaderNavbar() {
  const router = useRouter();
  const [ mobile, setMobile ] = useState(false)

  const onHandleLoginBtn = () => {
      router.push("/auth/login")
  }

  const onHandleMobileNavigation = () => {
    setMobile(() => !mobile)
  }
  return (
    <div className={styles.container}>
      <div className={styles.containerLogo}>
        <Image src="/logo.png" alt="" height={20} width={100} />
        <span className={poppins.className}>Minerva Sales Corporation</span>
      </div>
      {
        mobile ? 
        <div className={styles.mobileContainer}>
          <div className={styles.mobileHeader}>
            <button onClick={onHandleMobileNavigation}>
              <TbMenu2 size={30}/>
            </button>
          </div>
          <div className={styles.mobNavbar}>
          {customer.map(({name, url}) => (
          <Link key={name} className={router.pathname === url ? ` ${poppins.className} ${styles.active} : ${poppins.className}` : `${poppins.className}`}
          onClick={onHandleMobileNavigation}
          href={url}>{name}</Link>
        ))}
          </div>
          <div className={styles.mobileBtns}>
          <button className={styles.loginBtn} type="button" onClick={onHandleLoginBtn}>
               <span className={poppins.className}>Login</span>
          </button>
          <button className={styles.cartBtn}>
                <span className={poppins.className}>Cart (0)</span>
            </button>
        </div>
        </div> : null
      }
      <div className={styles.mobileNavbar}>
        <button onClick={onHandleMobileNavigation}>
           <TbMenu2 size={30} />
        </button>
      </div>
      <div className={styles.webNavBar}>
          <div className={styles.navbar}>
        {customer.map(({name, url}) => (
          <Link key={name} className={router.pathname === url ? ` ${poppins.className} ${styles.active} : ${poppins.className}` : `${poppins.className}`} href={url}>{name}</Link>
        ))}
        </div>
        <button className={styles.loginBtn} type="button" onClick={onHandleLoginBtn}>
          <span className={poppins.className}>Login</span>
        </button>
        <button className={styles.cartBtn}>
            <span className={poppins.className}>Cart (0)</span>
        </button>
      </div>
    </div>
  )
}
