import styles from '@/styles/admin/content.module.scss'
import AdminPageLayout from '@/layout/adminpagelayout'
import PageWithLayout from '@/layout/pagewithlayout'
import React, { FC, useEffect, useState } from 'react'
import Head from 'next/head'
import { TbEdit, TbFile, TbFiles, TbTrash, TbUsers } from 'react-icons/tb'
import router from 'next/router'
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'


interface InputProp {
  labelTitle: string;
  defaultValue: string;
  updateFormValue: (value: string) => void;
}

const AddProductPage: FC<InputProp> = ({ labelTitle, defaultValue, updateFormValue }) => {

  const [ isOpen, setIsOpen ] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [ isOpen1, setIsOpen1 ] = useState(false);

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };
  const [ openCategory, setOpenCategory ] = useState(false);
  const [ openAvailability, setAvailability ] = useState(false)
  const [ productCateg, setProductCateg ] = useState("");
  const [ productStatus, setProductStatus ] = useState("")
  const productsAvailability =["In Stock", "Out of Stock"];
  const productsCategory = ["Tires", "Car Battery", "Tire Mags", "Oils", "Car Filters" ]
  const [ userid, setUserId ] = useState("")

  useEffect(() => {
    const cookies = Cookies.get("ecom_token")
    if (cookies) {
      const { userID }: any = jwtDecode(cookies)
      setUserId(userID)
    }
  }, [])

  const [ selectedImage, setSelectedImage ] = useState(null)

  const [ products, setProducts ] = useState({
    name: "",
    quantity: "",
    price: "",
    description: "",
    category: "",
  })

  const AddProductForm = async () => {
    const response = await fetch("http://localhost:3001/product/createProduct", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        image: selectedImage,
        name: products.name,
        quantity: products.quantity,
        price: products.price,
        description: products.description,
        category: products.category,
        userID: userid,  //get userId of current login
      })
    })
    return response.json();
  }
  return (

    <div>
      <Head>
        <title>Add Product</title>
      </Head>

      <div className={styles.titleHead}>
        <div className={styles.icon}><TbFiles size={50} /></div>
        Product Management
      </div>

      <div className={styles.container}>
        <div className={styles.title}>Add Product Details</div>
        <div className={styles.divider}></div>

        <div className="flex lg:flex-row flex-col items-center py-6 px-4">


          <div className="w-full mx-28 my-20">


            <div className=" w-full mx-auto">

              <form className='grid grid-cols-1 md:grid-cols-2 gap-16'>
                <div className="mb-6">
                  <label htmlFor="productName" className="text-sm font-medium text-gray-900 block mb-2">Product Name</label>
                  <input type="text" id="productName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Input product name" required />
                </div>
                <div className="mb-6">
                  <div className="relative inline-block text-left">
                    <div>
                      <label htmlFor="lastName" className="text-sm font-medium text-gray-900 block mb-2">Product Status</label>
                      <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                        onClick={toggleDropdown}
                      >
                       {productStatus}

                        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 11.586l3.293-3.293a1 1 0 011.414 0 1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                      </button>
                    </div>
                    {isOpen ? productsAvailability.map((name) => (
                      <button type="button" key={name} value={name} onClick={(e) => setProductStatus(e.currentTarget.value)}>{name} </button>
                    )): null }
                  </div>
                </div>
                <div className="mb-6">
                  <div className="relative inline-block text-left">
                    <div>
                      <label htmlFor="lastName" className="text-sm font-medium text-gray-900 block mb-2">Product Category</label>
                      <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                        onClick={toggleDropdown1}
                      >
                      {productCateg}

                        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 11.586l3.293-3.293a1 1 0 011.414 0 1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                      </button>
                    </div>
                    {isOpen1 ? productsCategory.map((name) => (
                      <button type="button" key={name} value={name} onClick={(e) => setProductCateg(e.currentTarget.value)}>{name} </button>
                    )) : null}
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="price" className="text-sm font-medium text-gray-900 block mb-2">Email Address</label>
                  <input type="text" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@gmail.com" required />
                </div>
                <div className="mb-6">
                  <label htmlFor="description" className="text-sm font-medium text-gray-900 block mb-2">Product Description</label>
                  <textarea id="description" className="h-40 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 start-0" placeholder="Input your product description here" required />
                </div>
                <br></br>
                <button type="submit" className="relative left-80 text-black bg-[#FFBD59] hover:bg-[#FFBD59] focus:ring-yellow-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add New Product</button>
              </form>
            </div>

          </div>

        </div>
      </div>
    </div>

  )
}



(AddProductPage as PageWithLayout).layout = AdminPageLayout
export default AddProductPage