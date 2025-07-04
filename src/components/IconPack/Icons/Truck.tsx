import * as React from 'react';
const SvgTruck = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="truck_svg__feather truck_svg__feather-truck"
    {...props}
  >
    <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7z" />
    <circle cx={5.5} cy={18.5} r={2.5} />
    <circle cx={18.5} cy={18.5} r={2.5} />
  </svg>
);
export default SvgTruck;
