import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'Services | Purse Manufacturer',
  description:
    'Custom handbag design, prototyping, and high-quality production services for brands, startups, and retailers.',
};

const services = [
  {
    title: 'Custom Design Solutions',
    description:
      'Collaborate with our expert designers to create unique handbag styles that reflect your brand\u2019s identity.',
  },
  {
    title: 'Prototyping and Sampling',
    description:
      'Experience our meticulous prototyping process to ensure your designs are perfectly realized before full production.',
  },
  {
    title: 'High-Quality Production',
    description:
      'Benefit from our state-of-the-art manufacturing facilities that guarantee exceptional quality and timely delivery.',
  },
];

const features = [
  {
    title: 'Unmatched Craftsmanship',
    description:
      'Our skilled artisans bring decades of experience to every handbag, ensuring superior quality and durability.',
  },
  {
    title: 'Sustainable Practices',
    description:
      'We prioritize eco-friendly materials and processes, aligning with modern sustainability standards.',
  },
  {
    title: 'Scalable Production',
    description:
      'Whether you\u2019re a startup or an established brand, our scalable solutions cater to your specific production needs.',
  },
  {
    title: 'Comprehensive Support',
    description:
      'From initial design to final delivery, our team provides dedicated support every step of the way.',
  },
];

const faqs = [
  {
    question: 'What is the typical lead time for production?',
    answer:
      'Our standard lead time for production ranges from 6 to 8 weeks, depending on the complexity of the design and the volume of the order.',
  },
  {
    question: 'Do you offer design services?',
    answer:
      'Yes, we offer comprehensive design services to help you conceptualize and create unique handbag designs that align with your brand\u2019s vision.',
  },
  {
    question: 'What materials do you use in manufacturing?',
    answer:
      'We use a variety of high-quality materials, including leather, vegan leather, and sustainable fabrics, to ensure durability and style in every handbag.',
  },
  {
    question: 'Can you handle large-scale production?',
    answer:
      'Absolutely. We are equipped to handle both small and large-scale production runs, catering to startups and established brands alike.',
  },
  {
    question: 'How do you ensure quality control?',
    answer:
      'Our quality control process includes multiple checkpoints throughout production to ensure every piece meets our high standards before it leaves our facility.',
  },
  {
    question: 'Do you offer prototyping services?',
    answer:
      'Yes, we provide prototyping services to help you refine your designs and ensure they are production-ready before moving to full-scale manufacturing.',
  },
];

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Crafting Excellence in Every Stitch"
        title="Your Partner in Premium Handbag Manufacturing"
        subtext="Discover how we transform your handbag concepts into reality with precision and style."
        ctaText="Explore Our Services"
        ctaHref="#services"
        bgImage="/images/services-hero.jpg"
      />

      {/* Services split */}
      <section id="services" className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Image
            src="/images/services-content.jpg"
            alt="Handbag design process at Purse Manufacturer"
            width={800}
            height={1080}
            className="rounded-md w-full h-auto"
          />
          <div>
            <h2 className="text-3xl md:text-4xl mb-10">
              Our Handbag Manufacturing Services
            </h2>
            <div className="space-y-8">
              {services.map((service) => (
                <div key={service.title}>
                  <h4 className="text-xl mb-2">{service.title}</h4>
                  <p className="text-ink/70 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <h2 className="text-3xl md:text-4xl">
              Why Choose Us for Your Handbag Needs
            </h2>
            <Link href="/contact-us" className="btn-teal shrink-0">
              Learn More
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-md shadow-[0px_24px_72px_-12px_rgba(0,0,0,0.12)] p-7"
              >
                <h4 className="text-lg mb-3">{feature.title}</h4>
                <p className="text-ink/70 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-4">
            Your Questions Answered
          </h2>
          <p className="text-ink/70 text-center mb-12">
            We understand you may have questions about our services. Here are
            some of the most common inquiries we receive, along with detailed
            answers to help you understand our process better.
          </p>
          <FAQ items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 md:py-24 text-center"
        style={{ background: 'linear-gradient(180deg, #0e0c19 0%, #000b19 100%)' }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-white text-3xl md:text-4xl mb-6">
            Start Your Handbag Journey Today
          </h2>
          <p className="text-white/80 leading-relaxed mb-8">
            Ready to bring your handbag vision to life? Contact us now to
            discuss your project and discover how we can make your ideas a
            reality. Whether you&apos;re launching a new line or enhancing an
            existing collection, our team at Purse Manufacturer is here to
            support you every step of the way. Let&apos;s create something
            extraordinary together.
          </p>
          <Link href="/contact-us" className="btn-white">
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
