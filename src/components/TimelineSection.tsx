import { memories } from "@/data/memories";

const TimelineSection = () => {
  return (
    <section
      id="timeline"
      className="cinematic-bg relative px-4 py-24 sm:px-6 md:py-32"
      style={{
        background:
          "linear-gradient(to bottom, hsl(0 0% 3%), hsl(350 15% 6%) 10%, hsl(350 12% 5%) 50%, hsl(350 15% 6%) 90%, hsl(0 0% 3%))",
      }}
    >
      {/* Ambient glow orbs */}
      <div className="ambient-glow">
        <div className="orb" />
        <div className="orb" />
        <div className="orb" />
      </div>
      {/* Noise texture */}
      <div className="noise-texture" />
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display tracking-cinematic text-glow reveal mb-16 text-center text-3xl font-semibold sm:text-4xl md:mb-24 md:text-5xl">
          Our Memories
        </h2>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="timeline-line hidden md:block" />

          <div className="space-y-12 md:space-y-20">
            {memories.map((memory, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={memory.id}
                  className={`relative flex flex-col md:flex-row ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } items-start md:items-center`}
                >
                  {/* Dot on timeline */}
                  <div className="absolute left-[16px] top-0 z-10 hidden h-4 w-4 rounded-full border-2 border-primary bg-background md:left-1/2 md:block md:-translate-x-1/2" />

                  {/* Content card */}
                  <div
                    className={`${
                      isLeft ? "reveal-left md:pr-16" : "reveal-right md:pl-16"
                    } w-full pl-12 md:w-1/2 md:pl-0`}
                  >
                    {/* Mobile dot */}
                    <div className="absolute left-[16px] top-1 h-3 w-3 rounded-full border-2 border-primary bg-background md:hidden" />

                    <div className="card-glow rounded-xl border border-border bg-card p-5 sm:p-6">
                      {/* ✏️ REPLACE: Add your image URL to each memory in src/data/memories.ts */}
                      <div className="mb-4 aspect-video w-full overflow-hidden rounded-lg bg-muted">
                        {memory.imageUrl ? (
                          <img
                            src={memory.imageUrl}
                            alt={memory.title}
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-muted-foreground/40 text-sm">
                            {/* placeholder — add image URL in memories.ts */}
                            📷 Photo Placeholder
                          </div>
                        )}
                      </div>

                      <h3 className="font-display text-glow-subtle mb-2 text-xl font-semibold tracking-wide sm:text-2xl">
                        {memory.title}
                      </h3>
                      <p className="font-body text-base leading-relaxed text-foreground/65 sm:text-lg">
                        {memory.paragraph}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
