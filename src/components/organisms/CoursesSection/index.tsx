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
import {courses} from "@/mockData/courses";
import {ArrowRightIcon, NextIcon} from "@/components/atoms/Icons";
import {CourseCard} from "@/components/moliculors";

export const dummyTexts = ["All Courses", "Project Management", "Business Management", "Employability Skills", "Life Learning"]

export const CoursesSection = () => {

    const [startIndex, setStartIndex] = useState(0);

    const visibleButtons = 3;
    const handleSeeMore = () => {
        // Update the startIndex to the next set of buttons
        setStartIndex((prevIndex) => (prevIndex + 1) % dummyTexts.length);
    };
    // Create a slice of the dummyTexts array based on the startIndex
    const buttonsToShow = dummyTexts.slice(startIndex, startIndex + visibleButtons);

    // If there are fewer buttons remaining at the end of the array, wrap around to the start
    if (buttonsToShow.length < visibleButtons) {
        buttonsToShow.push(...dummyTexts.slice(0, visibleButtons - buttonsToShow.length));
    }

    return (
        <div className="relative bg-lightAmber -mt-1">
            <div className="absolute -top-24 left-0 skew-y-custom-top w-full h-48  bg-lightAmber -z-10"/>
            <div className="absolute -bottom-24 left-0 -skew-y-custom-bottom w-full h-48 bg-lightAmber -z-10"/>
            <ContainerLayout>
                <InnerContainer>
                    {/* Main title*/}
                    <div className="py-6">
                        <MainTitle text="Master Your Career Growth with Our Top-Rated, Expert-Led Courses"/>
                    </div>
                    <div
                        className="py-6 flex justify-center items-center gap-3 md:max-w-[800px] max-w-[300px] m-auto relative">
                        {/* Map over the buttonsToShow */}
                        {buttonsToShow.map((item: string, index: number) => (
                            <RoundButton text={item} key={index}/>
                        ))}

                        {/* "See More" button on the far right */}
                        <div className="absolute -right-3">
                            <button onClick={handleSeeMore} className="flex items-center">
                                <NextIcon/>
                            </button>
                        </div>
                    </div>
                    {/* Courses grid */}
                    <div className="mx-auto w-full justify-center flex">
                        <GridWrapper gap="4">
                            {courses.map((course, index) => (
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
                                    icon1={course.icon1}
                                    icon2={course.icon2}
                                    isMainCourse
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
