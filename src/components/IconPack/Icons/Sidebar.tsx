import * as React from 'react';
const SvgSidebar = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="sidebar_svg__feather sidebar_svg__feather-sidebar"
    {...props}
  >
    <rect width={18} height={18} x={3} y={3} rx={2} ry={2} />
    <path d="M9 3v18" />
  </svg>
);
export default SvgSidebar;
