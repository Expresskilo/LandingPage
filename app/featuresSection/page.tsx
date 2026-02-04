'use client';

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function FeaturesSection() {
  const { t } = useLanguage();
  const features = t('features');
  const icons = ["/fi_7178653.svg", "/fi_1728563.svg", "/Group 39694.svg"];

  return (
    <section className="py-12 sm:py-14 md:py-16 bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <div className="mb-4 flex items-center justify-start">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <Image src={icons[index]} alt={feature.title} width={28} height={28} className="w-7 h-7" />
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2" style={{ color: '#1A3A5C' }}>{feature.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
