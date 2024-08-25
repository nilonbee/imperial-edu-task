import React from "react";

export const InnerContainer = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="lg:pr-[3%] lg:pl-[8%] md:pr-2 md:pl-2  sm:pr-2 sm:pl-2 xs:pr-2 xs:pl-2 fadeIn">
            {children}
        </div>
    );
};
