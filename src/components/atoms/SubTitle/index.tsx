import React from "react";

export const Subtitle = ({
    text,
}: Readonly<{
    text: string;
}>) => {
    return (
        <div className="text-zinc-900 text-xl font-normal font-['Plus Jakarta Sans']">
            {text}
        </div>
    );
};
