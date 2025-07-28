import { HeroSection } from "@/components/HeroSection";
import { ProblemStatement } from "@/components/ProblemStatement";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { AboutSection } from "@/components/AboutSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-dm-sans overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Problem Statement */}
      <ProblemStatement />
      
      {/* How It Works */}
      <HowItWorks />
      
      {/* Features */}
      <Features />
      
      {/* About Section */}
      <AboutSection />
      
      {/* FAQ Section */}
      <FAQSection />
      
      {/* CTA Section */}
      <CTASection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;