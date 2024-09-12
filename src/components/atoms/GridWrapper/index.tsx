import React from "react";

type Props = {
    children: React.ReactNode;
    gap?: string;
};

export const GridWrapper = ({ children, gap }: Props) => {
    const customGap = gap ? `gap-${gap}` : "gap-3";

    return (
        <div
            className={`grid ${customGap} max-w-[780px] md:max-w-[1040px] lg:grid-cols-3 md:grid-cols-2 grid-cols-1  w-full h-full place-items-center`}
        >
            {children}
        </div>
    );
};
