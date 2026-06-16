import Image from 'next/image';
import { useTranslations } from 'next-intl';

const PHOTOS = [
  '/images/portrait-couturiere.webp',
  '/images/portrait-coiffeuse.webp',
  '/images/portrait-vendeuse.webp',
  '/images/portrait-marchand.webp',
];

export default function Portraits() {
  const t = useTranslations('portraits');

  const cards = [
    { titleKey: 'card1Title', quoteKey: 'card1Quote' },
    { titleKey: 'card2Title', quoteKey: 'card2Quote' },
    { titleKey: 'card3Title', quoteKey: 'card3Quote' },
    { titleKey: 'card4Title', quoteKey: 'card4Quote' },
  ] as const;

  return (
    <section style={{ background: '#FFFAF4', padding: '100px 0' }}>
      <div className="container">
        <div className="text-center max-w-[620px] mx-auto mb-14">
          <div className="inline-block px-7 py-2.5 rounded-full font-bold text-[15px] mb-6 border"
            style={{ background: '#FFF0DC', color: '#C47B0A', borderColor: 'rgba(196,123,10,0.35)' }}>
            {t('label')}
          </div>
          <h2 className="font-sora font-extrabold text-[#0F1E3C] mb-4" style={{ fontSize: 'clamp(32px,5vw,42px)', letterSpacing: '-1px' }}>
            {t('title')}
          </h2>
          <p className="text-[#475569] text-[17px] leading-relaxed">{t('body')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <div key={card.titleKey} className="rounded-3xl overflow-hidden bg-white" style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.07)' }}>
              <div className="relative w-full h-[260px]">
                <Image src={PHOTOS[i]} alt={t(card.titleKey)} fill className="object-cover object-top" />
              </div>
              <div className="p-6 pb-7">
                <h3 className="font-sora font-bold text-[#0F1E3C] text-[19px] mb-1.5">{t(card.titleKey)}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed italic text-justify">{t(card.quoteKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
