import React from "react";
import Image from "next/image";
import Iphone15Table from "./components/table/iphone15Table";

export default function page() {
  return (
    <div className="mt-20">
      <Iphone15Table />
      <div className="flex justify-center items-center">
        <Image
          src="/images/cash-on-delivery.png"
          alt="cash-on-delivery-image"
          width={200}
          height={200}
          className="w-60 h-60 object-cover"
        />
      </div>
    </div>
  );
}
