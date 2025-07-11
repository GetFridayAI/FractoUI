import * as React from 'react';
const SvgArrowUpCircle = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="arrow-up-circle_svg__feather arrow-up-circle_svg__feather-arrow-up-circle"
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
    <path d="m16 12-4-4-4 4M12 16V8" />
  </svg>
);
export default SvgArrowUpCircle;
