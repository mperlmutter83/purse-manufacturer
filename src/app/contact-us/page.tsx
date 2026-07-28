import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'Contact Us | Purse Manufacturer',
  description:
    'Contact Purse Manufacturer to discuss your handbag production project. Call (818) 855-5821 or send us a message today.',
};

const contactCards = [
  {
    label: 'Phone',
    value: '(818) 855-5821',
    href: 'tel:+18188555821',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#22577a" strokeWidth="2">
        <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 2 .7 2.8a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.3-1.2a2 2 0 012.1-.5c.9.3 1.9.6 2.8.7a2 2 0 011.7 2z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'info@pursemanufacturer.com',
    href: 'mailto:info@pursemanufacturer.com',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#22577a" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 7l-10 6L2 7" />
      </svg>
    ),
  },
  {
    label: 'Address',
    value: '17119 Lassen St, Northridge, CA 91325',
    href: 'https://maps.google.com/?q=17119+Lassen+St+Northridge+CA+91325',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#22577a" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: 'How can I contact Purse Manufacturer?',
    answer:
      'You can reach us via our contact form on the website or email us directly at info@pursemanufacturer.com.',
  },
  {
    question: 'What services do you offer?',
    answer:
      'We provide design, prototyping, and full-scale production services for handbags and purses.',
  },
  {
    question: 'Do you work with new brands?',
    answer:
      'Yes, we collaborate with both startups and established brands to bring their designs to life.',
  },
  {
    question: 'What is your production lead time?',
    answer:
      'Our typical lead time ranges from 4 to 8 weeks, depending on the complexity of the project.',
  },
  {
    question: 'Can I request a consultation?',
    answer:
      'Absolutely! Please fill out our contact form to schedule a consultation with our team.',
  },
];

export default function ContactUs() {
  return (
    <>
      {/* Hero — solid dark (matches the original contact page) */}
      <section className="bg-dark py-24 md:py-36 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="eyebrow mb-4">Connect with Purse Manufacturer</p>
          <h1 className="text-white text-4xl md:text-6xl leading-tight mb-6 italic">
            Your Partner in High-Quality Handbag Production
          </h1>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Discover how our expertise in purse and handbag manufacturing can
            elevate your brand. From design to production, we ensure quality and
            efficiency every step of the way.
          </p>
          <Link href="#contact" className="btn-white">
            Learn More
          </Link>
        </div>
      </section>

      {/* Get in Touch — image + info, then form */}
      <section id="contact" className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <Image
            src="/images/contact-content.jpg"
            alt="Elegant handbag display"
            width={800}
            height={1080}
            className="rounded-md w-full h-auto"
          />
          <div>
            <h1 className="text-3xl md:text-4xl mb-10">Get in Touch with Us</h1>
            <div className="space-y-6">
              {contactCards.map((card) => (
                <a key={card.label} href={card.href} className="flex items-center gap-5 group">
                  <span className="w-14 h-14 rounded-full bg-mint/20 flex items-center justify-center shrink-0">
                    {card.icon}
                  </span>
                  <span>
                    <h4 className="text-lg group-hover:text-teal transition-colors">
                      {card.label}
                    </h4>
                    <span className="text-ink/70 text-sm">{card.value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-xl mx-auto px-4">
          <ContactForm />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-4">
            Common Inquiries
          </h2>
          <p className="text-ink/70 text-center mb-12">
            Explore answers to frequent questions about our services and how to
            get in touch with us.
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
          <h3 className="text-white text-2xl md:text-3xl mb-6">
            Get Started Today
          </h3>
          <Link href="#contact" className="btn-white mb-10 inline-block">
            Contact Us
          </Link>
          <h2 className="text-white text-3xl md:text-4xl mb-6">
            Start Your Project with Us
          </h2>
          <p className="text-white/80 leading-relaxed mb-8">
            Ready to bring your handbag designs to life? Contact us today to
            discuss your project and see how we can help you achieve your vision
            with our expert manufacturing services.
          </p>
          <Link href="#contact" className="btn-white">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
