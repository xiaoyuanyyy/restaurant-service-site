import { demoWebsites } from "@/src/data/demos";

export function DemoSection() {
  return (
    <section id="demos" className="bg-[#1d1712] py-24">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow">Demo Websites</p>
            <h2 className="mt-4 text-4xl font-semibold text-[#fff7e8] md:text-5xl">
              Restaurant website templates clients can open and experience.
            </h2>
          </div>
          <p className="text-lg leading-8 text-[#cfc3b2]">
            Use these demos to show restaurant owners how a modern website can improve menus, photos, mobile browsing, and booking confidence before they commit.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {demoWebsites.map((demo) => (
            <a
              key={demo.title}
              href={demo.demoUrl}
              className="overflow-hidden rounded-sm border border-white/10 bg-[#0f1110] shadow-2xl shadow-black/20"
            >
              <div className="relative h-64 overflow-hidden bg-[#2a2119]">
                <img
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  src={demo.image}
                  alt={`${demo.title} screenshot preview`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1110]/82 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-sm border border-[#c6a15b]/50 bg-[#0f1110]/78 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#f5d28a]">
                  Website demo
                </span>
              </div>

              <div className="p-6 md:p-7">
                <h3 className="text-2xl font-semibold text-[#fff7e8]">{demo.title}</h3>
                <p className="mt-3 leading-7 text-[#d9cfbf]">{demo.description}</p>
                <div className="mt-5 border-t border-white/10 pt-5">
                  <p className="text-sm font-semibold text-[#c6a15b]">Suitable for</p>
                  <p className="mt-2 leading-7 text-[#efe5d8]">{demo.suitableFor}</p>
                </div>
                <span
                  className="mt-6 inline-flex w-full items-center justify-center rounded-sm border border-[#c6a15b] bg-[#c6a15b] px-5 py-3 font-semibold text-[#12100c] transition hover:bg-[#f1d48e] sm:w-auto"
                >
                  View Demo
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
