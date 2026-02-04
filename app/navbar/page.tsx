'use client';

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Menu, Globe, ChevronDown, X } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import type { Locale } from "@/lib/translations";

const localeToLabel: Record<Locale, string> = { fr: 'FR', en: 'ENG', es: 'ESP' };

export default function Navbar() {
  const { locale, setLocale, t } = useLanguage();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLanguageOpen(false);
      }
    };
    if (isLanguageOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isLanguageOpen]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nav = t('nav');
  const languages: Locale[] = ['fr', 'en', 'es'];

  return (
    <nav 
      className={`sticky top-0 z-50 w-full h-[80px] transition-shadow duration-300 ${
        isScrolled ? 'shadow-lg' : ''
      }`}
      style={{
        background: "linear-gradient(90deg, #1A3A5C 10%, #316DAC 90%)",
      }}
    >
      <div className="mx-auto max-w-7xl h-full px-4 sm:px-6 relative">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex-shrink-0">
           <Link href="/">
            <Image
              src="/ExpressKiloLogo.svg"
              alt="Express Kilo"
              width={180}
              height={54}
              className="max-w-[100px] sm:max-w-[120px] lg:max-w-[140px] max-h-[40px] sm:max-h-[45px] lg:max-h-[50px]"
              priority
            />
            </Link>

          </div>

          {/* Navigation Links - Centered in navbar */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center space-x-8 xl:space-x-12">
            <a href="#problemes" className="relative px-2 py-2 text-white font-normal text-sm transition-all duration-300 group hover:text-orange-400 hover:scale-105">
              <span className="relative z-10">{nav.marketProblems}</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
            <a href="#solution" className="relative px-2 py-2 text-white font-normal text-sm transition-all duration-300 group hover:text-orange-400 hover:scale-105">
              <span className="relative z-10">{nav.solution}</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
            <a href="#faq" className="relative px-2 py-2 text-white font-normal text-sm transition-all duration-300 group hover:text-orange-400 hover:scale-105">
              <span className="relative z-10">{nav.faq}</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
          </div>

          {/* Right side - Actions */}
          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center gap-2 px-3 py-2 text-white hover:text-white/80 font-normal text-sm transition-all duration-200"
              >
                <Globe className="w-5 h-5" />
                <span>{localeToLabel[locale]}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isLanguageOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-20 rounded-lg shadow-xl overflow-hidden z-50" style={{ background: "linear-gradient(90deg, #316DAC 0%, #1A3A5C 100%)" }}>
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => { setLocale(lang); setIsLanguageOpen(false); }}
                      className={`w-full px-4 py-2.5 text-center text-sm font-medium transition-all duration-200 ${locale === lang ? 'bg-white/20 text-white' : 'text-white/90 hover:text-white hover:bg-white/10'}`}
                    >
                      {localeToLabel[lang]}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden flex items-center justify-center w-10 h-10 text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-full w-[280px] z-50 lg:hidden transform transition-transform duration-300 ease-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          background: "linear-gradient(180deg, #1A3A5C 0%, #316DAC 100%)",
        }}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
         
          <Link href="/">
          <Image
            src="/images/homepage/ExpressKiloLogo.svg"
            alt="Express Kilo"
            width={120}
            height={36}
            className="max-h-[36px]"
          />
          </Link>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center w-10 h-10 text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col p-4 space-y-1">
          <a href="#problemes" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 font-normal text-sm rounded-lg transition-all duration-200">
            {nav.marketProblems}
          </a>
          <a href="#solution" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 font-normal text-sm rounded-lg transition-all duration-200">
            {nav.solution}
          </a>
          <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 font-normal text-sm rounded-lg transition-all duration-200">
            {nav.faq}
          </a>
        </div>
        {/* Sidebar Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
         

 
        </div>
      </div>
    </nav>
  );
}