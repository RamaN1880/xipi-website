import { useTranslations } from 'next-intl';

function XIcon() {
  return (
    <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(239,68,68,0.25)' }}>
      <svg width="12" height="12" fill="#FCA5A5" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></svg>
    </div>
  );
}

function CheckIcon() {
  return (
    <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(255,255,255,0.2)' }}>
      <svg width="12" height="12" fill="#4ADE80" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
    </div>
  );
}

export default function Problem() {
  const t = useTranslations('problem');

  const beforeItems = [
    { title: t('before1Title'), body: t('before1Body') },
    { title: t('before2Title'), body: t('before2Body') },
    { title: t('before3Title'), body: t('before3Body') },
    { title: t('before4Title'), body: t('before4Body') },
  ];

  const afterItems = [
    { title: t('after1Title'), body: t('after1Body') },
    { title: t('after2Title'), body: t('after2Body') },
    { title: t('after3Title'), body: t('after3Body') },
    { title: t('after4Title'), body: t('after4Body') },
  ];

  return (
    <section id="probleme" className="bg-white py-24">
      <div className="container">
        <div className="text-center max-w-[640px] mx-auto mb-14">
          <div className="inline-block px-7 py-2.5 rounded-full font-bold text-[15px] mb-6 border"
            style={{ background: '#FEF3C7', color: '#D97706', borderColor: 'rgba(217,119,6,0.35)' }}>
            {t('label')}
          </div>
          <h2 className="font-sora font-extrabold text-[#0F1E3C] mb-5" style={{ fontSize: 'clamp(28px,4vw,42px)', letterSpacing: '-1px', lineHeight: 1.15 }}>
            {t('title')}
          </h2>
          <p className="text-[#475569] text-[17px] leading-relaxed text-justify">{t('body')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Before */}
          <div className="rounded-3xl p-10 relative overflow-hidden"
            style={{ background: 'linear-gradient(145deg,#7F1D1D 0%,#991B1B 100%)' }}>
            <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg,#EF4444,#B91C1C)' }} />
            <div className="absolute bottom-[-80px] right-[-80px] w-[200px] h-[200px] rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 70%)' }} />
            <div className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold text-[#FCA5A5] mb-6"
              style={{ background: 'rgba(239,68,68,0.3)', border: '1px solid rgba(239,68,68,0.5)' }}>
              {t('beforeTitle')}
            </div>
            <div className="flex flex-col gap-4">
              {beforeItems.map((item, i) => (
                <div key={i} className="flex gap-3.5">
                  <XIcon />
                  <div>
                    <div className="font-semibold text-white text-[15px] mb-1">{item.title}</div>
                    <div className="text-white/70 text-sm leading-relaxed text-justify">{item.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* After */}
          <div className="rounded-3xl p-10 relative overflow-hidden"
            style={{ background: 'linear-gradient(145deg,#0C6EB5 0%,#2AACD8 100%)' }}>
            <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg,#7DD3FC,#4ADE80)' }} />
            <div className="absolute bottom-[-80px] right-[-80px] w-[200px] h-[200px] rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)' }} />
            <div className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold text-white mb-6"
              style={{ background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.35)' }}>
              {t('afterTitle')}
            </div>
            <div className="flex flex-col gap-4">
              {afterItems.map((item, i) => (
                <div key={i} className="flex gap-3.5">
                  <CheckIcon />
                  <div>
                    <div className="font-semibold text-white text-[15px] mb-1">{item.title}</div>
                    <div className="text-white/90 text-sm leading-relaxed text-justify">{item.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
