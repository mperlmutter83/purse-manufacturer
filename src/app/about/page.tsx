import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Purse Manufacturer - our story, mission, and commitment to delivering exceptional quality handbags.',
};

export default function AboutPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-rose-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Crafting Excellence in Every Stitch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the art of purse manufacturing with our expert team, dedicated to transforming your vision into reality.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Our Story and Commitment</h2>
          <p className="text-gray-600 text-lg mb-6">
            Established with a passion for craftsmanship, Purse Manufacturer is committed to delivering exceptional quality and innovation in every handbag we produce. Our mission is to empower brands by providing them with the tools and expertise needed to succeed in the competitive fashion industry.
          </p>
          <p className="text-gray-600 text-lg mb-6">
            We envision a world where every brand, regardless of size, can access top-tier manufacturing services. Our core values of integrity, creativity, and excellence drive us to exceed expectations and build lasting partnerships with our clients.
          </p>
          <p className="text-gray-600 text-lg">
            With years of experience in the industry, we have honed our skills to offer a seamless production process from design to delivery. Our team is dedicated to maintaining the highest standards of quality and sustainability, ensuring that each purse not only meets but surpasses industry benchmarks.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">To empower brands with exceptional manufacturing services that bring their handbag visions to life.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm text-center">
              <div className="text-4xl mb-4">👁️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">A world where every brand can access top-tier manufacturing, regardless of size.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm text-center">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-600">Integrity, creativity, and excellence in everything we do.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-rose-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Start Your Project with Us Today</h2>
          <p className="text-xl text-rose-100 mb-8">
            Ready to bring your handbag vision to life? Partner with Purse Manufacturer, where expertise meets innovation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-rose-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
