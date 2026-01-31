'use client';

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Quand le service sera-t-il disponible ?",
      answer: "  ExpressKilo est actuellement en phase de développement. Le lancement du service se fera progressivement, et les personnes inscrites à la liste d’attente seront informées en priorité des prochaines étapes. "
    },
    {
      question: "L'inscription à la liste d'attente est-elle gratuite?",
      answer: "Oui, l'inscription à la liste d'attente est entièrement gratuite. Vous n'avez aucune obligation et serez simplement informé en priorité lors du lancement du service."
    },
    {
      question: "Quelles zones géographiques seront couvertes au lancement?",
      answer: " ExpressKilo sera déployé au Canada de manière progressive. Les premières zones couvertes dépendront des trajets disponibles et de la demande des utilisateurs. Les personnes inscrites à la liste d’attente seront informées en priorité des zones ouvertes au lancement."
    },
    {
      question: "ExpressKilo s'adresse-t-il aux particuliers, aux entreprises ou aux deux ?",
      answer: "ExpressKilo s’adresse à la fois aux particuliers et aux professionnels.La plateforme est pensée pour répondre aux besoins des particuliers, des entreprises locales, des PME et des e-commerçants."
    },
    {
      question: "Quels types d'objets peuvent être livrés avec ExpressKilo?",
      answer: "   ExpressKilo permet la livraison d’objets de différentes tailles, y compris des objets volumineux ou non standards, selon les trajets disponibles et les conditions définies par les utilisateurs."
    }
  ];

  return (
    <section id="faq" className="py-12 sm:py-14 md:py-16 bg-white scroll-mt-20">
      <div className="w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
        
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-blue-600">
            Questions fréquentes sur ExpressKilo
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Retrouvez ici les réponses aux questions les plus courantes sur le fonctionnement d'ExpressKilo.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden"
              style={{
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.08)',
                background: 'linear-gradient(180deg, #316DAC 0%, #1A3A5C 100%)'
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-5 py-4 text-left text-white font-medium text-sm sm:text-base hover:opacity-90 transition-opacity"
              >
                <span>{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 flex-shrink-0 ml-3 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              
              {openIndex === index && (
                <div className="px-5 pb-4 pt-0">
                  <p className="text-sm text-white/90 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
