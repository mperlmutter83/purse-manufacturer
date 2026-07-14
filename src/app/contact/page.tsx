import { Metadata } from 'next';
import LeadForm from '@/components/LeadForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Purse Manufacturer. Call (818) 855-5821 or visit us at 17119 Lassen St, Northridge, CA 91325.',
};

export default function ContactPage() {
  const faqs = [
    { question: 'How can I contact Purse Manufacturer?', answer: 'You can reach us via our contact form on the website or email us directly at info@pursemanufacturer.com.' },
    { question: 'What services do you offer?', answer: 'We provide design, prototyping, and full-scale production services for handbags and purses.' },
    { question: 'Do you work with new brands?', answer: 'Yes, we collaborate with both startups and established brands to bring their designs to life.' },
    { question: 'What is your production lead time?', answer: 'Our typical lead time ranges from 4 to 8 weeks, depending on the complexity of the project.' },
    { question: 'Can I request a consultation?', answer: 'Absolutely! Please fill out our contact form to schedule a consultation with our team.' },
  ];

  return (
    <>
      <section className="relative bg-gradient-to-br from-rose-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-rose-600 font-semibold mb-4 tracking-wider uppercase">Connect with Purse Manufacturer</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Your Partner in High-Quality Handbag Production</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how our expertise in purse and handbag manufacturing can elevate your brand.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">Get in Touch with Us</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-xl p-8">
                <div className="text-3xl mb-4">📞</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                <a href="tel:+18188555821" className="text-rose-600 text-lg hover:text-rose-700 transition-colors">(818) 855-5821</a>
              </div>

              <div className="bg-gray-50 rounded-xl p-8">
                <div className="text-3xl mb-4">✉️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                <a href="mailto:info@pursemanufacturer.com" className="text-rose-600 text-lg hover:text-rose-700 transition-colors">info@pursemanufacturer.com</a>
              </div>

              <div className="bg-gray-50 rounded-xl p-8">
                <div className="text-3xl mb-4">📍</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600 text-lg">17119 Lassen St<br />Northridge, CA 91325</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center">Common Inquiries</h2>
          <p className="text-gray-600 text-center mb-12">Explore answers to frequent questions about our services and how to get in touch with us.</p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-white rounded-xl shadow-sm group">
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
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Start Your Project with Us</h2>
          <p className="text-xl text-rose-100 mb-8">
            Ready to bring your handbag designs to life? Contact us today to discuss your project and see how we can help you achieve your vision.
          </p>
          <a
            href="tel:+18188555821"
            className="inline-block bg-white text-rose-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
          >
            Call (818) 855-5821
          </a>
        </div>
      </section>
    </>
  );
}
