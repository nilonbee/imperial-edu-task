import React, { ReactElement } from "react";

export const FacebookIcon = (): ReactElement => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
    >
        <path fill="url(#pattern0_1_1058)" d="M0 0H24V24H0z"></path>
        <defs>
            <pattern
                id="pattern0_1_1058"
                width="1"
                height="1"
                patternContentUnits="objectBoundingBox"
            >
                <use transform="scale(.01042)" xlinkHref="#image0_1_1058"></use>
            </pattern>
            <image
                id="image0_1_1058"
                width="96"
                height="96"
                xlinkHref="data:image/png;base64,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"
            ></image>
        </defs>
    </svg>
);
