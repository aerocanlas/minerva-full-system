import AdminPageLayout from '@/layout/adminpagelayout'
import PageWithLayout from '@/layout/pagewithlayout'
import styles from '@/styles/admin/content.module.scss'
import Head from 'next/head'
import {TbEdit, TbTrash, TbUsers, TbFiles, TbCalendar, TbShoppingBag, TbClock, TbGraph, TbFileAnalytics, TbList, TbArchive, TbClipboard, TbMessage, TbSettings2, TbLogout2, TbArrowLeft, TbChevronLeft, TbChevronRight, TbHexagonPlus, TbHexagonMinus   } from 'react-icons/tb'
import React, { FC } from 'react'
import router from 'next/router'
import Image from 'next/image'

const Inventory: FC = () => {
  return (
    <div>
      <Head>
        <title>Inventory</title>
      </Head>
      <div className={styles.titleHead}>
      <div className={styles.icon}><TbClipboard size={50}/></div>
      Inventory
      </div>
      <div className={styles.container}>
        <div className={styles.title}>Inventory</div>
          <div className={styles.divider}></div>

  <div className={styles.tablecontainer}>
  <ul className={styles.responsiveTable}>
    <li className={styles.tableHeader}>
      <div className={styles.col1}>PRODUCT IMAGE</div>
      <div className={styles.col2}>PRODUCT ID</div>
      <div className={styles.col3}>PRODUCT NAME</div>
      <div className={styles.col4}>PRODUCT STATUS</div>
      <div className={styles.col5}>CATEGORY</div>
      <div className={styles.col6}>PRICE</div>
      <div className={styles.col7}>ACTION</div>
    </li>

    <li className={styles.tableRow}>
      <div className={styles.col1} data-label="Product Image"><Image src='/motolite.webp' alt={''} width={30} height={10}></Image></div>
      <div className={styles.col2} data-label="Product Id">#42442</div>
      <div className={styles.col3} data-label="Customer Name">Motolite Gold</div>
      <div className={styles.col4} data-label="Email Address">In Stock</div>
      <div className={styles.col5} data-label="Email Address">Car Battery</div>
      <div className={styles.col6} data-label="Email Address">PHP 5,600.00</div>
      <div className={styles.col7} data-label="Action">
      <div className="flex align-items-center">
                                    <button className=" btn btn-square btn-ghost" ><TbHexagonPlus className="w-5"/></button>
                                        <form >
                                            <div>
                                            <label htmlFor="quantity"></label>
                                            <input type="text" id="quantity" className="w-8 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-yellow-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" required></input>
                                            </div>
                                            
                                        </form>
                                        <button className=" btn btn-square btn-ghost" ><TbHexagonMinus className="w-5"/></button>
      </div>  
      </div>
    </li>

    <li className={styles.tableRow}>
    <div className={styles.col1} data-label="Product Image"><Image src='/motolite.webp' alt={''} width={30} height={10}></Image></div>
      <div className={styles.col2} data-label="Product Id">#42442</div>
      <div className={styles.col3} data-label="Customer Name">Motolite Gold</div>
      <div className={styles.col4} data-label="Email Address">In Stock</div>
      <div className={styles.col5} data-label="Email Address">Car Battery</div>
      <div className={styles.col6} data-label="Email Address">PHP 5,600.00</div>
      <div className={styles.col7} data-label="Action">
      <div className="flex align-items-center">
                                    <button className=" btn btn-square btn-ghost" ><TbHexagonPlus className="w-5"/></button>
                                        <form >
                                            <div>
                                            <label htmlFor="quantity"></label>
                                            <input type="text" id="quantity" className="bg-black-200 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-yellow-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" required></input>
                                            </div>
                                            
                                        </form>
                                        <button className=" btn btn-square btn-ghost" ><TbHexagonMinus className="w-5"/></button>
      </div>  
      </div>
    </li>

    <li className={styles.tableRow}>
    <div className={styles.col1} data-label="Product Image"><Image src='/motolite.webp' alt={''} width={30} height={10}></Image></div>
      <div className={styles.col2} data-label="Product Id">#42442</div>
      <div className={styles.col3} data-label="Customer Name">Motolite Gold</div>
      <div className={styles.col4} data-label="Email Address">In Stock</div>
      <div className={styles.col5} data-label="Email Address">Car Battery</div>
      <div className={styles.col6} data-label="Email Address">PHP 5,600.00</div>
      <div className={styles.col7} data-label="Action">
      <div className="flex align-items-center">
                                    <button className=" btn btn-square btn-ghost" ><TbHexagonPlus className="w-5"/></button>
                                        <form >
                                            <div>
                                            <label htmlFor="quantity"></label>
                                            <input type="text" id="quantity" className="w-8 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-yellow-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" required></input>
                                            </div>
                                            
                                        </form>
                                        <button className=" btn btn-square btn-ghost" ><TbHexagonMinus className="w-5"/></button>
      </div>  
      </div>
    </li>
    <li className={styles.tableRow}>
    <div className={styles.col1} data-label="Product Image"><Image src='/motolite.webp' alt={''} width={30} height={10}></Image></div>
      <div className={styles.col2} data-label="Product Id">#42442</div>
      <div className={styles.col3} data-label="Customer Name">Motolite Gold</div>
      <div className={styles.col4} data-label="Email Address">In Stock</div>
      <div className={styles.col5} data-label="Email Address">Car Battery</div>
      <div className={styles.col6} data-label="Email Address">PHP 5,600.00</div>
      <div className={styles.col7} data-label="Action">
      <div className="flex align-items-center">
                                    <button className=" btn btn-square btn-ghost" ><TbHexagonPlus className="w-5"/></button>
                                        <form >
                                            <div>
                                            <label htmlFor="quantity"></label>
                                            <input type="text" id="quantity" className="w-8 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-yellow-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" required></input>
                                            </div>
                                            
                                        </form>
                                        <button className=" btn btn-square btn-ghost" ><TbHexagonMinus className="w-5"/></button>
      </div>  
      </div>
    </li>
    <li className={styles.tableRow}>
    <div className={styles.col1} data-label="Product Image"><Image src='/motolite.webp' alt={''} width={30} height={10}></Image></div>
      <div className={styles.col2} data-label="Product Id">#42442</div>
      <div className={styles.col3} data-label="Customer Name">Motolite Gold</div>
      <div className={styles.col4} data-label="Email Address">In Stock</div>
      <div className={styles.col5} data-label="Email Address">Car Battery</div>
      <div className={styles.col6} data-label="Email Address">PHP 5,600.00</div>
      <div className={styles.col7} data-label="Action">
      <div className="flex align-items-center">
                                    <button className=" btn btn-square btn-ghost" ><TbHexagonPlus className="w-5"/></button>
                                        <form >
                                            <div>
                                            <label htmlFor="quantity"></label>
                                            <input type="text" id="quantity" className="w-8 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-yellow-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" required></input>
                                            </div>
                                            
                                        </form>
                                        <button className=" btn btn-square btn-ghost" ><TbHexagonMinus className="w-5"/></button>
      </div>  
      </div>
    </li>



    
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

(Inventory as PageWithLayout).layout = AdminPageLayout
export default Inventory