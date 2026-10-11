import MotionHome from '@/components/motion/MotionHome';

export const metadata = {
  alternates: {
    canonical: "https://www.pursemanufacturer.com",
  },
};

// Homepage: the scroll-driven "take it apart / build it back" purse film.
// Copy and colors live in src/components/motion/config.ts.
export default function Home() {
  return <MotionHome />;
}
