import * as React from 'react';
const SvgPlus = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="plus_svg__feather plus_svg__feather-plus"
    {...props}
  >
    <path d="M12 5v14M5 12h14" />
  </svg>
);
export default SvgPlus;
