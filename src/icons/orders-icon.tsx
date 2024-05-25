import React from "react";

export default function OrdersIcon({
  className,
  height,
  size = 22,
  width,
}: IconSvgProps) {
  return (
    <svg
      height={size || height}
      width={size || width}
      className={className}
      viewBox="0 0 24.00 24.00"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      stroke="#000000"
      strokeWidth="0.00024000000000000003">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <g>
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M22 14h-2V7.238l-7.928 7.1L4 7.216V19h10v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v10zM4.511 5l7.55 6.662L19.502 5H4.511zM19 22l-3.536-3.536 1.415-1.414L19 19.172l3.536-3.536 1.414 1.414L19 22z"></path>
        </g>
      </g>
    </svg>
  );
}
