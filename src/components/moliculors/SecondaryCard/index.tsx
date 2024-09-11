import {EduLinkIcon} from "@/components/atoms/Icons";

export interface CardProps {
    title: string;
    description: string;
    logo: React.ReactElement;
    footerIcon?: string;
    color: string;
    isFooterAvailable?: boolean;
}

export const SecondaryCard = ({
                                  title,
                                  description,
                                  logo,
                                  isFooterAvailable,
                                  color,
                              }: CardProps) => {
    return (
        <div
            className="relative shadow-md px-2 py-4 flex justify-center bg-white rounded-lg  md:max-w-[200px] min-w-[280px] md:min-w-[180px]">
            <div className="flex-col justify-start items-start gap-3 flex">
                {/*logo*/}
                <div className="flex justify-start p-2">
                    <div
                        style={{ backgroundColor: color }}
                        className="relative shadow-sm py-4 px-3.5 rounded-xs">
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
                    <p className="text-balance text-sm line-clamp-3">{description}</p>
                </div>
                {/*footer*/}
                {isFooterAvailable && (
                    <div className="ustify-end left-3 w-[180px] h-[33px]">
                        <EduLinkIcon color="black"/>
                    </div>
                )}
            </div>
        </div>
    );
};
