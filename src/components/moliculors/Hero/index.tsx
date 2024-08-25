import React from 'react'
import { ContainerLayout, InnerContainer } from '@/components/atoms'
import Image from 'next/image'

export const Hero = () => {
    return (
        <div className="relative w-full py-12 overflow-hidden max-h-min bg-[#FBF6F1]">
            <ContainerLayout>
                <InnerContainer>
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2">
                        <div className="order-2 md:order-1 mt-8">
                            <div className="w-[778px]">
                                <span className="text-[#18191d] text-[46px] font-bold font-['Plus Jakarta Sans'] leading-[73px]">
                                    Upskill from Anywhere with
                                </span>
                                <br />
                                <span className="text-[#ff965b] text-[46px] font-bold font-['Plus Jakarta Sans'] leading-[73px]">
                                    Industry-Recognized
                                </span>
                                <br />
                                <span className="text-[#18191d] text-[46px] font-bold font-['Plus Jakarta Sans'] leading-[73px]">
                                    Learning
                                </span>
                            </div>
                            <div className="w-[531px] text-[#1c1c1c] text-[25px] font-normal font-['Plus Jakarta Sans'] leading-[45px]">
                                Flexible, accredited courses to help you learn and advance from anywhere in the world.
                            </div>
                            <div className="h-[68px] pl-[30px] pr-2.5 py-2.5 my-2.5 bg-[#fbf6f1] rounded-lg border border-[#d1d1d1] flex items-center">
                                <div className="flex-grow relative">
                                    <input
                                        type="text"
                                        className="w-full h-full text-center text-[#6d6d6d] text-lg font-normal font-['Plus Jakarta Sans'] leading-7 bg-transparent border-none outline-none placeholder-transparent"
                                        placeholder="What will you be learning today?"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center text-[#6d6d6d] text-lg font-normal font-['Plus Jakarta Sans'] leading-7">
                                        What will you be learning today?
                                    </div>
                                </div>
                                <div className="px-[15px] py-2.5 bg-[#4ac994] rounded-lg flex items-center gap-[5px] cursor-pointer">
                                    <div className="text-center text-white text-base font-normal font-['Plus Jakarta Sans']">
                                        Explore
                                    </div>
                                    <Image
                                        className="object-contain"
                                        src="/images/coolShape.png"
                                        alt="image"
                                        width={16}
                                        height={16}
                                    />
                                </div>
                            </div>

                        </div>
                        <div className="order-1 md:order-2 flex justify-center mt-8 relative">
                            <div>
                                <Image
                                    className="object-contain"
                                    src="/images/ellipse.png"
                                    alt="image"
                                    width={380}
                                    height={450}
                                />
                                <Image
                                    className="object-contain absolute top-0 left-0"
                                    src="/images/Group.png"
                                    alt="image"
                                    width={380}
                                    height={450}
                                />
                            </div>
                        </div>
                    </div>
                </InnerContainer>
            </ContainerLayout>
        </div>
    )
}
