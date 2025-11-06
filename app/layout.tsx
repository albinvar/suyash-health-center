import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Suyash Health Care Centre - Quality Healthcare for Your Family',
  description:
    'Suyash Health Care Centre provides top-quality medical services and healthcare solutions. Expert care for your family with modern equipment and experienced professionals.',
  keywords: 'healthcare, medical services, health centre, suyash health care',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
