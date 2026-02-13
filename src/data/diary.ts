/* ✏️ REPLACE: Update titles, paragraphs, and image URLs for each diary entry */
export interface DiaryEntry {
  id: number;
  title: string;
  paragraph: string;
  imageUrl?: string;
}

export const diaryEntries: DiaryEntry[] = [
  { id: 1, title: "The Beginning", paragraph: "I didn't know what love felt like until I heard your voice for the first time. It was quiet, almost fragile — but it shattered everything I thought I knew.",imageUrl: "/images/image1.jpg"},
  { id: 2, title: "Care for each other (Small things,Big Impact) ", paragraph: "There are nights when the silence is so loud, I swear I can hear your heartbeat from across the ocean. I hold my pillow and pretend it's you.",imageUrl: "/images/image2.jpg" },
  { id: 3, title: "You", paragraph: `Some of the 1st Phots of yours that I clicked.
Then some photos of You Eating Together with me, that Didn't felt like Dream ( But Definitely Dream come true)`,imageUrl: "/images/image3.jpg" },
  { id: 4, title: "Us( You & Me)", paragraph: `Its Me and Mari Bandi, Dekh lg rahi hai na, Jase Apsara Ya Pari 😌.`, imageUrl: "/images/image4.jpg" },
  { id: 5, title: "Me & You - You & Me", paragraph: `Pehli dafa jab dekha tujhe,Saari duniya ruk si gayi.
Dil ki dhadrkan tham si gayi,Saanse bhi ruk si gayi.
Sab dhundhla sa lagne laga,Bas tera chehra nazar aaya.
Tera Chehra dekh ke laga,Jaise dil pe kuch jadu sa chaya.`, imageUrl: "/images/image5.jpg" },
  { id: 6, title: "Tu hi Tu 🫣", paragraph: `  Aankhe band krke letu, toh tu dikhai de,
Aankhe kholu toh mujhe bus tu chaiye  `,imageUrl: "/images/image6.jpg" },
];
