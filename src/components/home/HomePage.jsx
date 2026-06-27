import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WebflowScripts from "@/components/scripts/WebflowScripts";
import {
  HeroSection,
  UseCasesSection,
  IntegrationsSection,
  ProcessSection,
  FeaturesSection,
  TestimonialsSection,
  BlogSection,
} from "@/components/home/sections";

export default function HomePage() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main>
        <HeroSection />
        <UseCasesSection />
        <IntegrationsSection />
        <ProcessSection />
        <FeaturesSection />
        <TestimonialsSection />
        <BlogSection />
      </main>
      <Footer />
      <WebflowScripts />
    </div>
  );
}

