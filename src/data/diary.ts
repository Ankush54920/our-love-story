/* ✏️ REPLACE: Update titles, paragraphs, and image URLs for each diary entry */
export interface DiaryEntry {
  id: number;
  title: string;
  paragraph: string;
  imageUrl?: string;
}

export const diaryEntries: DiaryEntry[] = [
  { id: 1, title: "Page One — The Beginning", paragraph: "I didn't know what love felt like until I heard your voice for the first time. It was quiet, almost fragile — but it shattered everything I thought I knew.",
imageUrl: "/images/image1.jpg"},
  { id: 2, title: "Page Two — Missing You", paragraph: "There are nights when the silence is so loud, I swear I can hear your heartbeat from across the ocean. I hold my pillow and pretend it's you." },
  { id: 3, title: "Page Three — Your Words", paragraph: "You texted me 'goodnight' at 3 AM your time. That's when I knew — you'd sacrifice sleep just to make sure I felt loved before I closed my eyes." },
  { id: 4, title: "Page Four — Small Things", paragraph: "It's the little things. The way you say my name. The playlist you update every week. The photos you send of your sky so I can see what you see." },
  { id: 5, title: "Page Five — The Hard Truth", paragraph: "Distance doesn't destroy love. It tests it. And every test we pass makes us more unbreakable than before." },
  { id: 6, title: "Page Six — A Promise", paragraph: "One day there will be no goodbye at the airport. One day, I'll wake up and you'll be right there. Until then — I'll love you across every mile." },
];
