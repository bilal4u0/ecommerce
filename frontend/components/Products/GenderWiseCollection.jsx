import React from 'react'
import MensCollectionImg from "../../src/assets/mens-collection.webp"
import WoMensCollectionImg from "../../src/assets/womens-collection.webp"

const GenderWiseCollection = () => {
    return (
        <section className='py-16 px-16 lg:px-0'>
            <div className='container mx-auto flex flex-col md:flex-row gap-8'>

                <div className='relative flex-1'>
                    <img src={WoMensCollectionImg} alt="Womens Collection" className='w-full h-175 object-cover' />
                </div>

            </div>
            <img src={MensCollectionImg} alt="" className='w-[50vw]' />
        </section>

    )
}

export default GenderWiseCollection
