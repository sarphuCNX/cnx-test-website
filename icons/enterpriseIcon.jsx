import React from 'react';

export const EnterpriseIcon = ({ color }) => {
  let fill = color || 'blue';
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.4998 0.0900269L17.9098 1.50003L13.4098 6.00003H16.9998V8.00003H9.99984V1.00003H11.9998V4.59003L16.4998 0.0900269ZM17.9098 16.5L16.4998 17.91L11.9998 13.41V17H9.99984V10H16.9998V12H13.4098L17.9098 16.5ZM1.49984 0.0900269L5.99984 4.59003V1.00003H7.99984V8.00003H0.999844V6.00003H4.58984L0.0898438 1.50003L1.49984 0.0900269ZM0.0898438 16.5L4.58984 12H0.999844V10H7.99984V17H5.99984V13.41L1.49984 17.91L0.0898438 16.5Z"
        fill={fill}
      />
    </svg>
  );
};