"use client";
import React from "react";
import Image from "next/image";

interface IAvatar {
    imgUrl?: string;  // Use optional typing for imgUrl
}

export const Avatar: React.FC<IAvatar> = ({ imgUrl }) => {
    return (
        <Image
            className="h-9 w-9 rounded-full shadow-md object-cover"
            src={imgUrl || "/images/avater.jpg"}
            alt="Avatar"
            width={36}
            height={36}
        />
    );
};
