import HeroSection from "@/components/HeroSection";
import TimelineSection from "@/components/TimelineSection";
import TransitionSection from "@/components/TransitionSection";
import DiarySection from "@/components/DiarySection";
import FinalSection from "@/components/FinalSection";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const Index = () => {
  useScrollReveal();

  const handleBeginStory = () => {
    document.getElementById("timeline")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="page-vignette overflow-x-hidden">
      <HeroSection onBeginStory={handleBeginStory} />
      <div className="section-fade-bridge" />
      <TimelineSection />
      <div className="section-fade-bridge" />
      <TransitionSection />
      <div className="section-fade-bridge" />
      <DiarySection />
      <div className="section-fade-bridge" />
      <FinalSection />
    </main>
  );
};

export default Index;
