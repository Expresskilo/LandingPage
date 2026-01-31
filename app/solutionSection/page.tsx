import Image from "next/image";

export default function SolutionSection() {
  const solutions = [
    {
      icon: "/33.svg",
      title: "Estimation simple et lisible",
      description: "Plateforme collaborative de livraison ExpressKilo est une plateforme collaborative qui s'appuie sur des trajets existants pour faciliter l'envoi de colis."
    },
    {
      icon: "/paper-plane_8908349 1.svg",
      title: "Suivi des envois",
      description: "Un suivi clair du trajet de livraison pour mieux comprendre et suivre le parcours de l'objet jusqu'à destination."
    },
    {
      icon: "/Group 1000005264.svg",
      title: "Expérience fluide et accessible",
      description: "Une interface simple et intuitive, pensée pour les particuliers comme pour les entreprises, même pour des besoins ponctuels."
    },
    {
      icon: "/Group 1000005262.svg",
      title: "Objets de toutes tailles",
      description: "La plateforme permet la livraison d'objets standards ou volumineux, y compris ceux qui sortent des formats traditionnels, quels les trajets disponibles."
    }
  ];

  return (
    <section id="solution" className="py-12 sm:py-14 md:py-16 bg-[#F3F8FC] relative overflow-hidden scroll-mt-20">
      
     
      <div className="w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 relative z-10">
        
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3" style={{ color: '#1A3A5C' }}>
            Solution ExpressKilo
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ExpressKilo est une plateforme collaborative de livraison qui s'appuie sur des trajets existants pour faciliter l'envoi d'objets, quelle que soit leur taille.
          </p>
        </div>

        {/* Solutions grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-10 sm:mb-12">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon */}
              <div className="mb-4 flex items-center justify-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 ${
                  index % 2 === 0 
                    ? 'bg-gradient-to-br from-orange-400 to-orange-600' 
                    : 'bg-gradient-to-br from-blue-400 to-blue-600'
                }`}>
                  <Image
                    src={solution.icon}
                    alt={solution.title}
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xs sm:text-sm font-bold mb-1.5" style={{ color: '#1A3A5C' }}>
                {solution.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-gray-600 leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom quote */}
        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-start gap-2">
            {/* Left quotation mark */}
            <Image
              src="/Group 1000005270.svg"
              alt=""
              width={24}
              height={24}
              className="w-6 h-6 flex-shrink-0 mt-1"
            />
            
            {/* Quote text */}
            <p className="text-sm sm:text-base text-blue-600 font-medium italic flex-1 text-center">
              Une solution pensée pour répondre aux besoins de différents profils, du particulier à l'entreprise.
            </p>
            
            {/* Right quotation mark */}
            <Image
              src="/Group 1000005270.svg"
              alt=""
              width={24}
              height={24}
              className="w-6 h-6 flex-shrink-0 mt-1 transform rotate-180"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
