import React from "react";

import { Metadata } from "next";
import PriceTabs from "../_components/PriceTabs";

export const metadata: Metadata = {
  title: "Amazom",
  description: "Generated by create next app",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <PriceTabs />
      <div>{children}</div>
    </main>
  );
}
