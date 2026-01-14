import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Helmet } from "react-helmet-async";
import { 
  Sparkles, 
  Shield, 
  Droplets, 
  Car, 
  CircleCheck,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Sparkles,
    title: "Polimento Técnico",
    description: "Remoção de riscos, oxidação e marcas do tempo. Devolvemos o brilho original da pintura do seu veículo com técnicas avançadas.",
    benefits: ["Remove riscos superficiais", "Elimina oxidação", "Brilho espelhado", "Proteção duradoura"]
  },
  {
    icon: Shield,
    title: "Vitrificação de Pintura",
    description: "Proteção cerâmica de alta durabilidade que forma uma camada protetora contra intempéries, UV e contaminantes.",
    benefits: ["Proteção até 3 anos", "Resistência a riscos", "Hidrofobia extrema", "Facilidade de limpeza"]
  },
  {
    icon: Droplets,
    title: "Higienização Interna",
    description: "Limpeza profunda de todo o interior, incluindo bancos, carpetes, teto e painel. Eliminação de ácaros e bactérias.",
    benefits: ["Elimina odores", "Remove manchas", "Ambiente saudável", "Aspecto de novo"]
  },
  {
    icon: Car,
    title: "Lavagem Premium",
    description: "Lavagem detalhada com produtos de alta qualidade, incluindo motor, chassi e todos os detalhes externos.",
    benefits: ["Produtos premium", "Atenção aos detalhes", "Secagem manual", "Acabamento perfeito"]
  }
];

const Servicos = () => {
  return (
    <>
      <Helmet>
        <title>Serviços de Estética Automotiva | Glow Car Detailing - São Luís MA</title>
        <meta name="description" content="Conheça nossos serviços de estética automotiva: polimento técnico, vitrificação de pintura, higienização interna e lavagem premium em São Luís." />
        <link rel="canonical" href="https://glowcardetailing.com.br/servicos" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.1)_0%,transparent_70%)]" />
            <div className="container mx-auto px-4 relative z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
                Nossos <span className="text-gradient-gold">Serviços</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl text-center max-w-3xl mx-auto">
                Oferecemos os melhores serviços de estética automotiva em São Luís, 
                com produtos de alta qualidade e profissionais especializados.
              </p>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <article 
                    key={index}
                    className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:glow-gold-sm"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 rounded-xl bg-primary/10">
                        <service.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold text-foreground">{service.title}</h2>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-6">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-3 text-foreground">
                          <CircleCheck className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      variant="outline" 
                      className="w-full group border-primary/30 hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a href="https://wa.me/5598988375897" target="_blank" rel="noopener noreferrer">
                        Solicitar Orçamento
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-card">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pronto para <span className="text-gradient-gold">Transformar</span> seu Veículo?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Entre em contato conosco e agende uma avaliação gratuita.
              </p>
              <Button 
                size="lg"
                className="bg-gradient-gold text-primary-foreground font-semibold px-8"
                asChild
              >
                <a href="https://wa.me/5598988375897" target="_blank" rel="noopener noreferrer">
                  Falar com Especialista
                </a>
              </Button>
            </div>
          </section>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Servicos;
