import React from 'react'
import Cards from './Cards'
import Header from './Header'

export default function Main({search, setSearch}) {
  return (
    <div
    className='w-[100vw] overflow-y-scroll '>
        <Header/>
        <Cards search={search}/>
    </div>
  )
}
