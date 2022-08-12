import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context'

const navData = [
    {
      value: 'Home'
    },
    {
      value: 'HomeDecoration'
    },
    {
      value: 'Artificial'
    },
]
export default function Header() {
     const {optionValue , setOptionValue}  = useContext(Context)
  return (
    <div className='mt-2'>
        <div className='flex items-center justify-between'>
            <div className='sm:flex  hidden '>
       {
           navData.map((val)=> (
               <h1 className='ml-2 text-s'>{val.value} /</h1>
               ))
            }
            </div>
            <div className='ml-[45%] sm:ml-0'>
            <select className='border-2  border-gray-400 rounded-md text-s mr-2 cursor-pointer' onChange={(e)=> setOptionValue(e.target.value)} >
            <option value="none" selected disabled hidden>Sort by</option>
                <option>low to high</option>
                <option>high to low</option>
            </select>
            </div>
            </div>
    </div>
  )
}
