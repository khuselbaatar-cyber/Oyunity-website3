"use client";

import Link from "next/link";
import { RxChevronRight } from "react-icons/rx";

export function Programs() {
  const programs = [
    {
      slug: "hsk",
      label: "Хэлний бэлтгэл",
      subtitle: "HSK 0-ээс HSK 6 хүртэл",
      desc: "Хятад хэлгүй сурагчдад зориулсан хэлний бэлтгэл. 50 оюутан энэ замаар тэтгэлэгтэй явсан.",
      benefits: ["Байр үнэгүй", "Сургалт үнэгүй"],
      price: "6-12 сая ₮",
      icon: "🈵",
    },
    {
      slug: "placement",
      label: "Бүрэн зэрэг",
      subtitle: "Бакалавр · Магистр · Доктор",
      desc: "4-7 жилийн full degree placement. Манай 180+ оюутан тэтгэлэгтэй элссэн.",
      benefits: ["Байр үнэгүй", "Сургалт үнэгүй", "Сарын стипенд"],
      price: "10-15 сая ₮",
      icon: "🎓",
    },
    {
      slug: "exchange",
      label: "Солилцоо",
      subtitle: "1 сар · 1 семестр",
      desc: "Хятадад анх удаа очиж туршиж үзэх, эсвэл академик credit transfer хийх хөтөлбөр.",
      benefits: ["1 сар / 1 семестр", "Дотуур байр"],
      price: "3-8 сая ₮",
      icon: "✈️",
    },
    {
      slug: "mentorship",
      label: "Менторшип",
      subtitle: "Standalone coaching",
      desc: "Application-аа өөрөө хиймээр байгаа, гэхдээ туршлагатай alumni-аас зөвлөгөө авах хүсэлтэй оюутнуудад.",
      benefits: ["Weekly 1-on-1", "Эссэ review"],
      price: "2.5 сая ₮",
      icon: "🧭",
    },
    {
      slug: "online",
      label: "Цахим сургалт",
      subtitle: "HSK + CSCA · 6-17 нас",
      desc: "Арван жилийн сурагчдыг HSK + CSCA-д бэлдэх онлайн сургалтын төв.",
      benefits: ["Онлайн", "Монгол хэлээр"],
      price: "Удахгүй",
      icon: "💻",
    },
  ];

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 text-center md:mb-16 max-w-3xl mx-auto">
          <p className="mb-3 text-sm font-semibold text-oyunity-gold uppercase tracking-wide">
            Бидний хөтөлбөрүүд
          </p>
          <h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-5xl lg:text-6xl text-oyunity-navy leading-tight">
            Таны түвшин, насанд тань тохирох 5 өөр зам.
          </h2>
          <p className="md:text-md text-gray-600">
            Бид зөвхөн "зуучлагч" биш. Mentor-уудтай хамт сурагчтай 1-5 жилийн турш дагалдана.
            Манай тэтгэлэгүүд <strong className="text-oyunity-navy">байр, сургалтын төлбөрийг үнэгүй</strong> болгож, зэргийн хөтөлбөрт <strong className="text-oyunity-navy">сарын стипенд</strong> хүртэл олгодог.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <Link
              key={p.slug}
              href={`/khotolboruud/${p.slug}`}
              className="group block border border-border-primary p-6 md:p-8 rounded-lg bg-white hover:border-oyunity-gold hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{p.icon}</div>
              <h3 className="text-xl font-bold text-oyunity-navy mb-1">{p.label}</h3>
              <p className="text-sm text-oyunity-gold font-semibold mb-4">{p.subtitle}</p>
              <p className="text-gray-600 leading-relaxed mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {p.benefits.map((b, j) => (
                  <span key={j} className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-oyunity-blue-soft text-oyunity-blue rounded-full">
                    ✓ {b}
                  </span>
                ))}
              </div>
              <div className="border-t border-border-primary pt-4 flex justify-between items-center">
                <span className="text-sm font-semibold text-oyunity-navy">{p.price}</span>
                <span className="inline-flex items-center gap-1 text-sm text-oyunity-gold group-hover:gap-2 transition-all">
                  Дэлгэрэнгүй <RxChevronRight />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
