'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const STORAGE_KEY = 'expresskilo-privacy-modal-seen';

export default function PrivacyModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeen = typeof window !== 'undefined' && localStorage.getItem(STORAGE_KEY);
    if (!hasSeen) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, 'true');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
        <button
          onClick={handleClose}
          aria-label="Fermer"
          className="absolute top-4 right-4 p-1 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="pr-8">
          <h3 className="text-lg font-bold mb-3" style={{ color: '#1A3A5C' }}>
            Informations personnelles
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            En vous inscrivant à notre liste d'attente, votre adresse courriel est collectée uniquement pour vous informer de la date de lancement d'ExpressKilo et des actualités du service.
          </p>
          <p className="text-xs text-gray-500 leading-relaxed mb-6">
            Vos données sont traitées de manière confidentielle et ne seront jamais partagées avec des tiers. Vous pouvez vous désinscrire à tout moment.
          </p>
          <button
            onClick={handleClose}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-lg transition-colors"
          >
            J'ai compris
          </button>
        </div>
      </div>
    </div>
  );
}
