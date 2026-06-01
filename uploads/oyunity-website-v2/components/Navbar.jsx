"use client";

import Link from "next/link";
import { Button } from "@relume_io/relume-ui";
import { useState } from "react";
import { RxChevronDown } from "react-icons/rx";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const programs = [
    { href: "/khotolboruud/hsk", label: "Хэлний бэлтгэл" },
    { href: "/khotolboruud/placement", label: "Бакалавр / Магистр / Доктор" },
    { href: "/khotolboruud/exchange", label: "Солилцоо" },
    { href: "/khotolboruud/mentorship", label: "Менторшип" },
    { href: "/khotolboruud/online", label: "Онлайн HSK + CSCA" },
  ];

  return (
    <section className="sticky top-0 z-50 flex w-full items-center border-b border-border-primary bg-background-primary lg:min-h-18 lg:px-[5%]">
      <div className="mx-auto size-full lg:grid lg:grid-cols-[0.375fr_1fr_0.375fr] lg:items-center lg:justify-between lg:gap-4">
        {/* Logo */}
        <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
          <Link href="/" className="text-xl font-bold tracking-tight text-oyunity-navy">
            Oyunity
            <span className="ml-1 text-oyunity-gold">•</span>
          </Link>

          {/* Mobile toggle */}
          <button
            className="lg:hidden flex flex-col gap-1.5 -mr-2 p-2"
            onClick={() => setIsMobileMenuOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 bg-oyunity-navy transition ${isMobileMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-oyunity-navy transition ${isMobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-oyunity-navy transition ${isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center justify-center gap-x-8">
          <Link href="/" className="text-sm font-medium hover:text-oyunity-gold transition">
            Нүүр
          </Link>

          {/* Programs dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <Link href="/khotolboruud" className="text-sm font-medium hover:text-oyunity-gold transition flex items-center gap-1">
              Хөтөлбөрүүд <RxChevronDown />
            </Link>
            {isDropdownOpen && (
              <div className="absolute left-0 top-full pt-2 w-72">
                <div className="bg-white border border-border-primary shadow-lg p-2 rounded-md">
                  {programs.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      className="block px-3 py-2 text-sm hover:bg-oyunity-blue-soft rounded transition"
                    >
                      {p.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/amjiltyn-tuukhuud" className="text-sm font-medium hover:text-oyunity-gold transition">
            Амжилтын түүхүүд
          </Link>
          <Link href="/mentoruud" className="text-sm font-medium hover:text-oyunity-gold transition">
            Менторууд
          </Link>
          <Link href="/bidnii-tukhai" className="text-sm font-medium hover:text-oyunity-gold transition">
            Бидний тухай
          </Link>
          <Link href="/medlegiin-tov" className="text-sm font-medium hover:text-oyunity-gold transition">
            Мэдлэгийн төв
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center justify-end">
          <Link href="/holboo-barikh">
            <Button className="bg-oyunity-blue text-white border-oyunity-blue hover:bg-oyunity-gold hover:border-oyunity-gold transition">
              Зөвлөгөө захиалах
            </Button>
          </Link>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-white border-b border-border-primary px-[5%] pb-6 shadow-lg">
            <nav className="flex flex-col gap-1 pt-4">
              <Link href="/" className="py-2 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Нүүр</Link>
              <Link href="/khotolboruud" className="py-2 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Хөтөлбөрүүд</Link>
              {programs.map((p) => (
                <Link key={p.href} href={p.href} className="pl-4 py-1.5 text-sm text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>
                  → {p.label}
                </Link>
              ))}
              <Link href="/amjiltyn-tuukhuud" className="py-2 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Амжилтын түүхүүд</Link>
              <Link href="/mentoruud" className="py-2 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Менторууд</Link>
              <Link href="/bidnii-tukhai" className="py-2 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Бидний тухай</Link>
              <Link href="/medlegiin-tov" className="py-2 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Мэдлэгийн төв</Link>
              <Link href="/holboo-barikh" className="mt-4" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-oyunity-blue text-white border-oyunity-blue">
                  Зөвлөгөө захиалах
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </section>
  );
}
