import Image from 'next/image'
import React, {  useState } from 'react'
import Layout from '../components/Layout'
import { urlFor } from '../lib/client'
import { useStore } from '../store/store'
import toast,{Toaster} from "react-hot-toast"
import emptyCartImage from "../assets/empty-cart.webp"
import Link from 'next/link'
import OrderModal from '../components/OrderModal'

import { useRouter } from 'next/router'
import Orders from './order/[id]'

export default function cart() {
    const[Order,setOrder]=useState(
        typeof window!=='undefined' && localStorage.getItem('order')

    )
    const[payment,setPayment]=useState(null)

const router=useRouter()

    const cartData=useStore((state)=>state.cart)
    const removePizza=useStore((state)=>state.removePizza)
    

 
    const handleRemove=(i)=>{
        removePizza(i)
        toast.error( `Item removed!`)
    }
    
    const total=cartData.pizzas.reduce((acc,curr)=>{
        return acc=acc+(curr.price*curr.quantity)
    },0)

    const handleOnDelivery=()=>{
        setPayment(0)
        typeof window!=="undefined" && localStorage.setItem("total",total)
    }

    const handleCheckout=async()=>{
        typeof window!=='undefined' && localStorage.setItem('total',total)
        setPayment(1)
        const response =await fetch('/api/stripe',{
            method:"POST",
            headers:{
                'Content-Type':"application/json",
            },
            body:JSON.stringify(cartData.pizzas),

        })
        if(response.status===500) return
        const data=await response.json()
        toast.loading("Redirecting....")
        router.push(data.url)

    }
  return (
    <Layout>
        <div className='h-full'>
 {/* <h2 className='text-center text-2xl font-semibold text-gray-800'>Cart Items</h2> */}
            {/* cart details */}
            {/* {cartData.pizzas.length>0 ? ( */}
            <>
                <div className='p-3 grid grid-cols-2 gap-[20rem]   '>
                <table className='w-[100%]  border-separate border-spacing-x-[4.5rem] border-spacing-y-[2rem] '>
                    <thead>
                        <tr>
                        <th>Pizza</th>
                        <th>Name</th>
                        <th>Size</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {cartData.pizzas.length>0 && (
                            cartData.pizzas.map((pizza,index)=>{
                                const src=urlFor(pizza.image).url()
                                return(
                                    <tr key={index}>
                                        <td>
                                            <Image className='rounded-md' loader={()=>src} src={src}
                                            alt="" objectFit='cover' width={85} height={85}/>
                                        </td>
                                        <td>{pizza.name}</td>
                                        <td>{pizza.size===0?"Regular":pizza.size===1?"Medium":"Large"}</td>
                                        <td>{pizza.price}</td>
                                        <td>{pizza.quantity}</td>
                                        <td>{pizza.price * pizza.quantity}</td>
                                        <td onClick={()=>handleRemove(index)} className='text-sm text-gray-800 hover:text-orange-400 hover:font-semibold hover:scale-100 cursor-pointer'>X</td>


                                    </tr>
                                )
                            })
                        )}
                    </tbody>
                </table>


                <div className='flex  p-3 flex-col justify-between items-center w-[65%] h-[14rem] sticky top-0 bg-white shadow-lg  rounded-md'>
                    <div className='w-full border-b text-center'>
            <h3 className='text-xl font-semibold text-gray-800 mb-2 mt-2  '>Summary</h3>   
            </div>
            <div className='w-[100%] flex flex-col gap-5 px-4 py-2 mt-2'>          
            <div className='flex justify-between items-center'>
                <span className='text-lg font-semibold text-gray-700'>Items</span>
                <span>{cartData.pizzas.length}</span>

            </div>
            <div className='flex justify-between items-center'>
                <span className='text-lg font-semibold text-gray-700'>Total</span>
                <span>${total}</span>
            </div>
            {!Order && cartData.pizzas.length>0 ?(
    <div className='flex justify-center items-center mt-3 gap-5'>
    <button className='btn-outline px-2 py-1 cursor-pointer' onClick={handleOnDelivery}>Pay on Delivery</button>
    <button className='btn px-2 py-1 cursor-pointer' onClick={handleCheckout}>Pay now</button>
    </div>
            ):null}
       
            </div> 
            </div>
            </div>
            
            </>
            
            {/* // ):(<div className='flex flex-col justify-center items-center mb-10'>
            //     <Image 
            //     src={emptyCartImage}
            //     alt=""
            //     />
                
            //     <div className='space-y-4 flex flex-col justify-center items-center'>
            //         <h3 className='text-2xl font-semibold text-gray-800 '>Looks like you  have not added anything to your cart</h3>
                   
            //         <Link href="/"><button className='btn px-4 py-2 cursor-pointer'>Back to Menu</button></Link>

            //         </div>
                
            //     </div>)} */}
          

       
         
        </div>
        <Toaster/>

        {/* modal */}
        <OrderModal
        opened ={payment===0}
    setPayment={setPayment}
    payment={payment}
        />

    </Layout>
  )
}
