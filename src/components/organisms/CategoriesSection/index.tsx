'use client';
import React, {useState, useEffect} from 'react';
import {
    ContainerLayout,
    InnerContainer,
    MainTitle,
    Subtitle
} from "@/components/atoms";
import {categories} from "@/mockData/categories";
import {SecondaryCard} from "@/components/moliculors";
import {SeeNextIcon, SeePreviousIcon} from "@/components/atoms/Icons";

export const CategoriesSection = () => {
    // Constants
    const DESKTOP_ITEMS_PER_PAGE = 4;
    const MOBILE_ITEMS_PER_PAGE = 1;
    const TABLET_ITEMS_PER_PAGE = 2;
    // State to track current index of visible items
    const [startIndex, setStartIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(DESKTOP_ITEMS_PER_PAGE);

    // Calculate endIndex
    const endIndex = startIndex + itemsPerPage;

    // Get visible categories based on startIndex and endIndex
    const visibleCategories = categories.slice(startIndex, endIndex);

    // Handler for next button
    const handleNext = () => {
        if (endIndex < categories.length) {
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
    const percentage = Math.min((endIndex / categories.length) * 100, 100);

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
        <section className="pt-[180px]">
            {/* Journeys list */}
            <ContainerLayout>
                <InnerContainer>
                    {/* Title */}
                    <div className="py-6 justify-center flex flex-col items-center">
                        <MainTitle
                            text="Find Your Perfect Fit: Dive into Our Diverse Categories"
                        />
                        <Subtitle
                            text="Explore a variety of categories covering diverse topics, empowering you to expand your skills and knowledge base effectively."
                        />
                    </div>

                    {/* Categories carousel */}
                    <div className="mx-auto w-full justify-center flex py-6">
                        <div className={`grid grid-cols-${itemsPerPage} gap-4 items-center lg:grid-cols-4`}>
                            {visibleCategories.map((item, index) => (
                                <SecondaryCard
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                    logo={item.logo}
                                    color={item.color}
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
                            <SeePreviousIcon/>
                        </button>

                        {/* Loader */}
                        <div className="w-[270px] h-2 bg-gray-300 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-black transition-all"
                                style={{width: `${percentage}%`}}
                            />
                        </div>

                        {/* Next Button */}
                        <button
                            className="disabled:opacity-50"
                            onClick={handleNext}
                            disabled={endIndex >= categories.length}  // Disable if at the end
                        >
                            <SeeNextIcon/>
                        </button>
                    </div>
                </InnerContainer>
            </ContainerLayout>
        </section>
    );
};
