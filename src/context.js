import { createContext, useState } from "react";

export const Context = createContext()

const checkList = [
    {
        key:0,
     startingNum: 0,
     endingNum: 100,
     selected: false
    },
    {
        key:1,
     startingNum: 10,
     endingNum: 20,
     selected: false
    },
    {
        key:2,
     startingNum: 20,
     endingNum: 30,
     selected: false
    },
    {
        key:3,
     startingNum: 30,
     endingNum: 40,
     selected: false
    },
    {
        key:4,
     startingNum: 80,
     endingNum: 95,
     selected: false
    },
]

const categoriesList = [
    {
        key:0,
       category: 'Plants',
     selected: false
    },
    {
        key:1,
        category: 'Travel',
     selected: false
    },
    {
        key:2,
        category: 'Decoration',
     selected: false
    },
    {
        key:3,
        category: 'Drinks',
     selected: false
    },
    {
        key:4,
        category: 'Empty',
     selected: false
    },
]
export const UberProvider = ({ children }) => {
    const [priceselectin, setPriceselectin] = useState(checkList)
    const [optionValue, setOptionValue] = useState('')
    const [show, setShow] = useState(false)
    const [category, setCategory] = useState(categoriesList)

    return (
      <Context.Provider
        value={{ priceselectin ,
          setPriceselectin, 
          optionValue, 
          setOptionValue,category,
          setCategory,
          show,
          setShow
        }}
      >
        {children}
      </Context.Provider>
    )
  }
  