import { useEffect, useState } from "react";
import { Download, Menu, MessageCircle, X } from "lucide-react";
import { CV_URL, whatsappLink } from "@/shared/constants/contact";

const navItems = [
  { href: "#clips-todo-good", label: "01 / Clips" },
  { href: "#edicion-de-video", label: "02 / Edición" },
  { href: "#animaciones", label: "03 / Animación" },
  // { href: "#fotografia", label: "04 / Fotografía" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onResize = () => desktop.matches && setMenuOpen(false);

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onResize);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#faf9f6]/90 backdrop-blur-md border-b border-[#e2e0dc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-20 flex items-center justify-between gap-3">
        {/* Logo */}
        <a href="#" onClick={closeMenu} className="flex items-center gap-3 group min-w-0">
          <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-black whitespace-nowrap">
            JAVIER VÉLIZ
          </span>
          <span className="hidden md:inline-block font-mono text-xs px-2.5 py-1 bg-[#efeeeb] text-[#444748] rounded border border-[#e2e0dc]">
            // COMUNICACIÓN Y PERIODISMO
          </span>
        </a>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-[#444748]">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2 rounded hover:text-black hover:bg-[#efeeeb] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href={CV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 px-3.5 py-2.5 bg-white hover:bg-[#efeeeb] hover:border-black text-black font-mono text-xs font-semibold uppercase tracking-wider rounded border border-[#e2e0dc] transition-all shadow-sm"
          >
            <Download size={16} />
            Descargar CV
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 bg-[#ccff00] hover:bg-[#bbf000] text-black font-mono text-xs font-bold uppercase tracking-wider rounded border border-black/10 transition-transform active:scale-95 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-black animate-pulse"></span>
            Contacto / WhatsApp
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contacto por WhatsApp"
            className="sm:hidden inline-flex items-center justify-center w-11 h-11 bg-[#ccff00] hover:bg-[#bbf000] text-black rounded border border-black/10 transition-transform active:scale-95 shadow-sm"
          >
            <MessageCircle size={20} />
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 bg-white hover:bg-[#efeeeb] text-black rounded border border-[#e2e0dc] transition-colors"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Navigation - Mobile */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden h-[calc(100dvh-5rem)] overflow-y-auto bg-[#faf9f6] border-t border-[#e2e0dc]"
        >
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col">
            {[...navItems, { href: "#contacto", label: "Contacto" }].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="py-4 border-b border-[#e2e0dc] font-display font-extrabold text-2xl uppercase tracking-tight text-black hover:text-[#444748] transition-colors"
              >
                {item.label}
              </a>
            ))}

            <div className="mt-8 flex flex-col gap-3">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="w-full py-3.5 px-4 bg-[#ccff00] hover:bg-[#bbf000] text-black font-mono text-xs font-bold uppercase tracking-wider rounded border border-black/10 flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-sm"
              >
                <MessageCircle size={18} />
                Escribir por WhatsApp
              </a>
              <a
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="w-full py-3.5 px-4 bg-white hover:bg-[#efeeeb] text-black font-mono text-xs font-semibold uppercase tracking-wider rounded border border-[#e2e0dc] flex items-center justify-center gap-2 transition-colors"
              >
                <Download size={16} />
                Descargar CV
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
