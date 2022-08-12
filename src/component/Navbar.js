import React, { useContext, useState } from 'react'
import Logo from '../assets/logo2.png'
import {GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon, BellIcon, XCircleIcon} from '@heroicons/react/solid'
import Sidebar from './Sidebar'
import Main from './Main'
import { Context } from '../context'
import SidebarMobile from './SidebarMobile'

export default function Navbar() {
    const [search, setSearch] = useState('')
    const {show, setShow}  = useContext(Context)
  return (
    <>
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
   <div className='relative flex items-center w-20 h-8 cursor-pointer my-auto object-contain sm:mx-10'
      >
        <img
          alt='Header'
          src={Logo}
         className=" w-[80%] "
        />
      </div>

    <div className='flex items-center md:border-2 rounded-lg py-2 md:shadow-sm '>
        <input type={search} placeholder="Start your search"
        onChange={(e)=> setSearch(e.target.value)}
        className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-600 ' />
        <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
    </div>

    <div className=' flex items-center space-x-4 justify-end text-gray-500'>
        <BellIcon className='hidden h-6 cursor-pointer  sm:block' />
           <UserCircleIcon className='hidden sm:flex h-6' />
        
        <div className='flex items-center space-x-0 border-2 p-2 rounded-full  md:hidden '  onClick={()=>setShow(!show)} >
          {
            show?
            <XCircleIcon  className='inline md:hidden h-6 cursor-pointer'/>
            :
            <MenuIcon className='inline md:hidden h-6 cursor-pointer'/>
          }
        </div>
    </div>
    
</header>
<div className="flex fixed h-[100%] w-[100vw] ">
{
  show &&
  // <div className='absolute bg-white'>
  <SidebarMobile />
    // </div>
 
}
 <Sidebar/>
    <Main search={search}  />
    </div>
    </>
  )
}
