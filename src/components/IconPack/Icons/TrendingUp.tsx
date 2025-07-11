import * as React from 'react';
const SvgTrendingUp = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="trending-up_svg__feather trending-up_svg__feather-trending-up"
    {...props}
  >
    <path d="m23 6-9.5 9.5-5-5L1 18" />
    <path d="M17 6h6v6" />
  </svg>
);
export default SvgTrendingUp;
