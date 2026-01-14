import { Award, Shield, Users, Star } from "lucide-react";

const differentials = [
  {
    icon: <Users className="h-8 w-8" />,
    title: "Profissionais Especializados",
    description: "Equipe treinada e certificada"
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Produtos Premium",
    description: "Materiais de alta performance"
  },
  {
    icon: <Star className="h-8 w-8" />,
    title: "Atendimento Personalizado",
    description: "Cada cliente é único"
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Garantia de Qualidade",
    description: "Compromisso com excelência"
  }
];

const DifferentialsSection = () => {
  return (
    <section className="relative border-y border-primary/10 bg-secondary/30 py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Por que escolher a <span className="text-gradient-gold">Glow Car</span>?
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((item, index) => (
            <div 
              key={index} 
              className="group text-center"
            >
              <div className="mx-auto mb-5 inline-flex rounded-full border border-primary/30 bg-background p-5 text-primary transition-all duration-300 group-hover:border-primary group-hover:shadow-[0_0_25px_hsl(43_44%_60%_/_0.3)]">
                {item.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
