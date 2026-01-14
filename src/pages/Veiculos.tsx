import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Helmet } from "react-helmet-async";
import { Car, Shield, CreditCard, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import venda1 from "@/assets/venda-1.png";
import venda2 from "@/assets/venda-2.png";
import venda3 from "@/assets/venda-3.png";

const vehicles = [
  {
    image: venda1,
    name: "Veículo Premium",
    description: "Seminovo selecionado com garantia"
  },
  {
    image: venda2,
    name: "Veículo Executivo",
    description: "Revisado e pronto para rodar"
  },
  {
    image: venda3,
    name: "Veículo Familiar",
    description: "Conforto e segurança para sua família"
  }
];

const benefits = [
  {
    icon: Car,
    title: "Veículos Selecionados",
    description: "Apenas os melhores seminovos passam pela nossa seleção criteriosa."
  },
  {
    icon: Shield,
    title: "Garantia Inclusa",
    description: "Todos os veículos com garantia para sua tranquilidade."
  },
  {
    icon: CreditCard,
    title: "Financiamento Facilitado",
    description: "Trabalhamos com os principais bancos para facilitar sua compra."
  },
  {
    icon: FileCheck,
    title: "Documentação OK",
    description: "Veículos com toda documentação regularizada e verificada."
  }
];

const Veiculos = () => {
  return (
    <>
      <Helmet>
        <title>Veículos Seminovos | Glow Car Detailing - São Luís MA</title>
        <meta name="description" content="Compre seu seminovo na Glow Car Detailing. Veículos selecionados com garantia, financiamento facilitado e documentação OK em São Luís." />
        <link rel="canonical" href="https://glowcardetailing.com.br/veiculos" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.1)_0%,transparent_70%)]" />
            <div className="container mx-auto px-4 relative z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
                Veículos <span className="text-gradient-gold">Seminovos</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl text-center max-w-3xl mx-auto">
                Encontre o carro perfeito para você. Seminovos selecionados com qualidade e procedência garantida.
              </p>
            </div>
          </section>

          {/* Benefits */}
          <section className="py-16 bg-card">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center p-6">
                    <div className="inline-flex items-center justify-center p-4 rounded-xl bg-primary/10 mb-4">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h2>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Vehicles Grid */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Nosso <span className="text-gradient-gold">Estoque</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {vehicles.map((vehicle, index) => (
                  <article 
                    key={index}
                    className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 group"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img 
                        src={vehicle.image} 
                        alt={vehicle.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-2">{vehicle.name}</h3>
                      <p className="text-muted-foreground mb-4">{vehicle.description}</p>
                      <Button 
                        variant="outline"
                        className="w-full border-primary/30 hover:bg-primary hover:text-primary-foreground"
                        asChild
                      >
                        <a href="https://wa.me/5598988375897" target="_blank" rel="noopener noreferrer">
                          Mais Informações
                        </a>
                      </Button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-card">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Não encontrou o que procura?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Entre em contato e conte-nos o que você busca. 
                Temos acesso a diversos veículos e podemos encontrar o ideal para você.
              </p>
              <Button 
                size="lg"
                className="bg-gradient-gold text-primary-foreground font-semibold px-8"
                asChild
              >
                <a href="https://wa.me/5598988375897" target="_blank" rel="noopener noreferrer">
                  Falar com Consultor
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

export default Veiculos;
