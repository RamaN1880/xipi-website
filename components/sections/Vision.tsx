import { useTranslations } from 'next-intl';

export default function Vision() {
  const t = useTranslations('vision');
  return (
    <section id="vision" style={{ background: '#FFFAF4', padding: '100px 0' }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <div className="inline-block px-7 py-2.5 rounded-full font-bold text-[15px] mb-8 border"
              style={{ background: '#EFF6FF', color: '#2867E8', borderColor: 'rgba(40,103,232,0.35)' }}>
              {t('visionLabel')}
            </div>
            <blockquote className="font-sora font-extrabold text-[#0F1E3C] mb-6" style={{ fontSize: 'clamp(32px,4vw,44px)', letterSpacing: '-1.5px', lineHeight: 1.1 }}>
              {t('visionQuote1')}<br />
              <span style={{ color: '#2867E8' }}>{t('visionQuote2')}</span>
            </blockquote>
            <p className="text-[#475569] text-base leading-relaxed max-w-[460px]">{t('visionBody')}</p>
          </div>
          <div>
            <div className="inline-block px-7 py-2.5 rounded-full font-bold text-[15px] mb-8 border"
              style={{ background: '#FFF7ED', color: '#EE9218', borderColor: '#FED7AA' }}>
              {t('missionLabel')}
            </div>
            <blockquote className="font-sora font-extrabold text-[#0F1E3C] mb-6" style={{ fontSize: 'clamp(28px,3.5vw,44px)', letterSpacing: '-1px', lineHeight: 1.2 }}>
              {t('missionQuote1')}<br />
              <span style={{ color: '#EE9218' }}>{t('missionQuote2')}</span>
            </blockquote>
            <p className="text-[#475569] text-base leading-relaxed max-w-[460px]">{t('missionBody')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
