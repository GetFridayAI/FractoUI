import * as React from 'react';
const SvgLayout = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="layout_svg__feather layout_svg__feather-layout"
    {...props}
  >
    <rect width={18} height={18} x={3} y={3} rx={2} ry={2} />
    <path d="M3 9h18M9 21V9" />
  </svg>
);
export default SvgLayout;
