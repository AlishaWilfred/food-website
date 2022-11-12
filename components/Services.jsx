import Image from 'next/image'
import React from 'react'

export default function Services() {
    const deliveryData=[
        {
            title:"Quick Delivery",
            image:"https://www.pngall.com/wp-content/uploads/12/Delivery-PNG-Background.png",
            detail:"Time is money, money is time, the faster we deliver the more you make"
        },
        {
            title:"Easy Pickup",
            image:"https://superfreshkitchens.com/wp-content/uploads/2020/10/Easy-Pickup-Icon.png",
            detail:"We make the things you need arrive on time. You focus on what you need to do"
        },
        {
            title:"Easy Order",
            image:"https://globalstrays.org/wp-content/uploads/2022/08/food-icon.png",
            detail:"Time is money, money is time, the faster we deliver the more you make"
        },
        
        ]
  return (
    <div className='mt-20 flex flex-col justify-center items-center'>
        {/* <div className='flex flex-col justify-center font-semibold space-y-2 items-center'>
            <span className='text-2xl text-orange-600'>What we serve</span>
            <span className='text-4xl'>Your Favourite Food</span>
            <span className='text-4xl'>Delivery Partner</span>

        </div> */}
        <div class="flex justify-between flex-col items-center ">
    <div class=" text-center space-y-3">
        <h3 class="text-orange-600 text-xl sm:text-2xl font-semibold">What we serve</h3>
        <h2 class="sm:text-5xl text-2xl font-extrabold tracking-widest">Just sit back at home</h2>
        <h2 class="sm:text-3xl text-xl font-semibold">We will <span class="text-orange-600 font-bold">take care</span></h2>
    </div>
    <div class=" flex">
        {
            deliveryData.map(item=>{
                return(
                    // <div className='flex'>
                    <div class="flex justify-center flex-col items-center mt-8 ">
                        
                        <div className='w-[120px] h-[100px]'>
                        <Image class=""src={item.image} layout="responsive" width={2} height={2} objectFit='contain' className=""/>
                        </div>
                        <div className='w-1/2 mt-4'>
                            <h2 class="text-center sm:text-xl text-lg font-bold">{item.title}</h2>
                            <p class="text-center  font-semibold text-gray-400">{item.detail}</p>
                            </div>
                        </div>
                        // </div>

                )
            })
        }
    </div>
</div>
    </div>
  )
}
