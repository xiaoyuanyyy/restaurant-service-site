import { service } from "@/src/data/service";

const links = [
  { label: "Services", href: "#solutions" },
  { label: "Demos", href: "#demos" },
  { label: "Pricing", href: "#pricing" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0f1110]/88 backdrop-blur-xl">
      <nav className="section-shell flex min-h-20 items-center justify-between gap-6">
        <a href="#home" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-sm border border-[#c6a15b]/60 bg-[#c6a15b]/10 text-sm font-bold text-[#f7dca6]">
            SYY
          </span>
          <span className="text-lg font-semibold text-[#fff7e8]">{service.name}</span>
        </a>

        <div className="hidden items-center gap-7 text-sm text-[#d9cfbf] md:flex">
          {links.map((link) => (
            <a key={link.href} className="transition hover:text-[#f5d28a]" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#pricing"
          className="rounded-sm border border-[#c6a15b] bg-[#c6a15b] px-4 py-2 text-sm font-semibold text-[#12100c] transition hover:bg-[#f1d48e]"
        >
          View Pricing
        </a>
      </nav>
    </header>
  );
}
