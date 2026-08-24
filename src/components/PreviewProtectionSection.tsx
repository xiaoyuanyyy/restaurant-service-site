const protections = [
  "Preview links use my own preview domain or hosting URL.",
  "The preview is not connected to the restaurant's official domain.",
  "A visible watermark says Preview by My Studio.",
  "The footer states that the preview website is not for commercial use.",
  "Reservation forms stay in demo mode until final delivery.",
  "Source code and deployment access are not provided before final payment.",
];

export function PreviewProtectionSection() {
  return (
    <section className="bg-[#0f1110] py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow">Preview protection</p>
          <h2 className="mt-4 text-4xl font-semibold text-[#fff7e8] md:text-5xl">
            Clients can experience the website before launch, without receiving the final asset too early.
          </h2>
        </div>
        <div className="rounded-sm border border-[#c6a15b]/40 bg-[#c6a15b]/10 p-7">
          <div className="mb-6 inline-flex rounded-sm border border-[#c6a15b]/60 px-4 py-2 text-sm font-semibold text-[#f5d28a]">
            Preview by My Studio
          </div>
          <ul className="space-y-4">
            {protections.map((item) => (
              <li key={item} className="border-b border-white/10 pb-4 text-[#efe5d8] last:border-0 last:pb-0">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
