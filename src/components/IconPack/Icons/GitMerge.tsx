import * as React from 'react';
const SvgGitMerge = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="git-merge_svg__feather git-merge_svg__feather-git-merge"
    {...props}
  >
    <circle cx={18} cy={18} r={3} />
    <circle cx={6} cy={6} r={3} />
    <path d="M6 21V9a9 9 0 0 0 9 9" />
  </svg>
);
export default SvgGitMerge;
