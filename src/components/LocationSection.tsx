import { MapPin, Clock, Phone } from "lucide-react";
const LocationSection = () => {
  return <section id="localizacao" className="relative border-t border-primary/10 bg-secondary/30 py-24 lg:py-32">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Onde <span className="text-gradient-gold">Estamos</span>
          </h2>
        </div>
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">Endereço</h3>
                <p className="text-muted-foreground leading-relaxed">
                  R. Luxemburgo<br />
                  Anjo da Guarda, São Luís - MA<br />
                  CEP: 65085-803
                </p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">Horário de Funcionamento</h3>
                <p className="text-muted-foreground">
                  Segunda a Sexta: 08h às 18h<br />
                  Sábado: 08h às 14h
                </p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">Contato</h3>
                <p className="text-muted-foreground">
                  ​98988375897<br />
                  contato@glowcar.com.br
                </p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border border-primary/20">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.7!2d-44.29!3d-2.53!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sR.%20Luxemburgo%2C%20Anjo%20da%20Guarda%2C%20S%C3%A3o%20Lu%C3%ADs%20-%20MA%2C%2065085-803!5e0!3m2!1spt-BR!2sbr!4v1702900000000!5m2!1spt-BR!2sbr" width="100%" height="400" style={{
            border: 0
          }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="grayscale transition-all duration-500 hover:grayscale-0" />
          </div>
        </div>
      </div>
    </section>;
};
export default LocationSection;