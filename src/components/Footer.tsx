import { service } from "@/src/data/service";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0c0b] py-10">
      <div className="section-shell flex flex-col gap-5 text-sm text-[#cfc3b2] md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold text-[#fff7e8]">{service.name}</p>
          <p className="mt-1">Modern restaurant websites for European restaurants.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a href={`mailto:${service.email}`}>{service.email}</a>
          <span>Instagram</span>
          <span>LinkedIn</span>
        </div>
        <p>Copyright 2026 {service.name}</p>
      </div>
    </footer>
  );
}
