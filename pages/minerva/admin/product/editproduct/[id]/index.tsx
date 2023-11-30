import styles from '@/styles/admin/content.module.scss'
import AdminPageLayout from '@/layout/adminpagelayout'
import PageWithLayout from '@/layout/pagewithlayout'
import React, { FC, useEffect, useState } from 'react'
import Head from 'next/head'
import { TbEdit, TbFile, TbFiles, TbTrash, TbUsers } from 'react-icons/tb'
import { useRouter } from 'next/router'
import Cookie from 'js-cookie'
import { jwtDecode } from 'jwt-decode'

const EditProductPage: FC = () => {

  const [ userId, setUserId ] = useState("")

  const [ isOpen, setIsOpen ] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const router = useRouter();

  const [ isOpen1, setIsOpen1 ] = useState(false);

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };

  useEffect(() => {
    const cookies = Cookie.get("ecom_token");
    if (cookies) {
      const { userID }: any = jwtDecode(cookies)
      setUserId(userID)
    }
  }, [])


  const [ products, setProducts ] = useState({
    name: "",
    quantity: "",
    price: "",
    description: "",
    category: "",

  })

  const EditProductForm = async () => {
    const response = await fetch(`http://localhost:3001/product/updateProduct/${router.query.id}`, {
      method: "PATCH",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: products.name,
        quantity: products.quantity,
        price: products.price,
        description: products.description,
        category: products.category,
        userID: userId,  //get userId of current login
      })
    })
    return response.json();
  }

  return (

    <div>
      <Head>
        <title>Edit Product</title>
      </Head>

      <div className={styles.titleHead}>
        <div className={styles.icon}><TbFiles size={50} /></div>
        Product Management
      </div>

      <div className={styles.container}>
        <div className={styles.title}>Edit Product Details</div>
        <div className={styles.divider}></div>

        <div className="flex lg:flex-row flex-col items-center py-6 px-4">


          <div className="w-full mx-28 my-20">


            <div className=" w-full mx-auto">

              <form onSubmit={EditProductForm} className='grid grid-cols-1 md:grid-cols-2 gap-16'>
                <div className="mb-6">
                  <label htmlFor="productName" className="text-sm font-medium text-gray-900 block mb-2">Product Name</label>
                  <input type="text" value={products.name} onChange={(e) => setProducts({...products, name: e.target.value})} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Input product name" required />
                </div>
                <div className="mb-6">
                  <div className="relative inline-block text-left">
                    <div>
                      <label htmlFor="lastName" className="text-sm font-medium text-gray-900 block mb-2">Product Status</label>
                      <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                        onClick={toggleDropdown}
                      >
                        Select product status

                        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 11.586l3.293-3.293a1 1 0 011.414 0 1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                      </button>
                    </div>
                    {isOpen && (
                      <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-1">
                          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">In Stock</a>
                          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Out of Stock</a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="relative inline-block text-left">
                    <div>
                      <label htmlFor="lastName" className="text-sm font-medium text-gray-900 block mb-2">Product Category</label>
                      <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                        onClick={toggleDropdown1}
                      >
                        Select product category

                        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 11.586l3.293-3.293a1 1 0 011.414 0 1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                      </button>
                    </div>
                    {isOpen1 && (
                      <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-1">
                          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Tires</a>
                          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Car Battery</a>
                          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Tire Mags</a>
                          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Oils</a>
                          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Filters</a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="price" className="text-sm font-medium text-gray-900 block mb-2">Product Price</label>
                  <input type="text" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="ex. PHP 5,600.00" onChange={(e) => setProducts({...products, price: e.target.value})}required />
                </div>
                <div className="mb-6">
                  <label htmlFor="description" className="text-sm font-medium text-gray-900 block mb-2">Product Description</label>
                  <textarea id="description" className="h-40 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 start-0" placeholder="Input your product description here" onChange={(e) => setProducts({...products, description: e.target.value})} required />
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



(EditProductPage as PageWithLayout).layout = AdminPageLayout
export default EditProductPage