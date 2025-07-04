import * as React from 'react';
const SvgBarChart = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="bar-chart_svg__feather bar-chart_svg__feather-bar-chart"
    {...props}
  >
    <path d="M12 20V10M18 20V4M6 20v-4" />
  </svg>
);
export default SvgBarChart;
