import React, { ReactElement } from "react";

interface IIcon {
    color: string;
}

export const ArrowRightIcon = ({ color }: IIcon): ReactElement => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill={color}
        viewBox="0 0 20 20"
    >
        <path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5.325 10.185l9.432.213M10.113 15.04l4.644-4.643-4.644-4.644"
        ></path>
    </svg>
);
