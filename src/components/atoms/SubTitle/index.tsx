import React from "react";

export const Subtitle = ({
    text,
}: Readonly<{
    text: string;
}>) => {
    return (
        <div className="mt-6 font-['Plus Jakarta Sans'] text-balance text-center text-xl leading-6">
            {text}
        </div>
    );
};
