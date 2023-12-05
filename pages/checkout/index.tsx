import HomePageLayout from '@/layout/homepagelayout'
import PageWithLayout from '@/layout/pagewithlayout'
import React, { FC, useState } from 'react'
import Modal from '@/components/Modal';

const  Checkout: FC= () => {
    const [ isModalOpen, setIsModalOpen ] = useState(true);

    const handleOpenModalCard = () => {
        setIsModalOpen(true);
    }

    const handleCloseModalCard = () => {
        setIsModalOpen(false);
    };

    const handleOpenModalCash = () => {
        setIsModalOpen(true);
    }

    const handleCloseModalCash = () => {
        setIsModalOpen(false);
    };

    const handleOpenModalGcash = () => {
        setIsModalOpen(true);
    }

    const handleCloseModalGcash = () => {
        setIsModalOpen(false);
    };

    const handleOpenModalMaya = () => {
        setIsModalOpen(true);
    }

    const handleCloseModalMaya = () => {
        setIsModalOpen(false);
    };

    const handleOpenModalBankTrans = () => {
        setIsModalOpen(true);
    }

    const handleCloseModalBankTrans = () => {
        setIsModalOpen(false);
    };

    return ( 
    <div className="h-screen pt-24 pb-28 grid grid-cols-3">
        <div className="lg:col-span-2 col-span-3 bg-indigo-50 space-y-8 px-12">
            <div className="mt-8 p-4 relative flex flex-col sm:flex-row sm:items-center bg-white shadow rounded-md">
                <div className="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0">
                    <div className="text-yellow-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 sm:w-5 h-6 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className="text-sm font-medium ml-3">Checkout</div>
                </div>
                <div className="text-sm tracking-wide text-gray-500 mt-4 sm:mt-0 sm:ml-4">Complete your shipping and payment details below.</div>
                <div className="absolute sm:relative sm:top-auto sm:right-auto ml-auto right-4 top-4 text-gray-400 hover:text-gray-800 cursor-pointer">
                </div>
            </div>
            <div className="rounded-md">
                <form id="payment-form" method="POST" action="">
                    <section>
                    <div className="mt-6">
                    <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">Delivery Option</h2>
                        <fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600">
                                <button className="flex items-center justify-between w-full bg-white rounded-md border-2 border-gray-200 p-4 focus:outline-none">
                                    <label className="flex items-center">
                                        <input type="radio" className="form-radio h-5 w-5 text-yellow-600" checked/><span className="ml-2 text-sm text-gray-700">Pickup</span>
                                    </label>
                                </button>
                                </fieldset>
                            </div>
                        <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">Billing Address</h2>
                        <fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600">
                            <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span className="text-right px-2">Name</span>
                                <input name="name" className="focus:outline-none px-3" placeholder="Name" required/> 
                            </label>
                            <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span className="text-right px-2">Phone Number</span>
                                <input name="email" type="email" className="focus:outline-none px-3" placeholder="+63xxxxxxxxxx" required/> 
                            </label>
                
                        </fieldset>
                    </section>
                </form>
            </div>
            <div className="rounded-md">
                <section>
                    <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">Payment Information</h2>
                    <fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600">
                                <button className="flex items-center justify-between w-full bg-white rounded-md border-2 border-gray-200 p-4 focus:outline-none">
                                    <label className="flex items-center">
                                        <input type="radio" className="form-radio h-5 w-5 text-yellow-600"/><span className="ml-2 text-sm text-gray-700">Pay upon Pickup - Card</span>
                                    </label>
                                </button>

                                <button className="flex items-center justify-between w-full bg-white rounded-md border-2 border-gray-200 p-4 focus:outline-none">
                                    <label className="flex items-center">
                                        <input type="radio" className="form-radio h-5 w-5 text-yellow-600"/><span className="ml-2 text-sm text-gray-700">Pay upon Pickup - Cash</span>
                                    </label>
                                </button>

                                <button className="flex items-center justify-between w-full bg-white rounded-md border-2 border-gray-200 p-4 focus:outline-none">
                                    <label className="flex items-center">
                                        <input type="radio" className="form-radio h-5 w-5 text-yellow-600"/><span className="ml-2 text-sm text-gray-700">Pay via Maya</span>
                                    </label>
                                </button>

                                <button className="flex items-center justify-between w-full bg-white rounded-md border-2 border-gray-200 p-4 focus:outline-none">
                                    <label className="flex items-center">
                                        <input type="radio" className="form-radio h-5 w-5 text-yellow-600"/><span className="ml-2 text-sm text-gray-700">Pay via Gcash</span>
                                    </label>
                                </button>

                                <button className="flex items-center justify-between w-full bg-white rounded-md border-2 border-gray-200 p-4 focus:outline-none">
                                    <label className="flex items-center">
                                        <input type="radio" className="form-radio h-5 w-5 text-yellow-600" /><span className="ml-2 text-sm text-gray-700">Pay via Bank Transfer (BPI)</span>
                                    </label>
                                </button>
                    </fieldset>
                </section>
            </div>
            <button className="submit-button px-4 py-3 rounded-full bg-[#FFBD59] text-white focus:ring focus:outline-none w-full text-xl font-semibold transition-colors">
                Place Order Now
            </button>
        </div>
        <div className="col-span-1 bg-white lg:block hidden">
            <h1 className="py-6 border-b-2 text-xl text-gray-600 px-8">Order Summary</h1>
            <ul className="py-6 border-b space-y-6 px-8">
                <li className="grid grid-cols-6 gap-2 border-b-1">
                    <div className="col-span-1 self-center">
                        <img src="https://bit.ly/3oW8yej" alt="Product" className="rounded w-full"/>
                    </div>
                    <div className="flex flex-col col-span-3 pt-2">
                        <span className="text-gray-600 text-md font-semi-bold">Motolite</span>
                        <span className="text-gray-400 text-sm inline-block pt-2">Oil</span>
                    </div>
                    <div className="col-span-2 pt-3">
                        <div className="flex items-center space-x-2 text-sm justify-between">
                            <span className="text-gray-400">2 x PHP 1000</span>
                            <span className="text-yellow-400 font-semibold inline-block">PHP 2000</span>
                        </div>
                    </div>
                </li>
                <li className="grid grid-cols-6 gap-1 border-b-1">
                    <div className="col-span-1 self-center">
                        <img src="https://bit.ly/3lCyoSx" alt="Product" className="rounded w-full"/> 
                    </div>
                    <div className="flex flex-col col-span-3 pt-2">
                        <span className="text-gray-600 text-md font-semi-bold">Motolite</span>
                        <span className="text-gray-400 text-sm inline-block pt-2">Fluid</span>
                    </div>
                    <div className="col-span-2 pt-3">
                        <div className="flex items-center space-x-2 text-sm justify-between">
                            <span className="text-gray-400">1 x PHP 785</span>
                            <span className="text-yellow-400 font-semibold inline-block">PHP 785</span>
                        </div>
                    </div>
                </li>
            </ul>
            <div className="px-8 border-b">
                <div className="flex justify-between py-4 text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-semibold text-yellow-500">PHP 2785</span>
                </div>
                <div className="flex justify-between py-4 text-gray-600">
                    <span>Shipping</span>
                    <span className="font-semibold text-yellow-500">Free</span>
                </div>
            </div>
            <div className="font-semibold text-xl px-8 flex justify-between py-8 text-gray-600">
                <span>Total</span>
                <span>PHP 2785</span>
            </div>
        </div>
    
    </div>
)
    
}

(Checkout as PageWithLayout).layout = HomePageLayout
export default Checkout