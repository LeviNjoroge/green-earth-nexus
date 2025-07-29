import { Button } from "@/components/ui/button";
import { ChevronRight, Sparkles } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import greenCoinToken from "@/assets/greencoin-token.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background/90" />
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full opacity-60 animate-pulse float" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-accent rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-neon-green rounded-full opacity-50 animate-pulse float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-10 w-5 h-5 bg-primary-glow rounded-full opacity-30 animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Main Headline */}
          <div className="space-y-6 mb-12">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 text-sm font-dm-sans">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-glass-foreground">Blockchain-Powered Climate Action</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-orbitron font-black leading-tight">
              <span className="gradient-text">🌱 GreenCoin</span>
            </h1>
            
            <p className="text-2xl md:text-4xl font-orbitron font-bold text-foreground tracking-wide">
              Grow. Earn. Heal the Planet.
            </p>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-dm-sans max-w-3xl mx-auto leading-relaxed">
              Turn your sustainable farm actions into income with  blockchain-verified Carbon Credits Token rewards for climate-smart agriculture.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button className="btn-glow px-8 py-4 text-lg font-dm-sans font-semibold group">
              Get Started
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="glass-card px-8 py-4 text-lg font-dm-sans border-glass-border hover:border-primary">
              Learn More
            </Button>
          </div>

          {/* 3D Visual Element */}
          <div className="relative">
            <div className="glass-card max-w-md mx-auto p-8 perspective">
              <div className="transform-3d hover:rotate-y-12 transition-transform duration-700">
                <img 
                  src={greenCoinToken} 
                  alt="GreenCoin Token" 
                  className="w-full h-auto rounded-2xl shadow-2xl pulse-glow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-glass-border rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};