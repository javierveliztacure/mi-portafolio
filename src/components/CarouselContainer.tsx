import { useRef, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselContainerProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  children: ReactNode;
  bgColor?: string;
  scrollOffset?: number;
}

export default function CarouselContainer({
  id,
  title,
  subtitle,
  description,
  children,
  bgColor = "bg-[#faf9f6]",
  scrollOffset = 400,
}: CarouselContainerProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction * scrollOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id={id}
      className={`w-full py-10 sm:py-16 lg:py-24 border-b border-[#e2e0dc] ${bgColor}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header & Nav buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6 sm:mb-10">
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#747878]">
              {subtitle}
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl uppercase text-black tracking-tight mt-1">
              {title}
            </h2>
            <p className="font-body text-sm text-[#444748] mt-2">{description}</p>
          </div>

          {/* Carousel Controls (en mobile se desliza con el dedo) */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <button
              onClick={() => scrollCarousel(-1)}
              aria-label="Anterior"
              className="w-11 h-11 rounded border border-[#d5d3ce] bg-white hover:bg-[#ccff00] hover:border-black text-black transition-all flex items-center justify-center shadow-sm"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scrollCarousel(1)}
              aria-label="Siguiente"
              className="w-11 h-11 rounded border border-[#d5d3ce] bg-white hover:bg-[#ccff00] hover:border-black text-black transition-all flex items-center justify-center shadow-sm"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel Track */}
        <div
          ref={carouselRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 scrollbar-none"
        >
          {children}
        </div>
      </div>
    </section>
  );
}
