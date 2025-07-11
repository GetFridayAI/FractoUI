import * as React from 'react';
const SvgAperture = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="aperture_svg__feather aperture_svg__feather-aperture"
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
    <path d="m14.31 8 5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16 3.95 6.06M14.31 16H2.83M16.62 12l-5.74 9.94" />
  </svg>
);
export default SvgAperture;
