import {HeroSection, PartnersSection, CoursesSection, JourneysSection, CategoriesSection} from "@/components/organisms";
import {TrainingSection} from "@/components/organisms";
import {TestimonialsSection} from "@/components/organisms";

export default function Home() {
    return (
        <>
            {/* Hero */}
            <HeroSection />
            {/* Partners section */}
            <PartnersSection />
            {/* Courses Section */}
            <CoursesSection />
            {/* Journeys section*/}
            <JourneysSection />
            {/* Categories section */}
            <CategoriesSection  />
            {/* Training Section*/}
            <TrainingSection />
            {/* Testimonials Section*/}
            <TestimonialsSection />
        </>
    );
}
