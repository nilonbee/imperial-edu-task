'use client';
import React, {useState} from "react";
import {
    ContainerLayout,
    GridWrapper,
    InnerContainer,
    MainButton,
    MainTitle,
    RoundButton
} from "@/components/atoms";
import {training} from "@/mockData/training";
import {ArrowRightIcon, NextIcon} from "@/components/atoms/Icons";
import {CourseCard} from "@/components/moliculors";


export const TrainingSection = () => {
    const [startIndex, setStartIndex] = useState(0);
    const visibleButtons = 4;

    return (
        <div className="relative bg-lightAmber mt-12">
            <ContainerLayout>
                <InnerContainer>
                    {/* Main title*/}
                    <div className="py-6">
                        <MainTitle text="Master Your Career Growth with Our Top-Rated, Expert-Led Courses"/>
                    </div>
                    {/* Courses grid */}
                    <div className="mx-auto w-full justify-center flex">
                        <GridWrapper gap="4">
                            {training.map((course, index) => (
                                <CourseCard
                                    key={index}
                                    title={course.title}
                                    description={course.description}
                                    createdAt={course.createdAt}
                                    imagePath={course.imagePath}
                                    author={course.author}
                                    slug={course.slug}
                                    modulesCount={course.modulesCount}
                                    certificate={course.certificate}
                                    discountPercentage={course.discountPercentage}
                                    pricePerMonth={course.pricePerMonth}
                                    originalPrice={course.originalPrice}
                                    discountedPrice={course.discountedPrice}
                                    icon2={course.icon1}
                                    icon1={course.icon2}
                                />
                            ))}
                        </GridWrapper>
                    </div>
                    <div className="w-full flex justify-center items-center gap-4 py-12">
                        <MainButton
                            label="Show more"
                            btnStyle="Primary"
                            btnSize="Small"
                            icon={<ArrowRightIcon color="white"/>}
                        />
                        <MainButton
                            label="View all"
                            btnStyle="Link"
                            btnSize="Small"
                            customStyle="border border-black hover:border-primary"
                        />
                    </div>
                </InnerContainer>
            </ContainerLayout>
        </div>
    );
};
