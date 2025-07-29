import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
     
    {
      question: "What are Greencoin carbon credits and how do they work?",
      answer: "Carbon credits represent one metric ton of CO₂ equivalent that has been removed from the atmosphere or prevented from being emitted. When farmers adopt climate-smart practices like agroforestry or no-till farming, they increase carbon storage in soil and biomass. These verified carbon reductions can be converted into tradeable Greencoin Token credits that companies purchase to offset their emissions. Each credit you generate represents real environmental impact and provides additional income for sustainable farming practices."
    },
    {
      question: "How do I start earning GreenCoins?",
      answer: "Simply download our mobile app, register your farm, and begin implementing climate-smart practices. Our satellite monitoring system will automatically detect your sustainable activities and reward you with GreenCoins."
    },
    {
  question: "What Climate-Smart farming practices qualify for carbon credits?",
  answer: (
    <div>
      <p style={{ margin: "0 0 15px 0", lineHeight: 1.6, color: "var(--secondary)" }}>
        We support a wide range of climate-smart agricultural practices:
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "15px",
          margin: "15px 0",
        }}
      >
        <div>
          <strong style={{ color: "var(--primary)" }}>Soil Management:</strong>
          <ul style={{ margin: "5px 0", paddingLeft: "15px" }}>
            <li>No-till farming</li>
            <li>Reduced tillage</li>
            <li>Cover cropping</li>
            <li>Crop rotation</li>
          </ul>
        </div>
        <div>
          <strong style={{ color: "var(--primary)" }}>Agroforestry:</strong>
          <ul style={{ margin: "5px 0", paddingLeft: "15px" }}>
            <li>Tree intercropping</li>
            <li>Silvopasture</li>
            <li>Windbreaks</li>
            <li>Buffer strips</li>
          </ul>
        </div>
        <div>
          <strong style={{ color: "var(--primary)" }}>Other Practices:</strong>
          <ul style={{ margin: "5px 0", paddingLeft: "15px" }}>
            <li>Composting</li>
            <li>Improved grazing</li>
            <li>Wetland restoration</li>
            <li>Efficient irrigation</li>
          </ul>
        </div>
      </div>
    </div>
  ),
},
    {
      question: "How is my data verified?",
      answer: "GreenCoin verifies your data through a multi-step process. First, eco-friendly farming data is collected via sensors, images, or GPS. Then, AI and satellite tools analyze your carbon-reducing activities. In some cases, field officers visit for on-ground verification. Once confirmed, your data is stored securely on the blockchain. Verified actions are converted into carbon credits, and you earn GreenCoin tokens as rewards. This ensures fairness, accuracy, and transparency across the platform."
    },

    {
      question: "How long does it take to get paid?",
      answer: (
        <div>
          <p style={{ margin: 0, lineHeight: 1.6, color: "var(--secondary)" }}>
            The payment timeline depends on verification requirements:<br /><br />
            <strong>Initial Setup:</strong> 4-6 weeks for registration and baseline measurements<br />
            <strong>First Payment:</strong> 6-12 months after implementation (varies by practice)<br />
            <strong>Ongoing Payments:</strong> Annual payments after verification<br />
            <strong>Marketplace Sales:</strong> 2-14 days after listing credits for sale<br /><br />
            Fast-growing practices like cover crops can generate credits within 6 months, while tree-based systems may take 12-18 months for first payments but offer higher long-term returns.
          </p>
        </div>
      ),
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
      question: "What if I'm not tech-savvy? Can I still participate?",
      answer: (
        <div>
          <p style={{ margin: 0, lineHeight: 1.6, color: "var(--secondary)" }}>
            Absolutely! We provide extensive support for farmers at all technology levels:<br /><br />
            <strong>On-ground support:</strong> Local field officers provide hands-on assistance<br />
            <strong>Training programs:</strong> In-person workshops in local languages<br />
            <strong>Simple tools:</strong> Mobile apps designed for basic phones<br />
            <strong>Community groups:</strong> Farmer cooperatives for peer learning<br />
            <strong>24/7 support:</strong> Phone and SMS support in Swahili, English, and local languages<br /><br />
            Many of our most successful farmers started with minimal technology experience. We'll guide you through every step of the process.
          </p>
        </div>
      ),
    },

    {
      question: "How much money can I earn from carbon credits?",
      answer: (
        <div>
          <p style={{ margin: "0 0 15px 0", lineHeight: 1.6, color: "var(--secondary)" }}>
            Earnings depend on your farm size, practices implemented, and local conditions. Typical ranges are:
          </p>
          <ul style={{ margin: 0, paddingLeft: 20, color: "var(--secondary)" }}>
            <li><strong>Small farms (0.5-2 ha):</strong> $150-800 per year</li>
            <li><strong>Medium farms (2-10 ha):</strong> $800-4,000 per year</li>
            <li><strong>Large farms (10+ ha):</strong> $4,000+ per year</li>
          </ul>
          <p style={{ margin: "15px 0 0 0", lineHeight: 1.6, color: "var(--secondary)" }}>
            Agroforestry typically generates the highest returns, while practices like no-till provide steady, long-term income. Most farmers see 25-45% increase in total farm income within 3 years.
          </p>
        </div>
      ),
    },
    {
      question: "Is GreenCoin secure and legitimate?",
      answer: "Absolutely. Built on the Internet Computer Protocol, all transactions are recorded on-chain with cryptographic security. We're partnered with recognized climate organizations and follow international environmental standards."
    },
    {
      question: "What farming data do you collect?",
      answer: "We only collect data necessary for verification: GreenCoin collects essential farming data to accurately assess your environmental impact and reward you with carbon credits. This includes information such as crop types, land size, soil health, irrigation methods, fertilizer usage, tree planting activities, and tillage practices. By analyzing these inputs, GreenCoin determines how much carbon your farming methods are reducing or sequestering. This data is securely stored and verified through blockchain technology to ensure transparency and fairness. Accurate data collection enables you to earn GreenCoin tokens based on your sustainable actions, helping you benefit financially while contributing to a greener planet."
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