import Link from "next/link";
import type { IntegratedDemo } from "@/src/data/integratedDemos";

const themeClasses = {
  fine: {
    page: "bg-[#060606] text-[#fffaf0]",
    hero: "from-[#060606] via-[#060606]/88 to-[#060606]/24",
    accent: "text-[#d9bd7a]",
    button: "bg-[#d9bd7a] text-[#080806] hover:bg-[#f3dfaa]",
    band: "bg-[#0b0b0a]",
    card: "border-white/10 bg-[#10100e] text-[#fff7e8]",
    menu: "bg-[#f7f0e3] text-[#14110d]",
    highlightTitle: "text-[#fff7e8]",
    highlightBody: "text-[#d9c7a3]",
  },
  italian: {
    page: "bg-[#f7ead6] text-[#2a170f]",
    hero: "from-[#f7ead6] via-[#f7ead6]/82 to-[#f7ead6]/18",
    accent: "text-[#9d2f22]",
    button: "bg-[#2a170f] text-[#fff7ea] hover:bg-[#9d2f22]",
    band: "bg-[#2f6b4f] text-[#fff7ea]",
    card: "border-[#2a170f] bg-[#fff7ea] shadow-[8px_8px_0_#2a170f]",
    menu: "bg-[#fff7ea] text-[#2a170f]",
    highlightTitle: "text-[#2a170f]",
    highlightBody: "text-[#6a4732]",
  },
  cafe: {
    page: "bg-[#fff9ef] text-[#314134]",
    hero: "from-[#fff9ef] via-[#fff9ef]/86 to-[#fff9ef]/22",
    accent: "text-[#e07d5d]",
    button: "bg-[#e07d5d] text-white hover:bg-[#c75e42]",
    band: "bg-[#dfe8d2]",
    card: "border-[#d8dfca] bg-white rounded-[28px]",
    menu: "bg-[#fff9ef] text-[#314134]",
    highlightTitle: "text-[#243c34]",
    highlightBody: "text-[#5e3b2a]",
  },
  burger: {
    page: "bg-[#120b08] text-[#fff7e4]",
    hero: "from-[#120b08] via-[#120b08]/72 to-[#120b08]/24",
    accent: "text-[#ffcf2e]",
    button: "border-4 border-[#15100c] bg-[#ffcf2e] text-[#15100c] shadow-[6px_6px_0_#15100c] hover:translate-x-[-2px] hover:translate-y-[-2px]",
    band: "border-y-4 border-[#15100c] bg-[#e9321b]",
    card: "border-4 border-[#15100c] bg-[#fff7e4] text-[#15100c] shadow-[8px_8px_0_#15100c]",
    menu: "bg-[#120b08] text-[#fff7e4]",
    highlightTitle: "text-[#15100c]",
    highlightBody: "text-[#4a2b18]",
  },
};

const highlightDetails: Record<string, string> = {
  "Chef's tasting journey": "A premium sequence for guests choosing a special evening.",
  "Sommelier pairings": "Wine moments presented with confidence and restraint.",
  "Private salon": "A more exclusive story for high-value reservations.",
  "Reservation-led layout": "Clear booking intent from the first screen.",
  "Blackboard menu": "A casual food-first menu style for quick browsing.",
  "Handmade pasta": "Signals craft, freshness, and Italian character.",
  "Tuscan wine list": "A warm wine-led reason to stay for dinner.",
  "Family tables": "Makes the bistro feel social, local, and welcoming.",
  "Morning rhythm": "A day-part structure for coffee, brunch, and lunch.",
  "Coffee counter": "Shows the daily habit, not only special occasions.",
  "Brunch cards": "Bright product cards for easy mobile decisions.",
  "Bakery-friendly layout": "Works for pastries, cakes, and breakfast menus.",
};

