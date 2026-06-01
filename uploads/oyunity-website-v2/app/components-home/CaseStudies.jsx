"use client";

import Link from "next/link";
import { RxChevronRight } from "react-icons/rx";

export function CaseStudies() {
  const cases = [
    {
      name: "Амархүү",
      university: "Tsinghua University",
      program: "Хэлний бэлтгэл + Бакалавр",
      scholarship: "Full",
      before: "HSK 0",
      after: "HSK 6",
      duration: "2 жил",
      color: "from-oyunity-gold/20 to-oyunity-gold/5",
    },
    {
      name: "Батболд",
      university: "Shanghai Jiao Tong",
      program: "Бакалавр",
      scholarship: "Partial",
      before: "HSK 3",
      after: "HSK 5",
      duration: "1 жил",
      color: "from-oyunity-blue/20 to-oyunity-blue/5",
    },
    {
      name: "Анужин",
      university: "Fudan University",
      program: "English-medium Бакалавр",
      scholarship: "Тийм",
      before: "IELTS бэлтгэл",
      after: "IELTS 7.0",
      duration: "6 сар",
      color: "from-oyunity-navy/20 to-oyunity-navy/5",
    },
  ];

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-oyunity-soft">
      <div className="container mx-auto">
        <div className="mx-auto mb-12 w-full max-w-2xl text-center md:mb-16">
          <p className="mb-3 text-sm font-semibold text-oyunity-gold uppercase tracking-wide">
            Case Studies
          </p>
          <h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-5xl lg:text-6xl text-oyunity-navy leading-tight">
            Сурагч бүр өвөрмөц зам, ижил үр дүн.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {cases.map((c, i) => (
            <Link
              key={i}
              href="/amjiltyn-tuukhuud"
              className="group block bg-white rounded-lg overflow-hidden border border-border-primary hover:shadow-xl transition-shadow"
            >
              <div className={`aspect-[4/3] bg-gradient-to-br ${c.color} flex items-center justify-center`}>
                <div className="w-32 h-32 rounded-full bg-white/50 flex items-center justify-center text-gray-400 text-sm">
                  [Зураг]
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-oyunity-navy mb-1">{c.name}</h3>
                <p className="text-sm text-oyunity-gold font-semibold mb-4">{c.university}</p>
                <div className="space-y-2 text-sm border-t border-border-primary pt-4">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Хөтөлбөр:</span>
                    <span className="text-oyunity-navy font-medium text-right">{c.program}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Тэтгэлэг:</span>
                    <span className="text-oyunity-navy font-medium">{c.scholarship}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Зам:</span>
                    <span className="text-oyunity-navy font-medium">
                      {c.before} → {c.after}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Хугацаа:</span>
                    <span className="text-oyunity-navy font-medium">{c.duration}</span>
                  </div>
                </div>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-oyunity-gold group-hover:gap-2 transition-all">
                  Дэлгэрэнгүй уншиx <RxChevronRight />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
