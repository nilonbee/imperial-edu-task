"use client";
import Link from "next/link";
import { ContainerLayout, MainButton, MenuItem } from "@/components/atoms";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Image from "next/image";
import { ArrowDropDown } from "@/components/atoms/Icons/ArrowDropDown";
import { ArrowRightIcon } from "@/components/atoms/Icons";

export const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header style={{zIndex: 100000}} className="bg-[#FBF6F1] shadow-md -mt-1 sticky md:top-[52px] top-[120px]">
            <ContainerLayout>
                <nav
                    className="mx-auto flex w-full justify-evenly items-center py-2"
                    aria-label="Global"
                >
                    <div className="flex lg:flex-2 w-[330px]">
                        <Link className="mt-[2px]" href="/">
                            <Image
                                className="object-contain hover:drop-shadow-xl"
                                src="/images/edulink.png"
                                alt="Campus Direct"
                                width={159}
                                height={30}
                            />
                        </Link>
                        <MainButton
                            customStyle="hidden md:flex"
                            label="Explore Courses"
                            btnStyle="Link"
                            btnSize="Small"
                            icon={<ArrowDropDown />}
                        />
                    </div>


                    {/* Desktop Menu */}
                    <div className="hidden lg:flex gap-8">
                        <MenuItem menuName="Corporate Training" uri="/" isHomePage />
                        <MenuItem menuName="Become an Instructor" uri="/" />
                        <MainButton
                            label="Login"
                            btnStyle="Link"
                            btnSize="Small"
                            icon={<ArrowRightIcon color="black" />}
                        />
                        <MainButton
                            label="Register"
                            btnStyle="Link"
                            btnSize="Small"
                            customStyle="border border-black hover:border-primary"
                        />
                    </div>

                    {/* Hamburger Icon for Mobile */}
                    <div className="lg:hidden">
                        <button
                            type="button"
                            className="p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                </nav>
            </ContainerLayout>

            {/* Mobile Menu Dialog */}
            <Dialog
                className="lg:hidden"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
            >
                <div className="fixed inset-0 z-10 bg-black bg-opacity-25" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-1/2 bg-white px-4 py-4 z-100">
                    <div className="flex items-center justify-between w-full">
                        <a href="#" className="-m-1.5 p-1.5">
                            <Image
                                className="w-auto"
                                src="/images/edulink.png"
                                alt="Campus Direct"
                                width={200}
                                height={50}
                            />
                        </a>
                        <button
                            type="button"
                            className="rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-5 flow-root">
                        <div>
                            <div className="space-y-5 py-6 flex flex-col border-b border-borderGray">
                                <MenuItem menuName="Corporate Training" uri="/" isHomePage />
                                <MenuItem menuName="Become an Instructor" uri="/" />
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
};
