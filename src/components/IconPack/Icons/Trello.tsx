import * as React from 'react';
const SvgTrello = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="trello_svg__feather trello_svg__feather-trello"
    {...props}
  >
    <rect width={18} height={18} x={3} y={3} rx={2} ry={2} />
    <path d="M7 7h3v9H7zM14 7h3v5h-3z" />
  </svg>
);
export default SvgTrello;
