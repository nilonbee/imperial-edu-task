import {ContainerLayout, InnerContainer, MainButton} from "@/components/atoms";
import {
    ApplyPayIcon,
    CertificationsIcon,
    FacebookIcon,
    Footerlogo, GlobalIcon, GooglePayIcon,
    InstagramIcon,
    LinkedinIcon, MasterCardIcon, PaypalIcon, SecureTrustIcon,
    TwitterIcon, VisaIcon,
    YoutubeIcon
} from "@/components/atoms/Icons";

export const Footer = () => {
    return (
        <footer className="w-full flex flex-col items-center justify-center bg-mediumAmber">
            <ContainerLayout>
                <InnerContainer>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2  lg:grid-cols-6 py-3 px-2.5">
                        <div className="col-span-2 flex flex-col my-3 mx-2">
                            <Footerlogo/>
                            <div className="flex flex-col my-3 justify-center text-balance text-start">
                                <p className="text-sm font-normal w-[285px]">
                                    Global Edulink offers accessible,
                                    high-quality online education for all,
                                    with flexible programs tailored to fit into daily life,
                                    empowering learners worldwide to achieve personal
                                    and professional goals.
                                </p>
                            </div>
                            <div className="flex space-x-3 my-3">
                                <div className="bg-white rounded-full w-[48px] h-[48px] p-3">
                                    <FacebookIcon/>
                                </div>
                                <div className="bg-white rounded-full w-[48px] h-[48px] p-3">
                                    <InstagramIcon/>
                                </div>
                                <div className="bg-white rounded-full w-[48px] h-[48px] p-3">
                                    <TwitterIcon/>
                                </div>
                                <div className="bg-white rounded-full w-[48px] h-[48px] p-3">
                                    <LinkedinIcon/>
                                </div>
                                <div className="bg-white rounded-full w-[48px] h-[48px] p-3">
                                    <YoutubeIcon/>
                                </div>
                            </div>
                            <div className="flex flex-col my-3">
                                <button
                                    className="rounded-md py-1 px-2 w-[280px] bg-oliveGreen text-white text-md font-semibold">
                                    Verify your certificate
                                </button>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <ul>
                                <li className="text-lg font-medium my-4">
                                    Resources
                                </li>
                                <li className="text-sm font-sm">
                                    Free Courses
                                </li>
                                <li className="text-sm font-sm">Practical Lab</li>
                                <li className="text-sm font-sm"> Blogs</li>
                                <li className="text-sm font-sm">Pay with PayPal</li>
                                <li className="text-sm font-sm">Course extension fee</li>
                                <li className="text-sm font-sm">Retake exam fee</li>
                            </ul>
                        </div>
                        <div className="col-span-1">
                            <ul>
                                <li className="text-lg font-medium my-4">
                                    Quick Links
                                </li>
                                <li className="text-sm font-sm">
                                    Become an Instructor
                                </li>
                                <li className="text-sm font-sm">Corporate Training
                                </li>
                                <li className="text-sm font-sm"> Our Partners
                                </li>
                                <li className="text-sm font-sm">Accrediting bodies
                                </li>
                                <li className="text-sm font-sm">Live online classes</li>
                                <li className="text-sm font-sm">Online courses</li>
                                <li className="text-sm font-sm">Classroom courses</li>
                            </ul>
                        </div>
                        <div className="col-span-1">
                            <ul>
                                <li className="text-lg font-medium my-4">
                                    Support
                                </li>
                                <li className="text-sm font-sm">
                                    FAQ
                                </li>
                                <li className="text-sm font-sm">Our partners</li>
                                <li className="text-sm font-sm">Terms and conditions</li>
                                <li className="text-sm font-sm">Privacy policy</li>
                                <li className="text-sm font-sm">Contact us</li>
                                <li className="text-sm font-sm">Complaint form</li>
                                <li className="text-sm font-sm">Student ID card</li>
                                <li className="text-sm font-sm">Books</li>
                            </ul>
                        </div>
                        <div className="col-span-1">
                            <ul>
                                <li className="text-lg font-medium my-4">
                                    Contact info
                                </li>
                                <li className="text-sm font-sm">
                                    +4420-3409-7966
                                </li>
                                <li className="text-sm font-sm">CityPoint, 1 Ropemaker Street,</li>
                                <li className="text-sm font-sm">London, EC2Y 9HU</li>
                            </ul>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 py-2  px-2.5">
                        <div className="col-span-3 flex-col lg:justify-start items-center pb-3 pt-2 px-2">
                            <p className="text-xs font-normal w-[260px]">
                                Choose your preferred Languages
                            </p>
                            <div className="flex">
                                <div className="relative flex items-center">
                                    <div className="absolute left-3 flex items-center bg-white px-2 py-1">
                                        <GlobalIcon/>
                                        <p className="text-xs ml-2">English</p>
                                    </div>
                                    <input
                                        type="text"
                                        className="pl-20 rounded-xs p-2 my-2 mr-1 text-xs font-normal border-none ring-0 outline-none focus:outline-none focus:shadow-outline"
                                    />
                                    <MainButton label="Apply" btnStyle="Primary" btnSize="Small" customStyle="my-2"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-3 flex justify-start lg:justify-end items-center px-2.5 py-3">
                            <p>
                                <CertificationsIcon/>
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 px-2.5">
                        <div
                            className="order-2 md:order-1 col-span-3 flex-col lg:justify-start items-start md:py-12 py-4">
                            <p className="text-xs font-normal text-gray">
                                Copyright © 2015 - 2024 -Global Edulink All rights reserved
                            </p>
                        </div>
                        <div className="order-1 md:order-2 col-span-3 flex justify-start lg:justify-end items-center">
                            <PaypalIcon/>
                            <VisaIcon/>
                            <MasterCardIcon/>
                            <ApplyPayIcon/>
                            <GooglePayIcon/>
                            <SecureTrustIcon/>
                        </div>
                    </div>
                </InnerContainer>
            </ContainerLayout>
        </footer>
    )
}