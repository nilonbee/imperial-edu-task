import React from "react";

export const InnerContainer = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="lg:pr-[6%] lg:pl-[6%] md:pr-[6%] md:pl-[6%]  sm:pr-[4%] sm:pl-[4%] xs:pr-[5%] xs:pl-[5%] fadeIn">
            {children}
        </div>
    );
};
