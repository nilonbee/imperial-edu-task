'use client';
import React, {useState, useEffect} from 'react';
import {
    ContainerLayout,
    InnerContainer,
    MainTitle,
    Subtitle
} from "@/components/atoms";
import {testimonials} from "@/mockData/testimonials";
import {TestimonialCard} from "@/components/moliculors";
import {WhiteNextIcon, WhitePrevIcon} from "@/components/atoms/Icons";

export const TestimonialsSection = () => {
    // Constants
    const DESKTOP_ITEMS_PER_PAGE = 3;
    const MOBILE_ITEMS_PER_PAGE = 1;
    const TABLET_ITEMS_PER_PAGE = 2;
    // State to track current index of visible items
    const [startIndex, setStartIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(DESKTOP_ITEMS_PER_PAGE);

    // Calculate endIndex
    const endIndex = startIndex + itemsPerPage;

    // Get visible testimonials based on startIndex and endIndex
    const visibleTestimonials = testimonials.slice(startIndex, endIndex);

    // Handler for next button
    const handleNext = () => {
        if (endIndex < testimonials.length) {
            setStartIndex(prevIndex => prevIndex + 1);
        }
    };

    // Handler for previous button
    const handlePrevious = () => {
        if (startIndex > 0) {
            setStartIndex(prevIndex => prevIndex - 1);
        }
    };

    // Calculate the loader percentage (how many items are being shown out of total)
    const percentage = Math.min((endIndex / testimonials.length) * 100, 100);

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth <= 512) {
                setItemsPerPage(MOBILE_ITEMS_PER_PAGE);
            } else if (screenWidth <= 1000 && screenWidth > 768) {
                setItemsPerPage(TABLET_ITEMS_PER_PAGE);
            } else {
                setItemsPerPage(DESKTOP_ITEMS_PER_PAGE);
            }
        };

        // Initial check
        handleResize();

        // Listen for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="relative h-full pb-6">
            <div className="absolute top-64 left-0 skew-y-2  w-full h-[220px] bg-lightBlack -z-10"/>
            <div className="absolute bottom-0 left-0  w-full md:h-[180px] h-[200px] bg-lightBlack -z-10"/>
            {/* Journeys list */}
            <ContainerLayout>
                <InnerContainer>
                    {/* Title */}
                    <div className="py-6 justify-center flex flex-col items-center">
                        <MainTitle
                            text="Client Testimonials"
                        />
                        <Subtitle
                            text="Hear Heart-warming Stories from Our Valued Customers Sharing Their Experience and Success with Our Services"
                        />
                    </div>

                    {/* Categories carousel */}
                    <div className="mx-auto w-full justify-center flex py-6">
                        <div className={`grid grid-cols-${itemsPerPage} flex justify-center gap-4 items-center lg:grid-cols-3`}>
                            {visibleTestimonials.map((item, index) => (
                                <TestimonialCard
                                    key={index}
                                    name={item.name}
                                    description={item.description}
                                    imagePath={item.imagePath}
                                    bgColor={item.bgColor}
                                    country={item.country}
                                />
                            ))}
                        </div>
                    </div>


                    {/* Navigation Buttons and Loader */}
                    <div className="flex justify-center w-full py-2 items-center space-x-4">
                        {/* Previous Button */}
                        <button
                            className="disabled:opacity-50"
                            onClick={handlePrevious}
                            disabled={startIndex === 0}  // Disable if at the start
                        >
                            <WhitePrevIcon/>
                        </button>

                        {/* Loader */}
                        <div className="w-[270px] h-2  rounded-full overflow-hidden">
                            <div
                                className="h-full bg-white transition-all"
                                style={{width: `${percentage}%`}}
                            />
                        </div>

                        {/* Next Button */}
                        <button
                            className="disabled:opacity-50"
                            onClick={handleNext}
                            disabled={endIndex >= testimonials.length}  // Disable if at the end
                        >
                            <WhiteNextIcon/>
                        </button>
                    </div>
                </InnerContainer>
            </ContainerLayout>
        </div>
    );
};
