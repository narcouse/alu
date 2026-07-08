import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturesSection } from './components/FeaturesSection';
import { Footer } from './components/Footer';

export default function App() {
  const whatsappUrl = 'https://wa.me/212635658639?text=Bonjour%20Aluminium%20Atlas%20Maroc%2C%20je%20souhaite%20un%20devis%20pour%20un%20projet%20aluminium.';
  const instagramUrl = 'https://www.instagram.com/aluminium_service_marrakech/';
  const googleMapUrl = 'https://share.google/0LTV6vzOb9Y6MnEw4';

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* Navbar */}
      <Navbar whatsappUrl={whatsappUrl} />

      {/* Main Content */}
      <main className="flex-1">
        <Hero
          whatsappUrl={whatsappUrl}
          instagramUrl={instagramUrl}
          googleMapUrl={googleMapUrl}
        />
        <FeaturesSection />
      </main>

      {/* Footer */}
      <Footer
        whatsappUrl={whatsappUrl}
        instagramUrl={instagramUrl}
        googleMapUrl={googleMapUrl}
      />
    </div>
  );
}
