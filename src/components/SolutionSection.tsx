import { solutions } from "@/src/data/service";

export function SolutionSection() {
  return (
    <section id="solutions" className="bg-[#0f1110] py-24">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="eyebrow">The offer</p>
          <h2 className="mt-4 text-4xl font-semibold text-[#fff7e8] md:text-5xl">
            A refined homepage that turns restaurant details into a clear booking path.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#cfc3b2]">
            The first version stays intentionally simple: no complex backend, no payment system, and no database. It focuses on the page a restaurant needs most.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {solutions.map((item) => (
            <div key={item} className="flex gap-4 border-b border-white/10 pb-5">
              <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-[#c6a15b]" />
              <p className="text-[#efe5d8]">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
