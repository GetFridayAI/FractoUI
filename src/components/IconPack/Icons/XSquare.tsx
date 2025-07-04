import * as React from 'react';
const SvgXSquare = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="x-square_svg__feather x-square_svg__feather-x-square"
    {...props}
  >
    <rect width={18} height={18} x={3} y={3} rx={2} ry={2} />
    <path d="m9 9 6 6M15 9l-6 6" />
  </svg>
);
export default SvgXSquare;
