import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  return (
    <footer style={{ background: '#0F1E3C', padding: '64px 0 40px' }}>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 mb-12">
          {/* Brand */}
          <div>
            <Image src="/images/logo.png" alt="XIPI" width={96} height={36} className="h-8 w-auto mb-5" style={{ filter: 'brightness(0) invert(1)' }} />
            <p className="text-[#64748B] text-sm leading-relaxed max-w-[300px] mb-6">{t('tagline')}</p>
            <div className="text-[#4A8AFF] text-sm font-medium">{t('madeIn')}</div>
          </div>

          {/* Produit */}
          <div>
            <div className="text-xs font-bold tracking-[1px] text-[#475569] mb-5">{t('col2Title')}</div>
            <div className="flex flex-col gap-3">
              <a href="#fonctionnalites" className="text-[#64748B] text-sm hover:text-white transition-colors">{t('col2l1')}</a>
              <a href="#ia" className="text-[#64748B] text-sm hover:text-white transition-colors">{t('col2l2')}</a>
              <a href="#tarif" className="text-[#64748B] text-sm hover:text-white transition-colors">{t('col2l3')}</a>
              <a href="#telechargement" className="text-[#64748B] text-sm hover:text-white transition-colors">{t('col2l4')}</a>
            </div>
          </div>

          {/* Entreprise */}
          <div>
            <div className="text-xs font-bold tracking-[1px] text-[#475569] mb-5">{t('col3Title')}</div>
            <div className="flex flex-col gap-3">
              <a href="#vision" className="text-[#64748B] text-sm hover:text-white transition-colors">{t('col3l1')}</a>
              <a href="#" className="text-[#64748B] text-sm hover:text-white transition-colors">{t('col3l2')}</a>
              <a href="#securite" className="text-[#64748B] text-sm hover:text-white transition-colors">{t('col3l3')}</a>
              <a href="#contact" className="text-[#64748B] text-sm hover:text-white transition-colors">{t('col3l4')}</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs font-bold tracking-[1px] text-[#475569] mb-5">{t('col4Title')}</div>
            <div className="flex flex-col gap-3">
              <span className="text-[#64748B] text-sm">{t('col4city')}</span>
              <a href="mailto:contact@xipiafrica.com" className="text-[#4A8AFF] text-sm hover:underline">{t('col4email1')}</a>
              <a href="mailto:support@xipiafrica.com" className="text-[#4A8AFF] text-sm hover:underline">{t('col4email2')}</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-white/[0.07]">
          <div className="text-[#475569] text-[13px]">{t('copyright')}</div>
          <div className="flex gap-6">
            <a href="#" className="text-[#475569] text-[13px] hover:text-white transition-colors">{t('privacy')}</a>
            <a href="#" className="text-[#475569] text-[13px] hover:text-white transition-colors">{t('terms')}</a>
            <a href="#" className="text-[#475569] text-[13px] hover:text-white transition-colors">{t('legal')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
