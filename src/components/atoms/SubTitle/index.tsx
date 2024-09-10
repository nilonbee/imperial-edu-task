import React from "react";

export const Subtitle = ({
    text,
}: Readonly<{
    text: string;
}>) => {
    return (
        <div className="text-subTextColor text-xl font-normal leading-6">
            {text}
        </div>
    );
};
