import React from 'react'
import { RiDeleteBin3Line } from 'react-icons/ri'

const CartContaints = () => {

    const cartProducts = [
        {
            ProductId: 1,
            name: "T-Shirt",
            size: "M",
            color: "Red",
            quantity: 1,
            price: 15,
            image: "https://picsum.photos/200?random=1"
        },
        {
            ProductId: 2,
            name: "Jeans",
            size: "M",
            color: "Blue",
            quantity: 1,
            price: 23,
            image: "https://picsum.photos/200?random=2"
        },
        {
            ProductId: 3,
            name: "Formal pant",
            size: "M",
            color: "Black",
            quantity: 1,
            price: 11,
            image: "https://picsum.photos/300?random=3"
        },
    ]
    return (
        <div>
            {cartProducts.map((Product, index) => (
                <div key={index} className='flex items-center mb-4 border-b pb-4'>
                    <div className='flex items-start'>
                        <img src={Product.image} alt={Product.name} className='w-25 h-29  rounded mr-4' />

                        <div>
                            <h3>{Product.name}</h3>
                            <p className='text-sm text-gray-500'>Size: {Product.size} | Color: {Product.color}</p>

                            <div className='flex items-center mt-2'>
                                <button className='border rounded px-2 py-1 text-xl font-medium'>
                                    -
                                </button>
                                <span className='mx-4'>{Product.quantity}</span>
                                <button className='border rounded px-2 py-1 text-xl font-medium'>
                                    +
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className='flex flex-col justify-end items-end m-auto'>
                        <p>${Product.price.toLocaleString()}</p>
                        <button>
                            <RiDeleteBin3Line className='h-6 w-6 text-red-600 mt-2' />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default CartContaints
