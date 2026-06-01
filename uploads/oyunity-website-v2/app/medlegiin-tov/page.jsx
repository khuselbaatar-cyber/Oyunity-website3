import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { SimpleCta } from "@/components/SimpleCta";

const posts = [
  { title: "HSK 4 шалгалтыг 6 сард яаж амжуулах вэ?", category: "HSK & Хэл", excerpt: "Daily study habit, vocabulary stack, practice paper — Амархүүгийн жишээ зам." },
  { title: "Tsinghua-д бакалаврт элсэх 5 шаардлага", category: "Их сургууль", excerpt: "HSK 6, GPA, эссэ, recommendation, portfolio — Tsinghua-д тэтгэлэгтэй элсэх stack." },
  { title: "Chinese Government Scholarship (CSC) бүрэн заавар", category: "Тэтгэлэг", excerpt: "Application timeline, document checklist, эссэ tip — манай төгсөгчдөөс цуглуулсан insights." },
  { title: "Peking vs Tsinghua vs Fudan: Монгол оюутанд аль зохиx эсэх", category: "Их сургууль", excerpt: "Гурван сургуулийн академик, дотуур байр, гадаад оюутны community-ийн харьцуулалт." },
  { title: "Хятад руу явахад хэдэн төгрөг хэрэгтэй вэ? Бодит задаргаа", category: "Виза, нислэг", excerpt: "Сургалтын төлбөр + амьжиргаа + дотуур байр + бусад — жилд бодит задаргаа." },
  { title: "Confucius Institute Stipendiy хэрхэн авах", category: "Тэтгэлэг", excerpt: "CI стипенд бол manai 50 хэлний бэлтгэл оюутны 70%-ийн эх үүсвэр. Strategy." },
  { title: "Shanghai Jiao Tong vs Xi'an Jiaotong: Хоёр Jiao Tong-ийн ялгаа", category: "Их сургууль", excerpt: "Нэр төстэй боловч өөр сургуулиуд. Аль нь танд тохирох вэ?" },
  { title: "Хятадын 45 partner сургуулийн биеийн бай", category: "Их сургууль", excerpt: "Tier 1-2 vs Tier 2-3, мэргэжил, тэтгэлэг боломж, гадаад оюутны хувь." },
];

const categories = ["Бүгд", "HSK & Хэл", "Их сургууль", "Тэтгэлэг", "Эссэ", "Виза, нислэг", "Амьдрал Хятадад"];

export default function Page() {
  return (
    <>
      <Navbar />
      <PageHero
        eyebrow="Resources"
        title="Хятад руу элсэх замын мэдээллийн төв."
        subtitle="HSK-аас тэтгэлгийн application хүртэл — Хятадад сурах бүх асуултын хариулт. Манай 7 жилийн туршлагаас нийтэлсэн заавар."
      />
      <section className="px-[5%] py-12">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((c, i) => (
              <button
                key={i}
                className={`px-4 py-2 text-sm font-medium rounded-full border transition ${
                  i === 0
                    ? "bg-oyunity-navy text-white border-oyunity-navy"
                    : "bg-white text-oyunity-navy border-border-primary hover:border-oyunity-gold"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p, i) => (
              <article key={i} className="bg-white border border-border-primary rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer">
                <div className="aspect-[16/10] bg-gradient-to-br from-oyunity-gold/15 to-oyunity-blue/10" />
                <div className="p-6">
                  <span className="text-xs font-semibold text-oyunity-gold uppercase tracking-wide">
                    {p.category}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-oyunity-navy leading-tight">{p.title}</h3>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">{p.excerpt}</p>
                  <p className="mt-4 text-sm text-oyunity-gold font-medium">Удахгүй нийтлэгдэнэ →</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="px-[5%] py-16 md:py-24 bg-oyunity-soft">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-oyunity-navy mb-4">
            Долоо хоног бүр Хятад элсэлтийн tip-үүд.
          </h2>
          <p className="text-gray-600 mb-6">
            1500+ эцэг эх, сурагч долоо хоног бүр бидний newsletter авдаг. Spam үгүй, only зөвлөгөө.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Таны и-мэйл"
              className="flex-1 px-4 py-3 border border-border-primary rounded-lg focus:outline-none focus:border-oyunity-gold"
            />
            <button className="px-6 py-3 bg-oyunity-blue text-white font-semibold rounded-lg hover:bg-oyunity-gold transition">
              Бүртгүүлэх
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
