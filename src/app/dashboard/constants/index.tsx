import MoneyIcon from "@/icons/money-icon";
import OrdersIcon from "@/icons/orders-icon";

export const navLinks: NavLinksProps[] = [
  {
    title: "Dashboard",
    links: [
      {
        name: "Orders",
        route: "/dashboard/orders",
        icon: <OrdersIcon />,
      },

      {
        name: "Price",
        route: "/dashboard/price/iphone-14-pro-max",
        icon: <MoneyIcon />,
      },
    ],
  },
];
