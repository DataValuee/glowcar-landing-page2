import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-glowcar.png";
import heroCar from "@/assets/hero-car.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroCar} 
          alt="Luxury car" 
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 to-transparent" />
      </div>

      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Content */}
      <div className="container relative z-10 pt-20">
        <div className="mx-auto max-w-4xl text-center">
          <img 
            src={logo} 
            alt="Glow Car Detailing" 
            className="mx-auto mb-8 h-32 w-auto animate-fade-in md:h-44 lg:h-52"
          />
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground animate-fade-in-delay-1 md:text-5xl lg:text-6xl xl:text-7xl">
            Seu veículo merece{" "}
            <span className="text-gradient-gold">brilhar</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground animate-fade-in-delay-2 md:text-xl">
            Estética automotiva premium, venda e financiamento de veículos em São Luís
          </p>
          <div className="flex flex-col items-center gap-4 animate-fade-in-delay-3 sm:flex-row sm:justify-center">
            <Button variant="hero" size="xl" asChild>
              <a href="https://wa.me/5598988375897?text=Olá! Gostaria de agendar um serviço.">Agendar Agora</a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="#servicos">Ver Serviços</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float hidden md:flex">
        <div className="flex flex-col items-center gap-2 text-primary/60">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="h-10 w-[1px] bg-gradient-to-b from-primary/60 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
