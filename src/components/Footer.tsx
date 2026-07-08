import React from 'react';
import { MessageCircle, Instagram, MapPin, Phone } from 'lucide-react';

interface FooterProps {
  whatsappUrl: string;
  instagramUrl: string;
  googleMapUrl: string;
}

export const Footer: React.FC<FooterProps> = ({ whatsappUrl, instagramUrl, googleMapUrl }) => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 text-neutral-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-neutral-900">
          
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 via-neutral-900 to-neutral-900 border border-amber-500/40 flex items-center justify-center">
                <span className="font-serif font-bold text-lg text-amber-400 tracking-wider">AM</span>
              </div>
              <span className="font-display font-bold text-lg text-white tracking-wide">
                Aluminium Atlas Maroc
              </span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm">
              Société spécialisée en menuiserie aluminium, verre trempé, fenêtres, portes, cuisines aluminium, façades et travaux sur mesure à Marrakech.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider">
              Contacts & Réseaux
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-500" />
                  <span>WhatsApp: +212 6 35 65 86 39</span>
                </a>
              </li>
              <li>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-pink-400 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-pink-500" />
                  <span>Instagram: @aluminium_service_marrakech</span>
                </a>
              </li>
              <li>
                <a
                  href={googleMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-amber-400 transition-colors"
                >
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>Google Business: Marrakech, Maroc</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Hours & Location */}
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider">
              Disponibilité
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Nos bureaux et équipes techniques vous accueillent et interviennent sur tout Marrakech et sa région pour tous vos projets de construction et rénovation.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Équipes joignables 6j/7
              </span>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© 2026 Aluminium Atlas Maroc - Menuiserie Aluminium & Verre Trempé à Marrakech</p>
          <p className="text-neutral-400 font-medium">Réalisations & Chantiers de Prestige</p>
        </div>
      </div>
    </footer>
  );
};
