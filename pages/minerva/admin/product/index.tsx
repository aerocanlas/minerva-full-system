import styles from '@/styles/admin/content.module.scss'
import AdminPageLayout from '@/layout/adminpagelayout'
import PageWithLayout from '@/layout/pagewithlayout'
import React, { FC } from 'react'
import Head from 'next/head'
import {TbEdit, TbTrash, TbUsers, TbFolders } from 'react-icons/tb'
import router from 'next/router'
import Image from 'next/image'

const ProductPage: FC = () => {
  return (
    <div>
      <Head>
        <title>Product Management</title>
      </Head>
      <div className={styles.titleHead}>
      <div className={styles.icon}><TbFolders size={50}/></div>
      Product Management
      </div>
      <div className={styles.container}>
        <div className={styles.title}>Product List</div>
          <div className={styles.divider}></div>

  <ul className={styles.responsiveTable}>
    <li className={styles.tableHeader}>
      <div className="col col-1">PRODUCT IMAGE</div>
      <div className="col col-2">PRODUCT ID</div>
      <div className="col col-3">PRODUCT NAME</div>
      <div className="col col-4">PRODUCT STATUS</div>
      <div className="col col-4">CATEGORY</div>
      <div className="col col-4">PRICE</div>
      <div className="col col-4">ACTION</div>
    </li>

    <li className={styles.tableRow}>
      <div className="relative left-6 col col-1" data-label="Product Image"><Image src='/motolite.webp' alt={''} width={40} height={10}></Image></div>
      <div className="relative pl-8 left-16 col col-1" data-label="Product Id">#42442</div>
      <div className="relative pl-8 left-20 col col-2" data-label="Customer Name">Motolite Gold</div>
      <div className="relative pl-12 left-20 col col-3" data-label="Email Address">In Stock</div>
      <div className="relative pl-10 left-20 col col-3" data-label="Email Address">Car Battery</div>
      <div className="relative left-16 col col-3" data-label="Email Address">PHP 5,600.00</div>
      <div className="col col-4" data-label="Action">
      <button onClick={() => router.push("/minerva/admin/customer/editcustomer")}className="relative left-8 border-4 mx-2"> <TbEdit size={25}/> </button>
      <button className="relative left-6 border-4 mx-2"> <TbTrash size={25}/> </button>
      </div>
    </li>

    <li className={styles.tableRow}>
      <div className="relative left-6 col col-1" data-label="Product Image"><Image src='/motolite.webp' alt={''} width={40} height={10}></Image></div>
      <div className="relative pl-8 left-16 col col-1" data-label="Product Id">#42442</div>
      <div className="relative pl-8 left-20 col col-2" data-label="Customer Name">Motolite Gold</div>
      <div className="relative pl-12 left-20 col col-3" data-label="Email Address">In Stock</div>
      <div className="relative pl-10 left-20 col col-3" data-label="Email Address">Car Battery</div>
      <div className="relative left-16 col col-3" data-label="Email Address">PHP 5,600.00</div>
      <div className="col col-4" data-label="Action">
      <button onClick={() => router.push("/minerva/admin/customer/editcustomer")}className="relative left-8 border-4 mx-2"> <TbEdit size={25}/> </button>
      <button className="relative left-6 border-4 mx-2"> <TbTrash size={25}/> </button>
      </div>
    </li>

    <li className={styles.tableRow}>
      <div className="relative left-6 col col-1" data-label="Product Image"><Image src='/motolite.webp' alt={''} width={40} height={10}></Image></div>
      <div className="relative pl-8 left-16 col col-1" data-label="Product Id">#42442</div>
      <div className="relative pl-8 left-20 col col-2" data-label="Customer Name">Motolite Gold</div>
      <div className="relative pl-12 left-20 col col-3" data-label="Email Address">In Stock</div>
      <div className="relative pl-10 left-20 col col-3" data-label="Email Address">Car Battery</div>
      <div className="relative left-16 col col-3" data-label="Email Address">PHP 5,600.00</div>
      <div className="col col-4" data-label="Action">
      <button onClick={() => router.push("/minerva/admin/customer/editcustomer")}className="relative left-8 border-4 mx-2"> <TbEdit size={25}/> </button>
      <button className="relative left-6 border-4 mx-2"> <TbTrash size={25}/> </button>
      </div>
    </li>
    <li className={styles.tableRow}>
      <div className="relative left-6 col col-1" data-label="Product Image"><Image src='/motolite.webp' alt={''} width={40} height={10}></Image></div>
      <div className="relative pl-8 left-16 col col-1" data-label="Product Id">#42442</div>
      <div className="relative pl-8 left-20 col col-2" data-label="Customer Name">Motolite Gold</div>
      <div className="relative pl-12 left-20 col col-3" data-label="Email Address">In Stock</div>
      <div className="relative pl-10 left-20 col col-3" data-label="Email Address">Car Battery</div>
      <div className="relative left-16 col col-3" data-label="Email Address">PHP 5,600.00</div>
      <div className="col col-4" data-label="Action">
      <button onClick={() => router.push("/minerva/admin/customer/editcustomer")}className="relative left-8 border-4 mx-2"> <TbEdit size={25}/> </button>
      <button className="relative left-6 border-4 mx-2"> <TbTrash size={25}/> </button>
      </div>
    </li>
    <li className={styles.tableRow}>
      <div className="relative left-6 col col-1" data-label="Product Image"><Image src='/motolite.webp' alt={''} width={40} height={10}></Image></div>
      <div className="relative pl-8 left-16 col col-1" data-label="Product Id">#42442</div>
      <div className="relative pl-8 left-20 col col-2" data-label="Customer Name">Motolite Gold</div>
      <div className="relative pl-12 left-20 col col-3" data-label="Email Address">In Stock</div>
      <div className="relative pl-10 left-20 col col-3" data-label="Email Address">Car Battery</div>
      <div className="relative left-16 col col-3" data-label="Email Address">PHP 5,600.00</div>
      <div className="col col-4" data-label="Action">
      <button onClick={() => router.push("/minerva/admin/customer/editcustomer")}className="relative left-8 border-4 mx-2"> <TbEdit size={25}/> </button>
      <button className="relative left-6 border-4 mx-2"> <TbTrash size={25}/> </button>
      </div>
    </li>

    
  </ul>

  <div className="flex items-center justify-center">
  <button className="px-4 py-2 text-gray-700 hover:text-gray-500">
    Previous
  </button>

  <nav aria-label="Page navigation">
    <ul className="flex">
      <li>
        <button className="px-4 py-2 text-gray-700 hover:text-gray-500">1</button>
      </li>

      <li>
        <button className="px-4 py-2 text-gray-700 hover:text-gray-500">2</button>
      </li>

      <li>
        <button className="px-4 py-2 text-gray-700 hover:text-gray-500">3</button>
      </li>

      <li>
        <button className="px-4 py-2 text-gray-700 hover:text-gray-500">...</button>
      </li>

      <li>
        <button className="px-4 py-2 text-gray-700 hover:text-gray-500">10</button>
      </li>
    </ul>
  </nav>

  <button className="px-4 py-2 text-gray-700 hover:text-gray-500">
    Next
  </button>
</div>
</div>

      </div>
  )
}

(ProductPage as PageWithLayout).layout = AdminPageLayout
export default ProductPage