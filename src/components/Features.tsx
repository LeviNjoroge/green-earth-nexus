import { Shield, Smartphone, Eye, Users } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Transparent Blockchain Rewards",
      description: "Every GreenCoin earned is recorded on-chain, providing complete transparency and immutable proof of your climate impact.",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: Smartphone,
      title: "Offline Sync Wallet",
      description: "Access your earnings even in remote areas. Our mobile wallet syncs automatically when connectivity returns.",
      gradient: "from-accent to-accent-glow"
    },
    {
      icon: Eye,
      title: "AI + Satellite Verification",
      description: "Advanced satellite monitoring and machine learning algorithms automatically verify your sustainable farming practices.",
      gradient: "from-neon-blue to-neon-purple"
    },
    {
      icon: Users,
      title: "Farmer-Owned & Inclusive",
      description: "Built by farmers, for farmers. Democratic governance ensures the platform serves your community's needs.",
      gradient: "from-earth to-earth-light"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-4xl md:text-6xl font-orbitron font-black text-foreground leading-tight">
              Powered by <span className="gradient-text">Future Tech</span>
            </h2>
            <p className="text-xl text-muted-foreground font-dm-sans max-w-3xl mx-auto">
              Cutting-edge technology designed to empower smallholder farmers worldwide
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-primary via-accent to-neon-green rounded-full mx-auto" />
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="glass-card group hover:scale-105 transition-all duration-500 relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10 p-6 space-y-6">
                  {/* Icon */}
                  <div className="relative">
                    <div className={`neomorph p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-90`}>
                      <feature.icon className="w-8 h-8 text-white drop-shadow-lg" />
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`} />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-orbitron font-bold text-foreground group-hover:gradient-text transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground font-dm-sans leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover Effect Line */}
                  <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
                </div>

                {/* Floating Dots */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-white/20 rounded-full animate-pulse" />
                <div className="absolute bottom-8 left-4 w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="glass-card inline-block p-6">
              <p className="text-foreground font-dm-sans font-semibold mb-4">
                Ready to experience the future of farming?
              </p>
              <div className="flex items-center justify-center gap-2 text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-dm-sans">Launching Q2 2024</span>
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse float" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/5 rounded-full blur-3xl animate-pulse float" style={{ animationDelay: '3s' }} />
    </section>
  );
};