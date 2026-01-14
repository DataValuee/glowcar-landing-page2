import venda1 from "@/assets/venda-1.png";
import venda2 from "@/assets/venda-2.png";
import venda3 from "@/assets/venda-3.png";
import { Car, Handshake } from "lucide-react";

const sales = [
  { image: venda1, alt: "Cliente satisfeito com Fiat" },
  { image: venda2, alt: "Entrega de veículo Toyota" },
  { image: venda3, alt: "Negócio fechado Hyundai" },
];

const SalesSection = () => {
  return (
    <section id="vendas" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Car className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Vendas <span className="text-primary">Realizadas</span>
            </h2>
            <Handshake className="w-8 h-8 text-primary" />
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Clientes satisfeitos que realizaram o sonho do carro próprio com a Glow Car
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sales.map((sale, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-primary/20 bg-card hover:border-primary/50 transition-all duration-500"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={sale.image}
                  alt={sale.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                <span className="text-primary font-semibold text-lg flex items-center gap-2">
                  <Handshake className="w-5 h-5" />
                  Negócio Fechado!
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Quer ser o próximo? Temos as melhores condições para você!
          </p>
          <a
            href="https://wa.me/5598988375897?text=Olá! Tenho interesse em comprar um veículo."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
          >
            <Car className="w-5 h-5" />
            Ver Veículos Disponíveis
          </a>
        </div>
      </div>
    </section>
  );
};

export default SalesSection;
