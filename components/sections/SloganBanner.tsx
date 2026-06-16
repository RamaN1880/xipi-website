import { useTranslations } from 'next-intl';

export default function SloganBanner() {
  const t = useTranslations('slogan');
  return (
    <section className="relative overflow-hidden py-20 text-center" style={{ background: '#0F1E3C' }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[200px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(40,103,232,0.2) 0%, transparent 70%)' }} />
      <div className="container relative">
        <div className="text-sm font-bold tracking-[4px] text-[#4A8AFF] uppercase mb-5">{t('label')}</div>
        <div className="font-sora font-extrabold text-white leading-tight" style={{ fontSize: 'clamp(36px,5vw,64px)', letterSpacing: '-1.5px' }}>
          {t('quote1')} <span style={{ color: '#EE9218' }}>{t('quote2')}</span>
        </div>
        <p className="text-white/60 text-[18px] mt-5 max-w-[560px] mx-auto leading-relaxed">{t('body')}</p>
      </div>
    </section>
  );
}
