import React from 'react';


export const Card = ({children}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="h-full px-2 py-4 xs:mx-2 sm:mx-12 md:mx-2 flex justify-center bg-white rounded-2xl
            flex-col items-center gap-4  max-w-[308px] min-w-[280px]">
            {children}
        </div>
    )
}