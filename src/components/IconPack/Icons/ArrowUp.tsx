import * as React from 'react';
const SvgArrowUp = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="arrow-up_svg__feather arrow-up_svg__feather-arrow-up"
    {...props}
  >
    <path d="M12 19V5M5 12l7-7 7 7" />
  </svg>
);
export default SvgArrowUp;
