import * as React from 'react';
const SvgSquare = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="square_svg__feather square_svg__feather-square"
    {...props}
  >
    <rect width={18} height={18} x={3} y={3} rx={2} ry={2} />
  </svg>
);
export default SvgSquare;
