import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA Card */}
          <div className="glass-card p-12 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-neon-green/20 -z-10" />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-background/50 to-background/80 -z-10" />
            
            {/* Floating Elements */}
            <div className="absolute top-6 left-6 w-3 h-3 bg-primary rounded-full animate-pulse float" />
            <div className="absolute top-8 right-8 w-2 h-2 bg-accent rounded-full animate-pulse float" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-6 left-8 w-4 h-4 bg-neon-green rounded-full animate-pulse float" style={{ animationDelay: '2s' }} />
            <div className="absolute bottom-8 right-6 w-2 h-2 bg-primary-glow rounded-full animate-pulse float" style={{ animationDelay: '0.5s' }} />

            <div className="relative z-10 space-y-8">
              {/* Header */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="text-sm font-dm-sans text-glass-foreground">Join the Climate Revolution</span>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-orbitron font-black text-foreground leading-tight">
                  Ready to turn your <span className="gradient-text">farm into income</span>?
                </h2>
                
                <p className="text-xl text-muted-foreground font-dm-sans max-w-2xl mx-auto">
                  Join thousands of farmers already earning GreenCoins for their sustainable practices. 
                  The future of farming starts today.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button className="btn-glow px-8 py-4 text-lg font-dm-sans font-semibold group relative overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Start Earning Now
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                
                <Button variant="outline" className="glass px-8 py-4 text-lg font-dm-sans border-glass-border hover:border-accent transition-colors">
                  Download Whitepaper
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-glass-border/30">
                <div className="space-y-2">
                  <div className="text-2xl font-orbitron font-bold text-primary">5,000+</div>
                  <div className="text-sm text-muted-foreground font-dm-sans">Farmers in Pilot</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-orbitron font-bold text-accent">$2.5M+</div>
                  <div className="text-sm text-muted-foreground font-dm-sans">Rewards Distributed</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-orbitron font-bold text-neon-green">50,000</div>
                  <div className="text-sm text-muted-foreground font-dm-sans">Tons CO₂ Sequestered</div>
                </div>
              </div>

              {/* Urgency Element */}
              <div className="glass p-4 rounded-xl border border-primary/30">
                <p className="text-sm font-dm-sans text-foreground">
                  🚀 <strong>Early Access:</strong> Join before March 2024 and earn 2x rewards for your first year
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Social Proof */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "🏆", text: "UN Award Winner" },
              { icon: "🌍", text: "50 Countries" },
              { icon: "⚡", text: "Real-time Rewards" },
              { icon: "🔒", text: "Blockchain Secured" }
            ].map((item, index) => (
              <div key={index} className="glass-card p-4 group hover:scale-105 transition-transform duration-300">
                <div className="text-2xl mb-2">{item.icon}</div>
                <p className="text-sm font-dm-sans text-muted-foreground group-hover:text-foreground transition-colors">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
      
      {/* Particle Effect */}
      <div className="absolute inset-0 overflow-hidden -z-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};