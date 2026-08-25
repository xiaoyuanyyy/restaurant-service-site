import { pricingPlans } from "@/src/data/service";

export function PricingSection() {
  return (
    <section id="pricing" className="bg-[#0f1110] py-24">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">Pricing</p>
          <h2 className="mt-4 text-4xl font-semibold text-[#fff7e8] md:text-5xl">
            Choose the level that matches your restaurant's launch goal.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#cfc3b2]">
            A basic online presence starts at 199 euros. Most restaurants choose the 399 euro package for stronger visuals, menu storytelling, and clearer booking guidance.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex h-full flex-col rounded-sm border p-7 ${
                plan.highlighted
                  ? "border-[#c6a15b] bg-[#c6a15b]/14 shadow-[0_0_0_1px_rgba(198,161,91,0.22),0_22px_70px_rgba(198,161,91,0.12)] lg:-mt-4 lg:pb-9"
                  : "border-white/10 bg-white/[0.035]"
              }`}
            >
              {plan.badge ? (
                <span className="mb-5 inline-flex w-fit rounded-sm border border-[#f5d28a]/50 bg-[#c6a15b] px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#12100c]">
                  {plan.badge}
                </span>
              ) : (
                <span className="mb-5 h-7" aria-hidden="true" />
              )}

              <h3 className="text-2xl font-semibold text-[#fff7e8]">{plan.name}</h3>
              <p className={`mt-3 text-4xl font-semibold ${plan.highlighted ? "text-[#f8d783]" : "text-[#f5d28a]"}`}>
                {plan.price}
              </p>
              <p className="mt-4 min-h-24 leading-7 text-[#cfc3b2]">{plan.description}</p>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-[#efe5d8]">
                    <span className="text-[#c6a15b]">+</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-7 border-t border-white/10 pt-5 text-sm leading-6 text-[#d9cfbf]">
                {plan.fit}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
