'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  Activity,
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const pathname = usePathname();
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');

  // Get current locale from pathname
  const locale = pathname.split('/')[1] || 'mr';

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'Youtube' },
  ];

  const quickLinks = [
    { label: tNav('home'), href: `/${locale}` },
    { label: tNav('about'), href: `/${locale}/about` },
    { label: tNav('services'), href: `/${locale}/services` },
    { label: tNav('contact'), href: `/${locale}/contact` },
  ];

  return (
    <footer className="bg-gradient-to-br from-text-primary via-gray-900 to-text-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <motion.div
                className="bg-gradient-to-br from-primary to-secondary p-2 rounded-xl"
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <Activity className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <h3 className="text-lg font-bold">Suyash Health Care</h3>
                <p className="text-xs text-gray-400">
                  {locale === 'mr' ? 'आरोग्य सेवा केंद्र' : locale === 'hi' ? 'स्वास्थ्य देखभाल केंद्र' : 'Health Care Centre'}
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              {t('about.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">{t('quickLinks.title')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link
                  href={`/${locale}/privacy`}
                  className="text-sm text-gray-300 hover:text-white transition-colors inline-block"
                >
                  {t('quickLinks.privacy')}
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link
                  href={`/${locale}/terms`}
                  className="text-sm text-gray-300 hover:text-white transition-colors inline-block"
                >
                  {t('quickLinks.terms')}
                </Link>
              </motion.li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">{t('contact.title')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>
                  {locale === 'mr'
                    ? 'मुंबई, महाराष्ट्र, भारत'
                    : locale === 'hi'
                    ? 'मुंबई, महाराष्ट्र, भारत'
                    : 'Mumbai, Maharashtra, India'}
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="hover:text-white transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <a
                  href="mailto:info@suyashhealthcare.com"
                  className="hover:text-white transition-colors"
                >
                  info@suyashhealthcare.com
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <Clock className="w-5 h-5 text-secondary" />
              {t('hours.title')}
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex flex-col">
                <span className="font-medium text-white">
                  {locale === 'mr' ? 'सोमवार - शुक्रवार' : locale === 'hi' ? 'सोमवार - शुक्रवार' : 'Mon - Fri'}
                </span>
                <span>9:00 AM - 8:00 PM</span>
              </li>
              <li className="flex flex-col">
                <span className="font-medium text-white">
                  {locale === 'mr' ? 'शनिवार' : locale === 'hi' ? 'शनिवार' : 'Saturday'}
                </span>
                <span>9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex flex-col">
                <span className="font-medium text-white">
                  {locale === 'mr' ? 'रविवार' : locale === 'hi' ? 'रविवार' : 'Sunday'}
                </span>
                <span>10:00 AM - 4:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-sm text-gray-400 text-center md:text-right">
              {t('copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
