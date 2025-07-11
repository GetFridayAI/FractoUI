import * as React from 'react';
const SvgToggleLeft = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="toggle-left_svg__feather toggle-left_svg__feather-toggle-left"
    {...props}
  >
    <rect width={22} height={14} x={1} y={5} rx={7} ry={7} />
    <circle cx={8} cy={12} r={3} />
  </svg>
);
export default SvgToggleLeft;
