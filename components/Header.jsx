import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import {BsBag, BsReceipt} from "react-icons/bs"
import logo from '../assets/foodie-logo.webp'
import  {useStore}  from "../store/store"


export default function Header(){
    // const state=useStore((state)=>state)
    // console.log("s",state)
const[Order,setOrder]=useState('')
const cartLength=useStore((state)=>state.cart.pizzas.length)

useEffect(()=>{
setOrder(localStorage.getItem('order'))
},[])


    // const logo="https://static.wixstatic.com/media/e95f51_8de9e7d15cb545afa4ab8ae8b0fc390e~mv2.png/v1/fill/w_468,h_204,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/foodie-logo.png"
    return(
        <div className="bg-gray-100">
        <div className="flex justify-between items-center p-2 flex-1">
            <Link href="/">
            <div className="w-[150px] cursor-pointer">
                <Image src={logo}
                className="border-2 "/>
            </div>
            </Link>
            <div>
                <ul className="flex flex-1 text-xl items-center gap-6 hover:cursor-pointer ">
                    <Link href="/"><li className="hover:text-orange-400">Home</li></Link>
                    <li className="hover:text-orange-400">Menu</li>
                    <li className="hover:text-orange-400">Contact</li>
                </ul>
            </div>
            <div className="flex">
            <Link href="/cart">
            <div className="text-xl p-6 relative">
                <button className="cursor-pointer"><BsBag/></button>
                <span className="absolute top-2 right-2 text-sm py-0.5 bg-orange-400 text-white  text-center px-2 rounded-full">{cartLength}</span>
            </div>
            </Link>

{Order &&(
      <Link href={`/order/${Order}`}>

      <div className="text-xl p-6 relative">
          <button className="cursor-pointer"><BsReceipt/></button>
          {Order !='' &&(
          <span className="absolute top-2 right-2 text-sm py-0.5 bg-orange-400 text-white  text-center px-2 rounded-full">1</span>

          )}
      </div>
      </Link>

)}
      
            </div>
        </div>
        </div>
    )
}