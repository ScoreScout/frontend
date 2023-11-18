import React from "react";
import type { IconsProps } from "../../types/iconsTypes";

const ArrowRightIcon = ({ color, size }: IconsProps) : React.JSX.Element => {
    return (
        <svg
            width={size}
            height={size}
            viewBox='0 0 30 30'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <g id='vuesax/linear/arrow-right'>
                <g id='arrow-right'>
                    <path
                        id='Vector'
                        d='M18.0376 7.41251L25.6251 15L18.0376 22.5875'
                        stroke={color}
                        strokeWidth='1.5'
                        strokeMiterlimit='10'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />
                    <path
                        id='Vector_2'
                        d='M4.375 15H25.4125'
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

export default ArrowRightIcon;
