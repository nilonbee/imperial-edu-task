import React from "react";

export const InnerContainer = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="lg:pr-[6%] lg:pl-[6%] md:pr-2 md:pl-12  sm:pr-2 sm:pl-16 xs:pr-2 xs:pl-12 fadeIn">
            {children}
        </div>
    );
};
