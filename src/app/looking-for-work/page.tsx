import type { Metadata } from 'next';
import WorkForm from '@/components/WorkForm';

const PHONE_DISPLAY = '(818) 855-5821';
const PHONE_HREF = 'tel:+18188555821';

export const metadata: Metadata = {
  title: 'Looking for Work | Purse Manufacturers',
  description:
    "Looking for handbag manufacturing work in Los Angeles? Local handbag and purse businesses are hiring. Fill out the quick form and we'll connect you — or call (818) 855-5821.",
  alternates: { canonical: '/looking-for-work' },
};

const STEPS = [
  {
    n: '1',
    title: 'Tell us about yourself',
    body: 'A quick 60-second form — no resume, no cover letter, no endless applications.',
  },
  {
    n: '2',
    title: 'We connect you',
    body: 'We share your details with local handbag and purse manufacturers that are actively hiring.',
  },
  {
    n: '3',
    title: 'You hear back directly',
    body: 'Interested businesses contact you by phone, usually within a few days.',
  },
];

const WORK_TYPES = [
  'Sewing Machine Operators',
  'Pattern Makers',
  'Leather/PU Cutters',
  'Sample Makers',
  'Production & QC',
  'Hardware & Finishing',
];

export default function LookingForWorkPage() {
  return (
    <>
      <section className="bg-navy py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="eyebrow mb-4">Looking for Work?</p>
          <h1 className="text-white text-4xl md:text-6xl leading-tight mb-6">
            Handbag Manufacturing Work in Los Angeles
          </h1>
          <p className="text-white/85 text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Local handbag and purse manufacturers are growing and looking for dependable people.
            Tell us about yourself and we&apos;ll connect you with businesses that are hiring —
            free, fast, and no obligation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#work-form" className="btn-teal">
              Fill Out the Quick Form
            </a>
            <a href={PHONE_HREF} className="btn-white">
              Or Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-navy text-center">How It Works</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="rounded-2xl bg-gold/5 p-8 text-center">
              <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-gold text-lg font-bold text-white">
                {s.n}
              </span>
              <h3 className="mt-4 text-xl font-bold text-navy">{s.title}</h3>
              <p className="mt-2 text-ink/70">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-gray-200 bg-white/60">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-navy text-center">The Kind of Work Available</h2>
          <p className="mt-4 text-center text-ink/70 max-w-2xl mx-auto">
            Handbag and purse manufacturers across Los Angeles hire for a range of production
            roles, including:
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {WORK_TYPES.map((w) => (
              <li
                key={w}
                className="rounded-xl border border-gray-200 bg-white px-5 py-4 text-ink font-medium shadow-sm"
              >
                {w}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="work-form" className="max-w-6xl mx-auto px-4 py-16">
        <div className="mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-navy text-center">Apply in 60 Seconds</h2>
          <p className="mt-2 text-center text-ink/70">
            Free and confidential — we&apos;ll only share your details with businesses that are
            hiring.
          </p>
          <div className="mt-8">
            <WorkForm />
          </div>
        </div>
        <p className="mt-8 text-center text-ink/70">
          Own a handbag manufacturing business and need reliable people?{' '}
          <a href={PHONE_HREF} className="font-bold text-gold underline">
            Call {PHONE_DISPLAY}
          </a>
        </p>
      </section>
    </>
  );
}
