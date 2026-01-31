import Image from "next/image";

export default function TargetUsersSection() {
  const users = [
    {
      image: "/ChatGPT Image 15 janv. 2026, 20_38_37 1.svg",
      title: "Particuliers/Voyageur",
      description: "Envoyez vos objets simplement et à moindre coût, ou rentabilisez vos trajets en transportant des objets pour d’autres particuliers.."
    },
    {
      image: "/ChatGPT Image 15 janv. 2026, 20_40_15 1.svg",
      title: "Entreprises / E-commerçant",
      description: "Une alternative flexible aux solutions traditionnelles, adaptée à des besoins ponctuels ou irréguliers, avec une meilleure lisibilité des options d'envoi."
    },
    {
      image: "/ChatGPT Image 28 janv. 2026, 15_42_37 1.svg",
      title: "Transporteur agrée/déménageur ",
      description: " Augmentez vos revenus et accédez à de nouvelles missions.ExpressKilo facilite la mise en relation avec des clients selon vos disponibilités et capacités."
    }
  ];

  return (
    <section className="py-12 sm:py-14 md:py-16 bg-white relative overflow-hidden">
      
     
      <div className="w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
        
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3" style={{ color: '#1A3A5C' }}>
            Cibles et utilisateurs
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Une solution pensée pour particuliers et pros, pour des envois ponctuels ou réguliers.
          </p>
        </div>

        {/* Users grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {users.map((user, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center group"
            >
              {/* Illustration */}
              <div className="mb-4 relative">
                <div className="w-56 h-40 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={user.image}
                    alt={user.title}
                    width={224}
                    height={160}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-sm sm:text-base font-bold mb-2" style={{ color: '#1A3A5C' }}>
                {user.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-sm">
                {user.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
