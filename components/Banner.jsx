import Image from 'next/image'
import React from 'react'
import {HiPhone} from "react-icons/hi"
import bannerPizza from "../assets/pizza-banner.jpg"

export default function Banner() {
    const pizz="https://pizzaolive.in/wp-content/uploads/2021/05/Pan-Pizza-min.png"
  return (
    <div className='grid grid-cols-1 justify-between   border-2 '>
        {/* left side */}
       

        <div className='relative grid grid-cols-1 w-full '>
            <Image src={bannerPizza} priority alt="" layout='' objectFit='cover' width={500} height={500} className=''/>
        </div>
        <div className='flex absolute left-20 mt-20 flex-col'>
            <div className='flex flex-col gap-y-2 p-2 text-white'>
         <span className='text-4xl font-bold'>Good</span>
         <span className='text-4xl font-bold'>Pizza,</span>
         <span className='text-4xl font-bold'>Great <span className='text-orange-500'>Pizza</span></span>
       
         <span className='p-2 font-semibold text-red-200 w-2/3'>Best cooks and best delivery guys all at your service.</span>
         <div className='flex gap-3'>
         <button className='btn px-5 py-2'>Order now</button>
         <button className='btn-outline px-5 py-2 flex items-center gap-2'><span><HiPhone/></span>Contact Us</button>
         </div>
        </div>
       
        </div>
    </div>
  )
}
