import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import PromptSection from "@/components/PromptSection";
import { AudioProvider } from "@/components/AudioProvider";
import { AudioPlayer } from "@/components/player/AudioPlayer";

export default function Home() {
  return (
    <div>
      <AudioProvider>
        <HeroSection />
        <PromptSection />
        <Footer />
      </AudioProvider>
      <div className="fixed inset-x-0 bottom-0 z-10 lg:left-112 xl:left-120">
        <AudioPlayer />
      </div>
    </div>
  );
}
