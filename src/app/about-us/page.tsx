import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'About Us | Purse Manufacturer',
  description:
    'Purse Manufacturer is committed to delivering exceptional quality and innovation in every handbag we produce. Learn our story.',
};

export default function AboutUs() {
  return (
    <>
      <PageHero
        title="Crafting Excellence in Every Stitch"
        subtext="Discover the art of purse manufacturing with our expert team, dedicated to transforming your vision into reality."
        ctaText="Explore Our Process"
        ctaHref="#story"
        bgImage="/images/about-hero.jpg"
      />

      {/* Elevate band */}
      <section className="bg-navy py-16 md:py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="eyebrow mb-3">Unleash Your Brand&apos;s Potential</p>
          <h3 className="text-white text-3xl md:text-4xl mb-5">
            Elevate Your Brand Today
          </h3>
          <p className="text-white/80 leading-relaxed mb-8">
            Partner with us to create stunning, high-quality purses that
            captivate your audience.
          </p>
          <Link href="/contact-us" className="btn-white">
            Get Started Now
          </Link>
        </div>
      </section>

      {/* Our Story */}
      <section id="story" className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl mb-8">Our Story and Commitment</h2>
          <p className="text-ink/80 leading-relaxed mb-6">
            Established with a passion for craftsmanship, Purse Manufacturer is
            committed to delivering exceptional quality and innovation in every
            handbag we produce. Our mission is to empower brands by providing
            them with the tools and expertise needed to succeed in the
            competitive fashion industry. We envision a world where every brand,
            regardless of size, can access top-tier manufacturing services. Our
            core values of integrity, creativity, and excellence drive us to
            exceed expectations and build lasting partnerships with our clients.
          </p>
          <p className="text-ink/80 leading-relaxed">
            With years of experience in the industry, we have honed our skills
            to offer a seamless production process from design to delivery. Our
            team is dedicated to maintaining the highest standards of quality
            and sustainability, ensuring that each purse not only meets but
            surpasses industry benchmarks. We believe in fostering innovation
            and continually adapting to the evolving needs of our clients,
            making us a trusted partner in their growth journey.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 md:py-24 text-center"
        style={{ background: 'linear-gradient(180deg, #0e0c19 0%, #000b19 100%)' }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-white text-3xl md:text-4xl mb-6">
            Start Your Project with Us Today
          </h2>
          <p className="text-white/80 leading-relaxed mb-8">
            Ready to bring your handbag vision to life? Partner with Purse
            Manufacturer, where expertise meets innovation. Whether you&apos;re
            a startup or an established brand, our team is here to help you
            design, prototype, and produce high-quality purses that stand out.
            Contact us now to start your journey in the world of purse
            manufacturing.
          </p>
          <Link href="/contact-us" className="btn-white">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
