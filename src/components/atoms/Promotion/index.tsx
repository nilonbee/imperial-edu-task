'use client'
import React from "react";
import {MainButton} from "@/components/atoms";
import {ArrowRightIcon, CloseIcon} from "@/components/atoms/Icons";

export const PromotionRow = () => {
    return (
        <header style={{zIndex: 10000}} className="sticky top-0 bg-[#FFDA6E] md:h-[52px] h-[120px] w-full flex justify-center items-center sm:justify-col">
            <div className="flex items-center justify-between md:w-1/2 w-full flex-col md:flex-row gap-3">
                <div className='text-red font-bold text-sm'>
                    Renew, Refresh
                    {" "}
                    <span className='text-black'>24!</span>
                </div>
                <div className="hidden md:block divider divider-horizontal text-[#B0B0B0]">|</div>
                <div className="text-black text-sm font-medium">
                Save up to 40%! Hurry, offer ends June 15th.
                </div>
                <MainButton
                    label="Claim offer"
                    btnStyle="Primary"
                    btnSize="Small"
                    icon={<ArrowRightIcon color="#ffffff"/>}
                    // onClick={closeModal}
                />
                <div className="absolute top-4 right-4 md:right-44">
                    <CloseIcon/>
                </div>
            </div>
        </header>
    );
};
