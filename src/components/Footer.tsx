import { Instagram, Phone } from "lucide-react";
import logo from "@/assets/logo-glowcar.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-primary/10 bg-background py-16">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <img src={logo} alt="Glow Car Detailing" className="mb-6 h-16 w-auto" />
            <p className="max-w-md text-muted-foreground leading-relaxed">
              Excelência em estética automotiva, venda e financiamento de veículos em São Luís. 
              Transformamos carros e realizamos sonhos.
            </p>
          </div>
          <div>
            <h3 className="mb-5 text-lg font-semibold text-foreground">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#servicos" className="text-muted-foreground transition-colors hover:text-primary">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-muted-foreground transition-colors hover:text-primary">
                  Transformações
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="text-muted-foreground transition-colors hover:text-primary">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#localizacao" className="text-muted-foreground transition-colors hover:text-primary">
                  Localização
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-5 text-lg font-semibold text-foreground">Redes Sociais</h3>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/glowcarslz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 text-primary transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_15px_hsl(43_44%_60%_/_0.3)]"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://wa.me/5598988375897" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 text-primary transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_15px_hsl(43_44%_60%_/_0.3)]"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-primary/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Glow Car Detailing. Todos os direitos reservados.
            </p>
            <p className="text-xs text-muted-foreground/60">
              Desenvolvido por <span className="text-primary/60">Data_Value</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
