import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import TreatmentsOverview from "@/components/home/TreatmentsOverview";
import DoctorSection from "@/components/home/DoctorSection";
import TechnologySection from "@/components/home/TechnologySection";
import GalleryPreview from "@/components/home/GalleryPreview";
import TestimonialsPreview from "@/components/home/TestimonialsPreview";
import FAQPreview from "@/components/home/FAQPreview";
import BookingCTA from "@/components/home/BookingCTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TreatmentsOverview />
      <DoctorSection />
      <TechnologySection />
      <GalleryPreview />
      <TestimonialsPreview />
      <FAQPreview />
      <BookingCTA />
    </main>
  );
}
