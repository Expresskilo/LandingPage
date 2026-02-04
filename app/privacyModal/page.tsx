'use client';

import { useState, useEffect } from 'react';
import { X, ShieldCheck, Lock, Mail } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const STORAGE_KEY = 'expresskilo-privacy-modal-seen';

export default function PrivacyModal() {
  const { t } = useLanguage();
  const p = t('privacy');
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeen = typeof window !== 'undefined' && localStorage.getItem(STORAGE_KEY);
    if (!hasSeen) {
      setIsOpen(true);
      requestAnimationFrame(() => setIsVisible(true));
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsOpen(false);
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, 'true');
      }
    }, 200);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-[#1A3A5C]/60 backdrop-blur-md transition-opacity duration-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        onClick={handleClose}
      />

      {/* Modal */}
      <div
        className={`relative w-full max-w-lg overflow-hidden rounded-2xl transition-all duration-200 ease-out ${
          isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
        }`}
        style={{
          background: '#F3F8FC',
          border: '1px solid rgba(59, 130, 246, 0.2)',
          boxShadow: '0 25px 50px -12px rgba(26, 58, 92, 0.25), 0 0 0 1px rgba(255,255,255,0.5) inset',
        }}
      >
        {/* Top accent bar - matches hero gradient */}
        <div
          className="h-1.5 w-full"
          style={{
            background: 'linear-gradient(90deg, #1A3A5C 0%, #2B5A8C 50%, #316DAC 100%)',
          }}
        />

        <div className="p-6 sm:p-8">
          <button
            onClick={handleClose}
            aria-label={p.closeAria}
            className="absolute top-5 right-5 p-2 rounded-xl text-[#1A3A5C]/70 hover:bg-white/80 hover:text-[#1A3A5C] transition-all duration-200"
          >
            <X className="w-5 h-5" strokeWidth={2} />
          </button>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div
              className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #1A3A5C 0%, #2B5A8C 100%)',
                boxShadow: '0 4px 14px rgba(26, 58, 92, 0.25)',
              }}
            >
              <ShieldCheck className="w-6 h-6 text-white" strokeWidth={2} />
            </div>
            <div className="pr-10">
              <h3 className="text-xl font-bold mb-1" style={{ color: '#1A3A5C' }}>{p.title}</h3>
              <p className="text-sm text-[#1A3A5C]/70">{p.subtitle}</p>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex gap-3 p-4 rounded-xl bg-white/80 border border-blue-100/80">
              <Mail className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-600" />
              <p className="text-sm text-gray-700 leading-relaxed">{p.mailText}</p>
            </div>
            <div className="flex gap-3 p-4 rounded-xl bg-white/60 border border-blue-100/60">
              <Lock className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-600" />
              <p className="text-xs text-gray-600 leading-relaxed">{p.lockText}</p>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="w-full py-3.5 font-bold text-sm rounded-xl text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
          >
            {p.cta}
          </button>
        </div>
      </div>
    </div>
  );
}
