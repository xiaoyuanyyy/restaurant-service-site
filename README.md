# Restaurant Website Service

This is the phase 1 service website for a remote restaurant website business.
It is a front-end MVP for European restaurant owners and does not include a real backend, database, payment system, or booking integration.

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- React components
- Mock data in `src/data/service.ts`

## Start The Project

```bash
npm install
npm run dev
```

Then open:

```txt
http://localhost:3000
```

## Main Files

- `app/page.tsx`: homepage composition
- `app/globals.css`: global visual style
- `src/components`: homepage sections
- `src/data/service.ts`: service copy, demos, pricing, workflow, and FAQ data
- `src/data/demos.ts`: demo website cards, preview images, and demo links
- `src/types/index.ts`: shared TypeScript types

## What To Change Later

- Update service name and email in `src/data/service.ts`
- Update pricing plans in `src/data/service.ts`
- Replace demo card links and screenshot image URLs in `src/data/demos.ts`.
- The integrated demo pages live inside the main site at `/demos/fine-dining`, `/demos/italian-bistro`, `/demos/cafe-brunch`, and `/demos/burger-shop`.
- Connect the contact form in `src/components/ContactSection.tsx` to email, Airtable, or a CRM when ready
- Add real demo links after the phase 2 restaurant templates are built

## Later Real Reservation Integration

For client restaurant websites, the reservation section can later connect to:

- A restaurant's existing booking platform
- Email notifications
- Airtable
- Supabase
- Google Calendar

The first phase intentionally keeps forms as front-end-only demo interactions.
