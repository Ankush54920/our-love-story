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
    <main className="overflow-x-hidden">
      <HeroSection onBeginStory={handleBeginStory} />
      <TimelineSection />
      <TransitionSection />
      <DiarySection />
      <FinalSection />
    </main>
  );
};

export default Index;
