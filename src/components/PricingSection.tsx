import { pricingPlans } from "@/src/data/service";

export function PricingSection() {
  return (
    <section id="pricing" className="bg-[#0f1110] py-24">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="eyebrow">Pricing</p>
          <h2 className="mt-4 text-4xl font-semibold text-[#fff7e8] md:text-5xl">
            Simple packages for a lightweight service business.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-sm border p-7 ${
                plan.highlighted
                  ? "border-[#c6a15b] bg-[#c6a15b]/10"
                  : "border-white/10 bg-white/[0.035]"
              }`}
            >
              <h3 className="text-2xl font-semibold text-[#fff7e8]">{plan.name}</h3>
              <p className="mt-3 text-4xl font-semibold text-[#f5d28a]">{plan.price}</p>
              <p className="mt-4 min-h-20 leading-7 text-[#cfc3b2]">{plan.description}</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-[#efe5d8]">
                    <span className="text-[#c6a15b]">+</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
