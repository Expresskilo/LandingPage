import { MapPin, Users, Cpu, Handshake } from "lucide-react";
import Image from "next/image";

export default function TrustSection() {
  const cards = [
    {
      icon: MapPin,
      title: "Un projet en cours de développement",
      description: "ExpressKilo évolue avec rigueur pour offrir une plateforme robuste et fiable dès son lancement officiel."
    },
    {
      icon: Users,
      title: "Une approche orientée utilisateur",
      description: "Chaque fonctionnalité est pensée pour répondre aux besoins réels des particuliers, des entreprises et des transporteurs."
    },
    {
      icon: Cpu,
      title: "Technologies modernes et évolutives",
      description: "Une infrastructure technique performante et évolutive pour garantir une expérience fluide et durable."
    },
    {
      icon: Handshake,
      title: "Fiabilité et confiance",
      description: "Un engagement fort envers la transparence, la sécurité et la qualité de service pour tous les utilisateurs."
    }
  ];

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
        
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3" style={{ color: '#1A3A5C' }}>
            Confiance et crédibilité
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Un projet conçu avec sérieux, transparence et exigence de qualité.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <card.icon className="w-6 h-6 text-white" />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-bold mb-2" style={{ color: '#1A3A5C' }}>
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
