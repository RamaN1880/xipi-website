import Image from 'next/image';
import { useTranslations } from 'next-intl';

function WaveBar({ delay }: { delay: string }) {
  return (
    <div
      className="w-[3px] rounded-sm wave-bar"
      style={{ background: '#2867E8', height: '32px', animationDelay: delay, transformOrigin: 'bottom' }}
    />
  );
}

export default function AISection() {
  const t = useTranslations('ai');

  return (
    <section id="ia" className="py-24 relative overflow-hidden" style={{ background: '#F4F8FF' }}>
      <div className="container">
        <div className="text-center max-w-[680px] mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
            style={{ background: 'rgba(40,103,232,0.1)', border: '1px solid rgba(40,103,232,0.2)' }}>
            <span className="w-2 h-2 rounded-full animate-pulse-ring" style={{ background: '#2867E8' }} />
            <span className="text-[13px] text-[#2867E8] font-semibold tracking-wide">{t('badge')}</span>
          </div>
          <h2 className="font-sora font-extrabold text-[#0F1E3C] mb-5" style={{ fontSize: 'clamp(28px,4vw,44px)', letterSpacing: '-1.2px', lineHeight: 1.1 }}>
            {t('title1')}<br /><span style={{ color: '#2867E8' }}>{t('title2')}</span>
          </h2>
          <p className="text-[#475569] text-[17px] leading-relaxed text-justify">{t('body')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 - Voice */}
          <div className="bg-white rounded-3xl p-10 relative overflow-hidden" style={{ border: '1px solid #DDE8FF', boxShadow: '0 4px 24px rgba(40,103,232,0.06)' }}>
            <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: 'linear-gradient(90deg,#2867E8,transparent)' }} />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: '#EFF6FF' }}>
                <svg width="24" height="24" fill="#2867E8" viewBox="0 0 24 24"><path d="M12 15c1.66 0 3-1.34 3-3V6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V6zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-2.08c3.39-.49 6-3.39 6-6.92h-2z" /></svg>
              </div>
              <span className="text-xs font-semibold text-[#2867E8] px-2.5 py-1 rounded-full" style={{ background: '#EFF6FF' }}>{t('c1Badge')}</span>
            </div>
            <h3 className="font-sora font-bold text-[#0F1E3C] text-xl mb-3">{t('c1Title')}</h3>
            <p className="text-[#64748B] text-sm leading-relaxed text-justify mb-7">{t('c1Body')}</p>
            <div className="flex items-center gap-1 rounded-xl p-4" style={{ background: '#EFF6FF' }}>
              <div className="w-7 h-7 rounded-full bg-[#2867E8] flex items-center justify-center flex-shrink-0 mr-2">
                <svg width="12" height="12" fill="white" viewBox="0 0 24 24"><path d="M12 15c1.66 0 3-1.34 3-3V6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3z" /></svg>
              </div>
              <div className="flex items-end gap-0.5 flex-1 h-8">
                {['0s','0.08s','0.16s','0.24s','0.32s','0.4s','0.48s','0.56s','0.64s','0.72s'].map((d, i) => (
                  <WaveBar key={i} delay={d} />
                ))}
              </div>
              <span className="text-[#2867E8] text-[13px] font-semibold ml-2 flex-shrink-0">{t('c1Listen')}</span>
            </div>
            <div className="flex gap-2 mt-4">
              <span className="text-xs font-semibold text-[#475569] px-3 py-1 rounded-full" style={{ background: '#F1F5F9' }}>{t('c1Fr')}</span>
              <span className="text-xs font-semibold text-[#EE9218] px-3 py-1 rounded-full" style={{ background: '#FFF7ED', border: '1px solid rgba(238,146,24,0.25)' }}>{t('c1Wo')}</span>
            </div>
          </div>

          {/* Card 2 - OCR */}
          <div className="bg-white rounded-3xl p-10 relative overflow-hidden" style={{ border: '1px solid #F5E6D0', boxShadow: '0 4px 24px rgba(238,146,24,0.06)' }}>
            <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: 'linear-gradient(90deg,#EE9218,transparent)' }} />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: '#FFF7ED' }}>
                <svg width="24" height="24" fill="#EE9218" viewBox="0 0 24 24"><path d="M9.5 6.5v3h-3v-3h3M11 5H5v6h6V5zm-1.5 9.5v3h-3v-3h3M11 13H5v6h6v-6zm6.5-6.5v3h-3v-3h3M19 5h-6v6h6V5zm-6 8h1.5v1.5H13V13zm1.5 1.5H16V16h-1.5v-1.5zM16 13h1.5v1.5H16V13zm-3 3h1.5v1.5H13V16zm1.5 1.5H16V19h-1.5v-1.5zM16 16h1.5v1.5H16V16zm1.5-1.5H19V16h-1.5v-1.5zM19 13h-1.5v1.5H19V13z" /></svg>
              </div>
              <span className="text-xs font-semibold text-[#EE9218] px-2.5 py-1 rounded-full" style={{ background: '#FFF7ED' }}>{t('c2Badge')}</span>
            </div>
            <h3 className="font-sora font-bold text-[#0F1E3C] text-xl mb-3">{t('c2Title')}</h3>
            <p className="text-[#64748B] text-sm leading-relaxed text-justify mb-7">{t('c2Body')}</p>
            <div className="rounded-2xl p-4 grid grid-cols-[1fr_auto] gap-4 items-center" style={{ background: '#FFF7ED', border: '1px solid rgba(238,146,24,0.2)' }}>
              <div className="relative rounded-xl overflow-hidden bg-white" style={{ border: '1px solid #E0EAF5', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <div className="animate-scan absolute left-0 right-0 h-0.5 z-10 pointer-events-none"
                  style={{ background: 'linear-gradient(90deg,transparent,rgba(238,146,24,0.9),transparent)' }} />
                {/* Mask for client name */}
                <div className="absolute bg-white z-[2] rounded" style={{ top: '26.5%', left: '10%', width: '72%', height: '5.5%' }} />
                <Image src="/images/facture-senelec.png" alt="Facture SENELEC" width={200} height={280} className="w-full h-auto block" />
              </div>
              <div className="flex flex-col gap-2 items-center min-w-[88px]">
                <div className="text-[9px] text-gray-400 text-center leading-tight">{t('c2Detected')}</div>
                <div className="font-sora font-extrabold text-[#EE9218] text-xl whitespace-nowrap">{t('c2Amount')}</div>
                <span className="text-[10px] text-[#EE9218] px-2.5 py-0.5 rounded-full whitespace-nowrap" style={{ background: 'rgba(238,146,24,0.15)' }}>{t('c2OcrBadge')}</span>
                <span className="text-[10px] text-green-600 px-2.5 py-0.5 rounded-full whitespace-nowrap bg-green-100">{t('c2Category')}</span>
              </div>
            </div>
          </div>

          {/* Card 3 - Alerts */}
          <div className="bg-white rounded-3xl p-10 relative overflow-hidden" style={{ border: '1px solid #D8F5E0', boxShadow: '0 4px 24px rgba(22,163,74,0.06)' }}>
            <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: 'linear-gradient(90deg,#16A34A,transparent)' }} />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-green-100">
                <svg width="24" height="24" fill="#16A34A" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" /></svg>
              </div>
              <span className="text-xs font-semibold text-green-600 px-2.5 py-1 rounded-full bg-green-100">{t('c3Badge')}</span>
            </div>
            <h3 className="font-sora font-bold text-[#0F1E3C] text-xl mb-3">{t('c3Title')}</h3>
            <p className="text-[#64748B] text-sm leading-relaxed text-justify mb-7">{t('c3Body')}</p>
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl" style={{ background: '#FEF2F2', border: '1px solid #FECACA' }}>
                <span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
                <span className="text-[13px] text-red-800">{t('c3Alert1')}</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl" style={{ background: '#FFF7ED', border: '1px solid #FED7AA' }}>
                <span className="w-2 h-2 rounded-full bg-[#EE9218] flex-shrink-0" />
                <span className="text-[13px] text-[#92400E]">{t('c3Alert2')}</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-green-100" style={{ border: '1px solid #BBF7D0' }}>
                <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                <span className="text-[13px] text-green-800">{t('c3Alert3')}</span>
              </div>
            </div>
          </div>

          {/* Card 4 - Auto-fill */}
          <div className="bg-white rounded-3xl p-10 relative overflow-hidden" style={{ border: '1px solid #E8DDFF', boxShadow: '0 4px 24px rgba(168,85,247,0.06)' }}>
            <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: 'linear-gradient(90deg,#9333EA,transparent)' }} />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: '#F5F0FF' }}>
                <svg width="24" height="24" fill="#9333EA" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" /></svg>
              </div>
              <span className="text-xs font-semibold text-purple-600 px-2.5 py-1 rounded-full" style={{ background: '#F5F0FF' }}>{t('c4Badge')}</span>
            </div>
            <h3 className="font-sora font-bold text-[#0F1E3C] text-xl mb-3">{t('c4Title')}</h3>
            <p className="text-[#64748B] text-sm leading-relaxed text-justify mb-7">{t('c4Body')}</p>
            <div className="rounded-xl p-4" style={{ background: '#F8F9FC', border: '1px solid #E2E8F0' }}>
              <div className="text-[11px] text-gray-400 mb-3">{t('c4FormTitle')}</div>
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-lg p-2.5" style={{ background: 'white', border: '1.5px solid #DDE8FF' }}>
                  <div className="text-[10px] text-gray-400">{t('c4Client')}</div>
                  <div className="text-[13px] font-semibold text-[#2867E8]">{t('c4ClientVal')}</div>
                </div>
                <div className="rounded-lg p-2.5" style={{ background: 'white', border: '1.5px solid #DDE8FF' }}>
                  <div className="text-[10px] text-gray-400">{t('c4Amount')}</div>
                  <div className="text-[13px] font-semibold text-[#2867E8]">{t('c4AmountVal')}</div>
                </div>
                <div className="rounded-lg p-2.5 col-span-2" style={{ background: 'white', border: '1.5px solid #DDE8FF' }}>
                  <div className="text-[10px] text-gray-400">{t('c4Desc')}</div>
                  <div className="text-[13px] font-semibold text-[#2867E8]">{t('c4DescVal')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
