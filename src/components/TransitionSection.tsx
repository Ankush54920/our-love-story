const TransitionSection = () => {
  return (
    <section
      className="cinematic-bg relative flex min-h-[50vh] items-center justify-center px-6 py-20"
      style={{
        background:
          "radial-gradient(ellipse at center, hsl(350 50% 10% / 0.4) 0%, hsl(0 0% 3%) 80%)",
      }}
    >
      {/* Background atmosphere layers */}
      <div className="cinematic-radial" />
      <div className="cinematic-vignette" />
      <div className="cinematic-spotlight" />
      <div className="ambient-glow">
        <div className="orb" />
        <div className="orb" />
      </div>
      <div className="noise-texture" />

      {/* Glow divider top */}
      <div
        className="absolute left-1/2 top-0 h-px w-2/3 max-w-md -translate-x-1/2"
        style={{
          background:
            "linear-gradient(90deg, transparent, hsl(350 70% 45% / 0.5), transparent)",
        }}
      />

      <blockquote className="reveal relative z-10 max-w-2xl text-center">
        {/* ✏️ REPLACE: Your transition quote */}
        <p className="heading-glow-backdrop font-display text-glow text-2xl font-medium italic leading-relaxed tracking-wide sm:text-3xl md:text-4xl">
          "Some stories are written by fate.<br />
          Ours was written by love."
        </p>
      </blockquote>

      {/* Glow divider bottom */}
      <div
        className="absolute bottom-0 left-1/2 h-px w-2/3 max-w-md -translate-x-1/2"
        style={{
          background:
            "linear-gradient(90deg, transparent, hsl(350 70% 45% / 0.5), transparent)",
        }}
      />
    </section>
  );
};

export default TransitionSection;
