import React from 'react'
import { FormattedDate, FormattedPrice } from '@/helpers/index'

export default function PDFTemplate({ generated }: any) {

  return (

    <div className="overflow-auto-y box-border m-0 p-0 sm:p-0">


            <table className="w-full h-auto">
                <tbody>
                <tr className="h-5">
                <td className="font-poppins text-center">
                Minerva Sales Corporation
                </td>
            </tr>
            <tr className="h-5">
                <td className="font-poppins text-center">
                General Malvar Street, Barangay Tubigan
                </td>
            </tr>
            <tr className="h-5">
                <td className="font-poppins text-center">
                Binan City, Laguna, 4024
                </td>
            </tr>
            
            <tr className="h-45 mb-4">
                <td className="font-poppins text-center font-bold ">
                <br></br>
            <br></br>
                Generated Sales Report
                </td>
            </tr>
                </tbody>
            
            </table>

            <br></br>
            <br></br>

                    <table className="mx-8 px-8 border border-collapse border-black">
                    <tbody>
                    <tr className="h-35">
                        <td className="font-poppins w-200 border border-black px-2">
                        <b>Order ID</b>
                        </td>
                        <td className="font-poppins w-200 border border-black px-2">
                        <b>Product Name</b>
                        </td>
                        <td className="font-poppins w-200 border border-black px-2">
                        <b>Ordered By</b>
                        </td>
                        <td className="font-poppins w-200 border border-black px-2">
                        <b>Date Ordered</b>
                        </td>
                        <td className="font-poppins w-200 border border-black px-2">
                        <b>Total</b>
                        </td>
                    </tr>
                
                      {generated?.map(({ orderID, orders, Product, User, payment, quantity, statu, createdAt, total  }: any) => (
                        <tr key={orderID} className="h-35 border border-black">
                          <td>{orders}</td>
     {Product?.map(({ name}: any) => (
                          <td className="font-poppins w-200 border border-black pr-16">
                          
                          
                          {name}
                          </td>
                          ))}
                          <td className="font-poppins w-200 border border-black pr-10">{User[0].profile.firstname} {User[0].profile.lastname}</td>
                          <td className="font-poppins w-200 border border-black px-2">{FormattedDate(createdAt)}</td>
                          <td className="font-poppins w-200 border border-black px-4">{FormattedPrice(total)}</td>
                        </tr>
                      ))}
                    
                    <tr className="h-35">
                        <td className="font-poppins w-200 border border-black px-2">
                        <b>TOTAL SALES</b>
                        </td>
                        <td className="font-poppins w-130 px-10">
                        <b>{FormattedPrice(generated?.reduce((a: any, b: any) => ( a + b.total), 0))} </b>
                        </td>
                    </tr>
                    </tbody>
                    </table>

</div>
  )
}
