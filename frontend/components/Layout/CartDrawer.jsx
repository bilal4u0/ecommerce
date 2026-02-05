import React from 'react'
import { IoMdClose } from 'react-icons/io'
import { useState } from 'react'
import CartContaints from '../Cart/CartContaints'

const CartDrawer = ({ drawerOpen, togglecartDrawer }) => {



    return (
        <>
            {/* Overlay */}
            {drawerOpen && (
                <div
                    className='fixed inset-0 bg-opacity-50 z-40 transition-opacity duration-300 '
                    onClick={togglecartDrawer}
                />
            )}

            {/* Drawer */}
            <div className={`fixed top-0 right-0 w-full sm:w-96 md:w-80 lg:w-96 h-screen bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 flex flex-col ${drawerOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                {/* Header */}
                <div className='flex justify-between items-center p-4 sm:p-6 border-b'>
                    <h2 className='text-xl sm:text-2xl font-bold text-gray-800'>My Cart</h2>
                    <button onClick={togglecartDrawer} className='text-gray-600 hover:text-gray-800 transition'>
                        <IoMdClose className="h-6 w-6" />
                    </button>
                </div>

                {/* Cart Items */}
                <div className='flex-grow p-4 sm:p-6 overflow-y-auto'>
                    <CartContaints />
                </div>

                {/* Footer */}
                <div className='p-4 sm:p-6 border-t bg-gray-50'>
                    <button className='w-full bg-blue-600 text-white py-2 sm:py-3 px-4 rounded-lg hover:bg-blue-700 transition font-medium'>
                        Proceed to Checkout
                    </button>
                    <p className='text-xs sm:text-sm text-center text-gray-600 mt-3'>
                        Shipping, taxes, and discounts calculated at checkout.
                    </p>
                </div>
            </div>
        </>
    )
}

export default CartDrawer
