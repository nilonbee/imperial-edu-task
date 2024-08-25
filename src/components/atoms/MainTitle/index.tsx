import React from "react";

export const MainTitle = ({
    text,
}: Readonly<{
    text: string;
}>) => {
    return (
        <div className="text-center text-zinc-900 text-4xl font-bold font-['Plus Jakarta Sans'] leading-10">
            {text}
        </div>
    );
};
