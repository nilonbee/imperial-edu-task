'use client'
import React from "react";
import { MainButton } from "@/components/atoms";
import { ArrowRightIcon, CloseIcon } from "@/components/atoms/Icons";

export const PromotionRow = () => {
    return (
        <div className="bg-[#FFDA6E] h-[52px] w-full flex justify-center items-center sm:justify-col">
            <div className="flex items-center justify-between md:w-2/3 w-full ">
                <div className='text-black font-bold text-sm'>
                    Renew, Refresh
                    {" "}
                    <span className='text-black'>24</span>
                </div>
                <div className="divide-[#B0B0B0"></div>
                <div className="text-black text-sm font-medium">
                    Save up to 40%! Hurry, offer ends June 15th.
                </div>
                <MainButton
                    label="Claim offer"
                    btnStyle="Primary"
                    btnSize="Small"
                    icon={<ArrowRightIcon color="#ffffff" />}
                // onClick={closeModal}
                />
                <div>
                    <CloseIcon />
                </div>
            </div>
        </div>
    );
};
