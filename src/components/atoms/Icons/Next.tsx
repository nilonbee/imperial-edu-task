import React, { ReactElement } from "react";

export const NextIcon = (): ReactElement => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="none"
        viewBox="0 0 40 40"
    >
        <circle cx="20" cy="20" r="20" fill="#000"></circle>
        <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 26l6-6-6-6"
        ></path>
    </svg>
);
