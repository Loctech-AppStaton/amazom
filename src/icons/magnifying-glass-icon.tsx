import React from "react";

export default function MagnifyingGlassIcon({
  className,
  height,
  size = 22,
  width,
}: IconSvgProps) {
  return (
    <svg
      width={size || width}
      height={size || height}
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g id="style=stroke">
          <g id="search-broken">
            <path
              id="vector (Stroke)"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.9697 17.9697C18.2626 17.6768 18.7374 17.6768 19.0303 17.9697L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L17.9697 19.0303C17.6768 18.7374 17.6768 18.2626 17.9697 17.9697Z"
              fill="currentColor"
            ></path>
            <path
              id="vector (Stroke)_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.0529 18.6058C15.2243 18.6058 18.6058 15.2243 18.6058 11.0529C18.6058 6.88155 15.2243 3.5 11.0529 3.5C6.88155 3.5 3.5 6.88155 3.5 11.0529C3.5 15.2243 6.88155 18.6058 11.0529 18.6058ZM11.0529 20.1058C16.0527 20.1058 20.1058 16.0527 20.1058 11.0529C20.1058 6.05312 16.0527 2 11.0529 2C6.05312 2 2 6.05312 2 11.0529C2 16.0527 6.05312 20.1058 11.0529 20.1058Z"
              fill="currentColor"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
}
