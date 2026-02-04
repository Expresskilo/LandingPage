'use client';

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const problemNumbers = ["1 (1).svg", "2 (1).svg", "3 (1).svg", "4.svg"];

export default function ProblemsSection() {
  const { t } = useLanguage();
  const { title, subtitle, items } = t('problems');

  return (
    <section id="problemes" className="py-12 sm:py-14 md:py-16 bg-white relative overflow-hidden scroll-mt-20">
      {/* Top decorative image */}
      <div className="absolute -top-6 left-1/6 -translate-x-1/2 opacity-90 z-0">
        <Image
          src="/image 29.svg"
          alt=""
          width={100}
          height={100}
          className="w-100 h-100 sm:w-100 sm:h-100"
        />
      </div>
      
      <div className="w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 relative z-10">
        
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3" style={{ color: '#1A3A5C' }}>{title}</h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          
          {/* Left: Illustration */}
          <div className="flex justify-center items-center order-2 lg:order-1">
            <div className="relative w-full max-w-sm">
              <Image
                src="/image 34.svg"
                alt="Two people with packages"
                width={350}
                height={350}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="space-y-4 order-1 lg:order-2">
            {items.map((problem, index) => (
              <div key={index} className="flex gap-6 group">
                <div className="flex-shrink-0 relative w-10 h-12 group-hover:scale-105 transition-transform duration-300">
                  <Image src="/Rectangle 954.svg" alt="" width={56} height={60} className="absolute inset-0 w-full h-full object-contain" />
                  <Image src={`/${problemNumbers[index]}`} alt={`${index + 1}`} width={32} height={40} className="absolute bottom-4 left-8 -translate-x-1/2 w-8 h-10 object-contain object-top" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base font-bold mb-1.5" style={{ color: '#1A3A5C' }}>{problem.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
