'use client';

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function VisionSection() {
  const { t } = useLanguage();
  const v = t('vision');
  return (
    <section className="py-12 sm:py-14 md:py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
     <div className="absolute right-0 top-1/2  rotate-180 -translate-y-1/2  opacity-100 z-0 pointer-events-none">
        <Image src="/image 24.svg" alt="" width={500} height={700} className="w-50 sm:w-60 lg:w-70 h-auto" />
      </div>
      <div className="w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 relative ">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1A3A5C' }}>{v.title}</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">{v.subtitle}</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center mb-16 sm:mb-18">
          <div className="space-y-3 text-center lg:text-left order-2 lg:order-1">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold" style={{ color: '#1A3A5C' }}>{v.whyTitle}</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{v.whyText}</p>
          </div>

          {/* Right: Illustration */}
          <div className="flex justify-center items-center order-1 lg:order-2">
            <div className="relative w-full max-w-md">
              <Image
                src="/image 34.svg"
                alt="Two people moving a fridge"
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Notre vision section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Illustration with arrow */}
          <div className="flex justify-center items-center relative">
            <div className="relative w-full max-w-md">
              {/* Blue arrow decoration */}
              <Image
                src="/Group (3).svg"
                alt=""
                width={250}
                height={250}
                className="absolute -left-30 top-1/20image.png -translate-y-1/2 w-50 h-50 hidden xl:block"
              />
              
              <Image
                  src="/image 36.svg"
                  alt="Two people moving a couch"
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="space-y-4 text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold" style={{ color: '#1A3A5C' }}>{v.visionTitle}</h3>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">{v.visionText}</p>
          </div>
        </div>

      </div>
    </section>
  );
}
