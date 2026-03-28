import type { SVGProps } from 'react';

const SelectChevron = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={12}
    height={12}
    viewBox="0 0 12 12"
    aria-hidden
    focusable="false"
    {...props}
  >
    <path d="M6 8L2 4h8L6 8z" fill="currentColor" />
  </svg>
);

export default SelectChevron;
