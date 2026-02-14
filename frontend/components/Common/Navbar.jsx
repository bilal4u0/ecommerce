import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdPerson } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import SearchBarr from './SearchBarr';
import { useState } from 'react';
import { HiBars3BottomRight } from "react-icons/hi2";
import CartDrawer from '../Layout/CartDrawer';
import { IoClose } from 'react-icons/io5';

const Navbar = () => {

    const [drawerOpen, setDrawerOpen] = useState(false)
    const [navDrawerOpen, setNavDrawerOpen] = useState(false)

    const togglenavDrawer = () => {
        setNavDrawerOpen(!navDrawerOpen)
    }

    const togglecartDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }

    return (
        <>
            <nav className='w-full px-4 sm:px-6 py-3 md:py-4'>
                <div className='max-w-7xl mx-auto flex items-center justify-between'>
                    {/* Logo */}
                    <div>
                        <Link to='/' className='text-lg sm:text-xl md:text-2xl font-bold text-gray-800'>E-Shop</Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className='hidden md:block'>
                        <ul className='flex space-x-4 lg:space-x-6'>
                            <li>
                                <Link to='/' className='text-sm lg:text-base text-gray-600 hover:text-gray-800 transition'>Men</Link>
                            </li>
                            <li>
                                <Link to='/shop' className='text-sm lg:text-base text-gray-600 hover:text-gray-800 transition'>Women</Link>
                            </li>
                            <li>
                                <Link to='/about' className='text-sm lg:text-base text-gray-600 hover:text-gray-800 transition'>Top wear</Link>
                            </li>
                            <li>
                                <Link to='/contact' className='text-sm lg:text-base text-gray-600 hover:text-gray-800 transition'>Bottom wear</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Icons & Actions */}
                    <div className='flex items-center space-x-3 sm:space-x-4'>
                        {/* Profile */}
                        <Link to='/profile' className='text-gray-600 hover:text-gray-800 transition'>
                            <MdPerson className="h-5 w-5 sm:h-6 sm:w-6" />
                        </Link>

                        {/* Cart */}
                        <button onClick={togglecartDrawer} className='relative text-gray-600 hover:text-gray-800 transition'>
                            <HiOutlineShoppingBag className="h-5 w-5 sm:h-6 sm:w-6" />
                            <span className='absolute -top-2 -right-2 text-xs bg-red-600 text-white rounded-full h-5 w-5 flex items-center justify-center'>
                                89
                            </span>
                        </button>

                        {/* Search */}
                        <div>

                            <SearchBarr />
                        </div>

                        {/* Mobile Menu Button */}
                        <button className='md:hidden text-gray-600 hover:text-gray-800 transition' onClick={togglenavDrawer}>
                            <HiBars3BottomRight className="h-6 w-6 text-gray-600" />
                        </button>
                    </div>
                </div>
            </nav>
            <CartDrawer drawerOpen={drawerOpen} togglecartDrawer={togglecartDrawer} />

            <div className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${navDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`}>

                <div className='flex justify-end p-4'>
                    <button onClick={togglenavDrawer}>
                        <IoClose className="h-6 w-6 text-gray-600" />
                    </button>

                </div>
                <div className='p-4'>
                    <h2 className='text-lg font-semibold text-gray-800 flex justify-center'>Menu</h2>
                    <nav>
                        <Link to='/#' className='block py-2 text-gray-600 hover:text-gray-800'>Men</Link>
                        <Link to='/#' className='block py-2 text-gray-600 hover:text-gray-800'>Women</Link>
                        <Link to='/#' className='block py-2 text-gray-600 hover:text-gray-800'>Top Wear</Link>
                        <Link to='/#' className='block py-2 text-gray-600 hover:text-gray-800'>Bottom Wear</Link>

                    </nav>
                </div>

            </div>

            <div className='border border-gray-200 '>

            </div>
        </>
    )
}

export default Navbar
