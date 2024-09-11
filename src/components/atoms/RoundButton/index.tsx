import React from "react";

export const RoundButton = ({
                              text,
                          }: Readonly<{
    text: string;
}>) => {
    return (
        <div role="button" className="min-w-[80px] hover:bg-lightYellow line-clamp-1 text-sm font-medium text-gray-700 rounded-full border-opacity-50 border-gray border-[0.5px] p-1">
            {text}
        </div>
    );
};
