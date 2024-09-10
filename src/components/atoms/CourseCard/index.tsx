import Link from "next/link";
import Image from "next/image";
import {ArrowRightIcon} from "@/components/atoms/Icons"
import {Card, MainButton} from "@/components/atoms";

type Props = {
    title: string;
    description: string;
    createdAt: string;
    imagePath: string;
    author: string;
    slug: string;
    modulesCount: number;
    certificate: string;
    discountPercentage: number;
    pricePerMonth: string;
    originalPrice: string;
    discountedPrice: string;
};

export const CourseCard = ({
                               title,
                               description,
                               imagePath,
                               slug,
                               modulesCount,
                               certificate,
                               discountPercentage,
                               pricePerMonth,
                               originalPrice,
                               discountedPrice,
                           }: Props) => {
    return (
        // <div className="h-full px-2 py-4 flex justify-center bg-white rounded-2xl flex-col items-center gap-4  max-w-[308px] min-w-[280px]">
        <Card>
            <div className="flex-col justify-start items-start gap-3 flex">
                <div className="relative">
                    <div className="relative w-[265px] xl:w-[285px] h-[149px]">
                        <Image
                            src={imagePath}
                            fill
                            alt={title}
                            className="object-cover w-full rounded-md"
                            priority
                        />
                    </div>

                    {discountPercentage > 0 && (
                        <div
                            className="md:hidden absolute top-2 left-2 p-2 bg-red-500 rounded-lg text-white flex flex-col items-center justify-center w-16 h-16">
                            <span className="text-lg font-extrabold">{discountPercentage}%</span>
                            <span className="text-base font-semibold">OFF</span>
                        </div>
                    )}
                </div>

                <div className="text-zinc-900 text-xl font-bold leading-loose">
                    {title}
                </div>
            </div>
            <div className="flex-col justify-start items-start gap-6 flex">
                <div className="inline-flex gap-2.5 ml-2">
                    <div className="bg-[#EFF4FF] px-2 py-1 rounded-3xl flex items-center gap-1">
                        <div className="text-xs text-zinc-900 line-clamp-2">{modulesCount} Modules</div>
                    </div>
                    <div className="bg-[#EFF4FF] px-2.5 py-1 rounded-3xl flex items-center gap-1">
                        <div className="text-xs text-zinc-900">{certificate}</div>
                    </div>
                </div>
                <div className="text-neutral-600 text-xs py-1 px-2 leading-normal ml-1">
                    {description}
                </div>
                <div className="flex-col justify-start items-start gap-1 flex">
                    <div className="border-b border-neutral-200 flex items-center gap-1.5 pl-3 py-1">
                        <div className="text-neutral-600 text-base font-semibold">From</div>
                        <div className="flex items-center gap-2">
                            <div className="text-black text-lg font-extrabold">{pricePerMonth}</div>
                            <div className="text-neutral-600 text-base font-semibold">/ month</div>
                        </div>
                    </div>
                    <div
                        className="flex flex-col md:flex-row justify-between  items-start md:items-center max-w-[308px] min-w-[280px]">
                        <div className="pl-3 text-sm font-semibold">
                            <span className="text-zinc-900">{discountedPrice} </span>
                            <span className="text-zinc-900">in full</span>
                        </div>
                        <Link href={`/course/${slug}`}
                              className="flex justify-end  items-center gap-2 text-black text-sm font-semibold leading-snug">
                            <MainButton
                                label="View Details"
                                btnStyle="Link"
                                btnSize="Small"
                                icon={<ArrowRightIcon color="black"/>}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </Card>

        // </div>
    );
};
