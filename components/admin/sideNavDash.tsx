import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Transition, Disclosure } from "@headlessui/react";
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
import {TbListSearch, TbUsers, 
    TbFiles, TbCalendar, TbShoppingBag, 
    TbClock, TbGraph, TbFileAnalytics, 
    TbList, TbArchive, TbClipboard, 
    TbMessage, TbSettings2, TbLogout2, 
    TbArrowLeft, TbChevronLeft, TbChevronRight, 
    TbSettings  } from 'react-icons/tb'
import { CgProfile } from "react-icons/cg";
import { FaRegComments } from "react-icons/fa";
import { BiMessageSquareDots } from "react-icons/bi";
import Image from "next/image";
import router from "next/router";
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Transition, Disclosure } from "@headlessui/react";
import { GiCarWheel } from "react-icons/gi";
import { GiCartwheel } from "react-icons/gi";
import { BiSolidCarBattery } from "react-icons/bi";
import { IoListSharp } from "react-icons/io5";
import { LiaOilCanSolid } from "react-icons/lia";
import { BiSolidCylinder } from "react-icons/bi";

const routes = [
    { name: "Customer Management" , url: "/admin/customer", icons: <TbUsers size={30} />}, 
    { name: "Product Management", url: "/admin/product", icons: <TbFiles size={30} />},
    { name: "Service Management", url: "/admin/service", icons: <TbListSearch size={30} />}, 
    { name: "Order Management", url: "/admin/order", icons: <TbShoppingBag size={30} />},
    { name: "Appointments", url:"/admin/appointment", icons: <TbClock size={30} />},
    { name: "Inventory", url: "/admin/inventory", icons: <TbClipboard size={30}/>},
]


const submenu = [
    { name: "Generate Reports", url :"/admin/report/generatereport", icons: <TbFileAnalytics size={30}/>},
    { name: "Audit Logs", url: "/admin/report/auditlog", icons: <TbList size={30}/>},
    { name: "Report Archive", url: "/admin/report/reportarchive", icons: <TbArchive size={30}/>}
]



function SideNavbar() {
  const [ reports, setReports ] =  useState(false)

  const [open, setOpen] = useState(false);

  const handleClick = () => {
     setOpen(!open);
  };

  return (
    <div>
      <Disclosure as="nav">
        <Disclosure.Button className="absolute top-60 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
          <GiHamburgerMenu
            className="block lg:hidden h-6 w-6"
            aria-hidden="true"
          />
        </Disclosure.Button>
        <div className="pt-40 lg:w-[350px] h-screen bg-white z-20 fixed top-0 -left-96 sm:left-0 sm:w-1/3 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="flex flex-col justify-start item-center">
            <h1 className="text-base text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 pb-4 w-full">
                <div className="pl-24 pb-4">
            <Image src="/logo.png" alt="" height={20} width={70} />
            </div>
        <span className="font-roboto lg:text-2xl sm:text-lg font-extrabold text-[#FFBD59] pt-4">Minerva Sales Corporation</span>
            </h1>
            
            <div className=" my-4 border-b border-gray-100 pb-4">
              <div className="flex flex-col mb-2 items-center gap-4 pl-5">
              {routes.map(({ name, url, icons}) => (
                <button onClick={() => router.push(`${url}`)} className="w-full flex gap-2 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                    <span className="text-2xl text-gray-600 group-hover:text-white "> {icons} </span>
                   <span className="text-base text-gray-800 group-hover:text-white font-semibold "> {name}</span>
                </button>
                ))}
              </div>
              <button onClick={() => setReports(() =>!reports)} className="w-60 mb-2 ml-[21px] hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <div className='w-full flex gap-2 text-md text-gray-800 group-hover:text-white font-semibold'>
                    <TbGraph size={30}/>
                    <span className="pt-[1px] text-[16px]">Reports</span>
                    <TbChevronRight className='pt-[1px]' size={25} />
                </div>
                
            </button>
              {
                reports ? 
              <div className='flex flex-col mb-2 items-center gap-4 pl-5'>    
                    {submenu.map(({name, url, icons}) => (
                        <button onClick={() => router.push(url)} className="w-full flex gap-2 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                            <span className="text-2xl text-gray-600 group-hover:text-white "> {icons} </span>
                            <span className="text-base text-gray-800 group-hover:text-white font-semibold "> {name}</span>
                        </button>
                    ))}
                </div>  : null
            }
              

            </div>
            {/* setting  */}
            <div className=" my-4 border-b border-gray-100 pb-4">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineSettings className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Settings
                </h3>
              </div>
            </div>
            {/* logout */}
            <div className=" my-4">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-200  hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineLogout className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Logout
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
}

export default SideNavbar;