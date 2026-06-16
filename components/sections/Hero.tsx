import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden flex items-center"
      style={{ background: 'linear-gradient(150deg, #1640B0 0%, #2867E8 55%, #4A8AFF 100%)', paddingTop: '72px' }}
    >
      <div className="absolute top-[-120px] left-[-120px] w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 65%)' }} />
      <div className="absolute bottom-[-180px] right-[-80px] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(238,146,24,0.15) 0%, transparent 65%)' }} />

      <div className="container py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="flex flex-col gap-7">
            <div className="inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full border border-white/30"
              style={{ background: 'rgba(255,255,255,0.15)' }}>
              <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0 animate-pulse-ring" />
              <span className="text-white/90 text-sm font-medium">{t('badge')}</span>
            </div>

            <h1 className="font-sora font-extrabold text-white leading-tight" style={{ fontSize: 'clamp(36px, 5vw, 56px)', letterSpacing: '-1.5px' }}>
              {t('title1')}<br />
              <span style={{ color: '#FFD080' }}>{t('title2')}</span>
            </h1>

            <p className="font-sora font-semibold text-white/85 text-xl">{t('slogan')}</p>

            <p className="text-white/80 text-[17px] leading-relaxed max-w-[500px]">{t('body')}</p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col items-start gap-1.5">
                <span className="text-[11px] font-semibold px-3 py-0.5 rounded-full border border-yellow-300/30 text-yellow-200"
                  style={{ background: 'rgba(255,208,128,0.15)' }}>
                  ⏳ {t('appStoreSoon')}
                </span>
                <div className="flex items-center gap-2 px-6 py-3.5 rounded-[14px] border-2 border-dashed border-white/30 text-white/50 text-[15px] font-semibold"
                  style={{ background: 'rgba(255,255,255,0.1)' }}>
                  <svg width="20" height="20" fill="rgba(255,255,255,0.45)" viewBox="0 0 24 24">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.42.07 2.41.74 3.24.8 1.23-.26 2.41-.97 3.72-.84 1.59.2 2.78.84 3.56 2.1-3.27 2.03-2.73 6.18.47 7.58-.61 1.52-1.37 3.02-3 3.24zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  App Store
                </div>
              </div>
              <a href="#telechargement" className="flex items-center gap-2 px-6 py-3.5 rounded-[14px] border border-white/40 text-white text-[15px] font-semibold hover:bg-white/20 transition-colors"
                style={{ background: 'rgba(255,255,255,0.15)' }}>
                <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                  <path d="M3.18 23.76c.28.16.6.18.9.06l12.94-7.47-2.79-2.79L3.18 23.76zm-1.18-1.2V1.44c0-.4.22-.75.56-.93L14.27 12 2.56 23.69c-.34-.18-.56-.53-.56-.93zM20.44 9.56L17.52 7.9l-2.93 2.93 2.93 2.93 2.94-1.68c.84-.49.84-1.69-.02-2.52zM4.08.18L17.02 7.65 14.23 10.44 3.18.24c.3-.12.62-.1.9-.06z" />
                </svg>
                {t('googlePlay')}
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-0 pt-5 border-t border-white/20">
              <div className="flex-1 pr-6">
                <div className="font-sora font-bold text-white text-xl">{t('stat1Value')} <span className="text-sm text-white/60 font-normal">{t('stat1Unit')}</span></div>
                <div className="text-xs text-white/60 mt-0.5">{t('stat1Sub')}</div>
              </div>
              <div className="flex-1 px-6 border-l border-white/20">
                <div className="font-sora font-bold text-white text-xl">{t('stat2Value')} <span className="text-sm text-white/60 font-normal">{t('stat2Unit')}</span></div>
                <div className="text-xs text-white/60 mt-0.5">{t('stat2Sub')}</div>
              </div>
              <div className="flex-1 pl-6 border-l border-white/20">
                <div className="font-sora font-bold text-white text-xl">{t('stat3Value')}</div>
                <div className="text-xs text-white/60 mt-0.5">{t('stat3Sub')}</div>
              </div>
            </div>
          </div>

          {/* Right – phone mockup */}
          <div className="hidden lg:flex justify-center items-center relative min-h-[580px]">
            <div className="absolute w-[420px] h-[420px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)' }} />

            <div className="relative z-10 animate-float">
              <div className="w-[264px] h-[540px] rounded-[48px] p-2.5 relative"
                style={{ background: '#0A1830', boxShadow: '0 60px 120px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.15)' }}>
                <div className="w-full h-full rounded-[40px] overflow-hidden relative" style={{ background: '#1B5DDB' }}>
                  <Image src="/images/app1.png" alt="XIPI App" fill className="object-cover object-top" />
                </div>
              </div>
              {/* Notch */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[74px] h-[22px] rounded-xl z-10" style={{ background: '#0A1830' }} />
            </div>

            {/* Floating card 1 */}
            <div className="absolute right-0 top-20 z-20 bg-white rounded-[18px] p-3.5 flex items-center gap-3 animate-float2"
              style={{ boxShadow: '0 24px 64px rgba(0,0,0,0.2)' }}>
              <div className="w-9 h-9 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                <svg width="16" height="16" fill="#16A34A" viewBox="0 0 24 24"><path d="M7 14l5-5 5 5H7z" /></svg>
              </div>
              <div>
                <div className="text-[11px] text-gray-500">{t('float1Label')}</div>
                <div className="font-sora font-bold text-[#0A1628] text-base">{t('float1Value')}</div>
              </div>
              <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">{t('float1Badge')}</span>
            </div>

            {/* Floating card 2 */}
            <div className="absolute left-[-30px] bottom-24 z-20 bg-white rounded-[18px] p-3.5 flex items-center gap-3"
              style={{ boxShadow: '0 24px 64px rgba(0,0,0,0.2)', animation: 'float2 5s ease-in-out infinite 1.5s' }}>
              <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" fill="#2867E8" viewBox="0 0 24 24">
                  <path d="M12 15c1.66 0 3-1.34 3-3V6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V6zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-2.08c3.39-.49 6-3.39 6-6.92h-2z" />
                </svg>
              </div>
              <div>
                <div className="text-[11px] text-gray-500">{t('float2Label')}</div>
                <div className="text-[13px] font-semibold text-[#0A1628]">{t('float2Value')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
