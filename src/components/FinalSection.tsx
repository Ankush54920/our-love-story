const FinalSection = () => {
  return (
    <section
      className="cinematic-bg relative flex min-h-[60vh] flex-col items-center justify-center px-6 py-24"
      style={{
        background:
          "linear-gradient(to bottom, hsl(0 0% 2%), hsl(350 14% 6%) 30%, hsl(350 50% 8% / 0.5) 50%, hsl(350 14% 6%) 70%, hsl(0 0% 2%))",
      }}
    >
      {/* Background atmosphere layers */}
      <div className="cinematic-radial" />
      <div className="cinematic-vignette" />
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

      <div className="reveal relative z-10 max-w-2xl text-center">
        {/* ✏️ REPLACE: Your closing message */}
        <p className="font-display text-glow tracking-cinematic mb-6 text-3xl font-semibold leading-relaxed sm:text-4xl md:text-5xl">
          Until forever finds us<br />in the same place…
        </p>
        <p className="font-body text-glow-subtle text-lg text-foreground/50 sm:text-xl">
          I'll keep loving you — across every mile, every timezone, every heartbeat.
        </p>
      </div>

      <div className="relative z-10 mt-12 text-sm tracking-widest text-foreground/20">
        ♥
      </div>
    </section>
  );
};

export default FinalSection;
