import React from 'react'
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';

const SearchBarr = () => {

  const [searchItem, setSearchItem] = useState("")
  const [isOpen, setisOpen] = useState(false)

  const handleClick = () => {
    setisOpen(!isOpen)
  }


  return (
    <>
      <div className={`flex items-center justify-center w-full transition-all duration-300 ${isOpen ? 'absolute top-0 left-0  w-full bg-white' : 'md:w-12'}`}>

        {isOpen ? (
          <form className='relative flex items-center justify-center w-full'>
            <div className='relative w-1/2'>
              <input
                type="text"
                placeholder='Search'
                className='bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-500'
                value={searchItem}
                autoFocus
                onChange={(e) => setSearchItem(e.target.value)}
              />
            </div>
          </form>) :
          (<button onClick={handleClick}><FaSearch className="h-5 w-5" /></button>)}
      </div>

    </>
  )
}

export default SearchBarr
