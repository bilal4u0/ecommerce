import React from 'react'
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';
import { MdClose } from "react-icons/md";

const SearchBarr = () => {

  const [searchItem, setSearchItem] = useState("")
  const [isOpen, setisOpen] = useState(false)

  const handleClick = () => {
    setisOpen(!isOpen)
  }

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchItem);
    setisOpen(false);
    // setSearchItem("");
  }

  return (
    <>
      {isOpen && (
        <div className='fixed inset-0 bg-white bg-opacity-50 z-40 sm:hidden' onClick={handleClick} />
      )}
      
      <div className={`transition-all duration-300 ${isOpen ? 'fixed top-0 left-0 w-full bg-white h-20 z-50 flex items-center justify-center px-4 sm:relative sm:top-auto sm:left-auto sm:w-auto sm:bg-transparent sm:h-auto sm:z-auto' : 'w-auto'}`}>
        {isOpen ? (
          <form onSubmit={handleSearch} className='relative flex items-center gap-2 w-full sm:w-64'>
            <div className='relative flex-1 sm:flex-none sm:w-64'>
              <input
                type="text"
                placeholder='Search products...'
                className='w-full bg-gray-100 px-4 py-2 pl-3 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500 text-sm sm:text-base'
                value={searchItem}
                autoFocus
                onChange={(e) => setSearchItem(e.target.value)}
              />
              <button type='submit' className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition'>
                <FaSearch className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
            <button type='button' onClick={handleClick} className='text-gray-500 hover:text-gray-700 transition'>
              <MdClose className="h-6 w-6" />
            </button>
          </form>
        ) : (
          <button onClick={handleClick} className='text-gray-600 hover:text-gray-800 transition'>
            <FaSearch className="h-5 w-5" />
          </button>
        )}
      </div>
    </>
  )
}

export default SearchBarr
