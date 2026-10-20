import { Download } from "lucide-react";
import { whatsappLink } from "@/shared/constants/contact";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#faf9f6]/90 backdrop-blur-md border-b border-[#e2e0dc]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <span className="font-display font-extrabold text-xl tracking-tight text-black">
            JAVIER VÉLIZ
          </span>
          <span className="hidden sm:inline-block font-mono text-xs px-2.5 py-1 bg-[#efeeeb] text-[#444748] rounded border border-[#e2e0dc]">
            // COMUNICACIÓN Y PERIODISMO
          </span>
        </a>


        {/* Navigation - Desktop */}
        <nav className="hidden lg:flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-[#444748]">
          <a
            href="#clips-todo-good"
            className="px-3 py-2 rounded hover:text-black hover:bg-[#efeeeb] transition-colors"
          >
            01 / Clips
          </a>
          <a
            href="#edicion-de-video"
            className="px-3 py-2 rounded hover:text-black hover:bg-[#efeeeb] transition-colors"
          >
            02 / Edición
          </a>
          <a
            href="#animaciones"
            className="px-3 py-2 rounded hover:text-black hover:bg-[#efeeeb] transition-colors"
          >
            03 / Animación
          </a>
          <a
            href="#fotografia"
            className="px-3 py-2 rounded hover:text-black hover:bg-[#efeeeb] transition-colors"
          >
            04 / Fotografía
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            download
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2.5 bg-white hover:bg-[#efeeeb] hover:border-black text-black font-mono text-xs font-semibold uppercase tracking-wider rounded border border-[#e2e0dc] transition-all shadow-sm"
          >
            <Download size={16} />
            Descargar CV
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#ccff00] hover:bg-[#bbf000] text-black font-mono text-xs font-bold uppercase tracking-wider rounded border border-black/10 transition-transform active:scale-95 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-black animate-pulse"></span>
            Contacto / WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
