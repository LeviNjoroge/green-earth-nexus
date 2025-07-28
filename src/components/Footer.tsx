import { Github, Twitter, Linkedin, Mail, Leaf } from "lucide-react";

export const Footer = () => {
  const navigation = {
    main: [
      { name: "About", href: "#" },
      { name: "How It Works", href: "#" },
      { name: "Features", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Docs", href: "#" },
      { name: "Contact", href: "#" }
    ],
    social: [
      { name: "GitHub", icon: Github, href: "#" },
      { name: "Twitter", icon: Twitter, href: "#" },
      { name: "LinkedIn", icon: Linkedin, href: "#" },
      { name: "Email", icon: Mail, href: "mailto:hello@greencoin.earth" }
    ]
  };

  return (
    <footer className="relative border-t border-glass-border/30 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/50" />
      
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <div className="neomorph p-3 rounded-2xl bg-primary/10">
                  <Leaf className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-orbitron font-bold gradient-text">GreenCoin</h3>
                  <p className="text-sm text-muted-foreground font-dm-sans">Grow. Earn. Heal the Planet.</p>
                </div>
              </div>
              
              <p className="text-muted-foreground font-dm-sans leading-relaxed max-w-md">
                Empowering smallholder farmers with blockchain-verified rewards for sustainable agriculture. 
                Join the climate revolution and turn your environmental impact into income.
              </p>

              {/* Carbon Counter */}
              <div className="glass-card p-4 max-w-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground font-dm-sans">CO₂ Offset Today</p>
                    <p className="text-xl font-orbitron font-bold text-primary">127.3 tons</p>
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-primary animate-pulse" />
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-orbitron font-bold text-foreground">Navigation</h4>
              <ul className="space-y-3">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors font-dm-sans hover:translate-x-1 transform duration-200 inline-block"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-6">
              <h4 className="text-lg font-orbitron font-bold text-foreground">Stay Updated</h4>
              <p className="text-sm text-muted-foreground font-dm-sans">
                Get the latest updates on GreenCoin development and sustainable farming rewards.
              </p>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full bg-glass/20 border border-glass-border/30 rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors font-dm-sans"
                />
                <button className="w-full btn-glow py-3 text-sm font-dm-sans font-semibold">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-glass-border/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground font-dm-sans">
                © 2024 GreenCoin. Building the future of sustainable agriculture.
              </p>
              <p className="text-xs text-muted-foreground font-dm-sans mt-1">
                Made with 🌱 for farmers worldwide
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="glass p-3 rounded-xl hover:border-primary/50 transition-all duration-300 group"
                  aria-label={item.name}
                >
                  <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Legal Links */}
          <div className="text-center mt-8 pt-8 border-t border-glass-border/20">
            <div className="flex flex-wrap justify-center gap-6 text-xs text-muted-foreground font-dm-sans">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Whitepaper</a>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </footer>
  );
};