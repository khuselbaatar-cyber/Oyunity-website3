"use client";

import Link from "next/link";
import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

export function OnlineTraining() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 text-sm font-semibold text-oyunity-gold uppercase tracking-wide md:mb-4">
              Онлайн сургалт
            </p>
            <h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-5xl lg:text-6xl text-oyunity-navy leading-tight">
              Бага сурагчдад зориулсан онлайн Хятад хэлний сургалт
            </h2>
            <p className="mb-5 md:mb-6 md:text-md text-gray-600">
              Эрт эхэлж, давамгайлж эхлэе. Манай курс нь арван жилийн сурагчдыг
              <strong> HSK болон CSCA</strong> шалгалтанд бэлддэг — батлагдсан, амжилттай аргаар.
            </p>
            <ul className="my-4 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-oyunity-gold font-bold">✓</span>
                <span>HSK эхлэлээс ахисан түвшин хүртэлх бэлтгэл</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-oyunity-gold font-bold">✓</span>
                <span>CSCA шалгалтын ёж сургалт өрсөлдөх давуу талын тулд</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-oyunity-gold font-bold">✓</span>
                <span>Туршлагатай багш нараар Монгол хэлээр заана</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-oyunity-gold font-bold">✓</span>
                <span>6-17 насны хүүхдэд зориулсан age-appropriate агуулга</span>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Link href="/khotolboruud/online">
                <Button variant="secondary" className="border-oyunity-blue text-oyunity-blue hover:bg-oyunity-blue hover:text-white transition">
                  Бүртгүүлэх
                </Button>
              </Link>
              <Link href="/khotolboruud/online" className="inline-flex items-center gap-1 text-sm font-medium text-oyunity-navy hover:text-oyunity-gold transition">
                Дэлгэрэнгүй <RxChevronRight />
              </Link>
            </div>
          </div>
          <div className="bg-oyunity-blue-soft rounded-lg p-8 md:p-12">
            <div className="aspect-square bg-white rounded-lg flex items-center justify-center text-gray-300 text-sm">
              [Зураг placeholder]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
