import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import FAQ from '@/components/FAQ';

const services = [
  {
    title: 'Design & Development',
    description:
      'From concept creation to material sourcing, we provide detailed tech packs to bring your ideas to life.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#57cc99" strokeWidth="1.5">
        <rect x="5" y="4" width="14" height="17" rx="2" />
        <path d="M9 4a2 2 0 014 0" />
        <path d="M9 10h6M9 14h6M9 18h4" />
      </svg>
    ),
  },
  {
    title: 'Prototyping',
    description:
      'We produce samples and refine designs to ensure your product meets the highest standards.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#57cc99" strokeWidth="1.5">
        <path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z" />
        <path d="M12 11l8-4.5M12 11v9M12 11L4 6.5" />
      </svg>
    ),
  },
  {
    title: 'Manufacturing',
    description:
      'Our facilities handle both small and large batch production with rigorous quality control.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#57cc99" strokeWidth="1.5">
        <path d="M2 20h20M4 20V10l5 3V10l5 3V6l6-2v16" />
      </svg>
    ),
  },
  {
    title: 'Fulfillment Support',
    description:
      'We offer packaging and shipping coordination to streamline your product\u2019s journey to market.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#57cc99" strokeWidth="1.5">
        <path d="M1 8h13v9H1zM14 11h4l3 3v3h-7z" />
        <circle cx="6" cy="19" r="2" />
        <circle cx="17" cy="19" r="2" />
      </svg>
    ),
  },
];

const processSteps = [
  {
    number: '1',
    title: 'Submit Your Idea',
    description:
      'Share your vision and requirements with us to kickstart the creation of your unique handbag.',
  },
  {
    number: '2',
    title: 'Design & Prototype',
    description:
      'Our team develops detailed designs and prototypes, refining them to meet your exact specifications.',
  },
  {
    number: '3',
    title: 'Production',
    description:
      'We handle the manufacturing process, ensuring each purse is crafted to perfection with quality control at every stage.',
  },
];

const whyChooseUs = [
  {
    question: 'Reliable Production',
    answer:
      'We ensure consistent quality and timely delivery, making us a dependable partner for your brand.',
  },
  {
    question: 'Scalable Manufacturing',
    answer:
      'Our facilities are equipped to handle both small and large batch productions, adapting to your growth needs.',
  },
  {
    question: 'High-Quality Craftsmanship',
    answer:
      'Our skilled artisans and advanced techniques guarantee superior craftsmanship in every purse we produce.',
  },
  {
    question: 'Transparent Process',
    answer:
      'We maintain open communication and transparency throughout the production process, ensuring you are informed every step of the way.',
  },
];

export default function Home() {
  return (
    <>
      <PageHero
        eyebrow="Crafting Your Vision into Reality"
        title="Custom Purse Manufacturing — From Concept to Production"
        subtext="We specialize in transforming your handbag concepts into high-quality products, ready for market success."
        ctaText="Get a Quote"
        ctaHref="/contact-us"
        bgImage="/images/hero.jpg"
      />

      {/* End-to-End intro — bordered block */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="border border-navy/80 rounded-sm p-8 md:p-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-5">
                End-to-End Purse Manufacturing
              </h2>
              <p className="text-ink/80 leading-relaxed">
                Purse Manufacturer offers a comprehensive suite of services for
                brands, entrepreneurs, and retailers. We guide you from the
                initial idea through to the final product, ensuring quality and
                efficiency at every stage.
              </p>
            </div>
            <p className="text-ink/80 leading-relaxed">
              Our team is dedicated to helping you create handbags that stand
              out in the market. With expertise in design, prototyping, and
              production, we are your trusted partner in bringing your vision to
              life.
            </p>
          </div>
        </div>
      </section>

      {/* Comprehensive Services — 4 blurbs */}
      <section className="pb-20 md:pb-28 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-14">
            Our Comprehensive Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            {services.map((service) => (
              <div key={service.title}>
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h4 className="text-xl mb-3">{service.title}</h4>
                <p className="text-ink/70 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Concept split */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Image
            src="/images/concept.jpg"
            alt="Handbag design and manufacturing process at Purse Manufacturer"
            width={1080}
            height={720}
            className="rounded-md w-full h-auto"
          />
          <div>
            <h2 className="text-3xl md:text-4xl mb-6">
              Custom Purse Manufacturing — From Concept to Production
            </h2>
            <p className="text-ink/80 leading-relaxed mb-8">
              We specialize in transforming your handbag ideas into reality. Our
              comprehensive services cover every aspect of purse manufacturing,
              ensuring that your brand&apos;s vision is brought to life with
              precision and quality. From design to delivery, we are your
              trusted partner in creating high-quality handbags that stand out
              in the market.
            </p>
            <Link href="/contact-us" className="btn-teal">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Seamless Process — black section */}
      <section className="bg-black py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-white text-3xl md:text-4xl text-center mb-4">
            Our Seamless Process
          </h2>
          <p className="text-white/70 text-center mb-14 max-w-2xl mx-auto">
            Discover how we turn your concepts into exquisite handbags with our
            streamlined four-step process.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {processSteps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-14 h-14 rounded-full bg-white text-navy font-sans font-bold text-xl flex items-center justify-center mx-auto mb-5">
                  {step.number}
                </div>
                <h5 className="text-white text-xl mb-3">{step.title}</h5>
                <p className="text-white/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us — image + accordion */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Image
            src="/images/why-us.jpg"
            alt="Craftsman producing high-quality purses"
            width={1080}
            height={540}
            className="rounded-md w-full h-auto"
          />
          <div>
            <h2 className="text-3xl md:text-4xl mb-4">Why Choose Us</h2>
            <p className="text-ink/70 mb-8">
              Discover the advantages of partnering with Purse Manufacturer for
              your handbag production needs.
            </p>
            <FAQ items={whyChooseUs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 md:py-28 text-center"
        style={{ background: 'linear-gradient(180deg, #0e0c19 0%, #000b19 100%)' }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-white text-3xl md:text-5xl mb-6">
            Ready to Transform Your Vision?
          </h2>
          <p className="text-white/80 leading-relaxed mb-8">
            Take the first step towards creating your unique handbag line with
            Purse Manufacturer. Whether you&apos;re ready to launch your first
            product or expand your existing collection, we&apos;re here to help
            you succeed.
          </p>
          <Link href="/contact-us" className="btn-white">
            Get Started Today
          </Link>
        </div>
      </section>
    </>
  );
}
