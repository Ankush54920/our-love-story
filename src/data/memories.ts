/* ✏️ REPLACE: Update titles, paragraphs, and image URLs for each memory */
export interface Memory {
  id: number;
  title: string;
  paragraph: string;
  imageUrl?: string; // leave empty to show placeholder box
}

export const memories: Memory[] = [
  { id: 1, title: "26th July:- The Day We First Talked", paragraph: "A chance encounter that changed everything. The universe conspired to bring us together in the most unexpected way." },
  { id: 2, title: "30th July:- First Conversation", paragraph: "You asked, 'Wo tumhi na the jo App ka puch rahe the' Sentence the Melted my ego. We then talked regarding the app fees back until the teacher Came." },
  { id: 3, title: "13th August:- First Walk", paragraph: "I was extremely nervous. I waited until you arrived. I asked. You agreed. And somehow… we started walking together,By the way Do you remember when Maharashtra was formed 🤔??"},
  { id: 4, title: "14th August:- First Temple Visit and Eating together.",
paragraph: "The Day that I still think was Dream (Or Dream come true" },
  { id: 5, title: "First 'I Miss You'", paragraph: "Three words heavier than any ocean between us. They carried more truth than a thousand promises." },
  { id: 6, title: "Sending Letters", paragraph: "In a digital world, your handwriting on paper felt like holding a piece of your soul." },
  { id: 7, title: "Watching Sunsets Together", paragraph: "Different skies, same sun. We'd watch it set on video call, pretending the distance didn't exist." },
  { id: 8, title: "The Playlist We Made", paragraph: "Every song became a memory. Every lyric, an inside joke. Our love had its own soundtrack." },
  { id: 9, title: "Counting Down Days", paragraph: "Each crossed-off day on the calendar was a small victory against the miles between us." },
  { id: 10, title: "The Airport Reunion", paragraph: "Running through the arrivals gate, the world blurred. Only you were in focus. Only you mattered." },
  { id: 11, title: "Exploring Together", paragraph: "Every street we walked became ours. Every café, a chapter. The city became our love story." },
  { id: 12, title: "The Goodbye That Hurt", paragraph: "Leaving was never easy. Your hand slipping from mine at the gate still echoes in my dreams." },
  { id: 13, title: "Surviving the Hard Days", paragraph: "Some days the distance felt impossible. But we held on — because letting go was never an option." },
  { id: 14, title: "Surprise Deliveries", paragraph: "A package at the door with your scent, your words, your love. Distance couldn't stop your warmth from reaching me." },
  { id: 15, title: "Anniversary Apart", paragraph: "We celebrated with screens between us, but the love was more real than anything physical could ever be." },
  { id: 16, title: "Making Plans", paragraph: "We drew our future on napkins and whispered it into late nights — a home, a life, together at last." },
  { id: 17, title: "The Promise", paragraph: "Not a ring, not a ceremony — just a quiet promise in the dark: 'I will find my way to you.'" },
  { id: 18, title: "Forever Begins", paragraph: "This isn't the end of our story. It's the beginning of the chapter we write side by side." },
];
