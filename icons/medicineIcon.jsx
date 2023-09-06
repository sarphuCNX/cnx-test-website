import React from "react";

export const MedicineIcon = ({ color }) => {
  let fill = color || "blue";

  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1845_3609)">
        <path
          d="M15.1074 7.875L13.1074 9.875V11.875H10.1074C8.95744 11.875 8.22744 12.875 8.10744 13.875L7.10744 23.875C6.98744 24.875 7.64744 25.875 9.10744 25.875H25.1074C26.5674 25.875 27.2274 24.875 27.1074 23.875L26.1074 13.875C25.9874 12.875 25.1674 11.875 24.1074 11.875H21.1074V9.875L19.1074 7.875H15.1074ZM15.1074 9.875H19.1074V11.875H15.1074V9.875ZM16.1074 14.875H18.1074V17.875H21.1074V19.875H18.1074V22.875H16.1074V19.875H13.1074V17.875H16.1074V14.875Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_1845_3609">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(5 5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