export function IntegratedDemoPage({ demo }: { demo: IntegratedDemo }) {
  if (demo.theme === "burger") {
    return <BurgerIntegratedDemo demo={demo} />;
  }

  const theme = themeClasses[demo.theme];

  return (
    <main className={theme.page}>
      <header className="absolute left-0 right-0 top-0 z-20">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
          <Link href="/#demos" className="text-sm font-bold uppercase tracking-[0.18em]">
            Back to Main Site
          </Link>
          <a href="#reservation" className={`rounded-sm px-5 py-3 text-sm font-bold ${theme.button}`}>
            Reserve
          </a>
        </nav>
      </header>

      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${demo.heroImage})` }} />
        <div className={`absolute inset-0 bg-gradient-to-r ${theme.hero}`} />
        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-20 pt-28 lg:px-8">
          <div className="max-w-4xl">
            <p className={`text-sm font-black uppercase tracking-[0.24em] ${theme.accent}`}>{demo.label}</p>
            <h1 className="mt-5 max-w-4xl text-6xl font-black leading-[0.92] sm:text-7xl lg:text-8xl">
              {demo.name}
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 opacity-80">{demo.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="border border-current px-4 py-2 font-bold">Rating {demo.rating}</span>
              <span className="border border-current px-4 py-2 font-bold">{demo.price}</span>
              <span className="border border-current px-4 py-2 font-bold">{demo.city}</span>
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#menu" className={`rounded-sm px-7 py-4 text-center font-black ${theme.button}`}>
                View Menu
              </a>
              <a href="#reservation" className="rounded-sm border border-current px-7 py-4 text-center font-black">
                Reserve Table
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={`px-5 py-20 lg:px-8 ${theme.band}`}>
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className={`text-sm font-black uppercase tracking-[0.2em] ${theme.accent}`}>Template position</p>
            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">{demo.description}</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {demo.highlights.map((item, index) => (
              <div key={item} className={`border p-5 ${theme.card}`}>
                <div className="flex items-start gap-4">
                  <span className={`shrink-0 text-sm font-black ${theme.accent}`}>
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className={`text-xl font-black leading-tight ${theme.highlightTitle}`}>{item}</h3>
                    <p className={`mt-2 font-sans text-sm font-semibold leading-6 ${theme.highlightBody}`}>
                      {highlightDetails[item] ?? "A focused website block made for this restaurant type."}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="menu" className={`px-5 py-20 lg:px-8 ${theme.menu}`}>
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className={`text-sm font-black uppercase tracking-[0.2em] ${theme.accent}`}>Menu preview</p>
            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">A focused menu section for fast customer decisions.</h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {demo.menu.map((item) => (
              <article key={item.name} className={`overflow-hidden border ${theme.card}`}>
                <div className="aspect-[4/3] bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }} />
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-black">{item.name}</h3>
                    <span className={`font-black ${theme.accent}`}>{item.price}</span>
                  </div>
                  <p className="mt-3 leading-7 opacity-75">{item.description}</p>
                  <span className={`mt-5 inline-flex border border-current px-3 py-1 text-xs font-black uppercase ${theme.accent}`}>
                    {item.tag}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`px-5 py-20 lg:px-8 ${theme.band}`}>
        <div className="mx-auto max-w-7xl">
          <p className={`text-sm font-black uppercase tracking-[0.2em] ${theme.accent}`}>Gallery</p>
          <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">Atmosphere, food, and details visitors can feel quickly.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {demo.gallery.map((image, index) => (
              <div
                key={image}
                className={`min-h-80 bg-cover bg-center ${index === 0 ? "md:min-h-[28rem]" : ""}`}
                style={{ backgroundImage: `url(${image})` }}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="reservation" className={`px-5 py-20 lg:px-8 ${theme.menu}`}>
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className={`text-sm font-black uppercase tracking-[0.2em] ${theme.accent}`}>Reservation demo</p>
            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">Mock booking area for preview websites.</h2>
            <p className="mt-5 leading-8 opacity-75">
              This form is front-end only. It shows restaurant owners where a real booking link, email form, or reservation system can be added later.
            </p>
          </div>
          <form className={`grid gap-4 border p-5 sm:grid-cols-2 ${theme.card}`}>
            {["Name", "Phone", "Date", "Time"].map((label) => (
              <label key={label} className="grid gap-2 text-sm font-bold">
                {label}
                <input className="border border-current bg-transparent px-4 py-3 outline-none" placeholder={label} />
              </label>
            ))}
            <label className="grid gap-2 text-sm font-bold sm:col-span-2">
              Notes
              <textarea className="min-h-28 resize-none border border-current bg-transparent px-4 py-3 outline-none" placeholder="Message" />
            </label>
            <button type="button" className={`px-5 py-4 font-black sm:col-span-2 ${theme.button}`}>
              Submit Demo Request
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

function BurgerButton({
  href,
  children,
  variant = "yellow",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "yellow" | "cream" | "dark";
}) {
  const variants = {
    yellow: "bg-[#ffcf2e] text-[#15100c]",
    cream: "bg-[#fff7e4] text-[#15100c]",
    dark: "bg-[#15100c] text-[#fff7e4]",
  };

  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center border-[3px] border-[#15100c] px-6 py-3 text-center text-sm font-extrabold uppercase shadow-[6px_6px_0_#15100c] transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_#15100c] ${variants[variant]}`}
    >
      {children}
    </a>
  );
}

