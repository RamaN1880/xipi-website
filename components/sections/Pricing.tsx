import { useTranslations } from 'next-intl';

const CHECK = (
  <svg width="18" height="18" fill="#4ADE80" viewBox="0 0 24 24">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
  </svg>
);

export default function Pricing() {
  const t = useTranslations('pricing');
  const features = ['f1','f2','f3','f4','f5','f6'] as const;

  return (
    <section id="tarif" className="py-24" style={{ background: 'linear-gradient(180deg,#EFF6FF 0%,white 28%)' }}>
      <div className="container">
        <div className="text-center max-w-[560px] mx-auto mb-16">
          <div className="inline-block px-7 py-2.5 rounded-full font-bold text-[15px] mb-5 border"
            style={{ background: '#EFF6FF', color: '#2867E8', borderColor: 'rgba(40,103,232,0.35)' }}>
            {t('label')}
          </div>
          <h2 className="font-sora font-extrabold text-[#0F1E3C] mb-4" style={{ fontSize: 'clamp(28px,4vw,42px)', letterSpacing: '-1px', lineHeight: 1.15 }}>
            {t('title')}
          </h2>
          <p className="text-[#475569] text-[17px] leading-relaxed">{t('body')}</p>
        </div>

        <div className="max-w-[480px] mx-auto">
          <div className="rounded-[28px] p-12 relative overflow-hidden"
            style={{ background: 'linear-gradient(145deg,#1640B0 0%,#2867E8 100%)', boxShadow: '0 40px 80px rgba(40,103,232,0.25)' }}>
            <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg,#FFD080,#4ADE80)' }} />
            <div className="absolute bottom-[-100px] right-[-60px] w-[280px] h-[280px] rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle,rgba(255,255,255,0.15) 0%,transparent 70%)' }} />

            <div className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold text-white mb-6"
              style={{ background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)' }}>
              {t('badge')}
            </div>

            <div className="flex items-baseline gap-2 mb-2">
              <span className="font-sora font-extrabold text-white" style={{ fontSize: '72px', lineHeight: 1, letterSpacing: '-2px' }}>
                {t('price')}
              </span>
              <span className="text-white/70 text-xl font-semibold">{t('currency')}</span>
            </div>
            <div className="text-white/70 text-[15px] mb-9">{t('sub')}</div>

            <div className="flex flex-col gap-3.5 mb-10">
              {features.map(key => (
                <div key={key} className="flex items-center gap-3">
                  {CHECK}
                  <span className="text-white text-[15px]">{t(key)}</span>
                </div>
              ))}
            </div>

            <a href="#telechargement"
              className="block text-center text-white font-bold text-base py-4 px-8 rounded-2xl transition-opacity hover:opacity-90"
              style={{ background: '#EE9218', boxShadow: '0 8px 24px rgba(238,146,24,0.4)' }}>
              {t('cta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
