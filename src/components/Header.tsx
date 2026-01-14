import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo-glowcar.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen || typeof document === "undefined") return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isMobileMenuOpen]);

  const navLinks = isHomePage 
    ? [
        { href: "#servicos", label: "Serviços", isAnchor: true },
        { href: "#galeria", label: "Transformações", isAnchor: true },
        { href: "#depoimentos", label: "Depoimentos", isAnchor: true },
        { href: "#localizacao", label: "Localização", isAnchor: true },
      ]
    : [
        { href: "/", label: "Início", isAnchor: false },
        { href: "/servicos", label: "Serviços", isAnchor: false },
        { href: "/veiculos", label: "Veículos", isAnchor: false },
        { href: "/sobre", label: "Sobre", isAnchor: false },
        { href: "/contato", label: "Contato", isAnchor: false },
      ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-background backdrop-blur-md border-b border-primary/10 py-3"
          : "bg-background border-b border-primary/10 py-3 lg:bg-transparent lg:border-primary/0 lg:py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="relative z-10">
          <img src={logo} alt="Glow Car Detailing" className="h-16 w-auto md:h-20" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            link.isAnchor ? (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            )
          ))}
          <Button variant="gold" size="default" asChild>
            <a href="https://wa.me/5598988375897?text=Olá! Gostaria de agendar um serviço.">Agendar Agora</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="relative z-50 lg:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen &&
          typeof document !== "undefined" &&
          createPortal(
            <div
              className="fixed inset-0 z-[60] bg-background lg:hidden"
              role="dialog"
              aria-modal="true"
            >
              <div className="absolute right-6 top-6 z-[70]">
                <button
                  className="text-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Fechar menu"
                >
                  <X className="h-7 w-7" />
                </button>
              </div>

              <div className="flex h-[100dvh] flex-col items-center justify-center overflow-y-auto py-16">
                <nav className="container flex flex-col items-center gap-8">
                  {navLinks.map((link) =>
                    link.isAnchor ? (
                      <a
                        key={link.href}
                        href={link.href}
                        className="text-2xl font-medium text-foreground transition-colors hover:text-primary"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        key={link.href}
                        to={link.href}
                        className="text-2xl font-medium text-foreground transition-colors hover:text-primary"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )
                  )}
                  <Button
                    variant="gold"
                    size="lg"
                    asChild
                    className="mt-6"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <a href="https://wa.me/5598988375897?text=Olá! Gostaria de agendar um serviço.">
                      Agendar Agora
                    </a>
                  </Button>
                </nav>
              </div>
            </div>,
            document.body
          )}

      </div>
    </header>
  );
};

export default Header;
