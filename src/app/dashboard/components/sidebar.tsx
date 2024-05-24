"use client";

import NotificationIcon from "@/icons/notification-icon";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface NavLinkProps {
  navLinks: NavLinksProps[];
}

export default function Sidebar({ navLinks }: NavLinkProps) {
  const pathname = usePathname();
  const path = pathname.split("/")[1];

  return (
    <div className=" text-black bg-slate-100 overflow-auto h-screen lg:inset-y-0 xl:block hidden col-span-3 xl:col-span-2 sticky top-0 border-r-1 border-gray-50">
      <div className="flex h-full w-full flex-col py-4">
        <Image
          src="/images/logo1.jpg"
          alt=""
          width={300}
          height={300}
          className="h-16 mb-12 px-8 object-contain"
        />
        <div className="h-full overflow-y-auto">
          {navLinks.map((link, index) => (
            <div key={index} className="flex flex-col gap-6 mt-8">
              <div className="text-base text-gray-700 px-8">{link.title}</div>
              <div className="flex flex-col gap-1.5 pr-8">
                {link.links.map((item, index) => {
                  const isActive = pathname.startsWith(item.route);

                  return (
                    <div
                      key={index}
                      className={
                        isActive
                          ? "border-l-4 border-primary text-white"
                          : "border-l-4 border-transparent"
                      }>
                      <Link as={item.route} href={item.route}>
                        <div
                          className={
                            "ml-6 py-2.5 pl-4 flex items-center flex-row gap-3 text-sm " +
                            (isActive ? "bg-[#e09a37] rounded-sm" : "")
                          }>
                          {item.icon}
                          {item.name}
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="px-8 mt-auto py-4 ml-2">
          <Link
            href={`/${path}/notifications`}
            className={
              "flex items-center flex-row justify-between cursor-pointer py-1 px-2 rounded-sm " +
              (pathname.startsWith("/human-resources/notifications") &&
                "text-black")
            }>
            <div className="flex items-center flex-row gap-3 cursor-pointer">
              <NotificationIcon />
              Notifications
            </div>
            <div className="w-7 h-7 p-1.5 text-xs rounded-full bg-[#fffafa] text-primary font-bold flex items-center justify-center mt-1">
              10 <sup>+</sup>
            </div>
          </Link>
          <div className="text-slate-500 text-xs mt-2.5">v1.0.0</div>
        </div>
      </div>
    </div>
  );
}
