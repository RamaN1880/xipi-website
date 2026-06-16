import { useTranslations } from 'next-intl';

const VALUE_ICONS = [
  // Inclusion
  <svg key="inc" width="32" height="32" fill="#D97706" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" /></svg>,
  // Simplicité
  <svg key="sim" width="32" height="32" fill="#D97706" viewBox="0 0 24 24"><path d="M7 2v11h3v9l7-12h-4l4-8z" /></svg>,
  // Confiance
  <svg key="con" width="32" height="32" fill="#D97706" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" /></svg>,
  // Ancrage
  <svg key="anc" width="32" height="32" fill="#D97706" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>,
];

export default function Values() {
  const t = useTranslations('values');
  const items = [
    { titleKey: 'v1Title', bodyKey: 'v1Body' },
    { titleKey: 'v2Title', bodyKey: 'v2Body' },
    { titleKey: 'v3Title', bodyKey: 'v3Body' },
    { titleKey: 'v4Title', bodyKey: 'v4Body' },
  ] as const;

  return (
    <section className="relative overflow-hidden py-20" style={{ background: 'linear-gradient(135deg,#92400E 0%,#B45309 35%,#EE9218 100%)' }}>
      <div className="absolute top-[-100px] right-[-80px] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(255,255,255,0.12) 0%,transparent 70%)' }} />
      <div className="container">
        <div className="text-center mb-14">
          <div className="text-xs font-bold tracking-[3px] text-white/65 uppercase mb-3.5">{t('sublabel')}</div>
          <h2 className="font-sora font-extrabold text-white" style={{ fontSize: 'clamp(32px,4vw,42px)', letterSpacing: '-1px' }}>{t('title')}</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ titleKey, bodyKey }, i) => (
            <div key={titleKey} className="rounded-3xl p-9 text-center flex flex-col items-center gap-5"
              style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)' }}>
              <div className="w-[68px] h-[68px] rounded-full bg-white flex items-center justify-center flex-shrink-0"
                style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}>
                {VALUE_ICONS[i]}
              </div>
              <div>
                <div className="font-sora font-extrabold text-white text-xl mb-2.5">{t(titleKey)}</div>
                <p className="text-white/88 text-sm leading-relaxed text-center">{t(bodyKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
