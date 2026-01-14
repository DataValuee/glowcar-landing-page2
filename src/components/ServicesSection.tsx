import { Sparkles, Car, Droplets, CreditCard, RefreshCw } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => (
  <div className="group relative overflow-hidden rounded-xl border border-primary/20 bg-card p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(43_44%_60%_/_0.15)]">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    <div className="relative z-10">
      <div className="mb-6 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_hsl(43_44%_60%_/_0.3)]">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-semibold text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  </div>
);

const services = [
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Estética Completa",
    description: "Polimento, vitrificação e proteção de pintura com produtos premium importados."
  },
  {
    icon: <Droplets className="h-6 w-6" />,
    title: "Higienização Interna",
    description: "Limpeza profunda de bancos, teto, carpetes e painéis com tratamento antibacteriano."
  },
  {
    icon: <Car className="h-6 w-6" />,
    title: "Venda de Veículos",
    description: "Carros seminovos selecionados, revisados e com garantia de procedência."
  },
  {
    icon: <RefreshCw className="h-6 w-6" />,
    title: "Repasse",
    description: "Intermediação segura e transparente na compra e venda do seu veículo."
  },
  {
    icon: <CreditCard className="h-6 w-6" />,
    title: "Financiamento",
    description: "As melhores taxas do mercado com aprovação facilitada e parcelamento flexível."
  }
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(43_44%_60%_/_0.05)_0%,transparent_50%)]" />
      <div className="container relative z-10">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Nossos <span className="text-gradient-gold">Serviços</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Excelência em cada detalhe para transformar seu veículo
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
