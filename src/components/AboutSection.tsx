import { Globe, Target, Heart, Award } from "lucide-react";
import greenCoinToken from "@/assets/greencoin-token.jpg";
import greencoin from "@/assets/earn.png";
export const AboutSection = () => {
  const partners = [
    { name: "Internet Computer", logo: "🌐" },
    { name: "UN SDGs", logo: "🎯" },
    { name: "Climate Protocol", logo: "🌱" },
    { name: "FarmTech Alliance", logo: "🚜" }
  ];

  const stats = [
    { value: "2.5B", label: "Farmers Worldwide", icon: Users },
    { value: "$100B+", label: "Carbon Market", icon: Target },
    { value: "30%", label: "Food Production", icon: Globe },
    { value: "Zero", label: "Farmer Benefits", icon: Heart }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-orbitron font-black text-foreground leading-tight">
                  About <span className="gradient-text">GreenCoin</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent rounded-full" />
              </div>

              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground font-dm-sans">
                <p>
                  <strong className="text-foreground">GreenCoin</strong> is a revolutionary blockchain platform that directly rewards smallholder farmers for their environmental stewardship and climate-smart agricultural practices.
                </p>
                
                <p>
                  Built on the <strong className="text-primary">Internet Computer Protocol</strong>, we use cutting-edge satellite monitoring and AI verification to automatically track and reward sustainable farming activities with transparent, instant blockchain payments.
                </p>
                
                <p>
                  Our mission is to democratize access to climate finance, ensuring that the <strong className="text-foreground">farmers healing our planet</strong> finally benefit from the value they create.
                </p>
              </div>

              {/* Mission Points */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Globe, text: "Global Impact" },
                  { icon: Target, text: "Direct Rewards" },
                  { icon: Heart, text: "Farmer-First" },
                  { icon: Award, text: "Verified Results" }
                ].map((item, index) => (
                  <div key={index} className="glass-card p-4 flex items-center gap-3 group hover:border-primary/50 transition-all duration-300">
                    <item.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm font-dm-sans font-semibold text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Partners */}
              <div className="space-y-4">
                <h3 className="text-xl font-orbitron font-bold text-foreground">Partners & Protocols</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {partners.map((partner, index) => (
                    <div key={index} className="glass-card p-4 text-center group hover:scale-105 transition-all duration-300">
                      <div className="text-2xl mb-2">{partner.logo}</div>
                      <p className="text-xs font-dm-sans text-muted-foreground group-hover:text-foreground transition-colors">
                        {partner.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="glass-card p-8 perspective">
                <div className="transform-3d hover:rotate-y-12 transition-transform duration-700">
                  <img 
                    src={greencoin} 
                    alt="GreenCoin Platform" 
                    className="w-full h-auto rounded-2xl shadow-2xl pulse-glow"
                  />
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-4 -left-4 glass-card p-3 float">
                <div className="text-center">
                  <div className="text-lg font-orbitron font-bold text-primary">99.9%</div>
                  <div className="text-xs text-muted-foreground font-dm-sans">Uptime</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 glass-card p-3 float" style={{ animationDelay: '1s' }}>
                <div className="text-center">
                  <div className="text-lg font-orbitron font-bold text-accent">24/7</div>
                  <div className="text-xs text-muted-foreground font-dm-sans">Monitoring</div>
                </div>
              </div>

              {/* Background Glow */}
              <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-3xl -z-10 pulse-glow" />
            </div>
          </div>

          {/* Bottom Video Placeholder */}
          <div className="mt-20 text-center">
            <div className="glass-card p-12 max-w-4xl mx-auto">
              <div className="space-y-6">
                <h3 className="text-2xl font-orbitron font-bold text-foreground">
                  See GreenCoin in Action
                </h3>
                <div className="aspect-video bg-gradient-to-br from-muted to-card rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                      <div className="w-0 h-0 border-l-8 border-l-primary border-y-6 border-y-transparent ml-1" />
                    </div>
                    <p className="text-muted-foreground font-dm-sans">Demo Video Coming Soon</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
    </section>
  );
};

// Fix import
const Users = Globe;