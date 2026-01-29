import React from 'react'
import { TbBrandMeta } from "react-icons/tb"
import { IoLogoInstagram } from "react-icons/io5"
import { IoLogoGithub } from 'react-icons/io5'

const Topbar = () => {
    return (
        <div className='bg-red-600 text-white'>
            <div className='container mx-auto flex justify-between items-center py-2 text-sm'>
                <div className='hidden md:flex gap-4'>
                    <a href="#" className='hover:text-gray-300'><TbBrandMeta className="h-5 w-5" /></a>
                    <a href="#" className='hover:text-gray-300 '><IoLogoInstagram className="h-5 w-5" /></a>
                    <a href="#" className='hover:text-gray-300 '><IoLogoGithub className="h-5 w-5" /></a>
                </div>

                <div className='text-sm text-center flex-grow'>
                    <span>Free shipping on orders over $50 — no extra charges, no surprises.</span>
                </div>

                <div className='text-sm hidden md:block'>
                    <a href="tel:+8951479967" className='hover:text-gray-300'>
                        +89 514 799 67
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Topbar
