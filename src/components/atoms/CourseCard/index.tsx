import Link from "next/link";
import Image from "next/image";

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
    createdAt,
    imagePath,
    author,
    slug,
    modulesCount,
    certificate,
    discountPercentage,
    pricePerMonth,
    originalPrice,
    discountedPrice,
}: Props) => {
    return (
        <div className="Frame839 h-full p-5 bg-white rounded-2xl flex-col justify-start items-start gap-6 inline-flex">
            <div className="Frame787 flex-col justify-start items-start gap-5 flex">
                <div className="relative">
                    <Image
                        src={imagePath}
                        width={200}
                        height={200}
                        alt="blog_feature_image"
                        className="object-cover w-full h-[200px] rounded-md"
                    />
                    {discountPercentage > 0 && (
                        <div className="Group670 w-12 h-12 absolute top-2 left-2">
                            <div className="bg-red-500 rounded-lg p-2 text-white text-center">
                                <span className="text-lg font-extrabold">{discountPercentage}%</span>
                                <div className="text-base font-semibold">OFF</div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="text-zinc-900 text-2xl font-bold leading-loose">
                    {title}
                </div>
            </div>
            <div className="flex-col justify-start items-start gap-6 flex">
                <div className="inline-flex gap-2.5">
                    <div className="bg-[#EFF4FF] px-2.5 py-1 bg-blue-50 rounded-3xl flex items-center gap-1">
                        <div className="text-base text-zinc-900">{modulesCount} Modules</div>
                    </div>
                    <div className="bg-[#EFF4FF] px-2.5 py-1 bg-blue-50 rounded-3xl flex items-center gap-1">
                        <div className="text-base text-zinc-900">{certificate}</div>
                    </div>
                </div>
                <div className="bg-[#EFF4FF] text-neutral-600 text-base leading-normal">
                    {description}
                </div>
                <div className="flex-col justify-start items-start gap-1 flex">
                    <div className="border-b border-neutral-200 flex items-center gap-1.5 py-1">
                        <div className="text-neutral-600 text-lg font-semibold">From</div>
                        <div className="flex items-center gap-2">
                            <div className="text-black text-2xl font-extrabold">{pricePerMonth}</div>
                            <div className="text-neutral-600 text-lg font-semibold">/ month</div>
                        </div>
                    </div>
                    <div className="inline-flex justify-between items-center w-full">
                        <div className="text-lg font-semibold">
                            <span className="text-zinc-900">{discountedPrice} </span>
                            <span className="text-neutral-500 line-through">{originalPrice}</span>
                            <span className="text-zinc-900"> in full</span>
                        </div>
                        <Link href={`/course/${slug}`} passHref className="py-1 justify-center items-center gap-2 flex">
                            <div className="text-black text-lg font-semibold leading-snug">View details</div>
                            <div className="w-6 h-6 px-1.5 py-1 origin-top-left rotate-90 justify-center items-center flex">
                                <div className="w-3 h-4 relative">
                                    {/* You can include an icon here */}
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
