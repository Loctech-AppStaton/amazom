import React from "react";
const columns = [
  { name: "ID", uid: "_id" },
  { name: "PRICE", uid: "price", sortable: true },
  { name: "PHONE", uid: "phone", sortable: true },
  { name: "ACTIONS", uid: "actions" },
];

const statusOptions = [
  { name: "Active", uid: "active" },
  { name: "Paused", uid: "paused" },
];

type InvoiceProp = {
  _id: number;
  price: number;
  phone: string;
};

const users: InvoiceProp[] = [];

export { columns, users, statusOptions };
