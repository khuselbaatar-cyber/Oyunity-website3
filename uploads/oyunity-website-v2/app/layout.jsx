import "./globals.css";

export const metadata = {
  title: "Oyunity — Elite Scholarship Mentorship Ecosystem",
  description:
    "Хятадын топ их сургуулиудад тэтгэлэгтэй элсэх. 300 оюутан, 45 partner университет, 76.7% тэтгэлэгийн хувь.",
  metadataBase: new URL("https://oyunity.mn"),
  openGraph: {
    title: "Oyunity — Хятадын топ их сургуульд тэтгэлэгтэй элсэх",
    description:
      "Монголын цорын ганц Elite Scholarship Mentorship Ecosystem. 7 жилийн туршлага.",
    locale: "mn_MN",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="mn">
      <body>{children}</body>
    </html>
  );
}
