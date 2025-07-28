import brokenGlobe from "@/assets/broken-globe.jpg";

export const ProblemStatement = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8 lg:order-2">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-orbitron font-black text-foreground leading-tight">
                  Farming the Future is{" "}
                  <span className="text-destructive relative">
                    Broken
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-destructive/30 blur-sm" />
                  </span>
                </h2>
                
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent rounded-full" />
              </div>

              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground font-dm-sans">
                <p>
                  <strong className="text-foreground">2.5 billion smallholder farmers</strong> worldwide are doing the critical work of feeding the planet while fighting climate change through sustainable practices.
                </p>
                
                <p>
                  Yet they remain <strong className="text-foreground">locked out</strong> of the $100+ billion global carbon markets and climate finance systems that profit from their environmental stewardship.
                </p>
                
                <p>
                  While corporations earn millions from carbon credits, the farmers actually <strong className="text-primary">healing our planet</strong> see none of the benefits. This broken system perpetuates poverty while threatening food security and climate goals.
                </p>
              </div>

              <div className="glass-card p-6 border-l-4 border-l-destructive">
                <p className="text-foreground font-dm-sans font-semibold">
                  "The people doing the most for climate action earn the least from it."
                </p>
              </div>
            </div>

            {/* Visual Element */}
            <div className="lg:order-1 relative">
              <div className="relative perspective">
                <div className="glass-card p-8 transform-3d hover:rotate-y-6 transition-transform duration-700">
                  <img 
                    src={brokenGlobe} 
                    alt="Broken Earth representing climate crisis" 
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                  
                  {/* Floating Damage Indicators */}
                  <div className="absolute top-4 right-4 glass p-3 rounded-full float">
                    <div className="w-3 h-3 bg-destructive rounded-full animate-pulse" />
                  </div>
                  <div className="absolute bottom-8 left-6 glass p-2 rounded-full float" style={{ animationDelay: '1s' }}>
                    <div className="w-2 h-2 bg-destructive/70 rounded-full animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-destructive/10 rounded-3xl blur-3xl -z-10 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 -z-20 opacity-5">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--destructive)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
    </section>
  );
};