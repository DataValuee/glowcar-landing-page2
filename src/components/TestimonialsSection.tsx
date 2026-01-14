import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Eduardo",
    role: "Empresário",
    text: "Resultado impecável! Meu carro ficou como novo. Atendimento de primeira classe e profissionais que realmente entendem do que fazem.",
    rating: 5
  },
  {
    name: "Amanda Costa",
    role: "Advogada",
    text: "Comprei meu carro através da Glow Car e foi a melhor decisão. Processo transparente, financiamento facilitado e veículo impecável.",
    rating: 5
  },
  {
    name: "Roberto Lima",
    role: "Médico",
    text: "A vitrificação ficou perfeita. Há 6 meses e o carro continua brilhando como no primeiro dia. Recomendo a todos!",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(43_44%_60%_/_0.05)_0%,transparent_50%)]" />
      <div className="container relative z-10">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            O que nossos <span className="text-gradient-gold">clientes</span> dizem
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl border border-primary/20 bg-card p-8 transition-all duration-500 hover:border-primary/40"
            >
              <div className="absolute -right-4 -top-4 text-primary/5 transition-all duration-500 group-hover:text-primary/10">
                <svg className="h-24 w-24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <div className="relative z-10">
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="mb-6 text-muted-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-gold text-lg font-bold text-primary-foreground">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
