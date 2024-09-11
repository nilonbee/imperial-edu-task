import { Card } from "@/components/atoms";
import Image from "next/image";
import { QuoteIcon, TrustPilotIcon } from "@/components/atoms/Icons";

interface CardProps {
    name: string;
    country: string;
    bgColor: string;
    imagePath: string;
    description: string;
}

export const TestimonialCard = ({ name, country, bgColor, description, imagePath }: CardProps) => {
    return (
        <div style={{ backgroundColor: bgColor }} className="h-full px-2 py-4 flex justify-center bg-white rounded-2xl
            flex-col items-center gap-4  max-w-[308px] min-w-[280px]">
            <div className="justify-start items-start flex w-full">
                {/*    image country  and name*/}
                <Image
                    width={50}
                    height={50}
                    alt={name}
                    src={imagePath}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="relative flex flex-col items-start justify-center px-3">
                    <p className="font-base text-lg font-semibold">{name}</p>
                    <p className="font-md text-md font-base">{country}</p>
                </div>
            </div>
            <div className="flex pl-2 justify-start w-full">
                <QuoteIcon />
            </div>
            <div className="flex pl-2">
                <p className="text-sm font-normal">{description}</p>
            </div>
            <div className="flex items-center justify-start px-3 w-full">
                <TrustPilotIcon />
            </div>
        </div>
    )
}