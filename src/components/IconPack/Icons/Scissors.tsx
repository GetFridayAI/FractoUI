import * as React from 'react';
const SvgScissors = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="scissors_svg__feather scissors_svg__feather-scissors"
    {...props}
  >
    <circle cx={6} cy={6} r={3} />
    <circle cx={6} cy={18} r={3} />
    <path d="M20 4 8.12 15.88M14.47 14.48 20 20M8.12 8.12 12 12" />
  </svg>
);
export default SvgScissors;
