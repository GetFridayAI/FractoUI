import * as React from 'react';
const SvgSave = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="save_svg__feather save_svg__feather-save"
    {...props}
  >
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2" />
    <path d="M17 21v-8H7v8M7 3v5h8" />
  </svg>
);
export default SvgSave;
