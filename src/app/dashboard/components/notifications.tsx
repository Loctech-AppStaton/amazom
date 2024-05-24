import NotificationIcon from "@/icons/notification-icon";
import { Bell, BellRing, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export function Notifications() {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="rounded-full hover:bg-gray-50 p-1 transition-all ease-in-out duration-200">
          <div className="relative">
            <NotificationIcon size={26} />
            <div className="absolute top-0 right-0.5">
              <div className="relative flex w-2.5 h-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary"></span>
                <div className="w-2.5 h-2.5 rounded-full absolute bg-primary"></div>
              </div>
            </div>
          </div>
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-xl text-gray-800 font-bold">
            Notifications
          </SheetTitle>
        </SheetHeader>
        <div className="h-full grid w-full">
          {/* <div className="grid gap-4 mt-4">
            <div className="border border-gray-50 rounded-md shadow-md relative px-3 py-2 text-sm w-full h-14 flex items-center group cursor-pointer">
              You have a code with ID 18378HD#J93
              <X className="w-4 h-4 absolute right-2 top-5 hover:text-black text-gray-500 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100" />
            </div>
          </div> */}
          <div className="my-auto mx-auto flex flex-col gap-4 items-center">
            <NotificationIcon className="text-gray-300" size={160} />
            <h1 className="text-lg text-gray-800">No new notification</h1>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
