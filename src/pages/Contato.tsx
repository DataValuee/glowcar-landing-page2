import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Helmet } from "react-helmet-async";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefone",
    value: "(98) 98883-75897",
    link: "tel:+5598988375897"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "(98) 98883-75897",
    link: "https://wa.me/5598988375897"
  },
  {
    icon: MapPin,
    title: "Endereço",
    value: "Av. dos Holandeses, 1000 - São Luís, MA",
    link: "https://maps.google.com/?q=Av.+dos+Holandeses,+1000,+São+Luís,+MA"
  },
  {
    icon: Clock,
    title: "Horário de Funcionamento",
    value: "Seg-Sex: 8h-18h | Sáb: 8h-14h",
    link: null
  }
];

const Contato = () => {
  return (
    <>
      <Helmet>
        <title>Contato | Glow Car Detailing - Estética Automotiva São Luís MA</title>
        <meta name="description" content="Entre em contato com a Glow Car Detailing. Telefone, WhatsApp, endereço e horário de funcionamento. Agende seu serviço de estética automotiva." />
        <link rel="canonical" href="https://glowcardetailing.com.br/contato" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.1)_0%,transparent_70%)]" />
            <div className="container mx-auto px-4 relative z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
                Entre em <span className="text-gradient-gold">Contato</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl text-center max-w-3xl mx-auto">
                Estamos prontos para atender você. Escolha a melhor forma de contato.
              </p>
            </div>
          </section>

          {/* Contact Info Grid */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 text-center"
                  >
                    <div className="inline-flex items-center justify-center p-4 rounded-xl bg-primary/10 mb-4">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-lg font-semibold text-foreground mb-2">{info.title}</h2>
                    {info.link ? (
                      <a 
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Map Section */}
          <section className="py-16 bg-card">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Nossa <span className="text-gradient-gold">Localização</span>
              </h2>
              <div className="max-w-5xl mx-auto">
                <div className="rounded-2xl overflow-hidden border border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.9774851567373!2d-44.2649667!3d-2.4932597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f68e4bb2702ef1%3A0x8e1c5d1db3f7fa3b!2sAv.%20dos%20Holandeses%2C%201000%20-%20Calhau%2C%20S%C3%A3o%20Lu%C3%ADs%20-%20MA!5e0!3m2!1spt-BR!2sbr!4v1703849000000!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização Glow Car Detailing"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Prefere falar pelo <span className="text-gradient-gold">WhatsApp</span>?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Atendimento rápido e personalizado direto no seu celular.
              </p>
              <Button 
                size="lg"
                className="bg-gradient-gold text-primary-foreground font-semibold px-8"
                asChild
              >
                <a href="https://wa.me/5598988375897" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chamar no WhatsApp
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

export default Contato;
