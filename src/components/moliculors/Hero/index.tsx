import React from 'react';
import { ContainerLayout, InnerContainer } from '@/components/atoms';
import Image from 'next/image';

export const Hero = () => {
    return (
        <div className="relative w-full pb-24 overflow-hidden md:max-h-min md:bg-lightAmber md:rounded-b-ellipse mt-0">
            <div className="absolute top-0 right-0 w-full bg-lightAmber h-[458px] md:h-[608px]  md:hidden rounded-b-ellipse-sm"/>
            <img src="/images/Vector.png" alt="vector" className="hidden md:block w-1/2 object-cover absolute top-0 right-24 xs:hidden" />
            <ContainerLayout>
                <InnerContainer>
                    <div className="z-10 grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                        <div className="order-2 md:order-1 mt-6">
                            <div className="w-full md:w-[778px] mt-6">
                                <span className="text-[#18191d] text-[20px] sm:text-[24px] md:text-[38px] lg:text-[48px] font-bold font-['Plus Jakarta Sans'] leading-tight md:leading-[73px]">
                                    Upskill from Anywhere with
                                </span>
                                <br />
                                <span className="text-[#ff965b] text-[20px] sm:text-[24px] md:text-[38px] lg:text-[48px] font-bold font-['Plus Jakarta Sans'] leading-tight md:leading-[73px]">
                                    Industry-Recognized
                                </span>
                                <br />
                                <span className="text-[#18191d] text-[20px] sm:text-[24px] md:text-[38px] lg:text-[48px] font-bold font-['Plus Jakarta Sans'] leading-tight md:leading-[73px]">
                                    Learning
                                </span>
                            </div>
                            <div className="w-full sm:w-3/4 md:w-[401px] text-[#1c1c1c] text-[16px] sm:text-[18px] md:text-[25px] font-normal font-['Plus Jakarta Sans'] leading-[25px] sm:leading-[35px] md:leading-[45px] mt-4">
                                Flexible, accredited courses to help you learn and advance from anywhere in the world.
                            </div>
                            <div className="h-[68px] w-full sm:w-3/4 md:w-[431px] pl-[30px] pr-2.5 py-2.5 my-2.5 bg-[#fbf6f1] rounded-lg border border-[#d1d1d1] flex items-center">
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
                                    className="object-contain ml-10 md:mr-6  mt-6 w-[280px] h-[320px] md:w-[480px] md:h-[460px]"
                                    src="/images/ellipse.png"
                                    alt="image"
                                    width={480}
                                    height={450}
                                />
                                <div className="absolute md:top-0 top-4 md:-left-12 right-12 w-[300px] h-[320px] sm:w-[350px] sm:h-[360px] md:w-[450px] md:h-[460px]">
                                    <Image
                                        className="object-contain"
                                        src="/images/Group.png"
                                        alt="image"
                                        fill
                                        sizes="(max-width: 768px) 65vw, (max-width: 1200px) 100vw"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </InnerContainer>
            </ContainerLayout>
        </div>
    );
}
