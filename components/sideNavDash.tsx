import React, { useEffect, useState } from "react";
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
import { GiCarWheel } from "react-icons/gi";
import { GiCartwheel } from "react-icons/gi";
import { BiSolidCarBattery } from "react-icons/bi";
import { IoListSharp } from "react-icons/io5";
import { LiaOilCanSolid } from "react-icons/lia";
import { BiSolidCylinder } from "react-icons/bi";

const productCategoryLInk = [
  { name: "View All", icons: <IoListSharp size="40px"  />, value: ""  },
  { name: "Tires", icons: <GiCarWheel size="40px" />, value: "Tire"},
  { name: "Car Battery", icons: <BiSolidCarBattery size="40px" />, value: "Car Battery"  },
  { name: "Tire Mags", icons: <GiCartwheel size="40px" />, value: "Tire Mags" },
  { name: "Oils", icons: <LiaOilCanSolid size="40px" />, value: "Oils"},
  { name: "Car Filters", icons: <BiSolidCylinder size="40px" />, value: "Car Filters" },

]
const [ productCategory, setProductCategory ] =useState<any>(null)

useEffect(() => {
  const fetchData = async () => {
    const response = await fetch(`http://localhost:3001/product/getProductsByCategory/?category=${category}&skip=${page}&orderby=${filterProducts}`, {
        method: "GET",
        headers: { 'Content-Type': 'application/json' },
    })

    const result = await response.json()
    setProductCategory(result)
  }
  fetchData()
} ,[ productCategory ])


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
            
            
            <div className=" my-4 border-b border-gray-100 pb-4">
              <div className="flex flex-col mb-2 items-center gap-4 pl-5">
              {productCategoryLInk.map(({ name, value, icons}) => (
                <button value={value} className=" w-full flex gap-2 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                    <span className="text-2xl text-gray-600 group-hover:text-white "> {icons} </span>
                   <span className="text-base text-gray-800 group-hover:text-white font-semibold "> {name}</span>
                   </button>
                ))}
                
             
              
                </div>
            </div>
            {/* setting  */}
            
          </div>
        </div>
      </Disclosure>
    </div>
  );
}

export default SideNavbar;