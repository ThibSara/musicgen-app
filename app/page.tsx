import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import PromptSection from "@/components/PromptSection";
export default function Home() {
  return (
    <div className="overflow-hidden h-screen">
      <HeroSection />
      <PromptSection />
      <Footer />
    </div>
  );
}
