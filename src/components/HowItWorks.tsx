import { Leaf, Satellite, Coins, ArrowRight } from "lucide-react";
import sustainableFarm from "@/assets/sustainable-farm.jpg";
import farm from "@/assets/farm.png";
import satelliteVerification from "@/assets/satellite-verification.jpg";
import blockchainRewards from "@/assets/blockchain-rewards.jpg";
import greenCoinRevolution from "@/assets/GreenCoin_ A Digital Revolution.png";
import grow from "@/assets/grow.png";
import impact from "@/assets/impact.png";
import earn from "@/assets/Earn Green.png";
import coin from "@/assets/earn.png";

export const HowItWorks = () => {
  const steps = [
    {
      icon: Leaf,
      title: "Farm Sustainably",
      description: "Farmers register their land and agricultural practices through our secure platform, providing GPS coordinates, farm size, and current practices.",
      image: farm,
      color: "primary"
    },
    {
      icon: Satellite,
      title: "Proof of Impact",
      description: "Advanced satellite monitoring, IoT sensors, and field sampling techniques automatically track carbon sequestration, emission reductions, and your environmental impact.",
      image: impact,
      color: "accent"
    },
    {
      icon: Coins,
      title: "Earn GreenCoins",
      description: "Verified carbon reductions are converted to tradeable tokens on the ICP blockchain, Farmers instantly receive blockchain-verified rewards directly to their wallet,providing transparent and immutable records.",
      image: coin,
      color: "neon-green"
    },
    {
      icon: ArrowRight,
      title: "Get Paid & Grow",
      description: "Receive your GreenCoin rewards directly to your wallet. Use your tokens for farm supplies, local currency, or reinvest in sustainable practices. Watch your impact and income grow year after year.",
      image: grow,
      color: "primary"
    }
  ];



  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-4xl md:text-6xl font-orbitron font-black text-foreground leading-tight">
              How <span className="gradient-text">GreenCoin</span> Works
            </h2>
            <p className="text-xl text-muted-foreground font-dm-sans max-w-3xl mx-auto">
              Four simple steps to transform your sustainable farming into verified income
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-primary via-accent to-neon-green rounded-full mx-auto" />
          </div>

          {/* Steps */}
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center gap-4">
                      <div className={`neomorph p-4 rounded-2xl bg-${step.color}/10`}>
                        <step.icon className={`w-8 h-8 text-${step.color}`} />
                      </div>
                      <div className="text-sm font-orbitron font-bold text-muted-foreground">
                        STEP {index + 1}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-3xl md:text-4xl font-orbitron font-bold text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-lg text-muted-foreground font-dm-sans leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Progress Indicator */}
                    <div className="flex items-center gap-4">
                      <div className="flex space-x-2">
                        {steps.map((_, i) => (
                          <div
                            key={i}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              i <= index ? 'bg-primary' : 'bg-muted'
                            }`}
                          />
                        ))}
                      </div>
                      <div className="text-sm text-muted-foreground font-dm-sans">
                        {index + 1} of {steps.length}
                      </div>
                    </div>
                  </div>

                  {/* Visual */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="glass-card p-8 perspective">
                      <div className="transform-3d hover:rotate-y-6 transition-transform duration-700">
                        <img 
                          src={step.image} 
                          alt={step.title}
                          className="w-full h-auto rounded-2xl shadow-2xl"
                        />
                      </div>
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 glass p-3 rounded-full float">
                      <step.icon className={`w-6 h-6 text-${step.color}`} />
                    </div>
                  </div>
                </div>

                {/* Flow Arrow */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center mt-12 mb-8">
                    <div className="glass-card p-4 rounded-full">
                      <ArrowRight className="w-6 h-6 text-accent animate-pulse" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Connection Lines */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-3/4">
            <div className="w-full h-full bg-gradient-to-b from-primary via-accent to-neon-green opacity-20 rounded-full" />
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
    </section>
  );
};