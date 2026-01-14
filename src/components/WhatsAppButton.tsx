import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5598988375897?text=Olá! Gostaria de mais informações sobre os serviços da Glow Car."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-gold text-primary-foreground shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_hsl(43_44%_60%_/_0.5)] animate-glow-pulse"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
};

export default WhatsAppButton;
