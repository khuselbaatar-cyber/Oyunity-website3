"use client";

import Link from "next/link";
import { FaInstagram, FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-oyunity-soft border-t border-border-primary px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-12 pb-12 md:pb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="text-xl font-bold tracking-tight text-oyunity-navy">
              Oyunity <span className="text-oyunity-gold">•</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              Elite Scholarship Mentorship Ecosystem.
              Хятадын топ их сургуулиудад тэтгэлэгтэй элсэх premium consultancy.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#" className="text-gray-500 hover:text-oyunity-gold transition" aria-label="Instagram"><FaInstagram size={20} /></a>
              <a href="#" className="text-gray-500 hover:text-oyunity-gold transition" aria-label="Facebook"><FaFacebook size={20} /></a>
              <a href="#" className="text-gray-500 hover:text-oyunity-gold transition" aria-label="YouTube"><FaYoutube size={20} /></a>
              <a href="#" className="text-gray-500 hover:text-oyunity-gold transition" aria-label="TikTok"><FaTiktok size={20} /></a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-sm text-oyunity-navy mb-4">Хөтөлбөрүүд</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/khotolboruud/hsk" className="hover:text-oyunity-gold transition">Хэлний бэлтгэл</Link></li>
              <li><Link href="/khotolboruud/placement" className="hover:text-oyunity-gold transition">Бакалавр / Магистр / Доктор</Link></li>
              <li><Link href="/khotolboruud/exchange" className="hover:text-oyunity-gold transition">Солилцоо</Link></li>
              <li><Link href="/khotolboruud/mentorship" className="hover:text-oyunity-gold transition">Менторшип</Link></li>
              <li><Link href="/khotolboruud/online" className="hover:text-oyunity-gold transition">Онлайн HSK + CSCA</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm text-oyunity-navy mb-4">Компани</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/bidnii-tukhai" className="hover:text-oyunity-gold transition">Бидний тухай</Link></li>
              <li><Link href="/mentoruud" className="hover:text-oyunity-gold transition">Менторууд</Link></li>
              <li><Link href="/amjiltyn-tuukhuud" className="hover:text-oyunity-gold transition">Амжилтын түүхүүд</Link></li>
              <li><Link href="/medlegiin-tov" className="hover:text-oyunity-gold transition">Мэдлэгийн төв</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm text-oyunity-navy mb-4">Холбоо барих</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="tel:80001928" className="hover:text-oyunity-gold transition">8000-1928</a></li>
              <li><a href="mailto:oyunityedu@gmail.com" className="hover:text-oyunity-gold transition">oyunityedu@gmail.com</a></li>
              <li>10:00 – 20:00</li>
            </ul>
            <Link
              href="/holboo-barikh"
              className="mt-6 inline-block px-4 py-2 bg-oyunity-blue text-white text-sm font-medium rounded hover:bg-oyunity-gold transition"
            >
              Зөвлөгөө захиалах →
            </Link>
          </div>
        </div>

        <div className="border-t border-border-primary pt-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-gray-500">
          <p>© 2026 Oyunity. Бүх эрх хуулиар хамгаалагдсан.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-oyunity-gold transition">Privacy Policy</a>
            <a href="#" className="hover:text-oyunity-gold transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
