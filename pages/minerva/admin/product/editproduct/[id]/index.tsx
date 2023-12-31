import styles from '@/styles/admin/content.module.scss'
import AdminPageLayout from '@/layout/adminpagelayout'
import PageWithLayout from '@/layout/pagewithlayout'
import React, { FC, SyntheticEvent, useEffect, useState } from 'react'
import Head from 'next/head'
import { TbEdit, TbFile, TbFiles, TbTrash, TbUsers } from 'react-icons/tb'
import { useRouter } from 'next/router'
import Cookie from 'js-cookie'
import { jwtDecode } from 'jwt-decode'
import 'react-toastify/dist/ReactToastify.css';
import { Toaster, toast } from 'sonner'

const EditProductPage: FC = () => {

  const router = useRouter();
    const [ category, setCategory ] = useState("");
  const [ status, setStatus ] = useState("")
  const productsAvailability = ["In Stock", "Out of Stock"]
  const productsCateg = ["Tires", "Tire Mags", "Car Battery", "Oils", "Car Filters"]

  const [ users, setUsers ] = useState<[]>()

  const [ productCategory, setProductCategory ] = useState('');
  const [ productStock, setProductStock ] = useState('');

  const [ isOpen, setIsOpen ] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [ isOpen1, setIsOpen1 ] = useState(false);

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };

  const [ productsD, setProductsD ] = useState<[]>()

  const [ userId, setUserId ] = useState("")

  useEffect(() => {
    const cookies = Cookie.get("ecom_token");
    if (cookies) {
      const { userID }: any = jwtDecode(cookies)
      setUserId(userID)
    }
  }, [])

  const [products, setProducts] = useState({
    name: '',
    quantity: '',
    price: '',
    description: '',
    category: '',
    stock: '',
  });

  const [ selectedImage, setSelectedImage ] = useState<any>([])

  const onHandleImageUpload = (e: any) => {
    setSelectedImage(Array.from(e.target.files))
  }




  useEffect(() => {
    const fetchData = async () => {
    
        const res = await fetch(`http://localhost:3001/product/getProductById/${router.query.id}`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          cache: 'default',
        });
  
        if (!res.ok) {
          throw new Error(`Failed to fetch product data: ${res.status}`);
        }
  
        const result = await res.json();
        setProductsD(result)

        if (result && result.length > 0) {
          const { stock, category } = result[0];
          setProductStock(stock);
          setProductCategory(category);
      
    }

    
    };

    fetchData();
  }, [router ]);

  console.log(products)

  const promise = () => new Promise((resolve) => setTimeout(resolve, 2000));
  
  const EditProductForm = async (e: any) => {
    e.preventDefault();
    
    // Use products state directly here
    // const fd = new FormData();
    // fd.append('name', products.name);
    // fd.append('descriptions', products.description);
    // fd.append('category', productCategory);
    // fd.append('price', products.price);
    // fd.append('stock', productStock);
    // fd.append('quantity', products.quantity);
    // fd.append('userID', userId);

      const response = await fetch(`http://localhost:3001/product/updateProduct/${router.query.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "name":  products.name,
          "descriptions": products.description,
          "category": productCategory,
          "price": products.price,
          "stock": productStock,
          "quantity": products.quantity,
          "userID": userId
        }),
      });

      if(!response.ok) 
    {
      alert("Please complete all fields")
    }


  }

  const handleGoBack = () => {
    // Trigger the router.back() function
    router.back();

    toast.promise(promise, {
      loading: 'Loading...',
      success: (productsD) => {
        return `Updated ${products.name} succesfully`;
      },
      error: 'Error',
    });
  }

  useEffect(() => {
    productsD?.map(({ productID, name, quantity, price, descriptions, category, userID, stock}: any) => {
        setProducts({
          name: name,
          quantity: quantity,
          price: price,
          description: descriptions,
          category: category,
          stock: stock
        })
    })
  }, [productsD])


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
                  <input onChange={(e) => setProducts({...products, name: e.target.value})} defaultValue={products.name} name="name" type="text" id="productName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Input product name" required />
                </div>
                <div className="mb-6">
                  <div className="relative inline-block text-left">
                    <div>
                      <label htmlFor="lastName" className="text-sm font-medium text-gray-900 block mb-2">Product Status <span className='text-gray-400'>(Please always choose Product Status)</span></label>
                      <button name="status"type="button" className="inline-flex justify-center w-[220px] rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                        onClick={toggleDropdown}
                      >
                       {productStock === "" ? "Select Product Status" : productStock}

                        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 11.586l3.293-3.293a1 1 0 011.414 0 1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                      </button>
                    </div>
                    <div className={`w-full flex flex-col rounded-md shadow-lg bg-primary-100 p-4 text-primary-600 ${isOpen ? 'w-[220px] absolute z-50' : 'hidden'}`}>
  {isOpen ? (
    productsAvailability.map((name) => (
      <button
      name="stock"
        className='text-left'
        type="button"
        key={name}
        value={name}
        onClick={(e) => setProductStock(e.currentTarget.value)}
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
                  <input onChange={(e) => setProducts({...products, price: e.target.value})} defaultValue={products.price} name="price" type="text" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="ex. 999" required />
                </div>
                <div className="mb-6">
                  <div className="relative inline-block text-left">
                    <div>
                      <label htmlFor="lastName" className="text-sm font-medium text-gray-900 block mb-2">Product Category <span className='text-gray-400'>(Please always choose Product Category)</span></label>
                      <button name="category" type="button" className="inline-flex justify-center w-[220px] rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                        onClick={toggleDropdown1}
                      >
                      {productCategory === "" ? "Select Product Category" : productCategory}

                        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 11.586l3.293-3.293a1 1 0 011.414 0 1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                      </button>
                    </div>

                    <div className={`w-full flex flex-col bg-white rounded-md shadow-lg bg-primary-100 p-4 text-primary-600 ${isOpen1 ? 'w-[220px] absolute z-60' : 'hidden'}`}>
                    {isOpen1 ? productsCateg.map((name) => (
                      <button name="category" className='text-left' 
                      type="button"
                      key={name} 
                      value={name} 
                      onClick={(e) => setProductCategory(e.currentTarget.value)}
                      >
                        {name} 
                        </button>
                    )) : null}
                  </div>
                  </div>
                </div>

                <div className="mb-6">
                      <label htmlFor="productQuantity" className="text-sm font-medium text-gray-900 block mb-2">Product Quantity</label>
                      <input name="quantity" type="text" id="productQuantity" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg
                      focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" defaultValue={products.quantity} onChange={(e) => setProducts({...products, quantity: e.target.value})}/>
                    </div>

                
                <div className="mb-6">
                  <label htmlFor="description" className="text-sm font-medium text-gray-900 block mb-2">Product Description</label>
                  <textarea defaultValue={products.description} onChange={(e) => setProducts({...products, description: e.target.value})} name="description" id="description" className="h-40 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 start-0" placeholder="Input your product description here" required />
                </div>
                
                <button type="submit" className="relative left-80 text-black bg-[#FFBD59] hover:bg-[#FFBD59] focus:ring-yellow-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={handleGoBack}>Update Product Details</button>
                <Toaster richColors  />
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