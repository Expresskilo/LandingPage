'use client';

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function FAQSection() {
  const { t } = useLanguage();
  const { title, subtitle, items: faqs } = t('faq');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-12 sm:py-14 md:py-16 scroll-mt-20" style={{ background: '#F8FAFC' }}>
      <div className="w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
        
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3" style={{ color: '#1A3A5C' }}>{title}</h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden border border-blue-100/80 transition-all duration-300 ${
                openIndex === index ? 'ring-2 ring-blue-200/60' : ''
              }`}
              style={{
                boxShadow: openIndex === index
                  ? '0 12px 28px rgba(26, 58, 92, 0.12), 0 0 0 1px rgba(59, 130, 246, 0.08)'
                  : '0 4px 14px rgba(0, 0, 0, 0.06)',
                background: 'white',
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 text-left text-white font-medium text-sm sm:text-base transition-all duration-200 hover:brightness-110"
                style={{
                  background: 'linear-gradient(135deg, #316DAC 0%, #1A3A5C 100%)',
                }}
              >
                <span className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </span>
                  <span>{faq.question}</span>
                </span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                  strokeWidth={2.5}
                />
              </button>

              {openIndex === index && (
                <div className="bg-white px-5 sm:px-6 pb-5 pt-4 border-t border-blue-100/60">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
