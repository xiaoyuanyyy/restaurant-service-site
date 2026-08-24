"use client";

import { FormEvent, useState } from "react";
import { service } from "@/src/data/service";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-[#0f1110] py-24">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-4 text-4xl font-semibold text-[#fff7e8] md:text-5xl">
            Ready to show a restaurant what its website could become?
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#cfc3b2]">
            This first version uses a front-end only form. Later it can connect to email, Airtable, or a CRM when the business process is proven.
          </p>
          <a className="mt-8 inline-block text-[#f5d28a]" href={`mailto:${service.email}`}>
            {service.email}
          </a>
        </div>

        <form onSubmit={handleSubmit} className="rounded-sm border border-white/10 bg-white/[0.04] p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm text-[#d9cfbf]">Name</span>
              <input required className="mt-2 w-full rounded-sm border border-white/10 bg-[#12100c] px-4 py-3 text-[#fff7e8] outline-none focus:border-[#c6a15b]" />
            </label>
            <label className="block">
              <span className="text-sm text-[#d9cfbf]">Restaurant Name</span>
              <input required className="mt-2 w-full rounded-sm border border-white/10 bg-[#12100c] px-4 py-3 text-[#fff7e8] outline-none focus:border-[#c6a15b]" />
            </label>
            <label className="block">
              <span className="text-sm text-[#d9cfbf]">Email</span>
              <input type="email" required className="mt-2 w-full rounded-sm border border-white/10 bg-[#12100c] px-4 py-3 text-[#fff7e8] outline-none focus:border-[#c6a15b]" />
            </label>
            <label className="block">
              <span className="text-sm text-[#d9cfbf]">Country</span>
              <input required className="mt-2 w-full rounded-sm border border-white/10 bg-[#12100c] px-4 py-3 text-[#fff7e8] outline-none focus:border-[#c6a15b]" />
            </label>
          </div>
          <label className="mt-4 block">
            <span className="text-sm text-[#d9cfbf]">Message</span>
            <textarea rows={5} required className="mt-2 w-full resize-none rounded-sm border border-white/10 bg-[#12100c] px-4 py-3 text-[#fff7e8] outline-none focus:border-[#c6a15b]" />
          </label>
          <button className="mt-5 w-full rounded-sm bg-[#c6a15b] px-5 py-3 font-semibold text-[#12100c] transition hover:bg-[#f1d48e]">
            Send Message
          </button>
          {submitted ? (
            <p className="mt-4 rounded-sm border border-[#58603f] bg-[#58603f]/20 px-4 py-3 text-[#edf5d6]">
              Message submitted successfully. This is a front-end demo for now.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
