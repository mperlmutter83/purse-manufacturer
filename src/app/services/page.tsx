import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Custom handbag manufacturing services: design, prototyping, production, and fulfillment support for your brand.',
};

export default function ServicesPage() {
  const services = [
    {
      title: 'Custom Design Solutions',
      description: 'Collaborate with our expert designers to create unique handbag styles that reflect your brand\'s identity.',
      icon: '✏️',
    },
    {
      title: 'Prototyping and Sampling',
      description: 'Experience our meticulous prototyping process to ensure your designs are perfectly realized before full production.',
      icon: '🎨',
    },
    {
      title: 'High-Quality Production',
      description: 'Benefit from our state-of-the-art manufacturing facilities that guarantee exceptional quality and timely delivery.',
      icon: '🏭',
    },
  ];

  const benefits = [
    { title: 'Unmatched Craftsmanship', description: 'Our skilled artisans bring decades of experience to every handbag, ensuring superior quality and durability.' },
    { title: 'Sustainable Practices', description: 'We prioritize eco-friendly materials and processes, aligning with modern sustainability standards.' },
    { title: 'Scalable Production', description: 'Whether you\'re a startup or an established brand, our scalable solutions cater to your specific production needs.' },
    { title: 'Comprehensive Support', description: 'From initial design to final delivery, our team provides dedicated support every step of the way.' },
  ];

  const faqs = [
    { question: 'What is the typical lead time for production?', answer: 'Our standard lead time for production ranges from 6 to 8 weeks, depending on the complexity of the design and the volume of the order.' },
    { question: 'Do you offer design services?', answer: 'Yes, we offer comprehensive design services to help you conceptualize and create unique handbag designs that align with your brand\'s vision.' },
    { question: 'What materials do you use in manufacturing?', answer: 'We use a variety of high-quality materials, including leather, vegan leather, and sustainable fabrics, to ensure durability and style in every handbag.' },
    { question: 'Can you handle large-scale production?', answer: 'Absolutely. We are equipped to handle both small and large-scale production runs, catering to startups and established brands alike.' },
    { question: 'How do you ensure quality control?', answer: 'Our quality control process includes multiple checkpoints throughout production to ensure every piece meets our high standards before it leaves our facility.' },
    { question: 'Do you offer prototyping services?', answer: 'Yes, we provide prototyping services to help you refine your designs and ensure they are production-ready before moving to full-scale manufacturing.' },
  ];

  return (
    <>
      <section className="relative bg-gradient-to-br from-rose-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-rose-600 font-semibold mb-4 tracking-wider uppercase">Crafting Excellence in Every Stitch</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Your Partner in Premium Handbag Manufacturing</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how we transform your handbag concepts into reality with precision and style.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">Our Handbag Manufacturing Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">Why Choose Us for Your Handbag Needs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-rose-600 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center">Your Questions Answered</h2>
          <p className="text-gray-600 text-center mb-12">We understand you may have questions about our services. Here are some of the most common inquiries we receive.</p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-gray-50 rounded-xl group">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  <svg className="w-5 h-5 text-rose-600 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-rose-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Start Your Handbag Journey Today</h2>
          <p className="text-xl text-rose-100 mb-8">
            Ready to bring your handbag vision to life? Contact us now to discuss your project and discover how we can make your ideas a reality.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-rose-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
