import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import NewsletterForm from '@/components/NewsletterForm';
import { getMergedPosts } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Blog | Purse Manufacturers',
  description:
    'Insights on handbag design and manufacturing from Purse Manufacturers — trends, tips, and industry expertise.',
};

export default async function Blog() {
  const posts = await getMergedPosts();

  return (
    <>
      <PageHero
        eyebrow="Discover the Craft of Exceptional Handbags"
        title="Welcome to Purse Manufacturers"
        subtext="Explore the artistry and innovation behind our high-quality purse and handbag creations. Dive into the world of bespoke design and manufacturing excellence."
        ctaText="Learn More"
        ctaHref="#posts"
        bgImage="/images/blog-hero.jpg"
      />

      {/* Posts */}
      <section id="posts" className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl mb-14">
            Latest Insights in Handbag Design
          </h2>
          <div className="space-y-14">
            {posts.map((post) => (
              <article key={post.slug}>
                {post.image && (
                  <Link href={`/${post.slug}`}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={1080}
                      height={675}
                      className="rounded-md w-full h-64 md:h-80 object-cover mb-6"
                    />
                  </Link>
                )}
                <h2 className="text-2xl md:text-3xl mb-2">
                  <Link href={`/${post.slug}`} className="hover:text-teal transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-sm text-ink/60 mb-4 font-sans">
                  {post.date} | {post.category}
                </p>
                {post.excerpt && (
                  <p className="text-ink/80 leading-relaxed mb-4">{post.excerpt}</p>
                )}
                <Link
                  href={`/${post.slug}`}
                  className="text-teal text-sm font-sans font-semibold hover:underline"
                >
                  read more
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter 1 */}
      <section className="bg-navy py-16">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h3 className="text-white text-2xl md:text-3xl mb-8">
            Stay Updated with Our Newsletter
          </h3>
          <NewsletterForm variant="full" dark buttonText="Subscribe Now" />
        </div>
      </section>

      {/* Newsletter 2 */}
      <section className="bg-white py-20">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">
            Stay Updated with Our Latest News
          </h2>
          <p className="text-ink/70 leading-relaxed mb-8">
            Join our community of fashion enthusiasts! Subscribe to our
            newsletter for exclusive insights, updates on new collections, and
            special offers directly to your inbox.
          </p>
          <NewsletterForm variant="compact" />
        </div>
      </section>
    </>
  );
}
