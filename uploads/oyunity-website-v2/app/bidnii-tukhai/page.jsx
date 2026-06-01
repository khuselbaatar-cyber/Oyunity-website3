import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { SimpleCta } from "@/components/SimpleCta";

const timeline = [
  { year: "2018-2019", title: "Үүсгэн байгуулагдсан", desc: "Эхний 5 оюутан Хятад руу амжилттай байршуулагдсан." },
  { year: "2020", title: "50 дахь оюутан", desc: "Mongolia дахь зуучлалын стандартыг шинэ түвшинд гаргасан." },
  { year: "2022", title: "150 дахь оюутан", desc: "Beijing-д төлөөлөгчийн оффис нээгдсэн." },
  { year: "2024", title: "250 дахь оюутан", desc: "20+ partner университетийн босгод хүрсэн." },
  { year: "2026", title: "300 дахь оюутан", desc: "45 partner университет. Elite Scholarship Mentorship Ecosystem-ийн positioning гаргасан." },
];

const pillars = [
  {
    title: "Mentorship-аас зуучлал руу биш — зуучлал-аас mentorship руу",
    desc: "Олон компани сурагч 'явуулдаг'. Бид сурагчтай 'ажилладаг' — 1-5 жилийн турш, шалгалт бүрд, эссэ бүрд.",
  },
  {
    title: "Alumni бол manai цөм",
    desc: "Mentor маань нь өөрсдөө тэр сургуульд элссэн төгсөгч. Stock зөвлөгөө биш — бодит туршлага.",
  },
  {
    title: "Тэтгэлэг бол manai мэргэжил",
    desc: "Манай 76.7% оюутан тэтгэлэгтэй элсдэг. Энэ нь стратегиар, эссэ, document-ыг systematically бэлдсний үр дүн.",
  },
];

export default function Page() {
  return (
    <>
      <Navbar />
      <PageHero
        eyebrow="Бидний түүх"
        title="Яагаад Oyunity үүсгэн байгуулагдсан."
        subtitle="7 жилийн өмнө Хятад руу очсон нэг Монгол оюутны түүхээс эхэлсэн. Өнөөдөр 300 оюутны зам Oyunity-гээр дамжсан."
      />
      <section className="px-[5%] py-16 md:py-24">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-oyunity-navy mb-6">Бидний эрхэм зорилго</h2>
          <div className="space-y-6">
            {pillars.map((p, i) => (
              <div key={i} className="border-l-4 border-oyunity-gold pl-6">
                <h3 className="text-xl font-bold text-oyunity-navy mb-2">{p.title}</h3>
                <p className="text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-[5%] py-16 md:py-24 bg-oyunity-soft">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-oyunity-navy mb-12 text-center">
            7 жилийн зам зураг
          </h2>
          <div className="space-y-8">
            {timeline.map((t, i) => (
              <div key={i} className="grid grid-cols-[120px_1fr] gap-6 items-start">
                <div className="text-oyunity-gold font-bold text-lg">{t.year}</div>
                <div className="border-l-2 border-oyunity-gold/30 pl-6 pb-2">
                  <h3 className="text-xl font-bold text-oyunity-navy mb-1">{t.title}</h3>
                  <p className="text-gray-600">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SimpleCta />
      <Footer />
    </>
  );
}
