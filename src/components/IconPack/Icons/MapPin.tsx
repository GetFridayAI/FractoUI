import * as React from 'react';
const SvgMapPin = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="map-pin_svg__feather map-pin_svg__feather-map-pin"
    {...props}
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0" />
    <circle cx={12} cy={10} r={3} />
  </svg>
);
export default SvgMapPin;
