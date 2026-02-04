'use client';

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function QuoteSection() {
  const { t } = useLanguage();
  return (
    <section className="py-10 sm:py-10 md:py-10 bg-[#F3F8FC] relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
        
        {/* Left decorative dots */}
        <div className="absolute py-20 left-65 top-1/2 -translate-y-1/2 opacity-100">
          <Image
            src="/Group 39715.svg"
            alt=""
            width={60}
            height={120}
            className="w-12 sm:w-16"
          />
        </div>
        
        {/* Right decorative dots */}
        <div className="absolute py-20 right-65 top-1/2 -translate-y-1/2 opacity-100">
          <Image
            src="/Group 39714.svg"
            alt=""
            width={60}
            height={120}
            className="w-12 sm:w-16"
          />
        </div>
        
        {/* Quote text */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <p className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed" style={{ color: '#1A3A5C' }}>
            Express<span className="text-orange-500 font-bold">Kilo</span>{t('quote')}
          </p>
        </div>

      </div>
    </section>
  );
}
