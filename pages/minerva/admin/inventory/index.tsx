import AdminPageLayout from '@/layout/adminpagelayout'
import PageWithLayout from '@/layout/pagewithlayout'
import styles from '@/styles/admin/content.module.scss'
import Head from 'next/head'
import { TbEdit, TbTrash, TbUsers, TbFiles, TbCalendar, TbShoppingBag, TbClock, TbGraph, TbFileAnalytics, TbList, TbArchive, TbClipboard, TbMessage, TbSettings2, TbLogout2, TbArrowLeft, TbChevronLeft, TbChevronRight, TbHexagonPlus, TbHexagonMinus } from 'react-icons/tb'
import React, { FC, useState, useEffect, SyntheticEvent } from 'react'
import router, { useRouter } from 'next/router'
import Image from 'next/image'
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'
import { FormattedPrice } from '@/helpers/index'
import Modal from '@/components/Modal';

const Inventory: FC = () => {

  const router = useRouter();
  const [ productId, setProductId] = useState("")

  const [quantityToUpdate, setQuantityToUpdate] = useState("");

  const [ isModalOpen, setIsModalOpen ] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const [ page, setPage] = useState(0)
  const [ quantity, setQuantity ] = useState("");

  const [ products, setProducts ] = useState<[]>()
  const [ userId, setUserId] = useState("")

  const [inventoryQ, setInventoryQ] = useState({
    quantity: '',
  });

  useEffect(() => {
    const cookies = Cookies.get("ecom_token");
    if (cookies) {
      const { userID }: any = jwtDecode(cookies)
      setUserId(userID)
    }
  }, [userId])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:3001/product/getAllProduct/?skip=${page}&orderby=desc`, {
        method: "GET",
        headers: { 'Content-Type': 'application/json' },
        cache: "default"
      })
    
    if (!res.ok) {
      throw new Error("There something wrong while fetching data")
    }

    const result = await res.json();

    setProducts(result)

  }

  fetchData();
}, [ products ])



const formSubmitProductQuantity = async (e: SyntheticEvent) => {

  e.preventDefault();

    const response = await fetch(`http://localhost:3001/product/updateProductQuantity/${productId}`, {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "quantity": 0,
        "userID": userId,
      })
    });

    if (!response.ok) {
      alert("There was an error while updating");
    } else {
      alert("Successfully Updated");
      // Close the modal after successful update
      setIsModalOpen(false);
    }
  
};

console.log(quantity)

  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className=" bg-gray-800 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 sm:p-7 " >
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Update Product Quantity</h1>
            </div>

            <div className="mt-5 flex flex-col justify-center items-center">
              
            <form>
              
                <div className="grid gap-y-4">
                
                
                <div className="w-full gap-2">
            <input
            name='quantity'
              type="text"
              value={quantityToUpdate}
                  onChange={(e) => setQuantityToUpdate(e.target.value)}
              placeholder="Input quantity"
              className="py-3 px-4 w-full rounded-md border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-black"
              required
            />
            </div>
                <div className='flex align-center justify-center items-center gap-2'>
                <button onSubmit={formSubmitProductQuantity}
              type="submit"
              className="py-3 px-4 w-30 flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#FFBD59] text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Update</button>                  
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal>
      <Head>
        <title>Inventory</title>
      </Head>
      <div className={styles.titleHead}>
        <div className={styles.icon}><TbClipboard size={50} /></div>
        Inventory
      </div>
      <div className={styles.container}>
        <div className={styles.title}>Inventory</div>
        <div className={styles.divider}></div>

        <div className={styles.tablecontainer}>
          <ul className={styles.responsiveTable}>
            <li className={styles.tableHeader}>
              <div className={styles.col1}>IMAGE</div>
              <div className={styles.col2}>ID</div>
              <div className={styles.col3}>NAME</div>
              <div className={styles.col4}>STATUS</div>
              <div className={styles.col5}>QUANTITY</div>
              <div className={styles.col5}>CATEGORY</div>
              <div className={styles.col6}>PRICE</div>
              <div className={styles.col7}>ACTION</div>
            </li>

            {products?.map(({ userId, id, productID, name, category, price, stock, image, description, quantity }: any) => (

            <li className={styles.tableRow}>
              <div className={styles.col1} data-label="Product Image">{image.map((random: any) => (
                      <Image src={random} alt={name} height={120} width={80} />
                  ))}</div>
              <div className={styles.col2} data-label="Product Id">{id}</div>
              <div className={styles.col3} data-label="Customer Name">{name}</div>
              <div className={styles.col4} data-label="Email Address">{stock}</div>
              <div className={styles.col5} data-label="Email Address">{quantity}</div>
              <div className={styles.col5} data-label="Email Address">{category}</div>
              <div className={styles.col6} data-label="Email Address">{FormattedPrice(price)}</div>
              <div className={styles.col7} data-label="Action">
                <div className="flex align-items-center">
                <button onClick={() => {
                  handleOpenModal()
                setProductId(productID)}} className={styles.col7}> <TbEdit size={25} /> </button>
                </div>
              </div>
            </li>
))}
      




          </ul>
        </div>

        <div className={styles.pagination}>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => setPage(()=> page - 1)}>Prev</button>
                 <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => setPage(() => page + 1)}>Next</button>
        </div>

      </div>

    </div>
  )
}

(Inventory as PageWithLayout).layout = AdminPageLayout
export default Inventory