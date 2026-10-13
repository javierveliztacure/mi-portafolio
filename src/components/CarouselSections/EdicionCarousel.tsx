import CarouselContainer from "../CarouselContainer";
import CarouselCard from "../CarouselCard";

const edicionData = [
  {
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCYo9YahmlPcc_Io9GE_bzPEc5VSR0GqRW105eGK1RcZSPq8DG7PkYsMC_hKUNTRf8uqwHDK0oy9HlSBtgpxJjYWLr-alUHOjxwpa6yPszILz2PPh-YbRXYXmCSQ50U4QYIHpgI4bo-VCm2rSqkCPBKGxJ4XYWDBFoI_ff2qT_EF1LoS0CLgDlpeqnLujuPydKp-akYD05jiJEkXjaF2RGtbfFTjgqnxJfZy1FcbgP5QPYtbHarTgkLnA",
    imageAlt: "Intimate documentary interview frame",
    topLabel: "ONG / TESTIMONIAL",
    topLabelVariant: "dark" as const,
    bottomLabel: "04:20 // NARRATIVO",
    title: "Edición Narrativa & Montaje Institucional / ONG",
    description:
      "Tratamiento de testimonios reales con sensibilidad editorial y ética comunitaria. Integración de música orquestal sutil y pausas respiradas.",
    tags: [
      { label: "Rigor Ético" },
      { label: "Documental" },
      { label: "Color Rec.709" },
    ],
    linkText: "Ver en Google Drive",
    linkHref:
      "https://drive.google.com/file/d/1ck-sdnVokYox3OiSvt8Cg2R3x4oejI9Y/view?usp=sharing",
    videoUrl: "https://drive.google.com/file/d/1ck-sdnVokYox3OiSvt8Cg2R3x4oejI9Y/preview",
    btnVariant: "dark" as const,
  },
  {
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuABDj3e0rtIsBJpZ4PGJxGzBLk_0soelaNx7sl4BiFZx_QnOblpO2RhgsuxAaIJDNdh0fcqod0R8fY-_ARvN7O9pzPN0tzbK6rPV8gjhKy-nTneRqh8cn6KOJtqcySb4B65WcKsijKuReGghxC1oNQxCzu-xtFpFuzTY6xZ70krdrdjGZOwJt8eQiBPWTFCjztwaUxlGTzAWqUgP8d8OIhV4NsGtQMbRecWaXU1ehrf6SF_IRUd9TtodQ",
    imageAlt: "Dynamic retail geek culture commercial showcase",
    topLabel: "RETAIL COMERCIAL",
    topLabelVariant: "highlight" as const,
    bottomLabel: "00:45 // SPOT",
    title: "Comercial Dinámico & Retail Geek",
    description:
      "Speed ramping preciso sincronizado sobre beat urbano. Sound design inmersivo con foley digital y llamada a la acción rápida.",
    tags: [
      { label: "Speed Ramping" },
      { label: "Sound Design" },
      { label: "Beat Cuts" },
    ],
    linkText: "Ver en Google Drive",
    linkHref:
      "https://drive.google.com/file/d/16bEPqpgviFq7cylkwtB34U3yW4cG5LKI/view?usp=sharing",
    btnVariant: "dark" as const,
  },
  {
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDPi_fqeUeKCMnHDLCk6UAJ9ilMhq3IPDiFHVbyEApL9PJnWiwvsx-Bd5pEi8BTCOKApcr15kGwT33dkkMouayjaJDo3icBl7Q_Y2et9PNIGWhR2u5cF1kBS2fRyzlTpCoVQ5OmAGcvUt4nA6nP0R9igG1WltQDNIXdKNZdRVU4nRTnn4uH9XJtU4H5uBlbixTFfg3phSHA6KxHH58GIlz_Gq0Klk2aXeJG6srccyd1iioTGjL5PzNv7A",
    imageAlt: "High energy YouTube and TikTok VOD highlight reel",
    topLabel: "STREAMING VOD",
    topLabelVariant: "dark" as const,
    bottomLabel: "02:15 // YOUTUBE",
    title: "Streaming, Humor & VOD Highlights",
    description:
      "Curaduría de horas de directo condensadas en una narrativa ágil y divertida de 2 minutos para canales de YouTube y comunidades digitales.",
    tags: [
      { label: "Pacing Digital" },
      { label: "Condensación" },
      { label: "Enganche VOD" },
    ],
    linkText: "Ver en Google Drive",
    linkHref:
      "https://drive.google.com/file/d/1NITvFXRW6FL_k2D74Ze4K11WB-aY9-1j/view?usp=sharing",
    btnVariant: "dark" as const,
  },
  {
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAUGOtmY7XgHUKzCMbRGbQYTOReJxZe4C0clKaorVsNo-H8OWXxp79mFnqequXa8rboKflcgjk-RHGahD0_0IOGFIRgMZJeEPsjpPco3wth1GewM0OWIFTQBZXCV55LG98q-HPZmwRF5IPPqyBrdXILBAI_AKiWX3kdqyyd_cG4fpgqQ-sWmm9IZlsnexe5FmN7paICt8LVP-OaMVTCi4GlL6_GHkQ61w7hZgnwWd1VcqIc5cFWuHj4og",
    imageAlt:
      "Cinematic frame of an investigative short documentary in an urban Latin American neighborhood",
    topLabel: "INVESTIGACIÓN",
    topLabelVariant: "dark" as const,
    bottomLabel: "05:40 // DOC",
    title: "Micro-Doc: Memoria & Territorio",
    description:
      "Estructura dialéctica intercalando archivo fotográfico con material contemporáneo filmado en 4K. Color grading cinematográfico texturado.",
    tags: [
      { label: "Montaje Dialéctico" },
      { label: "Archivos Históricos" },
      { label: "Color 4K" },
    ],
    linkText: "Ver en Google Drive",
    linkHref:
      "https://drive.google.com/file/d/1ck-sdnVokYox3OiSvt8Cg2R3x4oejI9Y/view?usp=sharing",
    btnVariant: "default" as const,
  },
];

export default function EdicionCarousel() {
  return (
    <CarouselContainer
      id="edicion-de-video"
      subtitle="02 // MONTAJE CINEMATOGRÁFICO & COMERCIAL"
      title="EDICIÓN DE VIDEO"
      description="Montaje narrativo, institucional y formatos comerciales. Desde testimonios con rigor periodístico hasta piezas publicitarias de ritmo vertiginoso."
      bgColor="bg-[#f4f3f0]"
      scrollOffset={400}
    >
      {edicionData.map((item) => (
        <CarouselCard
          key={item.title}
          {...item}
          minWidth="min-w-[320px] sm:min-w-[400px]"
          aspectRatio="video"
        />
      ))}
    </CarouselContainer>
  );
}
