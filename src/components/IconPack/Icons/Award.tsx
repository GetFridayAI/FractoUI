import * as React from 'react';
const SvgAward = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="award_svg__feather award_svg__feather-award"
    {...props}
  >
    <circle cx={12} cy={8} r={7} />
    <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12" />
  </svg>
);
export default SvgAward;
