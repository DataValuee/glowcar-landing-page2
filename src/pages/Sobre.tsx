import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Helmet } from "react-helmet-async";
import { Award, Users, Clock, Target } from "lucide-react";

const stats = [
  { icon: Award, value: "5+", label: "Anos de Experiência" },
  { icon: Users, value: "1000+", label: "Clientes Satisfeitos" },
  { icon: Clock, value: "24h", label: "Atendimento Ágil" },
  { icon: Target, value: "100%", label: "Comprometimento" }
];

const Sobre = () => {
  return (
    <>
      <Helmet>
        <title>Sobre a Glow Car Detailing | Estética Automotiva em São Luís MA</title>
        <meta name="description" content="Conheça a Glow Car Detailing, empresa especializada em estética automotiva premium em São Luís. Nossa história, valores e compromisso com a excelência." />
        <link rel="canonical" href="https://glowcardetailing.com.br/sobre" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.1)_0%,transparent_70%)]" />
            <div className="container mx-auto px-4 relative z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
                Sobre a <span className="text-gradient-gold">Glow Car</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl text-center max-w-3xl mx-auto">
                Paixão por carros e excelência em cada detalhe.
              </p>
            </div>
          </section>

          {/* Story Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="bg-card rounded-2xl p-8 md:p-12 border border-border">
                  <h2 className="text-3xl font-bold mb-6 text-foreground">
                    Nossa <span className="text-gradient-gold">História</span>
                  </h2>
                  <div className="space-y-6 text-muted-foreground leading-relaxed">
                    <p>
                      A Glow Car Detailing nasceu da paixão por automóveis e do desejo de 
                      oferecer serviços de estética automotiva de excelência em São Luís. 
                      Desde o início, nosso compromisso é tratar cada veículo como se fosse único, 
                      porque acreditamos que cada carro tem sua própria história.
                    </p>
                    <p>
                      Com anos de experiência no mercado, nos especializamos em técnicas 
                      avançadas de polimento, vitrificação e cuidado automotivo. Nossa equipe 
                      é constantemente treinada nas mais modernas tecnologias do setor.
                    </p>
                    <p>
                      Além dos serviços de estética, expandimos nossa atuação para a venda 
                      de veículos seminovos selecionados, sempre com a mesma dedicação e 
                      transparência que nos tornou referência na região.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 bg-card">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center p-4 rounded-xl bg-primary/10 mb-4">
                      <stat.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-2">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Nossos <span className="text-gradient-gold">Valores</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <article className="bg-card rounded-2xl p-8 border border-border text-center">
                  <h3 className="text-xl font-bold text-foreground mb-4">Excelência</h3>
                  <p className="text-muted-foreground">
                    Buscamos a perfeição em cada serviço, utilizando os melhores produtos e técnicas do mercado.
                  </p>
                </article>
                <article className="bg-card rounded-2xl p-8 border border-border text-center">
                  <h3 className="text-xl font-bold text-foreground mb-4">Transparência</h3>
                  <p className="text-muted-foreground">
                    Honestidade e clareza em todas as negociações e serviços prestados.
                  </p>
                </article>
                <article className="bg-card rounded-2xl p-8 border border-border text-center">
                  <h3 className="text-xl font-bold text-foreground mb-4">Compromisso</h3>
                  <p className="text-muted-foreground">
                    Dedicação total à satisfação do cliente, do início ao fim do atendimento.
                  </p>
                </article>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Sobre;
