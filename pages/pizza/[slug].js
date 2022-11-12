import Image from "next/image"
import Layout from "../../components/Layout"
import { client, urlFor } from "../../lib/client"
import {MdArrowLeft} from "react-icons/md"
import {MdArrowRight} from "react-icons/md"
import { useState } from "react"
import { useStore } from "../../store/store"
import toast,{Toaster} from "react-hot-toast"


export default function Pizza({pizza}){

    const[size,setSize]=useState(1)
    const[qty,setQty]=useState(4)
const src=urlFor(pizza.image).url()
 
// console.log(pizza)
const handleDecreaseQty=()=>{
    if(qty>1){
        setQty(qty-1)
    }
}

const handleIncreaseQty=()=>{
if(qty){
    setQty(qty+1)
}
}

const addPizza=useStore((state)=>state.addPizza)

const addToCart=()=>{
    addPizza({...pizza,price:pizza.price[size],quantity:qty,size:size})
    toast.success(`${pizza.name} added to the cart`)
}


    return(
        <Layout>
            <>
            
        <div className="flex p-6 mt-10">
            <div className=" relative w-[35%] h-[24rem] overflow-hidden">
                <Image className="rounded-lg hover:scale-105 hover:shadow-md" loader={()=>src} src={src} alt="" layout="fill" width={16} height={7} unoptimized objectFit="cover"/>
            </div>
            <div className="flex flex-col space-y-6 p-4 ml-12">
            <div className="space-y-5">
                <h1 className="text-2xl text-gray-800 font-bold">{pizza.name}</h1>
                <p className="text-xl text-gray-600 font-semibold">{pizza.details}</p>
                <p className="text-2xl text-red-600 font-semibold">${pizza.price[size]}</p>
            </div>
            <div className="flex gap-4 items-center text-orange-600">
                <h3 className="text-gray-800 text-lg font-semibold ">Size</h3>
                <button onClick={()=>setSize(0)} className={`border-orange-600 border rounded-full  px-3 py-1 ${size===0?"bg-orange-400 text-white border-none":""}`}>Regular</button>
                <button onClick={()=>setSize(1)} className={`border-orange-600 border rounded-full  px-3 py-1 ${size===1?"bg-orange-400 text-white border-none":""}`}>Medium</button>
                <button onClick={()=>setSize(2)} className={`border-orange-600 border rounded-full  px-3 py-1 ${size===2?"bg-orange-400 text-white border-none":""}`}>Large</button>
            </div>

            <div className="flex items-center  gap-3 ">
                <span className="text-lg text-gray-700 font-semibold">Qty:</span>
                <span className="flex items-center gap-2 ">
                <span onClick={handleDecreaseQty} className="text-3xl mt-1 hover:text-orange-500 cursor-pointer text-gray-700 font-bold"><MdArrowLeft/></span>
                <span className="text-xl">{qty}</span>
                <span onClick={handleIncreaseQty} className="text-3xl mt-1 cursor-pointer hover:text-orange-500 text-gray-700 font-bold"><MdArrowRight/></span>
                </span>

            </div>

            <div className="">
                <button className="btn mt-5 px-4 py-2" onClick={addToCart}>Add to Cart</button>
            </div>
            </div>
            <Toaster/>
            </div>
   
     
            </>
        </Layout>
    )
}


export async function getStaticPaths(){
    const paths=await client.fetch(
        `*[_type=="pizza" && defined(slug.current)][].slug.current`
        )
    return{ 
        paths:paths.map((slug)=>({params:{slug}})),
        fallback:"blocking"
    }

    
}
export async function getStaticProps(context){
    const {slug=""}=context.params
    const pizza=await client.fetch(`*[_type=="pizza" && slug.current==$slug][0]`,{slug})
    return{
        props:{
            pizza
        }
    }




}