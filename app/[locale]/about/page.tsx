import { useTranslations } from 'next-intl';

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container-custom">
        <h1 className="section-title text-center">About Us</h1>
        <p className="section-subtitle text-center">
          Learn more about Suyash Health Care Centre
        </p>
        <div className="mt-12 card max-w-4xl mx-auto">
          <p className="text-text-secondary leading-relaxed">
            This page is under construction. Content coming soon...
          </p>
        </div>
      </div>
    </div>
  );
}
