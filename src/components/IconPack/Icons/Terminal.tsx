import * as React from 'react';
const SvgTerminal = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="terminal_svg__feather terminal_svg__feather-terminal"
    {...props}
  >
    <path d="m4 17 6-6-6-6M12 19h8" />
  </svg>
);
export default SvgTerminal;
