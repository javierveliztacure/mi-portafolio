import { Mail, MessageCircle, CheckCircle, ArrowUpRight } from "lucide-react";

const commitments = [
  "Entrega de primeros cortes en 24-48h",
  "Workflows remotos en Frame.io & Drive",
  "Prueba técnica con material en bruto",
];

export default function ContactSection() {
  return (
    <section id="contacto" className="w-full py-16 lg:py-24 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="bg-black text-white rounded-lg p-8 sm:p-10 lg:p-14 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
            {/* Pitch */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#ccff00] flex items-center gap-2">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ccff00] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ccff00]"></span>
                </span>
                05 // CONTACTO & PRODUCCIÓN
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight leading-[1.05]">
                HABLEMOS DE TU PRÓXIMO PROYECTO AUDIOVISUAL
              </h2>
              <p className="font-body text-sm text-white/70 max-w-xl leading-relaxed">
                Respuesta inmediata para producciones de streaming, series
                documentales, campañas institucionales o pruebas técnicas con
                material en bruto. Escríbeme para coordinar fechas de entrega o
                paquetes recurrentes de clips.
              </p>
            </div>

            {/* Actions */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <a
                href="https://wa.me/51987411090?text=Hola%20Javier,%20revis%C3%A9%20tu%20portafolio%20y%20quiero%20cotizar%20un%20proyecto%20de%20video"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full py-4 px-5 bg-[#ccff00] hover:bg-[#bbf000] text-black rounded flex items-center justify-between gap-3 transition-transform active:scale-95"
              >
                <span className="flex items-center gap-3">
                  <MessageCircle size={22} />
                  <span className="flex flex-col">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider">
                      Escribir por WhatsApp
                    </span>
                    <span className="font-mono text-[11px] text-black/70">
                      +51 987 411 090
                    </span>
                  </span>
                </span>
                <ArrowUpRight
                  size={20}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="mailto:contacto@javierveliz.pe"
                className="group w-full py-4 px-5 border border-white/20 hover:border-white/50 rounded flex items-center justify-between gap-3 transition-colors"
              >
                <span className="flex items-center gap-3">
                  <Mail size={22} className="text-white/70" />
                  <span className="flex flex-col">
                    <span className="font-mono text-[10px] text-white/50 uppercase tracking-wider">
                      Correo
                    </span>
                    <span className="font-mono text-xs font-medium">
                      contacto@javierveliz.pe
                    </span>
                  </span>
                </span>
                <ArrowUpRight
                  size={20}
                  className="text-white/50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>

          {/* Editorial commitments */}
          <div className="mt-10 lg:mt-12 pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs text-white/80">
            {commitments.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle size={16} className="text-[#ccff00] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
