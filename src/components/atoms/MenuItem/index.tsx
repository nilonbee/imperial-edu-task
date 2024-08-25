"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type MenuItemProps = {
    menuName: string;
    uri: string;
    isHomePage?: boolean;
    setMobileMenuOpen?: (value: boolean) => void;
};

export const MenuItem = ({
    menuName,
    uri,
    isHomePage,
    setMobileMenuOpen,
}: MenuItemProps) => {
    const pathname = usePathname();
    const isActive = isHomePage
        ? pathname === uri
        : pathname.startsWith(`${uri}`);
    const activeClassName = isActive
        ? "text-primary font-semibold"
        : "text-textColor";

    if (setMobileMenuOpen) {
        return (
            <Link
                href={uri}
                className={`${activeClassName} text-sm font-semibold text-black hover:text-primary my-[1.5px]`}
                onClick={() => setMobileMenuOpen(false)}
            >
                {menuName}
            </Link>
        );
    }

    return (
        <Link
            href={uri}
            className={`text-sm font-semibold text-black hover:text-primary my-1`}
        >
            {menuName}
        </Link>
    );
};
