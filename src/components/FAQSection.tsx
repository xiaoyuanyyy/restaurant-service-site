import { faqs } from "@/src/data/service";

export function FAQSection() {
  return (
    <section id="faq" className="bg-[#1d1712] py-24">
      <div className="section-shell">
        <p className="eyebrow">FAQ</p>
        <h2 className="mt-4 text-4xl font-semibold text-[#fff7e8] md:text-5xl">
          Questions restaurant owners may ask first.
        </h2>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {faqs.map((item) => (
            <article key={item.question} className="rounded-sm border border-white/10 bg-[#0f1110] p-6">
              <h3 className="text-xl font-semibold text-[#fff7e8]">{item.question}</h3>
              <p className="mt-3 leading-7 text-[#cfc3b2]">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
