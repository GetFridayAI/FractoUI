import * as React from 'react';
const SvgUserX = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="user-x_svg__feather user-x_svg__feather-user-x"
    {...props}
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx={8.5} cy={7} r={4} />
    <path d="m18 8 5 5M23 8l-5 5" />
  </svg>
);
export default SvgUserX;
