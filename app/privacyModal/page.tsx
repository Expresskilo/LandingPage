'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
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
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity duration-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        onClick={handleClose}
      />

      <div
        className={`relative w-full max-w-md bg-white rounded-xl shadow-lg transition-all duration-200 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="p-6">
          <button
            onClick={handleClose}
            aria-label={p.closeAria}
            className="absolute top-4 right-4 p-1.5 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            <X className="w-5 h-5" strokeWidth={2} />
          </button>

          <h3 className="text-lg font-semibold text-gray-900 pr-8">{p.title}</h3>
          <p className="text-sm text-gray-500 mt-1 mb-4">{p.subtitle}</p>

          <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
            <p>{p.mailText}</p>
            <p>{p.lockText}</p>
          </div>

          <button
            onClick={handleClose}
            className="mt-6 w-full py-3 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            {p.cta}
          </button>
        </div>
      </div>
    </div>
  );
}
