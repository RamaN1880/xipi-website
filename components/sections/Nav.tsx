'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

export default function Nav() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const locale = useLocale();
  const t = useTranslations('nav');
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const switchLocale = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  const navLinks = [
    { href: '#fonctionnalites', label: t('features') },
    { href: '#ia', label: t('ai') },
    { href: '#vision', label: t('vision') },
    { href: '#tarif', label: t('pricing') },
    { href: '#aida', label: t('aida') },
    { href: '#contact', label: t('contact') },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/96 backdrop-blur-xl border-b border-black/5">
      <div
        className="absolute top-0 left-0 h-0.5 bg-[#2867E8] transition-all duration-100 z-10"
        style={{ width: `${scrollProgress}%` }}
      />
      <div className="container">
        <div className="flex items-center h-[72px] gap-6">
          <Link href={`/${locale}`} className="flex-shrink-0">
            <Image src="/images/logo.png" alt="XIPI" width={120} height={48} className="h-12 w-auto" priority />
          </Link>

          <div className="hidden lg:flex items-center gap-6 flex-1">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#475569] text-sm font-medium hover:text-[#2867E8] transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 ml-auto">
            <div className="hidden sm:flex items-center bg-gray-100 rounded-full p-0.5">
              <button
                onClick={() => switchLocale('fr')}
                className={`flex items-center px-3 py-1.5 rounded-full text-lg transition-all ${
                  locale === 'fr' ? 'bg-white shadow-sm' : 'opacity-50 hover:opacity-75'
                }`}
              >
                🇫🇷
              </button>
              <button
                onClick={() => switchLocale('en')}
                className={`flex items-center px-3 py-1.5 rounded-full text-lg transition-all ${
                  locale === 'en' ? 'bg-white shadow-sm' : 'opacity-50 hover:opacity-75'
                }`}
              >
                🇬🇧
              </button>
            </div>

            <a
              href="#telechargement"
              className="hidden sm:flex items-center bg-[#EE9218] text-white px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap shadow-[0_4px_16px_rgba(238,146,24,0.35)] hover:bg-[#d4810f] transition-colors"
            >
              {t('download')}
            </a>

            <button
              className="lg:hidden p-2 text-gray-700"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {menuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <div className="flex flex-col gap-1 pt-3">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[#475569] text-sm font-medium py-2.5 border-b border-gray-50 hover:text-[#2867E8]"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
            <div className="flex items-center bg-gray-100 rounded-full p-0.5">
              <button
                onClick={() => switchLocale('fr')}
                className={`flex items-center px-3 py-1.5 rounded-full text-lg transition-all ${
                  locale === 'fr' ? 'bg-white shadow-sm' : 'opacity-50'
                }`}
              >
                🇫🇷
              </button>
              <button
                onClick={() => switchLocale('en')}
                className={`flex items-center px-3 py-1.5 rounded-full text-lg transition-all ${
                  locale === 'en' ? 'bg-white shadow-sm' : 'opacity-50'
                }`}
              >
                🇬🇧
              </button>
            </div>
            <a
              href="#telechargement"
              onClick={() => setMenuOpen(false)}
              className="bg-[#EE9218] text-white px-5 py-2.5 rounded-full text-sm font-semibold"
            >
              {t('download')}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
