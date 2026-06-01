import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { SimpleCta } from "@/components/SimpleCta";

const stories = [
  {
    name: "Амархүү",
    headline: "Хятад хэлгүйгээс Хятадын №1 их сургууль хүртэл — 2 жилийн зам",
    university: "Tsinghua University",
    scholarship: "Full scholarship",
    before: "HSK 0 · GPA дунд",
    after: "HSK 6 · Tsinghua бакалавр",
    duration: "24 сар",
    quote: "Анх явахдаа Хятад хэл огт мэдэхгүй байсан. Менторын хамт долоо хоног бүр шинэ цэгт хүрч, хоёр жилийн дотор HSK 6-тай болж Tsinghua-д тэтгэлэгтэй элсэх боломж бий гэдгийг өөрөөсөө сонссоор баталсан.",
  },
  {
    name: "Батболд",
    headline: "1 жилийн интенсив зам — HSK 3-аас Shanghai Jiao Tong хүртэл",
    university: "Shanghai Jiao Tong University",
    scholarship: "Partial",
    before: "HSK 3 · Transport Engineering чиглэл",
    after: "HSK 5 · Shanghai Jiao Tong бакалавр",
    duration: "12 сар",
    quote: "HSK 3 түвшингээс жил гаруйхан хугацаанд Shanghai Jiao Tong-д сурдаг гэдгээ танихгүй байсан. Стратеги, mentor-той ажилласан нь бүх ялгааг гаргасан.",
  },
  {
    name: "Анужин",
    headline: "Хятад хэлгүйгээр Хятадын топ-д — Fudan-ийн English program",
    university: "Fudan University",
    scholarship: "Тэтгэлэгтэй",
    before: "IELTS бэлтгэлийн шатанд",
    after: "IELTS 7.0 · Fudan English-medium бакалавр",
    duration: "12 сар",
    quote: "Хятад хэлгүйгээр Хятадын топ сургуульд элсэх боломжтой гэдгийг хэн ч хэлдэггүй байсан. Fudan-ийн English-medium program бол яг тэр гарц байсан.",
  },
];

export default function Page() {
  return (
    <>
      <Navbar />
      <PageHero
        eyebrow="300 амжилттай элсэлт"
        title="Энд бодит түүхүүд."
        subtitle="Сурагч тус бүрийн замыг хэрхэн чиглүүлсэн, ямар сорилт тулгарсан, эцэст нь ямар үр дүнд хүрсэнийг бид нуудаггүй."
      />
      <section className="px-[5%] py-16 md:py-24">
        <div className="container mx-auto max-w-5xl space-y-16">
          {stories.map((s, i) => (
            <article key={i} className="bg-white border border-border-primary rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr]">
                <div className="bg-gradient-to-br from-oyunity-gold/20 to-oyunity-blue/10 aspect-square md:aspect-auto flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-white/70 flex items-center justify-center text-gray-400 text-sm">
                    [{s.name}]
                  </div>
                </div>
                <div className="p-6 md:p-10">
                  <p className="text-sm font-semibold text-oyunity-gold uppercase tracking-wide mb-2">
                    Case study #{i + 1}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold text-oyunity-navy mb-4 leading-tight">
                    {s.headline}
                  </h2>
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div>
                      <span className="block text-gray-500 mb-1">Эхлэл</span>
                      <span className="font-medium text-oyunity-navy">{s.before}</span>
                    </div>
                    <div>
                      <span className="block text-gray-500 mb-1">Үр дүн</span>
                      <span className="font-medium text-oyunity-navy">{s.after}</span>
                    </div>
                    <div>
                      <span className="block text-gray-500 mb-1">Хугацаа</span>
                      <span className="font-medium text-oyunity-navy">{s.duration}</span>
                    </div>
                    <div>
                      <span className="block text-gray-500 mb-1">Тэтгэлэг</span>
                      <span className="font-medium text-oyunity-navy">{s.scholarship}</span>
                    </div>
                  </div>
                  <blockquote className="border-l-4 border-oyunity-gold pl-4 py-2 italic text-gray-700">
                    "{s.quote}"
                  </blockquote>
                  <p className="mt-3 font-semibold text-oyunity-navy">— {s.name}, {s.university}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <SimpleCta title="Танай түүх дараагийнх нь болж болзошгүй." />
      <Footer />
    </>
  );
}
