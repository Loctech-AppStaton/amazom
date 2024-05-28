"use client";

import moment from "moment";
import { useState } from "react";
import MagnifyingGlassIcon from "@/icons/magnifying-glass-icon";
import { Input } from "@nextui-org/react";
import Clock from "./clock";
import MobileSidebar from "./mobile-sidebar";
import HamburgerIcon from "@/icons/hamburger-icon";

interface NavbarProps {
  time?: string;
  navLinks: NavLinksProps[];
}

export default function Navbar({ navLinks, time }: NavbarProps) {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  const onOpen = () => {
    setOpenSidebar(true);
  };

  const onClose = () => {
    setOpenSidebar(false);
  };

  return (
    <div className="sticky top-0 xl:h-24 lg:h-20 xl:px-14 lg:px-8 px-4 z-50 bg-slate-100 h-20 flex-row justify-between w-full flex items-center">
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-row gap-6 items-center">
          <div className="block xl:hidden cursor-pointer" onClick={onOpen}>
            <HamburgerIcon size="36" />
          </div>
          <Input
            placeholder="Type to search..."
            isClearable
            className="lg:w-96 xl:w-[400px]"
            size="sm"
            startContent={
              <MagnifyingGlassIcon
                size={20}
                className="text-black/50 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0"
              />
            }
          />
        </div>
        <div className="flex flex-row gap-4 items-center">
          <div className="flex-row gap-1 font-medium text-sm text-gray-700 xl:flex hidden">
            <div className="border-r-2 border-primary pr-2">
              {moment().format("dddd, MMMM Do")}
            </div>
            <Clock time={time} />
          </div>
          {/* <DropdownProfile /> */}
        </div>
      </div>
      <MobileSidebar
        onClose={onClose}
        openSidebar={openSidebar}
        navLinks={navLinks}
      />
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      time: new Date().toLocaleTimeString(),
    },
  };
}
