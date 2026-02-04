'use client';

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const userImages = ["/ChatGPT Image 15 janv. 2026, 20_38_37 1.svg", "/ChatGPT Image 15 janv. 2026, 20_40_15 1.svg", "/ChatGPT Image 28 janv. 2026, 15_42_37 1.svg"];

export default function TargetUsersSection() {
  const { t } = useLanguage();
  const { title, subtitle, items } = t('targetUsers');

  return (
    <section className="py-12 sm:py-14 md:py-16 bg-white relative overflow-hidden">
      
     
      <div className="w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
        
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3" style={{ color: '#1A3A5C' }}>{title}</h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {items.map((user, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="mb-4 relative">
                <div className="w-56 h-40 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Image src={userImages[index]} alt={user.title} width={224} height={160} className="w-full h-full object-contain" />
                </div>
              </div>
              <h3 className="text-sm sm:text-base font-bold mb-2" style={{ color: '#1A3A5C' }}>{user.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-sm">{user.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
