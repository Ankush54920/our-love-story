const TransitionSection = () => {
  return (
    <section
      className="relative flex min-h-[50vh] items-center justify-center px-6 py-20"
      style={{
        background:
          "radial-gradient(ellipse at center, hsl(350 50% 10% / 0.4) 0%, hsl(0 0% 3%) 80%)",
      }}
    >
      {/* Glow divider top */}
      <div
        className="absolute left-1/2 top-0 h-px w-2/3 max-w-md -translate-x-1/2"
        style={{
          background:
            "linear-gradient(90deg, transparent, hsl(350 70% 45% / 0.5), transparent)",
        }}
      />

      <blockquote className="reveal max-w-2xl text-center">
        {/* ✏️ REPLACE: Your transition quote */}
        <p className="font-display text-glow text-2xl font-medium italic leading-relaxed tracking-wide sm:text-3xl md:text-4xl">
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
