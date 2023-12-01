import styles from '@/styles/admin/content.module.scss'
import AdminPageLayout from '@/layout/adminpagelayout'
import PageWithLayout from '@/layout/pagewithlayout'
import React, { FC, SyntheticEvent, useEffect, useState } from 'react'
import Head from 'next/head'
import { TbEdit, TbFile, TbFiles, TbTrash, TbUsers } from 'react-icons/tb'
import { useRouter } from 'next/router'
import Cookie from 'js-cookie'
import { jwtDecode } from 'jwt-decode'

const EditProductPage: FC = () => {
  const [ isOpen, setIsOpen ] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [ isOpen1, setIsOpen1 ] = useState(false);

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };

  const [ productsD, setProductsD ] = useState<[]>()
  const [ openCategory, setOpenCategory ] = useState(false);
  const [ openAvailability, setAvailability ] = useState(false)
  const [ productCateg, setProductCateg ] = useState("Select Product Category");
  const [ productStatus, setProductStatus ] = useState("Select Product Status")
  const productsAvailability =["In Stock", "Out of Stock"];
  const productsCategory = ["Tires", "Car Battery", "Tire Mags", "Oils", "Car Filters" ]

  const [ userId, setUserId ] = useState("")

  const router = useRouter();

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

  const [ selectedImage, setSelectedImage ] = useState<any>([])

  const onHandleImageUpload = (e: any) => {
    setSelectedImage(Array.from(e.target.files))
  }

  const EditProductForm = async (e :any) => {

    e.preventDefault();
    const fd = new FormData();

    for(const image of selectedImage) {
      fd.append("file", image)
    }
    fd.append("name", products.name)
    fd.append("descriptions", products.description);
    fd.append("category", productCateg);
    fd.append("price",products.price);
    fd.append("stock", productStatus)
    fd.append("quantity", products.quantity)
    fd.append("userID", userId)
    const response = await fetch("http://localhost:3001/product/createProduct", {
      method: "POST",  
      body: fd
    })

    if(!response.ok) throw new Error("There something wrong while updating")

  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:3001/product/getProductById/${router.query.id}`, {
        method: "GET",      headers: { 'Content-Type': 'application/json' },
        cache: "force-cache",
      })

      const result = await res.json();
      setProductsD(result)
    }

    fetchData()
  }, [productsD])
  const [ users, setUsers ] = useState<[]>()
  const [ productName, setProductName ] = useState('');
  const [ productQuantity, setProductQuantity ] = useState('');
  const [ productPrice, setProductPrice ] = useState('');
  const [ productDescription, setProductDescription ] = useState('');
  const [ productCategory, setProductCategory ] = useState('');
  const [ productStock, setProductStock ] = useState('');

  useEffect(() => {
    productsD?.map(({ productID, name, quantity, price, descriptions, category, userID, stock}: any) => {
       setProductName(name)
       setProductQuantity(quantity)
       setProductPrice(price)
       setProductDescription(descriptions)
       setProductStock(stock)
       setProductCategory(category)
    })
  }, [productsD])


  useEffect(() => {

  }, [])

  // const formSubmit = async (e: SyntheticEvent) => {

  //   e.preventDefault();

  //   const fd = new FormData();
    
  //   fd.append("name", products.name)
  //   fd.append("descriptions", products.description);
  //   fd.append("category", productCateg);
  //   fd.append("price",products.price);
  //   fd.append("stock", productStatus)
  //   fd.append("quantity", products.quantity)
  //   fd.append("userID", userId)


  //   const response = await fetch(`http://localhost:3001/users/updateProduct/${router.query.id}`, {
  //     method: "PATCH",
  //     headers: { 'Content-Type': 'application/json' },
  //     body: fd
  //   });

  //   return response.json()
  // }


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

            <form encType='multipart/form-data' onSubmit={EditProductForm} className='grid grid-cols-1 md:grid-cols-2 gap-16'>
                <div className="mb-6">
                  <label htmlFor="productName" className="text-sm font-medium text-gray-900 block mb-2">Product Name</label>
                  <input onChange={(e) => setProducts({...products, name: e.target.value})} defaultValue={productName} name="name" type="text" id="productName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Input product name" required />
                </div>
                <div className="mb-6">
                  <div className="relative inline-block text-left">
                    <div>
                      <label htmlFor="lastName" className="text-sm font-medium text-gray-900 block mb-2">Product Status</label>
                      <button name="status"type="button" className="inline-flex justify-center w-[250px] rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                        onClick={toggleDropdown}
                      >
                       {productStatus}

                        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 11.586l3.293-3.293a1 1 0 011.414 0 1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                      </button>
                    </div>
                    <div className={`w-full flex flex-col rounded-md shadow-lg bg-primary-100 p-4 text-primary-600 ${isOpen ? 'absolute z-50' : 'hidden'}`}>
  {isOpen ? (
    productsAvailability.map((name) => (
      <button
      name="status"
        className='text-right'
        type="button"
        key={name}
        value={name}
        onClick={(e) => setProductStatus(e.currentTarget.value)}
        defaultValue={productStock}
      >
        {name}
      </button>
    ))
  ) : null}
</div>
                  </div>
                </div>
               
                <div className="mb-6">
                  <label htmlFor="price" className="text-sm font-medium text-gray-900 block mb-2">Product Price</label>
                  <input onChange={(e) => setProducts({...products, price: e.target.value})} defaultValue={productPrice} name="price" type="text" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="ex. 1000" required />
                </div>
                <div className="mb-6">
                  <div className="relative inline-block text-left">
                    <div>
                      <label htmlFor="lastName" className="text-sm font-medium text-gray-900 block mb-2">Product Category</label>
                      <button name="category" type="button" className="inline-flex justify-center w-[250px] rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                        onClick={toggleDropdown1}
                      >
                      {productCateg}

                        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 11.586l3.293-3.293a1 1 0 011.414 0 1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                      </button>
                    </div>

                    <div className={`w-full flex flex-col rounded-md shadow-lg bg-primary-100 p-4 text-primary-600 ${isOpen1 ? 'absolute z-50' : 'hidden'}`}>
                    {isOpen1 ? productsCategory.map((name) => (
                      <button name="category" className='text-left' 
                      type="button"
                      key={name} 
                      value={name} 
                      onClick={(e) => setProductCateg(e.currentTarget.value)}
                      defaultValue={productStock}
                      >
                        {name} 
                        </button>
                    )) : null}
                  </div>
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="description" className="text-sm font-medium text-gray-900 block mb-2">Product Description</label>
                  <textarea defaultValue={productDescription} onChange={(e) => setProducts({...products, description: e.target.value})} name="description" id="description" className="h-40 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 start-0" placeholder="Input your product description here" required />
                </div>
                <br></br>
                <button type="submit" className="relative left-80 text-black bg-[#FFBD59] hover:bg-[#FFBD59] focus:ring-yellow-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={() => router.back()}>Update Product Details</button>
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