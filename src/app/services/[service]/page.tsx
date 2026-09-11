import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import { services, getServiceBySlug } from '@/lib/services-data';

export function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.title} | Purse Manufacturers`,
    description: service.metaDescription,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service: slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== slug).slice(0, 4);

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={service.title}
        subtext={service.heroSubtext}
        ctaText="Get a Quote"
        ctaHref="/contact-us"
        bgImage="/images/services-hero.jpg"
        compact
      />

      {/* Intro */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          {service.intro.map((paragraph, i) => (
            <p
              key={i}
              className="text-ink/80 leading-relaxed mb-6 last:mb-0"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl mb-10">What&apos;s Included</h2>
          <ul className="space-y-4">
            {service.includes.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-teal font-sans font-bold shrink-0">
                  &#10003;
                </span>
                <span className="text-ink/80 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Closing */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            {service.closingHeading}
          </h2>
          <p className="text-ink/80 leading-relaxed mb-10">
            {service.closingText}
          </p>
          <Link href="/contact-us" className="btn-teal">
            Discuss Your Project
          </Link>
        </div>
      </section>

      {/* Related services */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl mb-10 text-center">
            Explore More Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {related.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="bg-white rounded-md shadow-[0px_24px_72px_-12px_rgba(0,0,0,0.12)] p-7 hover:shadow-[0px_24px_72px_-12px_rgba(0,0,0,0.25)] transition-shadow"
              >
                <h4 className="text-lg mb-3">{s.title}</h4>
                <p className="text-ink/70 text-sm leading-relaxed line-clamp-3">
                  {s.short}
                </p>
                <span className="inline-block mt-4 text-teal font-sans font-semibold text-sm">
                  Learn More &rarr;
                </span>
              </Link>
            ))}
          </div>
          <p className="text-center mt-10">
            <Link
              href="/services"
              className="text-teal font-sans font-semibold text-sm hover:underline"
            >
              &larr; View All Services
            </Link>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 text-center"
        style={{
          background: 'linear-gradient(180deg, #0e0c19 0%, #000b19 100%)',
        }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-white text-2xl md:text-3xl mb-6">
            Ready to Start Your Handbag Project?
          </h2>
          <Link href="/contact-us" className="btn-white">
            Get a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
