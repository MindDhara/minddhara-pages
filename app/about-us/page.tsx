import AboutPage from '@/components/AboutPage';

export const metadata = {
  title: 'About Us - MindDhara',
  description: 'MindDhara began from recognising a cultural gap in how mental health is understood.',
};

export default function AboutUsRoute() {
  return (
    <main>
      <AboutPage />
    </main>
  );
}