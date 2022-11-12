import React from 'react'
import { urlFor } from '../lib/client'
import Image from 'next/image'
import Link from 'next/link'

export default function Menu({pizzas}) {
    
  return (
    <div className='mt-20 '>
        <div className=' '>
            <h1 className='text-3xl font-bold text-center'>Our Menu</h1>
           
        </div>
        <div className='grid grid-cols-4 border  space-y-5 flex-wrap justify-center mt-10'>
        {
            pizzas.map((pizza,id)=>{
                const src=urlFor(pizza.image).url()
                return(
                <div key={id} className="m-2 hover:cursor-pointer">
                    <Link href={`./pizza/${pizza.slug.current}`}>
                    <div className='h-[16rem] w-[18rem] hover:scale-105 relative overflow-hidden rounded-lg'>
                    <Image 
                    loader={()=>src}
                    src={src} alt="" 
                    layout="fill"
                    objrctFit="cover"
                    />
                    </div>
                    </Link>
                    <div className='flex flex-col gap-2'>
                        <span className='mt-2 font-semibold text-gray-800 text-lg'>{pizza.name}</span>
                        <span className='text-orange-600 font-bold text-lg'>${pizza.price[1]}</span>

                        </div>
                    </div>
            )})
        }
        </div>
        <div>

</div>
    </div>
  )
}
