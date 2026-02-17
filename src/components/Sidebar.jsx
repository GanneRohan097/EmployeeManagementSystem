import React, { useState } from 'react'
import { Menu, ArrowRightFromLine } from "lucide-react";
import { FaHome, FaUsers, FaPlus, FaCog} from "react-icons/fa";
const Sidebar = ({setpage}) => {
  const [open,setopen]=useState(true);
  console.log(open);
  return (
    <>
    <div className={`flex flex-col h-full  transition-all duration-500 ${open?"w-10":"w-0 overflow-hidden"}`}>
    <ArrowRightFromLine className={`absolute text-black cursor-pointer transition-all duration-500 ${open?"w-0":"block animate-bounce"}`}
     onClick={()=>setopen(true)}
    />
      <Menu className='text-white ml-1 mb-9 cursor-pointer' onClick={()=>setopen(!open)}></Menu>
    <div>
        <FaHome onClick={()=>setpage("Home")} className='text-3xl text-white mb-4 cursor-pointer'></FaHome>
        <FaUsers className='text-3xl text-white mb-4 cursor-pointer'></FaUsers>
        <FaPlus onClick={()=>setpage("AddEmp")} className='text-3xl text-white mb-4 cursor-pointer'></FaPlus>
        <FaCog className='text-3xl text-white'></FaCog>
        </div>
    </div>
    </>
  )
}

export default Sidebar