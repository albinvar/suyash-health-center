'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe } from 'lucide-react';
import { locales, localeShortNames, type Locale } from '@/i18n';

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLocale, setCurrentLocale] = useState<Locale>('mr');
  const pathname = usePathname();
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Extract locale from pathname
    const pathLocale = pathname.split('/')[1] as Locale;
    if (locales.includes(pathLocale)) {
      setCurrentLocale(pathLocale);
    }
  }, [pathname]);

  useEffect(() => {
    // Close dropdown when clicking outside
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (locale: Locale) => {
    // Store in localStorage
    localStorage.setItem('preferredLocale', locale);

    // Get the current path without locale
    const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, '') || '/';

    // Navigate to new locale
    router.push(`/${locale}${pathWithoutLocale}`);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/90 backdrop-blur-sm border border-gray-200 hover:border-primary hover:shadow-md transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Globe className="w-5 h-5 text-primary" />
        <span className="font-semibold text-text-primary">
          {localeShortNames[currentLocale]}
        </span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50"
          >
            {locales.map((locale) => (
              <motion.button
                key={locale}
                onClick={() => handleLanguageChange(locale)}
                className={`w-full px-4 py-3 text-left hover:bg-primary/5 transition-colors ${
                  currentLocale === locale
                    ? 'bg-primary/10 text-primary font-semibold'
                    : 'text-text-primary'
                }`}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                {localeShortNames[locale]} - {locale === 'en' ? 'English' : locale === 'hi' ? 'हिंदी' : 'मराठी'}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
