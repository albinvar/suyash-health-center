import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import HeroSection from '@/components/home/HeroSection';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'home' });

  return {
    title: t('hero.title'),
    description: t('hero.subtitle'),
  };
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />

      {/* Welcome Section */}
      <section className="py-20 bg-background-light">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-title">
              Welcome to Suyash Health Care Centre
            </h2>
            <p className="section-subtitle">
              Your trusted partner in healthcare, committed to providing exceptional medical services with compassion and expertise.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
