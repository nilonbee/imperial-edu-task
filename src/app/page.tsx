import { ContainerLayout, MainButton, Avatar, PromotionRow } from "@/components/atoms";
import { HeroSection, PartnersSection, CoursesSection } from "@/components/organisms";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <HeroSection />
      {/* Partners section */}
      <PartnersSection />
      {/* Courses Section */}
      <CoursesSection />
    </>
  );
}
