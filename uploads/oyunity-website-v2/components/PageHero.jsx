"use client";

import Link from "next/link";
import { Button } from "@relume_io/relume-ui";

export function PageHero({ eyebrow, title, subtitle, primaryCta, secondaryCta }) {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-gradient-to-b from-white to-oyunity-soft">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          {eyebrow && (
            <span className="mb-4 inline-block px-3 py-1 text-xs font-semibold tracking-wide uppercase text-oyunity-gold border border-oyunity-gold/30 rounded-full">
              {eyebrow}
            </span>
          )}
          <h1 className="mb-5 text-4xl font-bold md:mb-6 md:text-6xl lg:text-7xl text-oyunity-navy leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="md:text-md text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
              {primaryCta && (
                <Link href={primaryCta.href}>
                  <Button className="bg-oyunity-blue text-white border-oyunity-blue hover:bg-oyunity-gold hover:border-oyunity-gold transition">
                    {primaryCta.label}
                  </Button>
                </Link>
              )}
              {secondaryCta && (
                <Link href={secondaryCta.href}>
                  <Button variant="secondary" className="border-oyunity-navy text-oyunity-navy hover:bg-oyunity-navy hover:text-white transition">
                    {secondaryCta.label}
                  </Button>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
