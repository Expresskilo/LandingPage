'use client';

import { MapPin, Users, Cpu, Handshake } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const icons = [MapPin, Users, Cpu, Handshake];

export default function TrustSection() {
  const { t } = useLanguage();
  const { title, subtitle, items } = t('trust');

  return (
    <section className="py-12 sm:py-14 md:py-16 bg-white relative overflow-hidden">
      {/* Background shape - Left side */}
      <div className="absolute right-0 top-1/2  rotate-180 -translate-y-1/2  opacity-100 z-0 pointer-events-none">
        <Image
          src="/image 24.svg"
          alt=""
          width={500}
          height={700}
          className="w-50 sm:w-60 lg:w-70 h-auto"
        />
      </div>
      
      <div className="w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 relative z-10">
        
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3" style={{ color: '#1A3A5C' }}>{title}</h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {items.map((card, index) => {
            const Icon = icons[index];
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-bold mb-2" style={{ color: '#1A3A5C' }}>{card.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{card.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
