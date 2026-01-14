import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";

const galleryImages = [
  { src: gallery1, alt: "Transformação - Polimento Exterior" },
  { src: gallery2, alt: "Transformação - Higienização Interior" },
  { src: gallery3, alt: "Aplicação de Vitrificação" },
];

const GallerySection = () => {
  return (
    <section id="galeria" className="relative border-t border-primary/10 bg-secondary/20 py-24 lg:py-32">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            <span className="text-gradient-gold">Transformações</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Resultados que falam por si
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-primary/20"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 border-2 border-primary/0 rounded-xl transition-all duration-500 group-hover:border-primary/30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
