import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdPerson } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import SearchBarr from './SearchBarr';

const Navbar = () => {
    return (
        <>
            <nav className='container mx-auto flex items-center justify-between py-4 px-6'>

                <div >
                    <Link to='/' className='text-2xl font-bold text-gray-800'>E-Shop</Link>
                </div>

                <div>
                    <ul className='flex space-x-6'>
                        <li>
                            <Link to='/' className='text-gray-600 hover:text-gray-800'>Men</Link>
                        </li>
                        <li>
                            <Link to='/shop' className='text-gray-600 hover:text-gray-800'>Women</Link>
                        </li>
                        <li>
                            <Link to='/about' className='text-gray-600 hover:text-gray-800'>Top wear</Link>
                        </li>
                        <li>
                            <Link to='/contact' className='text-gray-600 hover:text-gray-800'>Bottom wear</Link>
                        </li>
                    </ul>
                </div>

                <div className='flex items-center space-x-4'>


                    <Link to='/profile' className='text-gray-600 hover:text-gray-800'>
                        <MdPerson className="h-6 w-6" />
                    </Link>

                    <button>
                        <Link to='/cart' className='text-gray-600 hover:text-gray-800'>
                            <HiOutlineShoppingBag className="h-6 w-6" />
                        </Link>

                        <span className='absolute -mt-7  text-xs bg-red-600 text-white rounded-full px-1'>
                            89
                        </span>
                    </button>


                    <SearchBarr />
                    {/* <Link to='/search' className='text-gray-600 hover:text-gray-800'>
                        <FaSearch className="h-5 w-6" />
                    </Link> */}
                </div>
            </nav>
        </>
    )
}

export default Navbar
