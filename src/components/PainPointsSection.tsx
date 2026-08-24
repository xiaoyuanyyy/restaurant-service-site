import { painPoints } from "@/src/data/service";

export function PainPointsSection() {
  return (
    <section className="border-t border-white/10 bg-[#161410] py-24">
      <div className="section-shell">
        <p className="eyebrow">Why restaurants need this</p>
        <div className="mt-4 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <h2 className="text-4xl font-semibold text-[#fff7e8] md:text-5xl">
            Tourists decide quickly. A poor website loses bookings before dinner.
          </h2>
          <p className="text-lg leading-8 text-[#cfc3b2]">
            Many small restaurants already have great food and atmosphere, but their online presence does not make that quality easy to see.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((point) => (
            <article key={point} className="rounded-sm border border-white/10 bg-white/[0.035] p-6">
              <span className="mb-5 block h-1 w-10 bg-[#8f3145]" />
              <p className="text-base leading-7 text-[#efe5d8]">{point}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
