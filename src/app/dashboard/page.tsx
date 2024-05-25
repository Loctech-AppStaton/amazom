import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import MoneyIcon from "@/icons/money-icon";
import OrdersIcon from "@/icons/orders-icon";
import Link from "next/link";

export default function App() {
  return (
    <div className="flex flex-row gap-20 w-full mt-10">
      <div className="w-[20%] h-32 shadow">
        <Link href="/dashboard/orders">
          <div className="flex flex-row justify-center items-center gap-3">
            <p>
              <OrdersIcon className="w-20 h-20 text-[#e09a37]" />
            </p>
            <p className="text-xl text-[#e09a37]">Orders</p>
          </div>
        </Link>
      </div>

      <div className="w-[20%] h-32 shadow">
        <Link href="/dashboard/price/iphone-14-pro-max">
          <div className="flex flex-row justify-center items-center gap-3">
            <p>
              <MoneyIcon className="w-20 h-20 text-[#e09a37]" />
            </p>
            <p className="text-xl text-[#e09a37]">Prices</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
