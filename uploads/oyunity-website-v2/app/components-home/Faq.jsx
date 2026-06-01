"use client";

import { useState } from "react";
import { RxPlus } from "react-icons/rx";

export function Faq() {
  const faqs = [
    {
      q: "Oyunity ямар хөтөлбөрүүд санал болгодог вэ?",
      a: "Бид 6 өөр зам санал болгодог: (1) HSK хэлний бэлтгэл — суурь бий болгох, (2) Бакалавр/Магистр/Докторын зэрэгт элсэлт, (3) 1 сарын солилцоо, (4) 1 семестрийн солилцоо, (5) Менторшип coaching — хувийн зөвлөгөө, (6) Онлайн Хятад хэлний сургалт — 6-17 насны бага сурагчдад HSK болон CSCA бэлтгэлтэй."
    },
    {
      q: "Тэтгэлэг хэдийг хамардаг вэ?",
      a: "Манай 76.7% оюутан тэтгэлэгтэй элсдэг. Тэтгэлэг авсан оюутны ихэнх нь сургалтын төлбөр + амьжиргааны зардлыг бүтэн хамарсан full funding авдаг. Хэмжээ нь сургууль, хөтөлбөрөөс хамаарна — бид таны өмнөөс strategically negotiate хийдэг."
    },
    {
      q: "Хөтөлбөрүүд Монгол хэлээр заагдах уу?",
      a: "Тийм. Бүх сургалт, зөвлөгөө Монгол хэлээр явагдана. Манай менторууд нь Монгол alumni — өөрсдөө тэр сургуульд элссэн, төгссөн төгсөгчид."
    },
    {
      q: "Хятад хэлгүй сурагч элсэж чадах уу?",
      a: "Тийм. Манай Хэлний бэлтгэл хөтөлбөр HSK 0-ээс HSK 4-6 хүртэл 1-2 жилд хүргэдэг. Жишээ нь Амархүү HSK ороогүй явсан, 2 жилийн дотор Tsinghua-д тэтгэлэгтэй элссэн."
    },
    {
      q: "Үнэ нь хэдэн төгрөгөөс эхэлдэг вэ?",
      a: "Хамгийн боломжтой нь Менторшип хөтөлбөр (2.5 сая ₮). Бүрэн зэрэгтэй placement (Бакалавр/Магистр/Доктор) нь 10-15 сая ₮. Дэлгэрэнгүй үнэлгээг Discovery call дээр тооцно."
    },
  ];

  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto max-w-3xl">
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-3 text-sm font-semibold text-oyunity-gold uppercase tracking-wide">
            FAQ
          </p>
          <h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-5xl lg:text-6xl text-oyunity-navy leading-tight">
            Түгээмэл асуултууд
          </h2>
          <p className="md:text-md text-gray-600">
            Манай хөтөлбөр, процесс, тэтгэлгийн талаар хамгийн их асуудаг асуултууд.
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="border border-border-primary rounded-lg overflow-hidden bg-white">
              <button
                onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
                className="w-full flex justify-between items-center text-left px-5 md:px-6 py-4 md:py-5 hover:bg-oyunity-soft transition"
              >
                <span className="font-semibold text-oyunity-navy text-base md:text-lg">
                  {f.q}
                </span>
                <RxPlus
                  className={`size-6 shrink-0 text-oyunity-gold transition-transform duration-300 ${
                    openIdx === i ? "rotate-45" : ""
                  }`}
                />
              </button>
              {openIdx === i && (
                <div className="px-5 md:px-6 pb-5 md:pb-6 text-gray-600 leading-relaxed">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
