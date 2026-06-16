import { useTranslations } from 'next-intl';

export default function Security() {
  const t = useTranslations('security');

  const cards = [
    {
      icon: <svg width="26" height="26" fill="#2867E8" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" /></svg>,
      titleKey: 's1Title', bodyKey: 's1Body',
    },
    {
      icon: <svg width="26" height="26" fill="#2867E8" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" /></svg>,
      titleKey: 's2Title', bodyKey: 's2Body',
    },
    {
      icon: <svg width="26" height="26" fill="#2867E8" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 13l-3-3 1.41-1.41L11 11.17l4.59-4.58L17 8l-6 6z" /></svg>,
      titleKey: 's3Title', bodyKey: 's3Body',
    },
  ] as const;

  return (
    <section id="securite" className="py-20" style={{ background: '#F4F8FF' }}>
      <div className="container">
        <div className="text-center max-w-[600px] mx-auto mb-14">
          <div className="inline-block px-7 py-2.5 rounded-full font-bold text-[15px] mb-6 border"
            style={{ background: '#EFF6FF', color: '#2867E8', borderColor: 'rgba(40,103,232,0.35)' }}>
            {t('label')}
          </div>
          <h2 className="font-sora font-extrabold text-[#0F1E3C] mb-4" style={{ fontSize: 'clamp(28px,4vw,40px)', letterSpacing: '-1px', lineHeight: 1.15 }}>
            {t('title')}
          </h2>
          <p className="text-[#475569] text-[17px] leading-relaxed">{t('body')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map(({ icon, titleKey, bodyKey }) => (
            <div key={titleKey} className="bg-white rounded-3xl p-9" style={{ border: '1.5px solid #BFDBFE', boxShadow: '0 4px 20px rgba(40,103,232,0.06)' }}>
              <div className="w-[52px] h-[52px] rounded-2xl flex items-center justify-center mb-5" style={{ background: '#EFF6FF' }}>
                {icon}
              </div>
              <h3 className="font-sora font-bold text-[#0F1E3C] text-xl mb-2.5">{t(titleKey)}</h3>
              <p className="text-[#475569] text-sm leading-[1.75]">{t(bodyKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
