const FinalSection = () => {
  return (
    <section
      className="relative flex min-h-[60vh] flex-col items-center justify-center px-6 py-24"
      style={{
        background:
          "radial-gradient(ellipse at center, hsl(350 50% 8% / 0.5) 0%, hsl(0 0% 2%) 80%)",
      }}
    >
      <div className="reveal max-w-2xl text-center">
        {/* ✏️ REPLACE: Your closing message */}
        <p className="font-display text-glow tracking-cinematic mb-6 text-3xl font-semibold leading-relaxed sm:text-4xl md:text-5xl">
          Until forever finds us<br />in the same place…
        </p>
        <p className="font-body text-glow-subtle text-lg text-foreground/50 sm:text-xl">
          I'll keep loving you — across every mile, every timezone, every heartbeat.
        </p>
      </div>

      <div className="mt-12 text-sm tracking-widest text-foreground/20">
        ♥
      </div>
    </section>
  );
};

export default FinalSection;
