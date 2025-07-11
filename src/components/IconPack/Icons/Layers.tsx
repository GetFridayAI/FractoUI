import * as React from 'react';
const SvgLayers = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="layers_svg__feather layers_svg__feather-layers"
    {...props}
  >
    <path d="M12 2 2 7l10 5 10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);
export default SvgLayers;
