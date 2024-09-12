import React from 'react';


export const Card = ({children}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="h-full p-3 flex justify-center bg-white
            flex-col items-center gap-4  w-[300px] rounded-xl">
            {children}
        </div>
    )
}