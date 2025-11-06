# Suyash Health Care Centre

A modern, multilingual healthcare website built with Next.js 14, featuring responsive design, internationalization, and smooth animations.

## 🌟 Features

- **Modern Tech Stack**: Next.js 14 with App Router and TypeScript
- **Multilingual Support**: Full internationalization with English, Hindi, and Marathi (default: Marathi)
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Beautiful transitions powered by Framer Motion
- **Healthcare Theme**: Professional color scheme optimized for healthcare industry
- **Language Switcher**: Persistent language selection with localStorage

## 🎨 Design System

### Color Palette
- **Primary (Medical Blue)**: `#0066CC`, `#1E88E5`
- **Secondary (Trust Green)**: `#00C853`, `#43A047`
- **Accent (Warm Orange)**: `#FF6F00`
- **Background**: `#FFFFFF`, `#F5F9FC`
- **Text**: `#212121`, `#424242`

### Components
- Responsive Navigation Bar with mobile hamburger menu
- Floating Language Switcher (top-right corner)
- Comprehensive Footer with contact info and quick links
- Hero Section with gradient backgrounds and animations
- Custom button styles and utility classes

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd suyash-health-center
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser

The app will automatically redirect to the Marathi locale: [http://localhost:3000/mr](http://localhost:3000/mr)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
suyash-health-center/
├── app/
│   ├── [locale]/           # Localized routes
│   │   ├── about/
│   │   ├── contact/
│   │   ├── machine/
│   │   ├── products/
│   │   ├── services/
│   │   ├── privacy/
│   │   ├── terms/
│   │   ├── layout.tsx      # Locale layout with nav & footer
│   │   └── page.tsx        # Home page
│   ├── globals.css         # Global styles
│   └── layout.tsx          # Root layout
├── components/
│   ├── home/
│   │   └── HeroSection.tsx
│   ├── Footer.tsx
│   ├── LanguageSwitcher.tsx
│   └── Navbar.tsx
├── i18n/
│   └── request.ts          # next-intl configuration
├── messages/               # Translation files
│   ├── en.json            # English
│   ├── hi.json            # Hindi (हिंदी)
│   └── mr.json            # Marathi (मराठी)
├── i18n.ts                # Locale configuration
├── middleware.ts          # Routing middleware
└── tailwind.config.ts     # Tailwind configuration
```

## 🌐 Internationalization

The website supports three languages:
- **Marathi (MR)** - Default language
- **English (EN)**
- **Hindi (HI)** - हिंदी

Language preference is stored in localStorage and persists across sessions.

### Adding New Translations

1. Add translations to `messages/[locale].json`
2. Use the `useTranslations` hook in components:

```tsx
import { useTranslations } from 'next-intl';

function MyComponent() {
  const t = useTranslations('nav');
  return <div>{t('home')}</div>;
}
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Internationalization**: next-intl
- **Forms**: React Hook Form + Zod (configured, ready to use)
- **Icons**: Lucide React

## 📄 Available Routes

- `/[locale]` - Home page
- `/[locale]/about` - About page
- `/[locale]/machine` - Our Machine page
- `/[locale]/products` - Products page
- `/[locale]/services` - Services page
- `/[locale]/contact` - Contact page
- `/[locale]/privacy` - Privacy Policy
- `/[locale]/terms` - Terms & Conditions

Replace `[locale]` with `en`, `hi`, or `mr`.

## 🎯 Next Steps

This is the basic project setup. You can now:
1. Add detailed content to each page
2. Implement contact forms with validation
3. Add more sections to the home page
4. Connect to a CMS or database
5. Add image galleries for medical equipment
6. Implement appointment booking system
7. Add testimonials and reviews section

## 📝 License

Copyright © 2024 Suyash Health Care Centre. All rights reserved.
