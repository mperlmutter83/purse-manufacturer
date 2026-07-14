import { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog-data';

export const metadata: Metadata = {
  title: 'Blog',
  description: "Insights and guides on purse and handbag manufacturing, design, and building your brand.",
};

export default function BlogPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-rose-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-rose-600 font-semibold mb-4 tracking-wider uppercase">Discover the Craft of Exceptional Handbags</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Welcome to Purse Manufacturer</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Explore the artistry and innovation behind our high-quality purse and handbag creations.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Latest Insights in Handbag Design</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow group"
              >
                {post.image && (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6">
                  <p className="text-rose-600 text-sm mb-2">{post.date} • {post.category}</p>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-rose-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                  <span className="inline-block mt-4 text-rose-600 font-semibold">Read more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated with Our Newsletter</h2>
          <p className="text-gray-600 mb-8">Join our community of fashion enthusiasts! Subscribe for exclusive insights, updates on new collections, and special offers.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
            />
            <button className="bg-rose-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-rose-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
