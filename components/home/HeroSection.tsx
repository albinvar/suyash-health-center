'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowRight, Heart, Shield, Users } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function HeroSection() {
  const t = useTranslations('home.hero');
  const tCommon = useTranslations('common');
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'mr';

  const features = [
    {
      icon: Heart,
      title: locale === 'mr' ? 'काळजी' : locale === 'hi' ? 'देखभाल' : 'Compassionate Care',
      description: locale === 'mr' ? 'तुमच्या कुटुंबासाठी' : locale === 'hi' ? 'आपके परिवार के लिए' : 'For Your Family',
    },
    {
      icon: Shield,
      title: locale === 'mr' ? 'विश्वासार्ह' : locale === 'hi' ? 'भरोसेमंद' : 'Trusted',
      description: locale === 'mr' ? 'गुणवत्तापूर्ण सेवा' : locale === 'hi' ? 'गुणवत्ता सेवा' : 'Quality Service',
    },
    {
      icon: Users,
      title: locale === 'mr' ? 'अनुभवी' : locale === 'hi' ? 'अनुभवी' : 'Experienced',
      description: locale === 'mr' ? 'व्यावसायिक' : locale === 'hi' ? 'पेशेवर' : 'Professionals',
    },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background-light to-primary/5">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight">
                {t('title')}
              </h1>
              <p className="mt-6 text-xl text-text-secondary leading-relaxed">
                {t('subtitle')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Link href={`/${locale}/contact`}>
                <motion.button
                  className="btn-primary flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tCommon('getStarted')}
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>

              <Link href={`/${locale}/services`}>
                <motion.button
                  className="btn-outline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tCommon('learnMore')}
                </motion.button>
              </Link>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary mb-3 shadow-lg"
                    whileHover={{ rotate: 5 }}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="font-semibold text-text-primary text-sm">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-text-secondary mt-1">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <motion.div
              className="relative aspect-square"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Placeholder for medical illustration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-3xl backdrop-blur-sm flex items-center justify-center">
                <div className="text-center space-y-4">
                  <motion.div
                    className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-white shadow-2xl"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Heart className="w-16 h-16 text-primary" />
                  </motion.div>
                  <p className="text-2xl font-bold gradient-text">
                    {locale === 'mr'
                      ? 'आपल्या आरोग्याची काळजी'
                      : locale === 'hi'
                      ? 'आपके स्वास्थ्य की देखभाल'
                      : 'Your Health, Our Priority'}
                  </p>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 bg-secondary rounded-2xl shadow-xl flex items-center justify-center"
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Shield className="w-12 h-12 text-white" />
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent rounded-2xl shadow-xl flex items-center justify-center"
                animate={{ rotate: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Users className="w-12 h-12 text-white" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="#F5F9FC"
          />
        </svg>
      </div>
    </section>
  );
}
