import Image from "next/image";
import React from "react";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import logo from "../assets/foodie-logo.webp";
export default function Footer() {
  return (
    <div className="flex bg-orange-100  border p-6">
      <div className=" flex flex-1 flex-col ">
        <div className="w-[100px] ">
          <Image src={logo} alt="" />
        </div>
        <span className="break-all break-words">Serving fresh,scrumptious food since 2000</span>
        <div className="mt-3">
          <ul className="flex gap-3">
            <li className="px-2 text-orange-400 text-lg rounded-full">
              <AiFillTwitterCircle />
            </li>
            <li className="px-2 text-orange-400 text-lg">
              <BsFacebook />
            </li>
            <li className="px-2 text-orange-400 text-lg">
              <AiFillInstagram />
            </li>
            <li className="px-2 text-orange-400 text-lg">
              <AiFillYoutube />
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1 ">
        <h3 className="text-lg font-semibold">Home</h3>
        <span className="flex flex-col mt-2 space-y-1">
        <span>Menu</span>
        <span>Contact Us</span>
        </span>

      </div>

      <div className="flex-1 space-y-1">
        <h3 className="text-lg font-semibold ">Business Hours</h3>
        <span className="flex gap-3 mt-2">Mon-Fri :
          <span className="">10.00AM to 11.00PM</span>
        </span>
        <span className="flex gap-3">Sat-Sun :
          <span className="">10.00AM to 12.00PM</span>
        </span>
        <span className="flex gap-3">Holidays :
          <span className="">Closed</span>
        </span>
      </div>

      <div className="flex-1">
        <h3 className="text-lg font-semibold">Address</h3>
        <span className="mt-2">16/233, Shobhag circle near Opera Ground,Udaipur Rajasthan</span>

        <h3 className="text-lg font-semibold mt-2">Phone Number</h3>
        <span>+91-8890067002</span>
        <span>+91-8400066002</span>

      </div>
    </div>
  );
}
