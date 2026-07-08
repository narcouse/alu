import React from 'react';
import { CheckCircle2, Sparkles, Layers, ShieldCheck, DoorOpen, Maximize2, Utensils, LayoutGrid } from 'lucide-react';

interface ServicesCardProps {
  className?: string;
}

export const ServicesCard: React.FC<ServicesCardProps> = ({ className = '' }) => {
  const services = [
    { name: 'Fenêtres Aluminium', desc: 'Isolation thermique & phonique haute performance', icon: Maximize2 },
    { name: 'Portes Aluminium', desc: 'Design contemporain et sécurité renforcée pour villas', icon: DoorOpen },
    { name: 'Verre Trempé', desc: 'Garde-corps, cloisons vitrées & vitrines sur mesure', icon: Layers },
    { name: 'Cuisines Aluminium', desc: 'Esthétique haut de gamme, durabilité et finition parfaite', icon: Utensils },
    { name: 'Façades Modernes', desc: 'Murs-rideaux, panneaux composites & habillage architectural', icon: LayoutGrid },
    { name: 'Dressing & Placards', desc: 'Agencement intérieur sur mesure et finitions luxueuses', icon: ShieldCheck },
  ];

  return (
    <div className={`relative rounded-3xl p-6 sm:p-8 bg-glass-card border border-neutral-700/60 shadow-2xl shadow-black/90 backdrop-blur-2xl overflow-hidden ${className}`}>
      {/* Decorative background glow & shimmer */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between pb-6 mb-6 border-b border-neutral-800/80">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Sparkles className="w-3 h-3 mr-1" />
              Expertise Marrakech
            </span>
          </div>
          <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight">
            Services disponibles
          </h3>
        </div>
        <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-700/60 flex items-center justify-center text-amber-400 shadow-inner">
          <Layers className="w-5 h-5" />
        </div>
      </div>

      {/* Services List */}
      <div className="relative z-10 space-y-3.5">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="group flex items-start gap-3.5 p-3 rounded-2xl bg-neutral-900/60 hover:bg-neutral-800/80 border border-neutral-800 hover:border-amber-500/40 transition-all duration-300"
            >
              <div className="mt-0.5 w-8 h-8 rounded-lg bg-neutral-800 group-hover:bg-amber-500/20 text-neutral-400 group-hover:text-amber-400 flex items-center justify-center shrink-0 transition-colors">
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-sm sm:text-base text-neutral-100 group-hover:text-amber-300 transition-colors truncate">
                    {service.name}
                  </h4>
                  <CheckCircle2 className="w-4 h-4 text-amber-500/80 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-xs text-neutral-400 mt-0.5 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom callout */}
      <div className="relative z-10 mt-6 pt-5 border-t border-neutral-800/80 text-center">
        <p className="text-xs text-neutral-400">
          Études, métrés et devis rapides sur plan ou sur site à Marrakech et environs.
        </p>
      </div>
    </div>
  );
};
