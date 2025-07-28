import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "How do I start earning GreenCoins?",
      answer: "Simply download our mobile app, register your farm, and begin implementing climate-smart practices. Our satellite monitoring system will automatically detect your sustainable activities and reward you with GreenCoins."
    },
    {
      question: "What qualifies as climate-smart farming?",
      answer: "We recognize various sustainable practices including cover cropping, agroforestry, reduced tillage, rotational grazing, organic farming, water conservation, soil carbon sequestration, and renewable energy use on farms."
    },
    {
      question: "How is my data verified?",
      answer: "We use a combination of satellite imagery, AI analysis, and IoT sensors to verify farming practices. This creates an immutable record on the blockchain, ensuring transparent and accurate reward distribution."
    },
    {
      question: "Can I use GreenCoins like regular money?",
      answer: "Yes! GreenCoins can be exchanged for local currency, used to purchase farming supplies, or traded on supported exchanges. We're building partnerships with agricultural suppliers to accept GreenCoins directly."
    },
    {
      question: "Do I need internet to use the platform?",
      answer: "No. Our offline-first mobile wallet syncs automatically when connectivity is available. You can continue earning and accessing your balance even in remote areas without consistent internet access."
    },
    {
      question: "How much can I earn with GreenCoins?",
      answer: "Earnings depend on your farm size, practices implemented, and environmental impact. Early farmers in our pilot program have earned between $200-$2000 per year, with potential for higher rewards as the platform scales."
    },
    {
      question: "Is GreenCoin secure and legitimate?",
      answer: "Absolutely. Built on the Internet Computer Protocol, all transactions are recorded on-chain with cryptographic security. We're partnered with recognized climate organizations and follow international environmental standards."
    },
    {
      question: "What farming data do you collect?",
      answer: "We only collect data necessary for verification: satellite images of your land, farming practice timestamps, and environmental impact metrics. All data is encrypted and you maintain full ownership and control."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-6xl font-orbitron font-black text-foreground leading-tight">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground font-dm-sans">
              Everything you need to know about GreenCoin and climate-smart farming rewards
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-primary via-accent to-neon-green rounded-full mx-auto" />
          </div>

          {/* FAQ Accordion */}
          <div className="glass-card p-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-0"
                >
                  <AccordionTrigger className="glass-card px-6 py-4 hover:border-primary/50 transition-all duration-300 rounded-xl mb-2 text-left [&[data-state=open]]:border-primary/50">
                    <span className="text-lg font-dm-sans font-semibold text-foreground pr-4">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-muted-foreground font-dm-sans leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <div className="glass-card p-6 inline-block">
              <p className="text-foreground font-dm-sans mb-4">
                Still have questions?
              </p>
              <a 
                href="mailto:support@greencoin.earth" 
                className="text-primary hover:text-primary-glow transition-colors font-dm-sans font-semibold"
              >
                Contact our support team →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 left-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-0 w-56 h-56 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `radial-gradient(circle at 75% 25%, hsl(var(--accent)) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
    </section>
  );
};