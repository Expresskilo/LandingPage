'use client';

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const hero = t('hero');
  return (
    <section 
      className="relative min-h-[600px] md:min-h-[700px] flex items-center w-full pt-16 sm:pt-20 md:pt-24 pb-0 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1A3A5C 0%, #2B5A8C 50%, #316DAC 100%)",
      }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
      </div>

      {/* Main content container */}
      <div className="w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 grid lg:grid-cols-2 gap-12 lg:gap-16 pb-32 sm:pb-36 md:pb-40 items-center relative z-10">
        
        {/* Left Column: Text content */}
        <div className="space-y-6 text-center lg:text-left animate-fadeIn">
          
          {/* Main headline */}
          <div className="space-y-3">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-white leading-[1.2] tracking-tight">
              {hero.sendCheaper}
              <br />
              {hero.receiveWord}
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">{hero.receiveFaster}</span>
            </h1>
            <div className="inline-flex items-center px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <span className="text-xs sm:text-sm md:text-base font-medium text-white">{hero.preLaunchBadge}</span>
            </div>
          </div>

          <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
            {hero.description}
          </p>

          <div className="flex items-center justify-center lg:justify-start pt-2">
            <a href="#waitlist">
            <button className="group relative px-8 py-3.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-sm sm:text-base rounded-full transition-all duration-300 shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                {hero.cta}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
            </a>
          </div>
        </div>

        {/* Right Column: Animated illustration */}
        <div className="hidden lg:flex relative h-[550px] items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src="/hero.svg"
              alt="Hero illustration"
              width={500}
              height={600}
              className="w-full h-auto max-w-full object-contain drop-shadow-2xl"
              style={{
                animation: 'float1 6s ease-in-out infinite',
              }}
              priority
            />
          </div>
        </div>
       
      </div>
       
      {/* Bottom wave separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-24 sm:h-28 md:h-32 block">
          <path d="M0,0 C300,100 400,100 600,50 C800,0 900,0 1200,50 L1200,120 L0,120 Z" fill="white" opacity="1" />
        </svg>
      </div>

    </section>
  );
}