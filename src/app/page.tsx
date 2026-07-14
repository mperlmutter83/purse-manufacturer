import Link from 'next/link';

export default function Home() {
  const services = [
    {
      title: 'Design & Development',
      description: 'From concept creation to material sourcing, we provide detailed tech packs to bring your ideas to life.',
      icon: '✏️',
    },
    {
      title: 'Prototyping',
      description: 'We produce samples and refine designs to ensure your product meets the highest standards.',
      icon: '🎨',
    },
    {
      title: 'Manufacturing',
      description: 'Our facilities handle both small and large batch production with rigorous quality control.',
      icon: '🏭',
    },
    {
      title: 'Fulfillment Support',
      description: 'We offer packaging and shipping coordination to streamline your product\'s journey to market.',
      icon: '📦',
    },
  ];

  const process = [
    { step: 1, title: 'Submit Your Idea', description: 'Share your vision and requirements with us to kickstart the creation of your unique handbag.' },
    { step: 2, title: 'Design & Prototype', description: 'Our team develops detailed designs and prototypes, refining them to meet your exact specifications.' },
    { step: 3, title: 'Production', description: 'We handle the manufacturing process, ensuring each purse is crafted to perfection with quality control at every stage.' },
  ];

  const benefits = [
    { title: 'Reliable Production', description: 'We ensure consistent quality and timely delivery, making us a dependable partner for your brand.' },
    { title: 'Scalable Manufacturing', description: 'Our facilities are equipped to handle both small and large batch productions, adapting to your growth needs.' },
    { title: 'High-Quality Craftsmanship', description: 'Our skilled artisans and advanced techniques guarantee superior craftsmanship in every purse we produce.' },
    { title: 'Transparent Process', description: 'We maintain open communication and transparency throughout the production process, ensuring you are informed every step of the way.' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-50 to-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-rose-600 font-semibold mb-4 tracking-wider uppercase">Crafting Your Vision into Reality</p>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Custom Purse Manufacturing<br />
            <span className="text-rose-600">From Concept to Production</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We specialize in transforming your handbag concepts into high-quality products, ready for market success.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-rose-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-rose-700 transition-colors text-lg"
          >
            Get a Quote
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">End-to-End Purse Manufacturing</h2>
            <p className="text-gray-600 text-lg mb-6">
              Purse Manufacturer offers a comprehensive suite of services for brands, entrepreneurs, and retailers. We guide you from the initial idea through to the final product, ensuring quality and efficiency at every stage.
            </p>
            <p className="text-gray-600 text-lg">
              Our team is dedicated to helping you create handbags that stand out in the market. With expertise in design, prototyping, and production, we are your trusted partner in bringing your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Comprehensive Services</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Seamless Process</h2>
            <p className="text-gray-600 text-lg">Discover how we turn your concepts into exquisite handbags with our streamlined process.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {process.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-rose-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 text-lg">Discover the advantages of partnering with Purse Manufacturer for your handbag production needs.</p>
          </div>

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

      {/* CTA Section */}
      <section className="py-20 bg-rose-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Transform Your Vision?</h2>
          <p className="text-xl text-rose-100 mb-8">
            Take the first step towards creating your unique handbag line with Purse Manufacturer.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-rose-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </>
  );
}
