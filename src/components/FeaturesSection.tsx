import React from 'react';
import { Building2, Award, Clock, Wrench } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Building2,
      title: 'Projets d\'Envergure & Villas',
      description: 'Expertise reconnue dans l\'équipement de résidences de prestige, villas contemporaines et immeubles commerciaux à Marrakech.'
    },
    {
      icon: Award,
      title: 'Qualité & Certification',
      description: 'Utilisation de profilés aluminium haut de gamme et de verres trempés conformes aux normes internationales de sécurité et d\'isolation.'
    },
    {
      icon: Wrench,
      title: 'Sur-Mesure & Finitions',
      description: 'Conception personnalisée, étude technique rigoureuse et pose par des équipes d\'artisans qualifiés.'
    },
    {
      icon: Clock,
      title: 'Réactivité & Suivi',
      description: 'Accompagnement de l\'étude initiale jusqu\'à la livraison avec un service client disponible 6j/7 via WhatsApp.'
    }
  ];

  return (
    <section className="py-20 bg-neutral-900/60 border-t border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-amber-400 font-semibold">
            Excellence & Fiabilité
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Pourquoi Choisir Aluminium Atlas Maroc ?
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Le partenaire privilégié des architectes, maîtres d'œuvre et particuliers exigeants à Marrakech.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-6 sm:p-8 rounded-3xl bg-neutral-950/80 border border-neutral-800 hover:border-amber-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-xl"
              >
                <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-neutral-700/60 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-3 group-hover:text-amber-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
