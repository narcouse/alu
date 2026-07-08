import React from 'react';
import { MessageCircle, Instagram, MapPin, ArrowRight, ShieldCheck, Star } from 'lucide-react';
import { ServicesCard } from './ServicesCard';

interface HeroProps {
  whatsappUrl: string;
  instagramUrl: string;
  googleMapUrl: string;
}

export const Hero: React.FC<HeroProps> = ({ whatsappUrl, instagramUrl, googleMapUrl }) => {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden py-12 lg:py-20">
      {/* Background with slow zoom and metallic/dark overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center animate-slow-zoom scale-105 filter brightness-75 contrast-125"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80')`,
          }}
        />
        {/* Luxury multi-layer dark & navy gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/90 to-neutral-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/80" />

        {/* Animated light sweep / silver accent lines */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-amber-400 to-transparent animate-pulse" />
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-neutral-400 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0,transparent_70%)]" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Main Headline, Subtitle, Short text, CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-amber-500/30 shadow-lg shadow-black/60 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-amber-300 uppercase">
                SOCIÉTÉ ACTIVE À MARRAKECH
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.08]">
                Aluminium <span className="text-gold">Atlas Maroc</span>
              </h1>
              <p className="font-display font-medium text-lg sm:text-2xl text-neutral-300 tracking-wide">
                Menuiserie Aluminium, Verre Trempé & Façades Modernes
              </p>
            </div>

            {/* Short text */}
            <p className="text-sm sm:text-base lg:text-lg text-neutral-400 leading-relaxed max-w-2xl font-light">
              Nous préparons notre site officiel. Nos équipes restent disponibles dès maintenant pour vos projets aluminium, verre, fenêtres, portes, cuisines, façades et travaux sur mesure à Marrakech.
            </p>

            {/* Main CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-2">
              {/* WhatsApp CTA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-600 text-white font-semibold text-base shadow-xl shadow-emerald-950/50 hover:shadow-2xl hover:shadow-emerald-900/60 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border border-emerald-400/40 animate-pulse-whatsapp"
              >
                <MessageCircle className="w-5 h-5 fill-current shrink-0 text-white" />
                <span>Demander un devis WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Instagram CTA */}
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 text-neutral-200 hover:text-white font-semibold text-base border border-neutral-700/80 hover:border-pink-500/50 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Instagram className="w-5 h-5 text-pink-400 shrink-0" />
                <span>Voir nos réalisations Instagram</span>
              </a>

              {/* Google Business CTA */}
              <a
                href={googleMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 text-neutral-200 hover:text-white font-semibold text-base border border-neutral-700/80 hover:border-amber-500/50 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <MapPin className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Nous trouver sur Google</span>
              </a>
            </div>

            {/* Trust highlights */}
            <div className="pt-6 border-t border-neutral-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Garantie & Finition Pro</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Villas & Chantiers Majeurs</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Intervention à Marrakech & Région</span>
              </div>
            </div>

          </div>

          {/* Right Column: Floating Services Card */}
          <div className="lg:col-span-5 animate-float-card">
            <ServicesCard />
          </div>

        </div>
      </div>
    </section>
  );
};
