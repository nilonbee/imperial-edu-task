import React from 'react'
import {
    ContainerLayout,
    InnerContainer,
    MainTitle,
} from "@/components/atoms";

import {journeys} from "@/mockData/journeys";
import {SecondaryCard} from "@/components/moliculors";
// import {categories} from "@/mockData/categories";

export const JourneysSection = () => {

    return (
        <section className="pt-[180px]">
            {/*Journeys list*/}
            <ContainerLayout>
                <InnerContainer>
                    {/*title*/}
                    <div className="py-6">
                        <MainTitle
                            text="Choose us for tailored transformation journeys
                            that solve workforce challenges and deliver results."
                        />
                    </div>
                    <div className="mx-auto w-full justify-center flex py-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {journeys?.map((item, index: number) => (
                                <SecondaryCard
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                    logo={item.logo}
                                    // footerIcon={item.footerIcon}
                                    color="rgba(215, 240, 229, 1)"
                                    isFooterAvailable
                                />
                            ))}
                        </div>
                    </div>
                </InnerContainer>
            </ContainerLayout>
        </section>
    )
}
