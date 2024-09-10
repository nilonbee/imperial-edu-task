import React from 'react'
import {
    ContainerLayout,
    InnerContainer,
    JourneyCard,
    MainTitle
} from "@/components/atoms";
import {journeys} from "@/mockData/journeys";

export const Journeys = () => {
    console.log(journeys)
    return (
        <section className="pt-[180px]">
            {/*title*/}
            <div className="py-6">
                <MainTitle
                    text="Choose us for tailored transformation journeys
                that solve workforce challenges and deliver results."
                />
            </div>
            {/*Journeys list*/}
            <ContainerLayout>
                <InnerContainer>
                    <div className="mx-auto w-full justify-center flex py-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {journeys?.map((item, index: number) => (
                                <JourneyCard
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                    logo={item.logo}
                                    footerIcon={item.footerIcon}
                                />
                            ))}
                        </div>
                    </div>
                </InnerContainer>
            </ContainerLayout>
        </section>
    )
}
