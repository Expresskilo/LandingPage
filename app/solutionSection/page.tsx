'use client';

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const solutionIcons = ["/33.svg", "/paper-plane_8908349 1.svg", "/Group 1000005264.svg", "/Group 1000005262.svg"];

export default function SolutionSection() {
  const { t } = useLanguage();
  const { title, subtitle, items, quote } = t('solution');

  return (
    <section id="solution" className="py-12 sm:py-14 md:py-16 bg-[#F3F8FC] relative overflow-hidden scroll-mt-20">
      
     
      <div className="w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 relative z-10">
        
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3" style={{ color: '#1A3A5C' }}>{title}</h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-10 sm:mb-12">
          {items.map((solution, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="mb-4 flex items-center justify-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 ${index % 2 === 0 ? 'bg-gradient-to-br from-orange-400 to-orange-600' : 'bg-gradient-to-br from-blue-400 to-blue-600'}`}>
                  <Image src={solutionIcons[index]} alt={solution.title} width={40} height={40} className="w-10 h-10" />
                </div>
              </div>
              <h3 className="text-xs sm:text-sm font-bold mb-1.5" style={{ color: '#1A3A5C' }}>{solution.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{solution.description}</p>
            </div>
          ))}
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-start gap-2">
            <Image src="/Group 1000005270.svg" alt="" width={24} height={24} className="w-6 h-6 flex-shrink-0 mt-1" />
            <p className="text-sm sm:text-base text-blue-600 font-medium italic flex-1 text-center">{quote}</p>
            <Image src="/Group 1000005270.svg" alt="" width={24} height={24} className="w-6 h-6 flex-shrink-0 mt-1 transform rotate-180" />
          </div>
        </div>

      </div>
    </section>
  );
}
