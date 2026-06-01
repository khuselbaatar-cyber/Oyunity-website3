"use client";

export function Testimonial() {
  const testimonials = [
    {
      quote: "HSK сурч үзээгүй намайг 2 жилийн дотор HSK 6-тай болгож, Tsinghua-д тэтгэлэгтэй элсүүлсэн. Энэ нь систематик ажлын үр дүн — санамсаргүй биш.",
      name: "Амархүү",
      role: "Tsinghua University, Бакалавр (full scholarship)",
    },
    {
      quote: "HSK 3 түвшингээс жил гаруйхан хугацаанд Shanghai Jiao Tong-д суудаг гэдгээ танихгүй байсан. Стратеги, mentor-той ажилласан нь бүх ялгааг гаргасан.",
      name: "Батболд",
      role: "Shanghai Jiao Tong, Бакалавр (partial scholarship)",
    },
    {
      quote: "Хятад хэлгүйгээр Хятадын топ сургуульд элсэх боломжтой гэдгийг хэн ч хэлдэггүй байсан. Fudan-ийн English-medium program бол яг тэр гарц байсан.",
      name: "Анужин",
      role: "Fudan University, English program",
    },
  ];

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mx-auto mb-12 w-full max-w-2xl text-center md:mb-16">
          <p className="mb-3 text-sm font-semibold text-oyunity-gold uppercase tracking-wide">
            Амжилтын түүхүүд
          </p>
          <h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-5xl lg:text-6xl text-oyunity-navy leading-tight">
            Хятадад очсон сурагчдын үг
          </h2>
          <p className="md:text-md text-gray-600">
            300 амжилтын түүхээс гурвыг танилцуулъя.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="border border-border-primary p-6 md:p-8 rounded-lg flex flex-col bg-white hover:shadow-lg transition">
              <div className="text-oyunity-gold text-4xl leading-none mb-4">"</div>
              <p className="text-gray-700 leading-relaxed mb-6 flex-1">{t.quote}</p>
              <div className="border-t border-border-primary pt-4">
                <p className="font-semibold text-oyunity-navy">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
