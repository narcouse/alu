import React from 'react';
import { MessageCircle, MapPin, Shield } from 'lucide-react';

interface NavbarProps {
  whatsappUrl: string;
}

export const Navbar: React.FC<NavbarProps> = ({ whatsappUrl }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative group cursor-pointer flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500/20 via-neutral-900 to-neutral-900 border border-amber-500/40 flex items-center justify-center shadow-lg shadow-black/50 group-hover:border-amber-400 transition-colors">
              <span className="font-serif font-bold text-xl text-amber-400 tracking-wider">AM</span>
            </div>
            <div>
              <span className="font-display font-bold text-lg md:text-xl text-white tracking-wide block leading-none">
                ALUMINIUM ATLAS
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-amber-400/90 font-semibold block mt-1">
                Maroc • Marrakech
              </span>
            </div>
          </div>
        </div>

        {/* Right Info & WhatsApp */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-xs text-neutral-300">
            <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Marrakech, Maroc</span>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-medium text-xs sm:text-sm shadow-lg shadow-emerald-950/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border border-emerald-400/30"
          >
            <MessageCircle className="w-4 h-4 fill-current shrink-0" />
            <span className="hidden xs:inline">WhatsApp Direct</span>
            <span className="xs:hidden">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
};
