import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import Themes from "@/components/Themes";
import Team from "@/components/Team";
import Sponsors from "@/components/Sponsors";
import TechCards from "@/components/Problemstatement";
import WhatWeOffer from "@/components/WhatWeOffer";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-black to-[#004d2a] z-0" />
      
      {/* Animated tech patterns */}
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475')] bg-cover bg-center opacity-5 z-0" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0" />
      
      {/* Floating tech elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: 0.1
            }}
          >
            <div className="w-16 h-16 bg-primary/20 rounded-full blur-xl" />
          </div>
        ))}
      </div>
      
      <Navigation />
      
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          {/* Main content */}
          <Hero />
          <WhatWeOffer />
          <Timeline />
          <Themes />
          <Team />
          <Sponsors />
          {/* TechCards Section */}
          <div className="mt-16">
            <TechCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
