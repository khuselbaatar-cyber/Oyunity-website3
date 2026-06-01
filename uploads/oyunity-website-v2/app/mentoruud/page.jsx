import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { SimpleCta } from "@/components/SimpleCta";

const mentors = [
  {
    name: "Азжаргал",
    university: "Peking University",
    major: "Гадаад харилцаа",
    year: "2-р курс",
    bio: "Peking University-д элсэхийн тулд HSK + эссэ + scholarship стратегиа нэгэн зэрэг боловсруулсан. Одоо тэр замыг бусдад дамжуулж байна.",
    focus: ["Гадаад харилцаа", "Олон улсын харилцаа", "Social sciences"],
  },
  // Та илгээх үед энд бусад mentor-уудыг нэмнэ
];

export default function Page() {
  return (
    <>
      <Navbar />
      <PageHero
        eyebrow="Бидний баг"
        title="Бид зүгээр зуучлагч биш. Бид төгсөгчид."
        subtitle="Манай менторууд нь өөрсдөө Хятадын топ сургуулиудад элсэж, суралцаж, төгссөн Монгол оюутнууд. Тэдний туршлага бол manai брэндийн төв."
      />
      <section className="px-[5%] py-16 md:py-24">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentors.map((m, i) => (
              <article key={i} className="bg-white border border-border-primary rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="aspect-[4/5] bg-gradient-to-br from-oyunity-gold/15 to-oyunity-blue/10 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-white/70 flex items-center justify-center text-gray-400 text-sm">
                    [{m.name}]
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-oyunity-navy">{m.name}</h3>
                  <p className="text-sm text-oyunity-gold font-semibold mt-1">{m.university}</p>
                  <p className="text-sm text-gray-500 mt-1">{m.major} · {m.year}</p>
                  <p className="text-sm text-gray-600 mt-4 leading-relaxed">{m.bio}</p>
                  <div className="mt-4 flex flex-wrap gap-1">
                    {m.focus.map((f, j) => (
                      <span key={j} className="px-2 py-0.5 text-xs bg-oyunity-blue-soft text-oyunity-blue rounded-full">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}

            {/* Placeholder cards for upcoming mentors */}
            {[1, 2, 3, 4, 5].map((i) => (
              <article key={`p-${i}`} className="bg-white border border-dashed border-border-primary rounded-lg overflow-hidden opacity-50">
                <div className="aspect-[4/5] bg-oyunity-soft flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Удахгүй нэмэгдэнэ</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-300">Mentor {i + 1}</h3>
                  <p className="text-sm text-gray-300 mt-1">[Сургууль]</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="px-[5%] py-16 md:py-24 bg-oyunity-soft">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-oyunity-navy mb-4">
            Та манай alumni-ийн нэг бол?
          </h2>
          <p className="text-gray-600 mb-6">
            Менторын багт нэгдэхийг хүсэж байгаа Tsinghua, Fudan, Peking, Shanghai Jiao Tong болон бусад топ сургуулийн Монгол төгсөгч / оюутан нар бидэнтэй холбоо барина уу.
          </p>
          <a href="mailto:oyunityedu@gmail.com" className="inline-block px-6 py-3 bg-oyunity-blue text-white font-semibold rounded hover:bg-oyunity-gold transition">
            Mentor болох →
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}
