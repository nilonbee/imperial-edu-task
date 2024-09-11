import React, { ReactElement } from "react";

export const InstagramIcon = (): ReactElement => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
    >
        <path fill="url(#pattern0_1_1061)" d="M0 0H24V24H0z"></path>
        <defs>
            <pattern
                id="pattern0_1_1061"
                width="1"
                height="1"
                patternContentUnits="objectBoundingBox"
            >
                <use transform="scale(.01042)" xlinkHref="#image0_1_1061"></use>
            </pattern>
            <image
                id="image0_1_1061"
                width="96"
                height="96"
                xlinkHref="data:image/png;base64,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"
            ></image>
        </defs>
    </svg>
);
