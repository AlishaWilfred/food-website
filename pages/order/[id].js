import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import { client } from "../../lib/client";
import { TbFileDollar, TbTruckDelivery } from "react-icons/tb";
import { GiCookie } from "react-icons/gi";
import { BsBoxSeam } from "react-icons/bs";
import Image from "next/image";
export const getServerSideProps = async ({ params }) => {
  const query = `*[_type=='order' && _id=='${params.id}']`;
  const order = await client.fetch(query);
  return {
    props: {
      order: order[0],
    },
  };
};

export default function Orders({ order }) {

  useEffect(()=>{
    if(order.status>3){
      localStorage.clear();
    }
  },[order])
  return (
    <Layout>
      <div className="flex flex-col justify-center  m-16 ">
        <h2 className="text-2xl font-semibold text-center p-4">
          Order in Process
        </h2>

        {/* order details */}
        <div className="m-10 p-2 flex-col flex justify-between  w-[50%] mx-auto space-y-10 mt-20">
          <div className="grid grid-cols-2   gap-28">
            <span>Order Id</span>
            <span className="text-end font-semibold">{order._id}</span>
          </div>
          <div className="grid grid-cols-2   gap-28">
            <span>Customer Name</span>
            <span className="text-end font-semibold">{order.name}</span>
          </div>
          <div className="grid grid-cols-2   gap-28">
            <span>Phone</span>
            <span className="text-end font-semibold">{order.phone}</span>
          </div>
          <div className="grid grid-cols-2   gap-28">
            <span>Method</span>
            <span className="text-end font-semibold">
              {order.method === 0 ? "Cash on Delivery" : "Online Payment(Paid)"}
            </span>
          </div>
          <div className="grid grid-cols-2  gap-28">
            <span>Total</span>
            <span className="text-end font-semibold">${order.total}</span>
          </div>
        </div>

        {/* order status */}
        <div className="flex items-center justify-center gap-32 mt-12">
          <div className="flex flex-col mt-16 ">
            <div className="p-6">
              <TbFileDollar className="text-4xl text-red-500  " />
            </div>
            <div className="flex flex-col ">
              <span className="mt-3 text-center ">Payment</span>
            </div>
            {order.method === 0 ? (
              <span className="mt-8 btn p-2"> On delivery</span>
            ) : (
              <span className="mt-8 btn p-2">Completed</span>
            )}
          </div>


<div className="flex flex-col justify-center">
          <div className={`flex flex-col ${order.status>1&&("mt-16")} `}>
            <div      className={`${
                order.status === 1
                  ? "rounded-full border-dashed border-2 border-orange-500 animate-spin p-6 text-4xl text-red-500 "
                  : "text-4xl p-6 flex justify-center items-center text-red-500"
              }`}>
              <GiCookie className=" " />
            </div>
            <div className="flex flex-col ">
              <span className="mt-3 text-center ">Cooking</span>
            </div>
            {order.status >1 ? (
              <span className="mt-8 bg-green-500 rounded-full text-white p-2">Completed </span>
            ):""}
          </div>
          </div>



          <div className={`flex flex-col ${order.status>2&&('mt-16')} `}>
            <div
              className={`${
                order.status === 2
                  ? "rounded-full border-dashed border-2 border-orange-500 animate-spin p-6 text-4xl text-red-500 "
                  : "text-4xl p-6 flex justify-center items-center text-red-500"
              }`}
            >
              <TbTruckDelivery className="" />
            </div>
            <div className="flex flex-col ">
              <span className="mt-3 text-center">On way</span>
            </div>
            {order.status > 2 && (
              <span className="mt-8 bg-green-500 text-white rounded-full p-2">
                {" "}
                Completed
              </span>
            )}
          </div>


          <div className="flex flex-col justify-center">
          <div className={`flex flex-col ${order.status>3&&('mt-16')} `}>
            <div  className={`${
                order.status === 3
                  ? "rounded-full border-dashed border-2 border-orange-500 animate-spin p-6 text-4xl text-red-500 "
                  : "text-4xl p-6 flex justify-center items-center text-red-500"
              }`}>
              <BsBoxSeam className=" " />
            </div>
            <div className="flex flex-col ">
              <span className="mt-3 text-center ">Delivered</span>
            </div>
            {order.status >3 ? (
              <span className="mt-8 bg-green-500 rounded-full text-white p-2">Completed </span>
            ):""}
          </div>
          </div>



          {/* <div>
            <div
              className={`${
                order.status === 3
                  ? "rounded-full border-dashed border-2 border-orange-500 p-6 text-4xl text-red-500 "
                  : "text-4xl p-6 flex justify-center items-center text-red-500"
              }`}
            >
              <BsBoxSeam className="text-4xl text-red-500" />
            </div>
            <div className="flex flex-col ">
              <span className="mt-3 text-center">Delivered</span>
            </div>
            {order.status > 3 && (
              <span className="mt-8 bg-green-500 text-white rounded-full p-2">
                {" "}
                Completed
              </span>
            )}
          </div> */}
        
        </div>
      </div>
    </Layout>
  );
}
