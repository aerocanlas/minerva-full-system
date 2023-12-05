import HomePageLayout from '@/layout/homepagelayout'
import PageWithLayout from '@/layout/pagewithlayout'
import React, { FC, useState, useEffect, SyntheticEvent } from 'react'
import styles from '@/styles/customer/customer.module.scss'
import router from 'next/router'
import { useLocalStorageValue } from '@react-hookz/web'
import { FormattedPrice } from '@/helpers/index'
import Image from 'next/image'
import { jwtDecode } from 'jwt-decode'
import Cookies from 'js-cookie'

const  Cart: FC= () => {

    const [  products, setProducts ] = useState<[]>()
    const [ cookies, setCookies ] = useState("");
    
    useEffect(() => {
      const cookies = Cookies.get("ecom_token");
      if(cookies) {
        const { userID }: any = jwtDecode(cookies)
        setCookies(userID)
      }
    }, [ cookies ])

    useEffect(() => {
     const dataProducts = JSON.parse(localStorage.getItem("products") as any)
     if(dataProducts) {
      setProducts(dataProducts as any)
     }
    }, [ ])


    console.log(cookies)

    const onHandlePlaceOrder = async (e: SyntheticEvent) => {
      e.preventDefault();  
      const res = await fetch(`http://localhost:3001/order/createOrders`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: products?.map(({ productID, quantity }: any) => {
          JSON.stringify({
            userID: cookies,
            productID: productID,
            quantity: quantity,
            payment: 'GCASH'
          })
        }) as any
      })


      if(!res.ok) throw new Error("There something wrong in placing order")

      return res.json()
    }


    return ( 
          <div className={styles.bodyCart}>

        <section className="h-screen py-12 sm:py-16 lg:py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-40 flex items-center justify-center">
            <h1 className="text-2xl font-semibold text-white">Your Cart</h1>
          </div>

    <div className="mx-auto mt-8 max-w-md md:mt-12">
      <div className="rounded-3xl bg-white shadow-lg">
        <div className="px-4 py-6 sm:px-8 sm:py-10">
        
        {
                products?.map(({ productID,  name, category, total, quantity, image }: any) => (
                  <div className="flow-root">
                    <div className="-my-8">
                      
                          <div className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                                <div className="shrink-0 relative">
                                  <span className="absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-white text-sm font-medium text-gray-500 shadow sm:-top-2 sm:-right-2">{quantity}</span>
                                  {image.length > 0 && (
                                <Image src={image[1]} alt={name} height={120} width={120}/>
                              )}                       
                             </div>
        
                                <div className="relative flex flex-1 flex-col justify-between">
                                        <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                                            <div className="pr-8 sm:pr-5">
                                              <p className="text-base font-semibold text-gray-900">{name}</p>
                                              <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">{category}</p>
                                            </div>
                      
                                            <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                                              <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">{FormattedPrice(total)}</p>
                                            </div>
                                      </div>
                  
                                        <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                                          <button
                                          onClick={() => {
                                              const removeItem =  products?.filter((a: any) => a.productID !== productID )
                                              setProducts(removeItem)
                                              localStorage.setItem('products', JSON.stringify(removeItem));
                                          } }
                                          type="button" className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" className=""></path>
                                            </svg>
                                          </button>
                                        </div>
                              </div>
                        </div>
                        
                    </div>
                  </div>
                ))
        } 
           <hr className="mx-0 mt-6 mb-0 h-0 border-r-0 border-b-0 border-l-0 border-t border-solid border-gray-300" /> 
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900">Total</p>
            <p className="text-2xl font-semibold text-gray-900">
              {FormattedPrice(products?.reduce((a, b) => (a + b.total), 0) as any)}
            </p>
          </div>

          <div className="mt-6 text-center">
            <form onSubmit={onHandlePlaceOrder}>
                  <button 
                  type="submit" className="group inline-flex w-full items-center justify-center rounded-md bg-orange-500 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                    Place Order
                    <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:ml-8 ml-4 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
              </form>
           
          </div>
        </div>
      </div>
    </div>
      </div>
    </section>

      </div>
      

         

        )
    
    }
    
(Cart as PageWithLayout).layout = HomePageLayout
export default Cart