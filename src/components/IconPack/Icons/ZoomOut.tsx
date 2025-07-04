import * as React from 'react';
const SvgZoomOut = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="zoom-out_svg__feather zoom-out_svg__feather-zoom-out"
    {...props}
  >
    <circle cx={11} cy={11} r={8} />
    <path d="m21 21-4.35-4.35M8 11h6" />
  </svg>
);
export default SvgZoomOut;
