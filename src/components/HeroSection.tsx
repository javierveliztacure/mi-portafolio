import { ArrowDown, MessageCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full border-b border-[#e2e0dc] bg-[#faf9f6] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 items-start">
          <div className="flex flex-col gap-6 lg:col-span-12">
            <span className="font-mono text-xs uppercase tracking-widest text-[#747878] font-semibold">
              // COMUNICACIÓN & NARRATIVA AUDIOVISUAL
            </span>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-black leading-[1.05]">
              PORTAFOLIO
            </h1>
            <p className="font-body text-base lg:text-lg text-[#444748] max-w-2xl leading-relaxed">
              Soy comunicador y periodista, con experiencia en edición y postproducción audiovisual. 
            </p>

            {/* CTA Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#clips-todo-good"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-black text-white hover:bg-[#222] font-mono text-xs uppercase tracking-wider font-semibold rounded transition-all"
              >
                Ver Trabajos <ArrowDown size={16} />
              </a>
              <a
                href="https://wa.me/51911000000?text=Hola%20Javier,%20vi%20tu%20portafolio%20y%20quiero%20conversar%20sobre%20un%20proyecto"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#ccff00] hover:bg-[#bbf000] text-black font-mono text-xs uppercase tracking-wider font-bold rounded border border-black/10 transition-all shadow-sm"
              >
                <MessageCircle size={18} />
                Contacto Rápido WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
