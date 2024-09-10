import Link from "next/link";
import Image from "next/image";
import {ArrowRightIcon, EduLinkIcon} from "@/components/atoms/Icons"
import {Card, MainButton} from "@/components/atoms";

export interface JourneyCardProps {
    title: string;
    description: string;
    logo: React.ReactElement;
    footerIcon: string;
}

export const JourneyCard = ({
                                title,
                                description,
                                logo,
                                footerIcon,
                            }: JourneyCardProps) => {
    return (
        <div
            className="relative shadow-md px-2 py-4 flex justify-center bg-white rounded-2xl max-w-[200px] min-w-[180px]">
            <div className="flex-col justify-start items-start gap-3 flex">
                {/*logo*/}
                <div className="flex justify-start p-2">
                    <div className="relative shadow-sm bg-lightGreen py-4 px-3.5 bg-light-gray-100 rounded-2xl">
                        {logo}
                    </div>
                </div>
                {/*title*/}
                <div className="max-w-[180px] h-16">
                    <p className="text-balance text-2xl font-bold leading-2">
                        {title}
                    </p>
                </div>
                <div className="max-w-[180px]">
                    <p className="text-balance line-clamp-3">{description}</p>
                </div>
                {/*footer*/}
                <div className="ustify-end left-3 w-[180px] h-[33px]">
                    <EduLinkIcon color="black"/>
                </div>
            </div>
        </div>
    );
};
