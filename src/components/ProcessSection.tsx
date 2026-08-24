import { processSteps } from "@/src/data/service";

export function ProcessSection() {
  return (
    <section id="process" className="bg-[#161410] py-24">
      <div className="section-shell">
        <p className="eyebrow">Workflow</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-semibold text-[#fff7e8] md:text-5xl">
          A clear deposit, preview, approval, and launch process.
        </h2>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {processSteps.map((step, index) => (
            <div key={step} className="flex gap-5 border-t border-white/10 pt-6">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-sm bg-[#c6a15b] font-semibold text-[#12100c]">
                {index + 1}
              </span>
              <p className="pt-2 text-[#efe5d8]">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
