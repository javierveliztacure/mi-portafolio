import { useState } from "react";
import { Mail, MessageCircle, CheckCircle, Send } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    discipline: "clips-todo-good",
    message: "",
  });

  const [showFeedback, setShowFeedback] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { id, value } = e.currentTarget;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowFeedback(true);
    setFormData({ name: "", email: "", discipline: "clips-todo-good", message: "" });
    setTimeout(() => setShowFeedback(false), 3000);
  };

  return (
    <section id="contacto" className="w-full py-16 lg:py-24 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#747878]">
            05 // CONTACTO & PRODUCCIÓN
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl uppercase text-black tracking-tight mt-1">
            HABLEMOS DE TU PRÓXIMO PROYECTO AUDIOVISUAL
          </h2>
          <p className="font-body text-sm text-[#444748] mt-2">
            Respuesta inmediata para producciones de streaming, series
            documentales, campañas institucionales o pruebas técnicas con
            material en bruto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Column 1: WhatsApp Card */}
          <div className="lg:col-span-5 bg-white border border-[#e2e0dc] rounded-lg p-6 lg:p-8 flex flex-col gap-6 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-[#e2e0dc]">
              <span className="font-mono text-xs font-bold text-black uppercase tracking-wider">
                CANAL PREFERENTE // DIRECTO
              </span>
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ccff00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ccff00]"></span>
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-display font-bold text-xl text-black">
                ¿Requieres edición rápida para tu canal o marca?
              </h3>
              <p className="font-body text-xs text-[#444748] leading-relaxed">
                Envíame un mensaje directo para coordinar fechas de entrega,
                paquetes recurrentes de clips o coordinar una prueba técnica de
                corte inicial.
              </p>
            </div>

            <a
              href="https://wa.me/51911000000?text=Hola%20Javier,%20revis%C3%A9%20tu%20portafolio%20y%20quiero%20cotizar%20un%20proyecto%20de%20video"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 bg-[#ccff00] hover:bg-[#bbf000] text-black font-mono text-xs font-bold uppercase tracking-wider rounded border border-black/10 flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-sm"
            >
              <MessageCircle size={20} />
              Escribir por WhatsApp Directo (+51 911...)
            </a>

            {/* Editorial commitments */}
            <div className="pt-2 flex flex-col gap-2.5 font-mono text-xs text-[#444748] border-t border-[#e2e0dc]">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-black" />
                <span>Entrega de primeros cortes en 24-48h</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-black" />
                <span>Workflows remotos en Frame.io & Drive</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-black" />
                <span>Prueba técnica con material en bruto</span>
              </div>
            </div>

            {/* Email */}
            <div className="p-3 bg-[#f4f3f0] rounded border border-[#e2e0dc] flex items-center gap-3">
              <Mail size={20} className="text-[#747878]" />
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-[#747878] uppercase">
                  Correo Institucional
                </span>
                <span className="font-mono text-xs text-black font-medium select-all">
                  contacto@javierveliz.pe
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Contact Form */}
          <div className="lg:col-span-7 bg-white border border-[#e2e0dc] rounded-lg p-6 lg:p-8 shadow-sm">
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-xs font-bold text-black uppercase tracking-wider">
                  FORMULARIO DE BRIEF
                </span>
                <h3 className="font-display font-bold text-xl text-black">
                  Cuéntame los detalles de tu producción
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label
                    className="font-mono text-xs text-black"
                    htmlFor="name"
                  >
                    Nombre / Productora *
                  </label>
                  <input
                    className="w-full px-3.5 py-2.5 bg-[#f4f3f0] border border-[#e2e0dc] text-black rounded font-body text-xs focus:outline-none focus:border-black focus:bg-white transition-colors"
                    id="name"
                    placeholder="Ej. Productora Sur / Canal Stream"
                    required
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    className="font-mono text-xs text-black"
                    htmlFor="email"
                  >
                    Correo Electrónico *
                  </label>
                  <input
                    className="w-full px-3.5 py-2.5 bg-[#f4f3f0] border border-[#e2e0dc] text-black rounded font-body text-xs focus:outline-none focus:border-black focus:bg-white transition-colors"
                    id="email"
                    placeholder="tu@empresa.com"
                    required
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  className="font-mono text-xs text-black"
                  htmlFor="discipline"
                >
                  Disciplina Audiovisual de Interés *
                </label>
                <select
                  className="w-full px-3.5 py-2.5 bg-[#f4f3f0] border border-[#e2e0dc] text-black rounded font-body text-xs focus:outline-none focus:border-black focus:bg-white transition-colors"
                  id="discipline"
                  value={formData.discipline}
                  onChange={handleInputChange}
                >
                  <option value="clips-todo-good">
                    Clips Todo Good & Formato Streaming (9:16)
                  </option>
                  <option value="edicion-de-video">
                    Edición de Video (Narrativo / Comercial / VOD)
                  </option>
                  <option value="animaciones">
                    Animación & Lower Thirds (After Effects)
                  </option>
                  <option value="fotografia">
                    Fotografía Documental & Cobertura en Terreno
                  </option>
                  <option value="servicio-completo">
                    Postproducción Integral (Edición + Color + Motion)
                  </option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  className="font-mono text-xs text-black"
                  htmlFor="message"
                >
                  Mensaje / Enlace a Material en Bruto *
                </label>
                <textarea
                  className="w-full px-3.5 py-2.5 bg-[#f4f3f0] border border-[#e2e0dc] text-black rounded font-body text-xs focus:outline-none focus:border-black focus:bg-white transition-colors resize-none"
                  id="message"
                  placeholder="Describe el objetivo, plazos de entrega o enlace a carpetas de muestra..."
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              {showFeedback && (
                <div className="p-3 rounded font-mono text-xs bg-[#ccff00]/30 text-black border border-black/10 flex items-center gap-2">
                  <CheckCircle size={16} />
                  Mensaje registrado. Gracias {formData.name}, te responderé a
                  la brevedad.
                </div>
              )}

              <button
                className="w-full py-3 bg-black hover:bg-[#222] text-white font-mono text-xs font-bold uppercase tracking-wider rounded flex items-center justify-center gap-2 transition-colors"
                type="submit"
              >
                <Send size={16} />
                Enviar Mensaje / Solicitud
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
