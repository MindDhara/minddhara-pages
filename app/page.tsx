import Link from 'next/link';

export const metadata = {
  title: 'MindDhara - Home',
  description: 'Welcome to MindDhara',
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#FDFAEE] text-[#1A411D]">
      <h1 className="text-5xl font-bold mb-8">Welcome to MindDhara</h1>
      <div className="flex gap-4">
        <Link href="/about-us" className="bg-[#1A411D] text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-900 transition">
          Go to About Us Page
        </Link>
        <Link href="/contact-us" className="bg-[#1A411D] text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-900 transition">
          Go to Contact Us Page
        </Link>
      </div>
      <Link href="/guru-library" className="bg-[#1A411D] text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-900 transition">
          Go to Guru Library Page
        </Link>
    </main>
  );
}