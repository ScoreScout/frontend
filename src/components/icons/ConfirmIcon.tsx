import React from "react";
import type { IconsProps } from "../../types/iconsTypes";

const ConfirmIcon = ({ color, size }: IconsProps): React.JSX.Element => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 25'
      fill='none'
    >
      <path
        d='M12 2.59998C6.49 2.59998 2 7.08998 2 12.6C2 18.11 6.49 22.6 12 22.6C17.51 22.6 22 18.11 22 12.6C22 7.08998 17.51 2.59998 12 2.59998ZM16.78 10.3L11.11 15.97C10.97 16.11 10.78 16.19 10.58 16.19C10.38 16.19 10.19 16.11 10.05 15.97L7.22 13.14C6.93 12.85 6.93 12.37 7.22 12.08C7.51 11.79 7.99 11.79 8.28 12.08L10.58 14.38L15.72 9.23998C16.01 8.94998 16.49 8.94998 16.78 9.23998C17.07 9.52998 17.07 9.99998 16.78 10.3Z'
        fill={color}
      />
    </svg>
  );
};

export default ConfirmIcon;
