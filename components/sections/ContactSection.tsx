'use client';
import { useState, FormEvent } from 'react';
import { useTranslations } from 'next-intl';

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '';

export default function ContactSection() {
  const t = useTranslations('contact');
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject: `[XIPI] ${form.subject}`,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass = "w-full border border-gray-200 rounded-xl px-4 py-3 text-[15px] focus:border-[#2867E8] focus:ring-2 focus:ring-blue-100 outline-none transition-all";

  return (
    <section id="contact" className="bg-white py-20 border-t border-gray-100">
      <div className="container max-w-[860px]">
        <div className="text-center mb-14">
          <div className="inline-block px-7 py-2.5 rounded-full font-bold text-[15px] mb-6 border"
            style={{ background: '#FFF7ED', color: '#EE9218', borderColor: 'rgba(238,146,24,0.35)' }}>
            {t('label')}
          </div>
          <h2 className="font-sora font-extrabold text-[#0F1E3C] mb-4" style={{ fontSize: 'clamp(28px,4vw,40px)', letterSpacing: '-1px', lineHeight: 1.15 }}>
            {t('title')}
          </h2>
          <p className="text-[#475569] text-[17px] leading-relaxed max-w-[540px] mx-auto text-justify">{t('body')}</p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <a href="mailto:contact@xipiafrica.com"
            className="flex flex-col items-center gap-4 rounded-3xl p-11 text-center no-underline transition-all hover:scale-[1.02]"
            style={{ background: '#F4F8FF', border: '1.5px solid #DDE8FF' }}>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: '#EFF6FF' }}>
              <svg width="26" height="26" fill="#2867E8" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
              </svg>
            </div>
            <div>
              <div className="font-sora font-bold text-[#0F1E3C] text-[19px] mb-1.5">{t('c1Title')}</div>
              <div className="text-[#2867E8] font-semibold text-[15px]">{t('c1Email')}</div>
            </div>
          </a>

          <a href="mailto:support@xipiafrica.com"
            className="flex flex-col items-center gap-4 rounded-3xl p-11 text-center no-underline transition-all hover:scale-[1.02]"
            style={{ background: '#FFF7ED', border: '1.5px solid #FED7AA' }}>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: '#FEF3C7' }}>
              <svg width="26" height="26" fill="#EE9218" viewBox="0 0 24 24">
                <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.1.9 2 2 2h1c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-1c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h1c1.1 0 2-.9 2-2v-7c0-4.97-4.03-9-9-9z" />
              </svg>
            </div>
            <div>
              <div className="font-sora font-bold text-[#0F1E3C] text-[19px] mb-1.5">{t('c2Title')}</div>
              <div className="text-[#EE9218] font-semibold text-[15px]">{t('c2Email')}</div>
            </div>
          </a>

          <a href="tel:+221778635858"
            className="flex flex-col items-center gap-4 rounded-3xl p-11 text-center no-underline transition-all hover:scale-[1.02]"
            style={{ background: '#F0FDF4', border: '1.5px solid #BBF7D0' }}>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: '#DCFCE7' }}>
              <svg width="26" height="26" fill="#16A34A" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </div>
            <div>
              <div className="font-sora font-bold text-[#0F1E3C] text-[19px] mb-1.5">{t('c3Title')}</div>
              <div className="text-green-600 font-semibold text-[15px]">{t('c3Phone')}</div>
            </div>
          </a>
        </div>

        {/* Form */}
        <div className="rounded-2xl p-10" style={{ background: '#F5F5F5' }}>
          {status === 'success' ? (
            <div className="flex flex-col items-center gap-4 py-12 text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <svg width="32" height="32" fill="#16A34A" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
              </div>
              <p className="font-sora font-bold text-[#0F1E3C] text-xl">{t('formSuccess')}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('formName')} *</label>
                  <input type="text" required className={inputClass} value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('formEmail')} *</label>
                  <input type="email" required className={inputClass} value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('formPhone')}</label>
                  <input type="tel" className={inputClass} value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('formSubject')} *</label>
                  <select required className={inputClass} value={form.subject}
                    onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}>
                    <option value="" disabled>— {t('formSubject')} —</option>
                    <option>{t('formSubjectOpt1')}</option>
                    <option>{t('formSubjectOpt2')}</option>
                    <option>{t('formSubjectOpt3')}</option>
                    <option>{t('formSubjectOpt4')}</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('formMessage')} *</label>
                <textarea required rows={5} className={inputClass} style={{ minHeight: '120px', resize: 'vertical' }}
                  value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} />
              </div>
              {status === 'error' && (
                <p className="text-red-500 text-sm text-center">{t('formError')}</p>
              )}
              <button type="submit" disabled={status === 'sending'}
                className="w-full py-3.5 text-white font-bold text-[16px] rounded-2xl transition-opacity hover:opacity-90 disabled:opacity-60"
                style={{ background: '#2867E8' }}>
                {status === 'sending' ? t('formSending') : t('formSubmit')}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
