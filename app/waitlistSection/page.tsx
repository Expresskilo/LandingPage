'use client';

import { useState, useRef, useEffect } from 'react';
import Image from "next/image";
import { CANADA_CITIES } from "@/data/canada/page";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const normalizeString = (str: string) => 
  str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

export default function WaitlistSection() {
  const { t } = useLanguage();
  const w = t('waitlist');
  const [formData, setFormData] = useState({
    email: '',
    city: '',
    userType: 'particulier',
    hearAboutUs: ''
  });
  const [cityInput, setCityInput] = useState('');
  const [isCityOpen, setIsCityOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const cityRef = useRef<HTMLDivElement>(null);

  const filteredCities = cityInput.trim().length >= 1
    ? CANADA_CITIES.filter((c) =>
        normalizeString(c.name).includes(normalizeString(cityInput.trim()))
      ).slice(0, 8)
    : [];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (cityRef.current && !cityRef.current.contains(e.target as Node)) {
        setIsCityOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectCity = (city: string) => {
    setFormData((prev) => ({ ...prev, city }));
    setCityInput(city);
    setIsCityOpen(false);
    setHighlightedIndex(-1);
  };

  const handleCityKeyDown = (e: React.KeyboardEvent) => {
    if (!isCityOpen || filteredCities.length === 0) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex((i) => Math.min(i + 1, filteredCities.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex((i) => Math.max(i - 1, -1));
    } else if (e.key === 'Enter' && highlightedIndex >= 0) {
      e.preventDefault();
      selectCity(filteredCities[highlightedIndex].name);
    } else if (e.key === 'Escape') {
      setIsCityOpen(false);
      setHighlightedIndex(-1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          city: formData.city || undefined,
          userType: formData.userType,
          hearAboutUs: formData.hearAboutUs || undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setSubmitStatus('error');
        setErrorMessage(data.code === 'EMAIL_EXISTS' ? w.errorAlreadyRegistered : (data.error || w.errorConnection));
        return;
      }
      setSubmitStatus('success');
      setFormData({ email: '', city: '', userType: 'particulier', hearAboutUs: '' });
      setCityInput('');
    } catch {
      setSubmitStatus('error');
      setErrorMessage('Erreur de connexion. Réessayez.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
<section className="py-12 sm:py-14 md:py-16 relative overflow-hidden" id="waitlist">
      {/* Background shape - Left side */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-100 -z-10">          <Image
          src="/image 24.svg"
          alt=""
          width={400}
          height={600}
          className="w-50 sm:w-60 lg:w-70 h-auto"
        />
      </div>
      
      <div className="w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 relative z-10">
        
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-blue-600">{w.title}</h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">{w.subtitle}</p>
        </div>

        {/* Waitlist Form */}
        <div className="max-w-2xl mx-auto">
          <div 
            className="bg-[#F3F8FC] rounded-2xl border border-blue-100 p-6 sm:p-8"
            style={{
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Email and City Row */}
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Email Input */}
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#1A3A5C' }}>
                    Adresse courriel*
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Entrez votre adresse email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                </div>

                {/* City Search */}
                <div ref={cityRef} className="relative">
                  <label className="block text-sm font-medium mb-2" style={{ color: '#1A3A5C' }}>{w.cityLabel}</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder={w.cityPlaceholder}
                      value={cityInput}
                      onChange={(e) => {
                        const val = e.target.value;
                        setCityInput(val);
                        setIsCityOpen(true);
                        setHighlightedIndex(-1);
                        if (!val) setFormData((prev) => ({ ...prev, city: '' }));
                      }}
                      onFocus={() => setIsCityOpen(true)}
                      onKeyDown={handleCityKeyDown}
                      className="w-full px-4 py-2.5 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-700"
                    />
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                  {isCityOpen && filteredCities.length > 0 && (
                    <ul className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-48 overflow-auto">
                      {filteredCities.map((city, i) => (
                        <li
                          key={`${city.name}-${city.provinceCode}`}
                          onClick={() => selectCity(city.name)}
                          className={`px-4 py-2.5 text-sm cursor-pointer transition-colors ${
                            i === highlightedIndex ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-50 text-gray-700'
                          }`}
                        >
                          {city.name} <span className="text-gray-400 text-xs">({city.provinceCode})</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {isCityOpen && cityInput.length >= 1 && filteredCities.length === 0 && (
                    <div className="absolute z-50 w-full mt-1 px-4 py-3 bg-white border border-gray-200 rounded-lg shadow-lg text-sm text-gray-500">
                      Aucune ville trouvée
                    </div>
                  )}
                </div>
              </div>

              {/* User Type Radio Buttons */}
              <div>
                <label className="block text-sm font-medium mb-3" style={{ color: '#1A3A5C' }}>{w.userTypeLabel}</label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <label className="flex items-center cursor-pointer">
                    <input type="radio" name="userType" value="particulier" checked={formData.userType === 'particulier'} onChange={(e) => setFormData({...formData, userType: e.target.value})} className="w-4 h-4 text-blue-600 focus:ring-blue-500" />
                    <span className="ml-2 text-sm text-gray-700">{w.userTypes.particulier}</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input type="radio" name="userType" value="entreprise" checked={formData.userType === 'entreprise'} onChange={(e) => setFormData({...formData, userType: e.target.value})} className="w-4 h-4 text-blue-600 focus:ring-blue-500" />
                    <span className="ml-2 text-sm text-gray-700">{w.userTypes.entreprise}</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input type="radio" name="userType" value="transporteur" checked={formData.userType === 'transporteur'} onChange={(e) => setFormData({...formData, userType: e.target.value})} className="w-4 h-4 text-blue-600 focus:ring-blue-500" />
                    <span className="ml-2 text-sm text-gray-700">{w.userTypes.transporteur}</span>
                  </label>
                </div>
              </div>

              {/* Where did you hear about us */}
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#1A3A5C' }}>{w.hearAboutLabel}</label>
                <select value={formData.hearAboutUs} onChange={(e) => setFormData((prev) => ({ ...prev, hearAboutUs: e.target.value }))} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-700">
                  {w.hearAboutOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>

              {/* Submit Button */}
              <button type="submit" disabled={isSubmitting} className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold text-sm rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
                {isSubmitting ? w.submitting : w.submitButton}
              </button>

              {submitStatus === 'success' && (
                <div className="flex items-center gap-2 text-sm text-green-600 pt-2">
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{w.successMessage}</span>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="flex items-center gap-2 text-sm text-red-600 pt-2">
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span>{errorMessage}</span>
                </div>
              )}

            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
