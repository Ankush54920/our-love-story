

# 💕 Cinematic Long-Distance Love Story Website

A one-page romantic experience that feels like an emotional journey through your love story.

---

## Design System
- **Color palette**: Deep red, wine red, soft crimson on dark/black backgrounds
- **Typography**: Elegant serif headings (Playfair Display via Google Fonts), clean sans-serif body text with cinematic letter spacing
- **Effects**: Soft glows, subtle shadows, depth layering, CSS-only floating hearts/particles

---

## Section 1 — Hero (Full Screen)
- Dark red-to-black gradient background
- Glowing centered headline + romantic subheading
- "Begin Our Story" button that smooth-scrolls to the timeline and triggers a hidden audio element (placeholder for your music file)
- CSS-only floating heart particles drifting in the background
- No countdown timer

## Section 2 — Timeline (18 Memories)
- Vertical cinematic scroll timeline
- 18 memory blocks alternating left/right layout
- Each block: title, romantic paragraph placeholder, image placeholder
- Fade-in + slide-up animations triggered on scroll (Intersection Observer, no heavy libraries)
- Soft glow and shadow styling on each card

## Section 3 — Transition Quote
- Darkened background with soft glow divider
- Centered emotional quote: *"Some stories are written by fate. Ours was written by love."*
- Smooth fade transition bridging timeline to diary

## Section 4 — Diary / Scrapbook
- 6+ stacked paper-like cards with layered/offset effect
- Each page: title, paragraph placeholder, image placeholder
- Deep red + black aesthetic with rounded edges and soft shadows
- Hover lift animation, scroll-triggered fade-in
- Simple stacked layout (no flipbook)

## Section 5 — Final Closing
- Minimal dark background
- Centered glowing emotional farewell message
- Clean, elegant, nothing extra

---

## Technical Approach
- Fully mobile responsive (mobile-first design)
- CSS-only animations (keyframes for particles, Intersection Observer for scroll reveals)
- Smooth scroll behavior throughout
- Clean component structure with clear placeholder comments for easy text/image replacement
- No heavy animation libraries — pure CSS + minimal JS

