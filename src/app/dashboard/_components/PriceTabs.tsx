"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function PriceTabs() {
  const pathname = usePathname();
  const path = pathname.split("/")[1];
  const tabsData = [
    {
      name: "Iphone-14-pro-max",
      route: `/price/iphone-14-pro-max`,
    },
    {
      name: "Iphone-15-pro-max",
      route: `/price/iphone-15-pro-max`,
    },
  ];

  return (
    <div className="flex bg-stone-100 w-fit gap-4  rounded-full">
      {tabsData.map((tab, index) => {
        const active = pathname.includes(tab.route);
        return (
          <Link
            key={index}
            href={`/${path}${tab.route}`}
            as={`/${path}${tab.route}`}>
            <div
              className={
                active
                  ? "bg-[#e09a37] rounded-full py-3 px-4 transform duration-300 text-white"
                  : " text-black py-3 px-4 "
              }>
              <h1 className="text-sm">{tab.name}</h1>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
