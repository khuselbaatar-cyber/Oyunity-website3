"use client";

import Link from "next/link";
import { Button } from "@relume_io/relume-ui";

export function Hero() {
  return (
    <section id="hero" className="px-[5%] py-16 md:py-24 lg:py-28 bg-gradient-to-b from-white to-oyunity-soft">
      <div className="container mx-auto max-w-4xl">
        <div className="flex w-full flex-col items-center text-center">
          <span className="mb-4 inline-block px-3 py-1 text-xs font-semibold tracking-wide uppercase text-oyunity-gold border border-oyunity-gold/30 rounded-full">
            Elite Scholarship Mentorship · Хятад чиглэл
          </span>
          <h1 className="mb-5 text-4xl font-bold md:mb-6 md:text-6xl lg:text-7xl text-oyunity-navy leading-tight">
            Хятадын топ их сургуулиудад
            <span className="block text-oyunity-gold">тэтгэлэгтэй элсэх</span>
            замыг бид нээнэ.
          </h1>
          <p className="md:text-md text-gray-600 max-w-2xl">
            300 оюутныг Tsinghua, Fudan, Shanghai Jiao Tong, Xi'an Jiaotong зэрэг сургуульд
            амжилттай байршуулсан, Монголд цорын ганц Elite Scholarship Mentorship Ecosystem.
            Манай <strong className="text-oyunity-navy">76.7% оюутан тэтгэлэгтэй элсдэг.</strong>
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
            <Link href="/holboo-barikh">
              <Button className="bg-oyunity-blue text-white border-oyunity-blue hover:bg-oyunity-gold hover:border-oyunity-gold transition">
                Үнэгүй зөвлөгөө захиалах →
              </Button>
            </Link>
            <Link href="/khotolboruud">
              <Button variant="secondary" className="border-oyunity-navy text-oyunity-navy hover:bg-oyunity-navy hover:text-white transition">
                Хөтөлбөрүүдийг үзэх
              </Button>
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
            <span>⭐ 4.9/5 рэйтинг</span>
            <span>·</span>
            <span>300 амжилттай элсэлт</span>
            <span>·</span>
            <span>230 тэтгэлэгтэй</span>
            <span>·</span>
            <span>45 партнер их сургууль</span>
          </div>
        </div>
      </div>
    </section>
  );
}
