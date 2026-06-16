import { useTranslations } from 'next-intl';

export default function Pillars() {
  const t = useTranslations('pillars');

  return (
    <section style={{ background: '#F4F8FF', padding: '100px 0' }}>
      <div className="container">
        <div className="text-center max-w-[600px] mx-auto mb-14">
          <div className="inline-block px-7 py-2.5 rounded-full font-bold text-[15px] mb-6 border"
            style={{ background: '#EFF6FF', color: '#2867E8', borderColor: 'rgba(40,103,232,0.35)' }}>
            {t('label')}
          </div>
          <h2 className="font-sora font-extrabold text-[#0F1E3C]" style={{ fontSize: 'clamp(28px,4vw,42px)', letterSpacing: '-1px', lineHeight: 1.15 }}>
            {t('title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1 — Offline */}
          <div className="rounded-3xl p-10 border flex flex-col" style={{ background: '#FFF7ED', borderColor: '#FED7AA' }}>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0" style={{ background: '#FFEDD5' }}>
              <svg width="28" height="28" fill="#EE9218" viewBox="0 0 24 24">
                <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
              </svg>
            </div>
            <h3 className="font-sora font-bold text-[#0F1E3C] text-xl mb-3">{t('p1Title')}</h3>
            <p className="text-[#475569] text-[15px] leading-relaxed text-justify">{t('p1Body')}</p>
          </div>

          {/* Pillar 2 — Language */}
          <div className="rounded-3xl p-10 relative overflow-hidden flex flex-col"
            style={{ background: 'linear-gradient(145deg,#1565C0 0%,#2196F3 100%)' }}>
            <div className="absolute bottom-[-40px] right-[-40px] w-40 h-40 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle,rgba(255,255,255,0.15) 0%,transparent 70%)' }} />
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0" style={{ background: 'rgba(255,255,255,0.2)' }}>
              <svg width="28" height="28" fill="white" viewBox="0 0 24 24">
                <path d="M12 15c1.66 0 3-1.34 3-3V6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V6zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-2.08c3.39-.49 6-3.39 6-6.92h-2z" />
              </svg>
            </div>
            <h3 className="font-sora font-bold text-white text-xl mb-3">{t('p2Title')}</h3>
            <p className="text-white/88 text-[15px] leading-relaxed text-justify">{t('p2Body')}</p>
          </div>

          {/* Pillar 3 — No jargon */}
          <div className="rounded-3xl p-10 border flex flex-col" style={{ background: '#FFFBEB', borderColor: '#FDE68A' }}>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0" style={{ background: '#FEF3C7' }}>
              <svg width="28" height="28" fill="#EE9218" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93V18c0-.55-.45-1-1-1s-1 .45-1 1v1.93C7.06 19.44 4.56 16.94 4.07 14H6c.55 0 1-.45 1-1s-.45-1-1-1H4.07C4.56 9.06 7.06 6.56 10 6.07V8c0 .55.45 1 1 1s1-.45 1-1V6.07c2.94.49 5.44 2.99 5.93 5.93H16c-.55 0-1 .45-1 1s.45 1 1 1h1.93c-.49 2.94-2.99 5.44-5.93 5.93z" />
              </svg>
            </div>
            <h3 className="font-sora font-bold text-[#0F1E3C] text-xl mb-3">{t('p3Title')}</h3>
            <p className="text-[#475569] text-[15px] leading-relaxed text-justify">{t('p3Body')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
