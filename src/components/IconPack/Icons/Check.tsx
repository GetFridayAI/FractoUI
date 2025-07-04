import * as React from 'react';
const SvgCheck = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="check_svg__feather check_svg__feather-check"
    {...props}
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);
export default SvgCheck;
