import Image from "next/image";
import Link from "next/link";
import { Mail, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#131826] text-white py-6 sm:py-8">
      <div className="w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 items-center">
          
          {/* Left - Brand */}
          <div className="space-y-2">
            <Link href="/">
              <Image
                src="/ExpressKiloLogo.svg"
                alt="ExpressKilo"
                width={120}
                height={36}
                className="h-7 w-auto"
              />
            </Link>
            <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
              Livraison collaborative, de ville en ville. Rejoignez la communauté qui rend le transport accessible et écologique.
            </p>
          </div>

          {/* Right - Contact */}
          <div className="space-y-2 sm:text-right">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Contact
            </h3>
            <a 
              href="mailto:contact@expresskilo.ca" 
              className="flex items-center gap-2 sm:justify-end text-gray-400 hover:text-white transition-colors"
            >
              <span className="w-7 h-7 rounded-md bg-blue-600/30 flex items-center justify-center">
                <Mail className="w-3.5 h-3.5" />
              </span>
              <span className="text-xs">contact@expresskilo.ca</span>
            </a>
            <div className="flex items-center gap-2 sm:justify-end">
              <a href="https://www.facebook.com/profile.php?id=61583492108462" className="w-7 h-7 rounded-md bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/expresskilo/" className="w-7 h-7 rounded-md bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/company/expresskilo" className="w-7 h-7 rounded-md bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Linkedin className="w-4 h-4" />
                

              </a>
            </div>
          </div>

        </div>

        {/* Copyright - centered at bottom */}
        <div className=" border-b border-white/10 flex justify-center">
          <p className="text-xs text-gray-500">
            © 2026 ExpressKilo. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
