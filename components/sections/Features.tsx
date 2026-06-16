'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const IMAGES = [
  '/images/tab-dashboard.png',
  '/images/tab-clients.png',
  '/images/tab-metier.png',
  '/images/tab-stock.png',
  '/images/tab-depenses.png',
  '/images/tab-facture.png',
];

export default function Features() {
  const t = useTranslations('features');
  const [active, setActive] = useState(0);

  const tabs = [
    { label: t('tab1'), desc: t('desc1') },
    { label: t('tab2'), desc: t('desc2') },
    { label: t('tab3'), desc: t('desc3') },
    { label: t('tab4'), desc: t('desc4') },
    { label: t('tab5'), desc: t('desc5') },
    { label: t('tab6'), desc: t('desc6') },
  ];

  return (
    <section id="fonctionnalites" className="bg-white py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none rounded-full"
        style={{ background: 'radial-gradient(circle,rgba(40,103,232,0.04) 0%,transparent 70%)' }} />
      <div className="container">
        <div className="text-center max-w-[600px] mx-auto mb-16">
          <div className="inline-block px-7 py-2.5 rounded-full font-bold text-[15px] mb-6 border"
            style={{ background: '#EFF6FF', color: '#2867E8', borderColor: 'rgba(40,103,232,0.35)' }}>
            {t('label')}
          </div>
          <h2 className="font-sora font-extrabold text-[#0F1E3C] mb-4" style={{ fontSize: 'clamp(28px,4vw,42px)', letterSpacing: '-1px', lineHeight: 1.15 }}>
            {t('title')}
          </h2>
          <p className="text-[#64748B] text-[17px] leading-relaxed">{t('body')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Tabs */}
          <div className="flex flex-col gap-2">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl text-left transition-all border font-inter text-[15px] w-full"
                style={{
                  background: active === i ? '#EFF6FF' : '#F8F9FC',
                  border: active === i ? '1.5px solid #2867E8' : '1.5px solid transparent',
                  color: active === i ? '#2867E8' : '#64748B',
                  fontWeight: active === i ? 600 : 400,
                }}
              >
                <span className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: active === i ? '#2867E8' : '#CBD5E1' }} />
                {tab.label}
              </button>
            ))}

            <div className="mt-4 rounded-2xl p-7" style={{ background: '#F4F8FF', border: '1px solid #DDE8FF' }}>
              <div className="font-sora font-bold text-[#0F1E3C] text-[18px] mb-2.5">{tabs[active].label}</div>
              <p className="text-[#475569] text-[15px] leading-relaxed">{tabs[active].desc}</p>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="hidden lg:flex justify-center items-center relative">
            <div className="absolute w-[340px] h-[340px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(40,103,232,0.1) 0%, transparent 70%)' }} />
            <div className="relative z-10">
              <div className="w-[264px] h-[540px] rounded-[48px] p-2.5"
                style={{ background: '#0A1830', boxShadow: '0 40px 80px rgba(40,103,232,0.2), 0 0 0 1px rgba(40,103,232,0.15)' }}>
                <div className="w-full h-full rounded-[40px] overflow-hidden" style={{ background: '#EFF6FF', position: 'relative' }}>
                  <Image
                    src={IMAGES[active]}
                    alt={tabs[active].label}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
