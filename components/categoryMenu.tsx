import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Transition, Disclosure } from "@headlessui/react";
import { GiCarWheel } from "react-icons/gi";
import { GiCartwheel } from "react-icons/gi";
import { BiSolidCarBattery } from "react-icons/bi";
import { IoListSharp } from "react-icons/io5";
import { LiaOilCanSolid } from "react-icons/lia";
import { BiSolidCylinder } from "react-icons/bi";

const productCategoryLInk = [
  { name: "View All", icon: <IoListSharp size="40px"  />, value: ""  },
  { name: "Tires", icon: <GiCarWheel size="40px" />, value: "Tire"},
  { name: "Car Battery", icon: <BiSolidCarBattery size="40px" />, value: "Car Battery"  },
  { name: "Tire Mags", icon: <GiCartwheel size="40px" />, value: "Tire Mags" },
  { name: "Oils", icon: <LiaOilCanSolid size="40px" />, value: "Oils"},
  { name: "Car Filters", icon: <BiSolidCylinder size="40px" />, value: "Car Filters" },

]



function SideNavbar() {



  // const [ productsTake, setProductsTake ] = useState(10)  // you can set this on default
  // const [ products, setProducts ] = useState<[]>()

  // const [ search, setSearch ] = useState("")
  // const [ productSearch, setProductSearch ] = useState<any>(null)
  // const [ productCategory, setProductCategory ] =useState<any>(null)

  // const [ page, setPage] = useState(0)
  // const [ userId, setUserId] = useState("")


  const [open, setOpen] = useState(false);

  const handleClick = () => {
     setOpen(!open);
  };
  const [ category, setCategory ] = useState("")

  const [ isOpen, setIsOpen ] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Disclosure as="nav">
        <Disclosure.Button className="fixed top-32 left-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
          <GiHamburgerMenu
            className="block lg:hidden h-6 w-6"
            aria-hidden="true"
          />
        </Disclosure.Button>
        <div className="p-6 w-60 lg:w-[350px] h-[600px] bg-white fixed top-48 rounded-3xl sm:left-0 sm:w-1/3 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
      
          <div className="flex flex-col justify-start item-center">

            <div className=" my-20 border-b border-gray-100 pb-4">
              <div className="flex flex-col mb-2 items-center gap-4 pl-5">
              {productCategoryLInk.map(({ name, value, icon}) => (
                <button value={value} onClick={(e) => setCategory(e.currentTarget.value)} className=" w-full flex gap-2 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                    <span className="text-2xl text-gray-600 group-hover:text-white "> {icon} </span>
                   <span className="text-base text-gray-800 group-hover:text-white font-semibold "> {name}</span>
                   </button>
                ))}
              </div>
              
            </div>
            
        </div>

        </div>
      </Disclosure>
    </div>
  );
}

export default SideNavbar;