import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">Purse Manufacturer</h3>
            <p className="text-gray-400 mb-4">
              Experts in the world of purse and handbag manufacturing. From concept to production, we bring your vision to life.
            </p>
            <div className="space-y-2 text-gray-400">
              <p>
                <a href="tel:+18188555821" className="hover:text-rose-400 transition-colors">
                  (818) 855-5821
                </a>
              </p>
              <p>
                <a href="mailto:info@pursemanufacturer.com" className="hover:text-rose-400 transition-colors">
                  info@pursemanufacturer.com
                </a>
              </p>
              <p>17119 Lassen St<br />Northridge, CA 91325</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-rose-400">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-rose-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-rose-400 transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-rose-400 transition-colors">Services</Link></li>
              <li><Link href="/blog" className="hover:text-rose-400 transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-rose-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-rose-400">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Design & Development</li>
              <li>Prototyping</li>
              <li>Manufacturing</li>
              <li>Fulfillment Support</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Purse Manufacturer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
