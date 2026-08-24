import { demos } from "@/src/data/service";

export function DemoShowcaseSection() {
  return (
    <section id="demos" className="bg-[#1d1712] py-24">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="eyebrow">Demo websites</p>
          <h2 className="mt-4 text-4xl font-semibold text-[#fff7e8] md:text-5xl">
            Three preview styles for different restaurant personalities.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {demos.map((demo) => (
            <article key={demo.title} className="overflow-hidden rounded-sm border border-white/10 bg-[#0f1110]">
              <img className="h-64 w-full object-cover" src={demo.image} alt={demo.title} />
              <div className="p-6">
                <p className="text-sm font-semibold text-[#c6a15b]">{demo.status}</p>
                <h3 className="mt-3 text-2xl font-semibold text-[#fff7e8]">{demo.title}</h3>
                <p className="mt-3 leading-7 text-[#cfc3b2]">{demo.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
