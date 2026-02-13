import { useRef } from "react";

const FloatingHearts = () => (
  <div className="floating-hearts">
    {Array.from({ length: 10 }).map((_, i) => (
      <span key={i} className="heart" />
    ))}
  </div>
);

interface HeroSectionProps {
  onBeginStory: () => void;
}

const HeroSection = ({ onBeginStory }: HeroSectionProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleClick = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
    onBeginStory();
  };

  return (
    <section
      id="hero"
      className="cinematic-bg relative flex min-h-screen flex-col items-center justify-center px-6"
      style={{
        background:
          "radial-gradient(ellipse at center bottom, hsl(350 70% 15% / 0.6) 0%, hsl(0 0% 3%) 70%)",
      }}
    >
      {/* Background atmosphere layers */}
      <div className="cinematic-radial" />
      <div className="cinematic-vignette" />
      <div className="cinematic-spotlight" />
      <div className="ambient-glow">
        <div className="orb" />
        <div className="orb" />
        <div className="orb" />
      </div>
      <div className="section-hearts">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="h" />
        ))}
      </div>
      <div className="noise-texture" />

      <FloatingHearts />

      <div className="relative z-10 max-w-3xl text-center">
        {/* ✏️ REPLACE: Your headline */}
        <h1 className="heading-glow-backdrop font-display tracking-cinematic text-glow mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-7xl">
          A Love Beyond<br />Distance
        </h1>

        {/* ✏️ REPLACE: Your subheading */}
        <p className="font-body text-glow-subtle mx-auto mb-10 max-w-xl text-lg tracking-wide text-foreground/70 sm:text-xl md:text-2xl">
          Two hearts, one soul — separated by miles, connected by something deeper.
        </p>

        <button
          onClick={handleClick}
          className="btn-glow font-display tracking-cinematic rounded-full border border-primary/40 bg-primary/20 px-8 py-4 text-base font-medium text-foreground transition-all hover:bg-primary/30 sm:text-lg"
        >
          Begin Our Story
        </button>
      </div>

      {/* 🎵 AUDIO PLACEHOLDER: Replace src with your audio file path */}
      <audio ref={audioRef} loop preload="none">
        {/* <source src="/your-background-music.mp3" type="audio/mpeg" /> */}
      </audio>
    </section>
  );
};

export default HeroSection;
