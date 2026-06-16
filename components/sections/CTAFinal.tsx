import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function CTAFinal() {
  const t = useTranslations('cta');
  return (
    <section id="telechargement" className="relative overflow-hidden py-28"
      style={{ background: 'linear-gradient(135deg,#2867E8 0%,#1640B0 100%)' }}>
      <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(255,255,255,0.08) 0%,transparent 70%)' }} />
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(238,146,24,0.15) 0%,transparent 70%)' }} />
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-20 items-center">
          <div>
            <h2 className="font-sora font-extrabold text-white mb-5" style={{ fontSize: 'clamp(32px,5vw,52px)', letterSpacing: '-1.5px', lineHeight: 1.1 }}>
              {t('title')}
            </h2>
            <p className="text-white/80 text-[18px] leading-relaxed mb-10 max-w-[500px]">{t('body')}</p>
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col items-start gap-1.5">
                <span className="text-[11px] font-semibold px-3 py-0.5 rounded-full border border-yellow-300/30 text-yellow-200"
                  style={{ background: 'rgba(255,208,128,0.15)' }}>⏳ {t('appStoreSoon')}</span>
                <div className="flex items-center gap-2.5 px-8 py-4 rounded-2xl border-2 border-dashed border-white/30 text-white/50 font-semibold text-base"
                  style={{ background: 'rgba(255,255,255,0.1)' }}>
                  <svg width="22" height="22" fill="rgba(255,255,255,0.45)" viewBox="0 0 24 24">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.42.07 2.41.74 3.24.8 1.23-.26 2.41-.97 3.72-.84 1.59.2 2.78.84 3.56 2.1-3.27 2.03-2.73 6.18.47 7.58-.61 1.52-1.37 3.02-3 3.24zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  App Store
                </div>
              </div>
              <a href="#" className="flex items-center gap-2.5 px-8 py-4 rounded-2xl border border-white/35 text-white font-bold text-base hover:bg-white/20 transition-colors"
                style={{ background: 'rgba(255,255,255,0.15)' }}>
                <svg width="22" height="22" fill="white" viewBox="0 0 24 24">
                  <path d="M3.18 23.76c.28.16.6.18.9.06l12.94-7.47-2.79-2.79L3.18 23.76zm-1.18-1.2V1.44c0-.4.22-.75.56-.93L14.27 12 2.56 23.69c-.34-.18-.56-.53-.56-.93zM20.44 9.56L17.52 7.9l-2.93 2.93 2.93 2.93 2.94-1.68c.84-.49.84-1.69-.02-2.52zM4.08.18L17.02 7.65 14.23 10.44 3.18.24c.3-.12.62-.1.9-.06z" />
                </svg>
                {t('googlePlay')}
              </a>
            </div>
          </div>
          <div className="hidden lg:flex justify-end">
            <Image src="/images/aida.png" alt="AIDA" width={280} height={340} className="animate-float"
              style={{ filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.3))', height: 'auto' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
