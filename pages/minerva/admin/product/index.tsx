import styles from '@/styles/admin/content.module.scss'
import AdminPageLayout from '@/layout/adminpagelayout'
import PageWithLayout from '@/layout/pagewithlayout'
import React, { FC, useState, useEffect } from 'react'
import Head from 'next/head'
import { TbEdit, TbTrash, TbUsers, TbFolders, TbHexagonPlus } from 'react-icons/tb'
import router from 'next/router'
import Image from 'next/image'


const ProductPage: FC = () => {

  const [ products, setProducts ] = useState<[]>()


  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3001/product/getAllProduct", {
        method: "GET",
      })

      const result = await res.json();
      setProducts(result)
    }
    fetchData()
  }, [])
  
  return (
    <div>
      <Head>
        <title>Product Management</title>
      </Head>
      <div className={styles.titleHead}>
        <div className={styles.icon}><TbFolders size={50} /></div>
        Product Management
      </div>
      <div className={styles.container}>
        <div className={styles.title}>Products List
          <button className="py-2 flex font-large absolute top-5 right-5 text-black bg-[#FFBD59] hover:bg-[#FFBD59] focus:ring-yellow-200 rounded-lg text-sm px-5 text-center" onClick={() => router.push("/minerva/admin/product/addproduct")}> <TbHexagonPlus className='mr-2' size={25} />Add New Product</button>
        </div>
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

            {products?.map(({ productID, name, category, price, quantity, image, description, }: any) => (
                <li className={styles.tableRow}>
                <div className={styles.col1} data-label="Product Image">
                  <Image src={image} alt={name} height={120} width={120} />
                </div>
                <div className={styles.col2} data-label="Product Id">#42442</div>
                <div className={styles.col3} data-label="Customer Name">{name}</div>
                <div className={styles.col4} data-label="Email Address">In Stock</div>
                <div className={styles.col5} data-label="Email Address">{category}</div>
                <div className={styles.col6} data-label="Email Address">{Intl.NumberFormat("en-US", { style: "currency", currency: "PHP"}).format(price)}</div>
                <div className={styles.col7} data-label="Action">
                  <button onClick={() => router.push(`/minerva/admin/product/editproduct/${productID}`)} className={styles.col7}> <TbEdit size={25} /> </button>
                  <button onClick={() => router.push(`/minerva/admin/product/deleteproduct/${productID}`)}className={styles.col7}> <TbTrash size={25} /> </button>
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

(ProductPage as PageWithLayout).layout = AdminPageLayout
export default ProductPage