"use client";

import Link from "next/link";
import { Button } from "@relume_io/relume-ui";

export function Cta() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="flex flex-col items-center bg-gradient-to-br from-oyunity-navy to-oyunity-blue text-white border border-oyunity-blue p-8 md:p-12 lg:p-16 rounded-lg text-center">
          <h2 className="mb-4 text-3xl font-bold md:mb-6 md:text-5xl lg:text-6xl leading-tight max-w-3xl">
            Хятадад очих замаа өнөөдрөөс эхлүүлээрэй.
          </h2>
          <p className="md:text-md text-white/80 max-w-2xl mb-8">
            30 минутын үнэгүй зөвлөгөө. Зорилго, түвшин, тэтгэлгийн боломжуудаа судалъя.
            Та юу хийх ёстойг бид хамтран тодорхойлъё.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
            <Link href="/holboo-barikh">
              <Button className="bg-oyunity-gold text-oyunity-navy border-oyunity-gold hover:bg-white hover:border-white transition">
                Зөвлөгөө захиалах →
              </Button>
            </Link>
            <a href="tel:80001928" className="text-white/90 underline hover:text-oyunity-gold transition">
              эсвэл утсаар: 8000-1928
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
