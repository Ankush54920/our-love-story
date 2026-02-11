import { diaryEntries } from "@/data/diary";

const DiarySection = () => {
  return (
    <section
      id="diary"
      className="relative px-4 py-24 sm:px-6 md:py-32"
      style={{
        background:
          "linear-gradient(to bottom, hsl(0 0% 3%), hsl(0 0% 6%) 15%, hsl(0 0% 6%) 85%, hsl(0 0% 3%))",
      }}
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display tracking-cinematic text-glow reveal mb-16 text-center text-3xl font-semibold sm:text-4xl md:text-5xl">
          My Diary For You
        </h2>

        <div className="space-y-10 md:space-y-14">
          {diaryEntries.map((entry, index) => (
            <div
              key={entry.id}
              className="reveal diary-page mx-auto max-w-2xl p-6 sm:p-8"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* ✏️ REPLACE: Add your image URL to each diary entry in src/data/diary.ts */}
              <div className="mb-5 aspect-[4/3] w-full overflow-hidden rounded-lg bg-muted">
                {entry.imageUrl ? (
                  <img
                    src={entry.imageUrl}
                    alt={entry.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-muted-foreground/40 text-sm">
                    📷 Photo Placeholder
                  </div>
                )}
              </div>

              <h3 className="font-display text-glow-subtle mb-3 text-xl font-semibold tracking-wide sm:text-2xl">
                {entry.title}
              </h3>
              <p className="font-body text-base leading-relaxed text-foreground/65 sm:text-lg">
                {entry.paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiarySection;
