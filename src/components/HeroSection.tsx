import { service } from "@/src/data/service";

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-36"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1800&q=85')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f1110] via-[#0f1110]/86 to-[#0f1110]/38" />

      <div className="section-shell relative grid min-h-[calc(100vh-80px)] items-center py-20">
        <div className="max-w-3xl">
          <p className="eyebrow">Boutique website service</p>
          <h1 className="mt-5 text-5xl font-semibold leading-tight text-[#fff7e8] md:text-7xl">
            {service.heroTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d9cfbf] md:text-xl">
            {service.heroSubtitle}
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#demos"
              className="rounded-sm bg-[#c6a15b] px-6 py-3 text-center font-semibold text-[#12100c] transition hover:bg-[#f1d48e]"
            >
              View Demos
            </a>
            <a
              href="#contact"
              className="rounded-sm border border-white/25 px-6 py-3 text-center font-semibold text-[#fff7e8] transition hover:border-[#c6a15b] hover:text-[#f5d28a]"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-3 border-y border-white/12 py-5 text-sm text-[#d9cfbf]">
            <div>
              <strong className="block text-2xl text-[#fff7e8]">3</strong>
              Demo styles
            </div>
            <div>
              <strong className="block text-2xl text-[#fff7e8]">50%</strong>
              Deposit workflow
            </div>
            <div>
              <strong className="block text-2xl text-[#fff7e8]">€49</strong>
              Monthly care
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
