"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@relume_io/relume-ui";

export default function Page() {
  const [submitted, setSubmitted] = useState(false);

  const programs = [
    "Хэлний бэлтгэл",
    "Бакалавр",
    "Магистр",
    "Доктор",
    "1 сарын солилцоо",
    "1 семестрийн солилцоо",
    "Менторшип",
    "Онлайн HSK + CSCA",
    "Тодорхойгүй / бүгдийг сонирхож байна",
  ];

  const grades = [
    "6-р анги","7-р анги","8-р анги","9-р анги","10-р анги","11-р анги","12-р анги",
    "Их сургуулийн 1-р курс","Их сургуулийн 2-р курс","Их сургуулийн 3-р курс","Их сургуулийн 4-р курс",
    "Их сургууль төгсөгч","Эцэг эх / асран хамгаалагч","Бусад",
  ];

  return (
    <>
      <Navbar />
      <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-gradient-to-b from-white to-oyunity-soft">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <span className="mb-4 inline-block px-3 py-1 text-xs font-semibold tracking-wide uppercase text-oyunity-gold border border-oyunity-gold/30 rounded-full">
              Discovery Call
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-oyunity-navy mb-6 leading-tight">
              30 минутын үнэгүй зөвлөгөө захиалах.
            </h1>
            <p className="md:text-md text-gray-600 max-w-2xl mx-auto">
              Discovery call дээр бид зөвхөн сонсоно — зорилго, түвшин, цаг хугацаа, төсөв.
              Эцэст нь зөв дараагийн алхамаа санал болгоно. Та юу ч худалдаж авах үүрэгтэй биш.
            </p>
          </div>
        </div>
      </section>
      <section className="px-[5%] py-16">
        <div className="container mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            {submitted ? (
              <div className="bg-white border border-oyunity-gold rounded-lg p-8 text-center">
                <div className="text-5xl mb-4">🎉</div>
                <h2 className="text-2xl font-bold text-oyunity-navy mb-3">Захиалга хүлээж авлаа!</h2>
                <p className="text-gray-600">
                  Манай баг 24 цагийн дотор тантай холбоо барина. Утсыг чинь бэлэн байлгаарай.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="bg-white border border-border-primary rounded-lg p-6 md:p-8 space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-oyunity-navy mb-1">Нэр *</label>
                  <input required type="text" className="w-full px-4 py-2.5 border border-border-primary rounded focus:outline-none focus:border-oyunity-gold" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-oyunity-navy mb-1">Утас *</label>
                    <input required type="tel" className="w-full px-4 py-2.5 border border-border-primary rounded focus:outline-none focus:border-oyunity-gold" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-oyunity-navy mb-1">И-мэйл *</label>
                    <input required type="email" className="w-full px-4 py-2.5 border border-border-primary rounded focus:outline-none focus:border-oyunity-gold" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-oyunity-navy mb-1">Анги / Курс *</label>
                  <select required className="w-full px-4 py-2.5 border border-border-primary rounded focus:outline-none focus:border-oyunity-gold">
                    <option value="">Сонгоно уу...</option>
                    {grades.map((g) => <option key={g}>{g}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-oyunity-navy mb-1">Сонирхож буй хөтөлбөр *</label>
                  <select required className="w-full px-4 py-2.5 border border-border-primary rounded focus:outline-none focus:border-oyunity-gold">
                    <option value="">Сонгоно уу...</option>
                    {programs.map((p) => <option key={p}>{p}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-oyunity-navy mb-1">Нэмэлт мэдээлэл</label>
                  <textarea rows={4} className="w-full px-4 py-2.5 border border-border-primary rounded focus:outline-none focus:border-oyunity-gold" />
                </div>
                <Button type="submit" className="w-full bg-oyunity-blue text-white border-oyunity-blue hover:bg-oyunity-gold hover:border-oyunity-gold transition">
                  Захиалга илгээх →
                </Button>
              </form>
            )}
          </div>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-500 mb-1">Утас</p>
              <a href="tel:80001928" className="text-2xl font-bold text-oyunity-navy hover:text-oyunity-gold transition">
                8000-1928
              </a>
              <p className="text-xs text-gray-500 mt-1">Ажлын цаг: 10:00 – 20:00</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">И-мэйл</p>
              <a href="mailto:oyunityedu@gmail.com" className="text-base font-semibold text-oyunity-navy hover:text-oyunity-gold transition break-all">
                oyunityedu@gmail.com
              </a>
              <p className="text-xs text-gray-500 mt-1">24 цагийн дотор хариулна</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Ажлын цаг</p>
              <p className="text-base font-semibold text-oyunity-navy">10:00 – 20:00</p>
              <p className="text-xs text-gray-500 mt-1">Даваа – Ням</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
