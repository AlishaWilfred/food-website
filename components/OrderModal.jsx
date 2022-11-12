import React, { useState } from "react";
import { Modal, useMantineTheme } from "@mantine/core";
import { createOrder } from "../lib/orderHandler";
import { useStore } from "../store/store";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";

export default function OrderModal({ opened, setPayment, payment }) {
  const theme = useMantineTheme();
  const [formData, setFormData] = useState({});
  const router = useRouter();
  const resetCart = useStore((state) => state.resetCart);

  const total = typeof window !== "undefined" && localStorage.getItem("total");

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = await createOrder({ ...formData, total, payment });
    toast.success("Order Placed");
    console.log("order placed", id);
    resetCart();
    {
      typeof window !== "undefined" && localStorage.setItem("order", id);
    }
    // setPayment(null);
    router.push(`/order/${id}`)
  };

  return (
    <div>
      <Modal
        overlayColor={
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        opened={opened}
        overlayOpacity={0.55}
        overlayBlur={3}
        onClose={() => setPayment(null)}
        title=""
        className="rounded-lg"
      >
        {/* Modal content */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 flex flex-col items-center "
        >
          <input
            onChange={handleInput}
            className="border-gray-200  border-2 w-full p-2 rounded-md"
            type="text"
            name="name"
            required
            placeholder="Name"
          ></input>
          <input
            onChange={handleInput}
            className="border-gray-200  border-2 w-full p-2 rounded-md"
            type="text"
            name="phone"
            required
            placeholder="Phone Number"
          ></input>
          <textarea
            onChange={handleInput}
            className="border-gray-200  border-2 w-full p-2 rounded-md"
            rows=""
            cols="20"
            name="address"
            placeholder="Shipping Address"
          />
          <span className="flex justify-center items-center text-gray-600 font-medium gap-2">
            You will pay{" "}
            <span className="text-lg text-orange-400">${total}</span> on
            delivery
          </span>
          <button
            type="submit"
            className="bg-green-600 text-white border-none rounded-full px-3 py-2 cursor-pointer flex justify-center items-center"
          >
            Place Order
          </button>
        </form>
        <Toaster />
      </Modal>
    </div>
  );
}
