import * as React from 'react';
const SvgMap = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="map_svg__feather map_svg__feather-map"
    {...props}
  >
    <path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4zM8 2v16M16 6v16" />
  </svg>
);
export default SvgMap;
