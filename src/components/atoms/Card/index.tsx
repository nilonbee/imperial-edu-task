import React from 'react';


export const Card = ({children}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="h-full px-2 py-4 flex justify-center bg-white rounded-2xl
            flex-col items-center gap-4  max-w-[308px] min-w-[280px]">
            {children}
        </div>
    )
}