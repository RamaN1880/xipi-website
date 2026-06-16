import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function AidaSection() {
  const t = useTranslations('aida_section');

  const bullets = [t('bullet1'), t('bullet2'), t('bullet3'), t('bullet4')];

  return (
    <section id="aida" className="relative overflow-hidden py-24"
      style={{ background: 'linear-gradient(135deg,#1D5FC0 0%,#2D78F0 50%,#1F54CC 100%)' }}>
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(255,255,255,0.1) 0%,transparent 70%)' }} />
      <div className="absolute bottom-[-150px] left-[-80px] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(238,146,24,0.2) 0%,transparent 70%)' }} />
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-block px-7 py-2.5 rounded-full font-bold text-[15px] mb-6 text-white border border-white/40"
              style={{ background: 'rgba(255,255,255,0.2)' }}>
              {t('badge')}
            </div>
            <h2 className="font-sora font-extrabold text-white mb-5" style={{ fontSize: 'clamp(32px,4vw,44px)', letterSpacing: '-1px', lineHeight: 1.1 }}>
              {t('titleLine1')}<br />{t('titleLine2')} 👋
            </h2>
            <p className="text-white/85 text-[17px] leading-relaxed mb-8 text-justify">
              {t('body')}
            </p>
            <div className="flex flex-col gap-4">
              {bullets.map((item, i) => (
                <div key={i} className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255,255,255,0.2)' }}>
                    <svg width="16" height="16" fill="white" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                  </div>
                  <span className="text-white text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full"
                style={{ background: 'radial-gradient(circle,rgba(255,255,255,0.18) 0%,transparent 70%)' }} />
              <Image
                src="/images/aida.png"
                alt="AIDA"
                width={340}
                height={400}
                className="relative z-10 animate-float"
                style={{ filter: 'drop-shadow(0 32px 64px rgba(0,0,0,0.25))', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
