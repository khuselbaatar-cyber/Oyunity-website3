"use client";

import Link from "next/link";
import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

export function Stats() {
  const stats = [
    { value: "300", label: "Зуучилсан оюутан", note: "45 partner университетээр" },
    { value: "45", label: "Партнер их сургууль", note: "Tsinghua-аас Fudan хүртэл" },
    { value: "76.7%", label: "Тэтгэлэгийн хувь", note: "Ихэнх оюутан full funding авдаг" },
    { value: "7", label: "Жилийн туршлага", note: "2018 оноос хойш зам барьсан" },
  ];

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-oyunity-soft">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-[0.5fr_1fr] lg:items-center lg:gap-x-20">
          <div>
            <p className="mb-3 text-sm font-semibold text-oyunity-gold uppercase tracking-wide md:mb-4">
              Үр дүн
            </p>
            <h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-5xl lg:text-6xl text-oyunity-navy leading-tight">
              7 жилийн туршид батлагдсан амжилт
            </h2>
            <p className="md:text-md text-gray-600">
              Бид бодит зүйл бүтээсэн. <strong>300 оюутан</strong> 45 их сургуульд байршуулагдсан.
              <strong> 76.7%</strong> тэтгэлгийн хувь — энэ нь өөрөө л ярина.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Link href="/holboo-barikh">
                <Button variant="secondary" className="border-oyunity-blue text-oyunity-blue hover:bg-oyunity-blue hover:text-white transition">
                  Өргөдөл гаргах
                </Button>
              </Link>
              <Link href="/amjiltyn-tuukhuud" className="inline-flex items-center gap-1 text-sm font-medium text-oyunity-navy hover:text-oyunity-gold transition">
                Дэлгэрэнгүй <RxChevronRight />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {stats.map((s, i) => (
              <div key={i} className="border border-border-primary bg-white p-6 md:p-8 rounded-lg">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-6">
                  {s.label}
                </h3>
                <p className="text-right text-5xl md:text-6xl font-bold text-oyunity-navy leading-none">
                  {s.value}
                </p>
                <div className="my-4 h-px w-full bg-border-primary" />
                <p className="text-right text-sm text-gray-600">{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
