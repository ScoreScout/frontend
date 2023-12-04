import React from "react";
import type { IconsProps } from "../../types/iconsTypes";

const ArrowLeftIcon = ({ color, size }: IconsProps): React.JSX.Element => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='vuesax/linear/arrow-left'>
        <g id='arrow-left'>
          <path
            id='Vector'
            d='M9.57 5.92999L3.5 12L9.57 18.07'
            stroke={color}
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Vector_2'
            d='M20.4999 12H3.66992'
            stroke={color}
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </g>
      </g>
    </svg>
  );
};

export default ArrowLeftIcon;
