"use client";
import { ContainerLayout, CourseCard, GridWrapper, InnerContainer, MainButton, MainTitle, MenuItem } from "@/components/atoms";
import { courses } from "@/mockData/courses";

export const Courses = () => {

    return (
        <div className="relative bg-lightAmber -mt-1">
            <div className="absolute -top-24 left-0 skew-y-custom-top w-full h-48  bg-lightAmber -z-10"/>
            <div className="absolute -bottom-24 left-0 -skew-y-custom-bottom w-full h-48 bg-lightAmber -z-10"/>
            <ContainerLayout>
                <InnerContainer>
                    {/* Main title*/}
                    <div className="py-24">
                        <MainTitle text="Master Your Career Growth with Our Top-Rated, Expert-Led Courses"/>
                    </div>
                    {/* Courses grid */}
                    <div className="mx-auto w-full justify-center flex">
                        <GridWrapper gap="5">
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
                                />
                            ))}
                        </GridWrapper>
                    </div>
                </InnerContainer>
            </ContainerLayout>
        </div>
    );
};