function BurgerIntegratedDemo({ demo }: { demo: IntegratedDemo }) {
  return (
    <main className="bg-[#120b08] text-[#fff7e4] [font-family:Inter,Arial,ui-sans-serif,system-ui,sans-serif]">
      <nav className="sticky top-0 z-40 flex flex-wrap items-center justify-between gap-4 border-b-4 border-[#15100c] bg-[#ffcf2e] px-5 py-3 text-[#15100c] lg:px-[max(18px,calc((100vw-1120px)/2))]">
        <Link href="/#demos" className="flex items-center gap-3 font-extrabold uppercase">
          <span className="grid h-11 w-11 rotate-[-4deg] place-items-center rounded-lg border-[3px] border-[#15100c] bg-[#e9321b] text-[#fff7e4]">
            UF
          </span>
          {demo.name}
        </Link>
        <div className="flex gap-5 overflow-x-auto text-sm font-extrabold uppercase">
          <a href="#menu">Menu</a>
          <a href="#gallery">Gallery</a>
          <a href="#reservation">Contact</a>
          <a href="#location">Location</a>
        </div>
        <BurgerButton href="#menu" variant="cream">
          Order Now
        </BurgerButton>
      </nav>

      <section
        className="relative flex min-h-[720px] items-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${demo.heroImage})` }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,207,46,0.12)_25%,transparent_25%),linear-gradient(-45deg,rgba(255,207,46,0.12)_25%,transparent_25%)] bg-[length:34px_34px]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,11,8,0.94),rgba(18,11,8,0.56),rgba(18,11,8,0.18)),linear-gradient(0deg,#120b08_0%,rgba(18,11,8,0)_32%)]" />
        <div className="absolute right-[-74px] top-40 z-10 rotate-12 border-4 border-[#15100c] bg-[#e9321b] px-24 py-4 text-lg font-extrabold uppercase text-[#fff7e4] shadow-[8px_8px_0_#15100c] max-md:hidden">
          Smash hot. Serve fast. Stay loud.
        </div>
        <div className="relative z-10 mx-auto w-[min(1120px,calc(100%-32px))] py-24">
          <p className="mb-3 text-sm font-extrabold uppercase text-[#ffcf2e]">{demo.label}</p>
          <h1 className="max-w-3xl text-[clamp(3rem,8vw,6.8rem)] font-extrabold uppercase leading-[0.9] text-[#fff7e4] [text-shadow:3px_3px_0_#15100c]">
            {demo.name}
          </h1>
          <p className="mt-6 max-w-2xl font-sans text-xl font-extrabold leading-8 text-[#ffe6bc]">
            {demo.tagline}
          </p>
          <div className="my-7 flex flex-wrap gap-3">
            {[`Rating ${demo.rating}`, demo.price, "Burgers / Fries / Chicken"].map((item) => (
              <span key={item} className="border-[3px] border-[#15100c] bg-[#fff7e4] px-4 py-2 font-extrabold uppercase text-[#15100c] shadow-[4px_4px_0_#15100c]">
                {item}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <BurgerButton href="#menu">Order the Menu</BurgerButton>
            <BurgerButton href="#reservation" variant="cream">
              Call Now
            </BurgerButton>
          </div>
        </div>
      </section>

      <section className="border-y-[5px] border-[#15100c] bg-[#e9321b] py-14">
        <div className="mx-auto grid w-[min(1120px,calc(100%-32px))] gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase text-[#ffcf2e]">Lunch break fuel</p>
            <h2 className="mt-3 text-[clamp(2rem,5vw,3.6rem)] font-extrabold uppercase leading-[1]">
              Combos, loaded fries, crispy chicken, and late-night bites.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {demo.highlights.concat(["Burgers", "Fries", "Chicken", "Drinks"]).map((item) => (
              <span key={item} className="border-[3px] border-[#15100c] bg-[#ffcf2e] px-4 py-3 font-extrabold uppercase text-[#15100c] shadow-[5px_5px_0_#15100c]">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="menu" className="mx-auto w-[min(1120px,calc(100%-32px))] py-20">
        <div className="mb-9 max-w-3xl">
          <p className="text-sm font-extrabold uppercase text-[#ffcf2e]">Smash board</p>
          <h2 className="mt-3 text-[clamp(2rem,5vw,3.5rem)] font-extrabold uppercase leading-[1]">
            Big pictures, loud prices, fast choices.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {demo.menu.map((item, index) => (
            <article key={item.name} className="overflow-hidden border-4 border-[#15100c] bg-[#fff7e4] text-[#15100c] shadow-[8px_8px_0_#15100c]">
              <div
                className="relative aspect-[4/3] border-b-4 border-[#15100c] bg-[linear-gradient(135deg,#ffcf2e,#e9321b)] bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <span className="absolute left-3 top-3 border-[3px] border-[#15100c] bg-[#e9321b] px-3 py-2 text-sm font-extrabold uppercase text-[#fff7e4]">
                  {item.tag}
                </span>
                <strong className="absolute bottom-2 right-3 text-5xl font-extrabold text-[#ffcf2e] [text-shadow:2px_2px_0_#15100c]">
                  0{index + 1}
                </strong>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-extrabold uppercase">{item.name}</h3>
                  <strong className="text-2xl font-extrabold text-[#e9321b]">{item.price}</strong>
                </div>
                <p className="mt-3 font-sans font-bold leading-7 text-[#15100c]">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[min(1120px,calc(100%-32px))] py-20">
        <div className="grid gap-7 border-4 border-[#15100c] bg-[#ffcf2e] p-[clamp(22px,4vw,36px)] text-[#15100c] shadow-[12px_12px_0_#15100c] lg:grid-cols-[0.88fr_1.12fr]">
          <div>
            <p className="text-sm font-extrabold uppercase text-[#e9321b]">Fast casual, big flavor</p>
            <h2 className="mt-3 text-[clamp(2rem,5vw,3.6rem)] font-extrabold uppercase leading-[1]">
              Built for people who want food now and photos first.
            </h2>
            <p className="mt-4 font-sans font-bold leading-7">
              A bold burger demo should feel energetic, high-contrast, and simple to order from. This version is made for burger shops, fried chicken counters, street food spots, and fast casual restaurants.
            </p>
          </div>
          <dl className="grid gap-3 sm:grid-cols-2">
            {[
              ["Rating", demo.rating],
              ["Address", "Street Food Lane 12"],
              ["City", demo.city],
              ["Hours", "11:00 AM - 11:00 PM"],
              ["Phone", "+49 30 1234 5678"],
              ["Avg. Price", demo.price],
            ].map(([label, value]) => (
              <div key={label} className="border-[3px] border-[#15100c] bg-[#fff7e4] p-4">
                <dt className="text-xs font-extrabold uppercase text-[#e9321b]">{label}</dt>
                <dd className="mt-2 font-extrabold">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="gallery" className="mx-auto w-[min(1120px,calc(100%-32px))] py-20">
        <div className="mb-9 max-w-3xl">
          <p className="text-sm font-extrabold uppercase text-[#ffcf2e]">Inside the flame</p>
          <h2 className="mt-3 text-[clamp(2rem,5vw,3.5rem)] font-extrabold uppercase leading-[1]">
            Cheese pulls, neon nights, and tables full of fries.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {demo.gallery.map((image, index) => (
            <div
              key={image}
              className="relative aspect-square border-4 border-[#15100c] bg-[linear-gradient(135deg,#ffcf2e,#e9321b)] bg-cover bg-center shadow-[8px_8px_0_#15100c]"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-16">
                <h3 className="font-extrabold uppercase text-[#fff7e4]">Burger Scene 0{index + 1}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="reservation" className="bg-[#ffcf2e] py-20 text-[#15100c]">
        <div className="mx-auto grid w-[min(1120px,calc(100%-32px))] gap-7 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="border-4 border-[#15100c] bg-[#fff7e4] p-8 shadow-[8px_8px_0_#15100c]">
            <p className="text-sm font-extrabold uppercase text-[#e9321b]">Contact</p>
            <h2 className="mt-3 text-[clamp(2rem,5vw,3.5rem)] font-extrabold uppercase leading-[1]">
              Demo order form for calls, combos, and catering requests.
            </h2>
            <p className="mt-4 font-sans font-bold leading-7">
              This is still a front-end mock, but the layout matches what a fast casual restaurant would expect.
            </p>
          </div>
          <form className="grid gap-4 border-4 border-[#15100c] bg-[#fff7e4] p-6 shadow-[8px_8px_0_#15100c] sm:grid-cols-2">
            {["Name", "Phone", "Date", "Time"].map((label) => (
              <label key={label} className="grid gap-2 text-sm font-extrabold uppercase text-[#e9321b]">
                {label}
                <input className="border-[3px] border-[#15100c] bg-[#fff7e4] px-4 py-3 text-[#15100c] outline-none" placeholder={label} />
              </label>
            ))}
            <label className="grid gap-2 text-sm font-extrabold uppercase text-[#e9321b] sm:col-span-2">
              Notes
              <textarea className="min-h-28 resize-none border-[3px] border-[#15100c] bg-[#fff7e4] px-4 py-3 text-[#15100c] outline-none" placeholder="Message" />
            </label>
            <button type="button" className="border-[3px] border-[#15100c] bg-[#e9321b] px-5 py-4 font-extrabold uppercase text-[#fff7e4] shadow-[6px_6px_0_#15100c] sm:col-span-2">
              Submit Demo Request
            </button>
          </form>
        </div>
      </section>

      <footer id="location" className="border-t-[5px] border-[#15100c] bg-[#ffcf2e] py-12 text-[#15100c]">
        <div className="mx-auto grid w-[min(1120px,calc(100%-32px))] gap-7 md:grid-cols-3">
          <div>
            <h2 className="text-3xl font-extrabold uppercase">{demo.name}</h2>
            <p className="mt-3 font-sans font-bold">Preview website. Not for commercial use.</p>
          </div>
          <div>
            <h3 className="font-extrabold uppercase text-[#e9321b]">Location</h3>
            <p className="mt-2 font-sans font-bold">{demo.city}</p>
          </div>
          <div>
            <h3 className="font-extrabold uppercase text-[#e9321b]">Hours</h3>
            <p className="mt-2 font-sans font-bold">Mon - Sun: 11:00 AM - 11:00 PM</p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-4 right-4 z-50 max-w-[min(310px,calc(100%-28px))] border-[3px] border-[#15100c] bg-[#ffcf2e] px-4 py-2 text-xs font-extrabold uppercase text-[#15100c]">
        Preview by SYY Studio
      </div>
    </main>
  );
}

