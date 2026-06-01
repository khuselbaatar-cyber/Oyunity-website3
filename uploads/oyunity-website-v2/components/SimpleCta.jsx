"use client";

import Link from "next/link";
import { Button } from "@relume_io/relume-ui";

export function SimpleCta({ title = "Та юу хийх ёстойг тодорхойлъё.", subtitle = "30 минутын үнэгүй зөвлөгөө." }) {
  return (
    <section className="px-[5%] py-16 md:py-24">
      <div className="container mx-auto">
        <div className="flex flex-col items-center bg-gradient-to-br from-oyunity-navy to-oyunity-blue text-white p-8 md:p-12 rounded-lg text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl max-w-2xl leading-tight">{title}</h2>
          <p className="text-white/80 max-w-xl mb-6">{subtitle}</p>
          <Link href="/holboo-barikh">
            <Button className="bg-oyunity-gold text-oyunity-navy border-oyunity-gold hover:bg-white hover:border-white transition">
              Зөвлөгөө захиалах →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
