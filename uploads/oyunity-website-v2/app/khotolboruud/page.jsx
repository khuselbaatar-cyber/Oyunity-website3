import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { SimpleCta } from "@/components/SimpleCta";

const programs = [
  { slug: "hsk", label: "Хэлний бэлтгэл", price: "6-12 сая ₮", duration: "6-24 сар", covers: "Байр үнэгүй · Сургалт үнэгүй", icon: "🈵" },
  { slug: "placement", label: "Бакалавр / Магистр / Доктор", price: "10-15 сая ₮", duration: "12-60 сар", covers: "Байр + Сургалт үнэгүй · Стипендтэй", icon: "🎓" },
  { slug: "exchange", label: "Солилцоо", price: "3-8 сая ₮", duration: "1-6 сар", covers: "Дотуур байр", icon: "✈️" },
  { slug: "mentorship", label: "Менторшип", price: "2.5 сая ₮", duration: "Уян хатан", covers: "Coaching", icon: "🧭" },
  { slug: "online", label: "Цахим сургалт (HSK + CSCA)", price: "Удахгүй", duration: "Курсээр", covers: "Онлайн · 6-17 нас", icon: "💻" },
];

export default function ProgramsPage() {
  return (
    <>
      <Navbar />
      <PageHero
        eyebrow="5 хөтөлбөр"
        title="Нэг зорилго, таван өөр зам."
        subtitle="Хятадын топ их сургуульд тэтгэлэгтэй элсэх. Танай нас, түвшин, цаг хугацаа, төсвөөс хамаарч тохиромжтой хөтөлбөрөө сонгоорой."
        primaryCta={{ label: "Үнэгүй зөвлөгөө захиалах →", href: "/holboo-barikh" }}
      />

      {/* What scholarship covers */}
      <section className="px-[5%] py-16 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-oyunity-gold uppercase tracking-wide mb-3">
              Тэтгэлэг юу хамардаг вэ?
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-oyunity-navy leading-tight">
              Манай тэтгэлэгүүд таны зардлыг хэрхэн бууруулдаг вэ
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-border-primary rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">🏠</div>
              <h3 className="text-lg font-bold text-oyunity-navy mb-2">Байр үнэгүй</h3>
              <p className="text-sm text-gray-600">Дотуур байрны төлбөрийг тэтгэлэг хамардаг — хэлний бэлтгэл болон зэргийн хөтөлбөрт.</p>
            </div>
            <div className="bg-white border border-border-primary rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">📚</div>
              <h3 className="text-lg font-bold text-oyunity-navy mb-2">Сургалт үнэгүй</h3>
              <p className="text-sm text-gray-600">Их сургуулийн сургалтын төлбөрийг бүрэн эсвэл хэсэгчлэн тэтгэлэг хамардаг.</p>
            </div>
            <div className="bg-white border border-oyunity-gold rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="text-lg font-bold text-oyunity-navy mb-2">Сарын стипенд</h3>
              <p className="text-sm text-gray-600">Бакалавр / Магистр / Докторын зэргийн тэтгэлэг сар бүрийн стипенд хүртэл олгодог.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing table */}
      <section className="px-[5%] py-16 md:py-24 bg-oyunity-soft">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-oyunity-navy mb-2 text-center">
            Ил тод үнэлгээ
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto text-sm">
            Доорх үнэ нь Oyunity-ийн үйлчилгээний хураамж. Их сургуулийн сургалт, байрны төлбөрийг тэтгэлэг хамардаг.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden border border-border-primary">
              <thead className="bg-oyunity-navy text-white">
                <tr>
                  <th className="text-left p-4 font-semibold">Хөтөлбөр</th>
                  <th className="text-left p-4 font-semibold">Тэтгэлэг хамрах</th>
                  <th className="text-left p-4 font-semibold">Хугацаа</th>
                  <th className="text-left p-4 font-semibold">Үйлчилгээний хураамж</th>
                  <th className="text-right p-4 font-semibold"></th>
                </tr>
              </thead>
              <tbody>
                {programs.map((p) => (
                  <tr key={p.slug} className="border-t border-border-primary hover:bg-oyunity-soft/50 transition">
                    <td className="p-4">
                      <span className="text-2xl mr-2">{p.icon}</span>
                      <span className="font-semibold text-oyunity-navy">{p.label}</span>
                    </td>
                    <td className="p-4 text-sm text-oyunity-blue font-medium">{p.covers}</td>
                    <td className="p-4 text-gray-600">{p.duration}</td>
                    <td className="p-4 font-semibold text-oyunity-navy">{p.price}</td>
                    <td className="p-4 text-right">
                      <Link href={`/khotolboruud/${p.slug}`} className="text-oyunity-gold font-medium hover:underline whitespace-nowrap">
                        Дэлгэрэнгүй →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-500 text-center max-w-2xl mx-auto">
            Үйлчилгээний хураамж нь сонгосон сургууль, хугацаа, тэтгэлгийн түвшингээс хамаарч өөр өөр.
            Discovery call дээр нарийн quote гаргана.
          </p>
        </div>
      </section>
      <SimpleCta title="Аль хөтөлбөр танд зохих эсэх нь Discovery call дээр тодорхой болно." />
      <Footer />
    </>
  );
}
