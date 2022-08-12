import { getValue } from '@testing-library/user-event/dist/utils'
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { Context } from '../context'

const data = [
    {
      "title": "Elegent designed fiber plant...",
      "rating": 4.5,
       "starLogo": "star_black_24dp.svg",
      "photo": "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.5.1&auto=format&fit=crop&w=2255&q=80",
      "price": 13.5,
      "category": "Plants"

    },
    {
      "title": "Coffee powder better morning...",
      "rating": 4.5,
       "starLogo": "star_black_24dp.svg",
      "photo": "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.5.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
      "price": 43.5,
      "category": "Drinks"
    },
    {

      "title": "Decorative insta camera toy...",
      "rating": 4.5,
       "starLogo": "star_black_24dp.svg",
      "photo": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.5.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
      "price": 48.5,
      "category": "Decoration"
    },
    {
      "title": "Bag pack - Travel unlimited w...",
      "rating": 4.5,
       "starLogo": "star_black_24dp.svg",
       "photo": "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.5.1&auto=format&fit=crop&w=2255&q=80",
       "price": 17.5,
       "category": "Travel"
      },
      {
        "title": "Decorative insta camera toy",
        "rating": 4.5,
        "starLogo": "star_black_24dp.svg",
        "photo": "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.5.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2249&q=80",
        "price": 25.5,
        "category": "Decoration"
      },
      {
        "title": "Elegent designed fiber plant...",
        "rating": 4.5,
        "starLogo": "star_black_24dp.svg",
        "photo": "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.5.1&auto=format&fit=crop&w=2255&q=80",
        "price": 13.5,
        "category": "Plants"
      },
      {
        "title": "Coffee powder better morning...",
        "rating": 4.5,
        "starLogo": "star_black_24dp.svg",
        "photo": "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.5.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
        "price": 13.5,
        "category": "Drinks"
      },
      {
        "title": "Bag pack - Travel unlimited w...",
        "rating": 4.5,
         "starLogo": "star_black_24dp.svg",
         "photo": "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.5.1&auto=format&fit=crop&w=2255&q=80",
         "price": 90.5,
         "category": "Travel"
        },
        
      ]

  
export default function Cards({search}) {
  const [mapData, setMapData] = useState(data)
  const [searchData, setSearchData] = useState()
  const [emptyPrice, setEmptyPrice] = useState()
  const [priceCheckData, setPriceCheckData] = useState()
  const [categoryCheckData, setCategoryCheckData] = useState()
  const {priceselectin, optionValue, category}  = useContext(Context)

  const checkPrice = ()=>{
    let stack = []
    let count = 0
    let categoryCount = 0
    for(let i =0;i<category.length;i++){
      if(category[i].selected == false){
        categoryCount++
      }
    }
      for(let i =0;i<priceselectin.length;i++){
        if(priceselectin[i].selected == false){
          count++
        }
        if(searchData){
          for(let j =0;j<searchData.length;j++){
            if(priceselectin[i].selected == true){
              if(priceselectin[i].startingNum < searchData[j].price && priceselectin[i].endingNum > searchData[j].price  ){
                stack.push(searchData[j])
              }
            }
          } 
        }else if(categoryCount != category.length && categoryCheckData){
          for(let j =0;j<categoryCheckData.length;j++){
            if(priceselectin[i].selected == true){
              if(priceselectin[i].startingNum < categoryCheckData[j].price && priceselectin[i].endingNum > categoryCheckData[j].price  ){
                stack.push(categoryCheckData[j])
              }
            }
          }
        } else{
          for(let j =0;j<data.length;j++){
            if(priceselectin[i].selected == true){
              if(priceselectin[i].startingNum < data[j].price && priceselectin[i].endingNum > data[j].price  ){
                stack.push(data[j])
              }
            }
          } 
        }
    }
     if(stack.length != 0 ){
      if(searchData)
      setSearchData(stack)
      else{
        setMapData(stack)
        setPriceCheckData(stack)
      }
      }
     console.log(count)
     if(count  == priceselectin.length  && searchData){
     setEmptyPrice(count)
      setMapData(data)
     }
  }
const check = ()=>{
  if(search.length == 0){
    setSearchData()
    setMapData(mapData)
    return
  }
  let stack = []
  for(let i =0;i<mapData.length;i++){
    if(mapData[i].title.includes(search)){
      stack.push(mapData[i])
      console.log(mapData[i])
    }
  }
  setSearchData(stack)
}

const checkCategory = ()=>{
  let stack = []
  let count = 0
  for(let i =0;i<priceselectin.length;i++){
    if(priceselectin[i].selected == false){
      count++
    }
  }
  for(let i =0;i<category.length;i++){
    if(count != priceselectin.length && priceCheckData){   
      for(let j =0;j<priceCheckData.length;j++){
        if(category[i].selected == true){
          if(category[i].category == priceCheckData[j].category){
            console.log(priceCheckData[j].category)
            stack.push(priceCheckData[j])
          }
        }
     } 
    }else{
      for(let j =0;j<data.length;j++){
        if(category[i].selected == true){
          if(category[i].category == data[j].category){
            stack.push(data[j])
          }
        }
      }
   } 
   }
   if(stack.length != 0){
     setCategoryCheckData(stack)
     setMapData(stack)
    }
   else
   setMapData(data)
 
}

useMemo(()=>{
  check()
},[search])
  useMemo(() => {
    // check()
    checkPrice()
  }, [priceselectin])

  useMemo(() => {
    checkCategory()
  }, [category])

  useMemo(()=>{
    if(optionValue == 'low to high'){
      mapData.sort((a, b) => {
        return a.price - b.price;
      });
    }else if(optionValue == 'high to low'){
      mapData.sort((a, b) => {
        return b.price - a.price;
    });
    }
  },[optionValue])
  
  return (
    <div className='grid sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-3 md:grid-rows-3 gap-x-8 gap-y-4  mt-5 mb-[10%] place-items-center'>
        {
       searchData? searchData.map((val)=>(
       <>
       <div className="max-w-xs rounded overflow-hidden shadow-lg cursor-pointer">
  <img className="w-full  " src={val.photo} alt="Sunset in the mountains "/>
  <div className="px-6 py-2">
    <div className="font-semibold text-gray-700 text-lg ">{val.title}</div>
    <p className="text-gray-700 text-base">
     {val.category}
    </p>
    <div className='flex items-center'>
    <img src="https://miro.medium.com/max/553/1*tAZ0DsBYgXTsn2BBLxlIIg.png" className='inline w-[40%]' />
    <p className="text-gray-700 text-base">
      ({val.rating})
    </p>
    </div>
    <h1 className="text-gray-800 text-xl font-bold">
     ${val.price}
    </h1>
  </div>
</div>
       </>
       )): 
       mapData.map((val)=>(
        <>
        <div className="max-w-xs rounded overflow-hidden shadow-lg cursor-pointer">
   <img className="w-full  " src={val.photo} alt="Sunset in the mountains "/>
   <div className="px-6 py-2">
     <div className="font-semibold text-gray-700 text-lg ">{val.title}</div>
     <p className="text-gray-700 text-base">
      {val.category}
     </p>
     <div className='flex items-center'>
     <img src="https://miro.medium.com/max/553/1*tAZ0DsBYgXTsn2BBLxlIIg.png" className='inline w-[40%]' />
     <p className="text-gray-700 text-base">
       ({val.rating})
     </p>
     </div>
     <h1 className="text-gray-800 text-xl font-bold">
      ${val.price}
     </h1>
   </div>
 </div>
        </>
        ))
        }
       
    </div>
  )
}

