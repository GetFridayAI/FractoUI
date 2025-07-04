import * as React from 'react';
const SvgTv = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="tv_svg__feather tv_svg__feather-tv"
    {...props}
  >
    <rect width={20} height={15} x={2} y={7} rx={2} ry={2} />
    <path d="m17 2-5 5-5-5" />
  </svg>
);
export default SvgTv;
