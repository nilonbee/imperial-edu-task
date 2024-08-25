'use client'
import React from "react";
import {MainButton} from "@/components/atoms";
import {ArrowRightIcon, CloseIcon} from "@/components/atoms/Icons";

export const Hero = () => {
    return (
        <div className="bg-[#FFDA6E] h-[62px] w-full flex justify-center items-center">
            <div className="flex items-center justify-between md:w-2/3 w-full ">
                <div className='text-red font-bold text-lg leading-tight'>
                    Renew, Refresh
                    {" "}
                    <span className='text-black'>24</span>
                </div>
                <div className="divide-[#B0B0B0"></div>
                <div className="text-black">
                    Save up to 40%! Hurry, offer ends June 15th.
                </div>
                <MainButton
                    label="Claim offer"
                    btnStyle="Primary"
                    btnSize="Medium"
                    icon=<ArrowRightIcon/>
                    // onClick={closeModal}
                />
                <div>
                    <CloseIcon/>
                </div>
            </div>
        </div>
    );
};
