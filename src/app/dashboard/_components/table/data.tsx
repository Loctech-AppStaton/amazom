// import React from "react";
// const columns = [
//   { name: "ID", uid: "_id" },
//   { name: "NAME", uid: "name", sortable: true },
//   { name: "ROLE", uid: "role", sortable: true },
//   { name: "EMAIL", uid: "email" },
//   { name: "ACTIONS", uid: "actions" },
// ];

// const statusOptions = [
//   { name: "Active", uid: "active" },
//   { name: "Paused", uid: "paused" },
// ];

// type InvoiceProp = {
//   _id: number;
//   name: string;
//   email: string;
//   role: string;
// };

// const users: InvoiceProp[] = [];

// export { columns, users, statusOptions };

import React from "react";
const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "FULLNAME", uid: "fullName", sortable: true },
  { name: "PHONENUMBER", uid: "phoneNumber", sortable: true },
  { name: "EMAIL", uid: "email" },
  { name: "ALTERNATIVENUMBER", uid: "alternativeNumber", sortable: true },
  { name: "DELIVERYADDRESS", uid: "address", sortable: true },
  { name: "CITY", uid: "city" },
  { name: "STATUS", uid: "status", sortable: true },
  { name: "ACTIONS", uid: "actions" },
];

const statusOptions = [
  { name: "Active", uid: "active" },
  { name: "Paused", uid: "paused" },
  { name: "Vacation", uid: "vacation" },
];

const users = [
  {
    id: 1,
    fullName: "Tony Reichert",
    address: "CEO",
    city: "Management",
    status: "active",
    phoneNumber: "29",
    alternativeNumber: "090754345678",
    email: "tony.reichert@example.com",
  },
  {
    id: 2,
    fullName: "Zoey Lang",
    address: "Tech Lead",
    city: "Development",
    status: "paused",
    phoneNumber: "25",
    alternativeNumber: "090754345678",

    email: "zoey.lang@example.com",
  },
  {
    id: 3,
    fullName: "Jane Fisher",
    address: "Sr. Dev",
    city: "Development",
    status: "active",
    phoneNumber: "22",
    alternativeNumber: "090754345678",

    email: "jane.fisher@example.com",
  },
  {
    id: 4,
    fullName: "William Howard",
    address: "C.M.",
    city: "Marketing",
    status: "vacation",
    phoneNumber: "28",
    alternativeNumber: "090754345678",

    email: "william.howard@example.com",
  },
  {
    id: 5,
    fullName: "Kristen Copper",
    address: "S. Manager",
    city: "Sales",
    status: "active",
    phoneNumber: "24",
    alternativeNumber: "090754345678",

    email: "kristen.cooper@example.com",
  },
  {
    id: 6,
    fullName: "Brian Kim",
    address: "P. Manager",
    city: "Management",
    phoneNumber: "29",
    alternativeNumber: "090754345678",

    email: "brian.kim@example.com",
    status: "Active",
  },
  {
    id: 7,
    fullName: "Michael Hunt",
    address: "Designer",
    city: "Design",
    status: "paused",
    phoneNumber: "27",
    alternativeNumber: "090754345678",

    email: "michael.hunt@example.com",
  },
];

export { columns, users, statusOptions };
