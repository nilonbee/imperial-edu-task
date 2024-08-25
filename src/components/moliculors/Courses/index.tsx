"use client";
import { ContainerLayout, CourseCard, GridWrapper, InnerContainer, MainButton, MainTitle, MenuItem } from "@/components/atoms";
import { courses } from "@/mockData/courses";

export const Courses = () => {

    return (
        <header className="bg-[#FBF6F1] shadow-md -mt-1 z-1000">
            <ContainerLayout>
                <InnerContainer>
                    <div className="py-24">
                        <MainTitle text="Master Your Career Growth with Our Top-Rated, Expert-Led Courses" />
                    </div>
                    {/* Courses grid */}
                    <div className="py-12">
                        <GridWrapper gap="2">
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
        </header>
    );
};
