import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { SimpleCta } from "@/components/SimpleCta";

export default function Page() {
  const features = ["Beijing Language &amp; Culture University-д тэтгэлэгтэй элсэлт", "HSK 1-6 түвшний бүрэн стратеги", "CSC, Confucius Institute тэтгэлгийн application", "HSK 6 авсан Mongolian alumni mentor", "Виз, нислэг, дотуур байр зохион байгуулалт", "Бакалаврт шилжих transition support"];
  const covers = ["Байр үнэгүй", "Сургалтын төлбөр үнэгүй"];
  return (
    <>
      <Navbar />
      <PageHero
        eyebrow="Хэлний бэлтгэл"
        title="HSK 0-ээс HSK 6 хүртэл — Хятадад очиж сурах хамгийн хурдан зам."
        subtitle="Хятад хэлгүй явахаас айх хэрэггүй. Манай хэлний бэлтгэл хөтөлбөр 6-24 сард HSK түвшинд хүргэдэг. 50 оюутан энэ замаар тэтгэлэгтэй явсан."
        primaryCta={{ label: "Үнэгүй зөвлөгөө захиалах →", href: "/holboo-barikh" }}
        secondaryCta={{ label: "Бусад хөтөлбөр", href: "/khotolboruud" }}
      />

      {covers.length > 0 && (
        <section className="px-[5%] py-12 md:py-16 bg-oyunity-soft">
          <div className="container mx-auto max-w-4xl">
            <p className="text-center text-sm font-semibold text-oyunity-gold uppercase tracking-wide mb-6">
              Тэтгэлэг юу хамардаг вэ
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {covers.map((c, i) => (
                <div key={i} className="flex items-center gap-2 bg-white border border-oyunity-gold/40 rounded-full px-5 py-2.5">
                  <span className="text-oyunity-gold text-lg">✓</span>
                  <span className="font-semibold text-oyunity-navy">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="px-[5%] py-16 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-oyunity-navy mb-8 text-center">
            Юу багтсан вэ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-white border border-border-primary rounded-lg">
                <span className="text-oyunity-gold text-xl font-bold flex-shrink-0">✓</span>
                <span className="text-gray-700">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-[5%] py-16 md:py-24 bg-oyunity-soft">
        <div className="container mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-oyunity-gold uppercase tracking-wide mb-3">Үйлчилгээний хураамж</p>
          <p className="text-5xl md:text-6xl font-bold text-oyunity-navy mb-4">6,000,000 – 12,000,000 ₮</p>
          <p className="text-gray-600">
            Энэ үнэ нь Oyunity-ийн үйлчилгээний хураамж. Их сургуулийн сургалт, байрны төлбөрийг тэтгэлэг хамардаг.
            Дэлгэрэнгүй үнэлгээг Discovery call дээр.
          </p>
        </div>
      </section>
      <SimpleCta />
      <Footer />
    </>
  );
}
