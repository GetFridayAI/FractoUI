import * as React from 'react';
const SvgMinusCircle = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="minus-circle_svg__feather minus-circle_svg__feather-minus-circle"
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
    <path d="M8 12h8" />
  </svg>
);
export default SvgMinusCircle;
