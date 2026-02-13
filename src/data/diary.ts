/* ✏️ REPLACE: Update titles, paragraphs, and image URLs for each diary entry */
export interface DiaryEntry {
  id: number;
  title: string;
  paragraph: string;
  imageUrl?: string;
}

export const diaryEntries: DiaryEntry[] = [
  { id: 1, title: "Page One — The Beginning", paragraph: "I didn't know what love felt like until I heard your voice for the first time. It was quiet, almost fragile — but it shattered everything I thought I knew.",imageUrl: "/images/image1.jpg"},
  { id: 2, title: "Page Two — Care for each other", paragraph: "There are nights when the silence is so loud, I swear I can hear your heartbeat from across the ocean. I hold my pillow and pretend it's you.",imageUrl: "/images/image2.jpg" },
  { id: 3, title: "Page Three — You", paragraph: `Some of the 1st Phots of yours that I clicked.
Then some photos of You Eating Together with me, that Didn't felt like Dream ( But Definitely Dream come true)`,imageUrl: "/images/image3.jpg" },
  { id: 4, title: "Page Four — Us( You and Me)", paragraph: `Its Me and Mari Band, Dekh lg rahi hai na, Jase Apsara Ya Pari 😌.`, imageUrl: "/images/image4.jpg" },
  { id: 5, title: "Page Five — The Hard Truth", paragraph: ".  ", imageUrl: "/images/image5.jpg" },
  { id: 6, title: "Page Six — Tu hi Tu 🫣", paragraph: `  . `,imageUrl: "/images/image6.jpg" },
];
