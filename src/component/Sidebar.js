import React, { useEffect, useState, useContext } from 'react'
import {Context} from '../context'

const brand = [
    {
        value: 'Plants'
    },
    {
        value: 'Travel'
    },
    {
        value: 'Decoration'
    },
    {
        value: 'Drinks'
    },
    {
        value: 'Empty'
    },
]
const price = [
    {
        value: '<$100'
    },
    {
        value: '$10-$20'
    },
    {
        value: '$20-$30'
    },
    {
        value: '$30-$40'
    },
    {
        value: '$80-$95'
    },
]


export default function Sidebar() {
 const [value, setValue] = useState('')
 const {priceselectin, setPriceselectin , category, setCategory} = useContext(Context)
 const setSelected = (value, selectedState, setSelectedState) => {
    const data = selectedState.map((feed) => ({
        ...feed,
        selected: feed.key == value ? true : feed.selected
    }))
    console.log(data)
    setSelectedState(data)
   
}
const removeSelected = (value, selectedState, setSelectedState) => {
    const data = selectedState.map((feed) => ({
        ...feed,
        selected: feed.key == value ? false : feed.selected
    }))
    console.log(data)
    setSelectedState(data)
}

const checkIsCheckedOrNot = (e,value, selectedState, setSelectedState)=>{
  if(e.target.checked){
   setSelected(value,selectedState, setSelectedState)
  }else{
    removeSelected(value, selectedState, setSelectedState)
  }
}
  return (
    <div className=' hidden md:inline h-[80vh]  w-[20vw]  m-2 overflow-y-scroll border-r-2 border-gray-400'>
        <div className='flex items-center justify-around'>
            <h1>Filter</h1>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="gray">
  <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
</svg>

        </div>
        <br></br>
            <hr></hr>
        <p>Brand</p>
        {
            brand.map((val,i)=> (
                <div className='flex ml-8'>
        <input type="checkbox" name="ips" value={val.value} onChange={(e)=> checkIsCheckedOrNot(e,i,category,setCategory)}/>
        <p className='ml-2'>{val.value}</p>
        </div>
            ))
        }
        <br></br>
        <hr></hr>
        <p>Category</p>
        {
            brand.map((val,i)=> (
        <div className='flex ml-8'>
        <input type="checkbox" name="ips" value={val.value} onChange={(e)=> checkIsCheckedOrNot(e,i,category,setCategory)} />
        <p className='ml-2'>{val.value}</p>
        </div>
            ))
        }
        <br></br>
        <hr></hr>
        <p>Price</p>
        {
            price.map((val,i)=> (
        <div className='flex ml-8'>
        <input type="checkbox" name="ips" value={val.value} onChange={(e)=> checkIsCheckedOrNot(e,i,priceselectin,setPriceselectin)} />
        <p className='ml-2'>{val.value}</p>
        </div>
            ))
        }
    </div>
  )
}
