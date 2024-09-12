import React from "react";

interface Props {
    children: React.ReactNode;
    cssCustom?: string;
    bgColor?: string;
}

export const CardWrapper = ({
    children,
    cssCustom,
    bgColor = "bg-white",
}: Props) => {
    return (
        <div
            className={`flex flex-col rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 lg:hover:scale-105 ${cssCustom} ${bgColor}`}
        >
            {children}
        </div>
    );
};
