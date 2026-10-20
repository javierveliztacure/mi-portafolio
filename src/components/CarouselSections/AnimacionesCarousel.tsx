import CarouselContainer from "../CarouselContainer";
import CarouselCard from "../CarouselCard";

const animacionesData = [
  {
    imageUrl:
      "/images/ANIMACION_PHANTOM_1.png",
    imageAlt: "Motion graphics lower third overlay package for live news",
    topLabel: "RETAIL", 
    topLabelVariant: "highlight" as const,
     bottomLabel: "ANIMACIÓN // AFTER EFFECTS", 
    title: "Animación de promoción de FunkoPop de Power Ranger",
    description:
      "Animación elaborada para la tienda Phantom, como parte del área de marketing.",
    tags: [
      { label: "After Effects" },
      // { label: "Alpha Channel" }, //
      // { label: "After Effects" }, // 
    ],
    linkText: "Ver animación",
    linkHref:
      "https://youtu.be/zSkR1QVx1Xk",
      videoUrl: "https://www.youtube.com/watch?v=Q1KjcXqNkw0&t=44s",
    btnVariant: "dark" as const,
  },
  {
    imageUrl:
      "/images/ANIMACION_PHANTOM_2.png",
    imageAlt: "Dynamic broadcast transition stinger bumper animation",
    topLabel: "RETAIL",
    topLabelVariant: "highlight" as const,
    bottomLabel: "ANIMACIÓN // AFTER EFFECTS",
    title: "Animación de promoción mandos PS4",
    description:
      "Animación elaborada para la tienda Phantom, como parte del área de marketing.",
    tags: [
      { label: "After Effects" },
      // { label: "Alpha Channel" }, //
      // { label: "After Effects" }, // 
    ],
    linkText: "Ver animación",
    linkHref:
      "https://www.youtube.com/watch?v=OzPPr2_X6K8",
      videoUrl: "https://www.youtube.com/watch?v=OzPPr2_X6K8",
    btnVariant: "dark" as const,
  },
  {
    imageUrl:
      "/images/ANIMACION_PHANTOM_3.png",
    imageAlt:
      "Kinetic typography promotional motion reel showing bold geometric sans serif fonts",
    topLabel: "RETAIL",
    topLabelVariant: "highlight" as const,
    bottomLabel: "ANIMACIÓN // AFTER EFFECTS",
    title: "Animación de promoción de ropa",
    description:
      "Animación elaborada para la tienda Phantom, como parte del área de marketing.",
    tags: [
      { label: "After Effects" },
      // { label: "Alpha Channel" }, //
      // { label: "After Effects" }, // 
    ],
    linkText: "Ver animación",
    linkHref:
      "https://www.youtube.com/watch?v=B3beOrwM5bs",
      videoUrl: "https://www.youtube.com/watch?v=B3beOrwM5bs",
    btnVariant: "dark" as const,
  },
  {
    imageUrl:
      "/images/SISOL_TBC.png",
    imageAlt: "Digital HUD alert animation badge pulsing in electric wireframe",
    topLabel: "SALUD / INFORMATIVO",
    topLabelVariant: "highlight" as const,
    bottomLabel: "ANIMACIÓN // AFTER EFFECTS",
    title: "Principales síntomas de la TBC",
    description:
      "Material informativo elaborado para SISOL SALUD, como parte del área de Comunicaciones.",
    tags: [
      { label: "After Effects" },
      // { label: "Alpha Channel" }, //
      // { label: "After Effects" }, // 
    ],
    linkText: "Ver animación",
    linkHref:
      "https://www.youtube.com/watch?v=qaGWp0NgAms",
      videoUrl: "https://www.youtube.com/watch?v=qaGWp0NgAms",
    btnVariant: "dark" as const,
  },
];

export default function AnimacionesCarousel() {
  return (
    <CarouselContainer
      id="animaciones"
      subtitle="03 // AFTER EFFECTS & IDENTIDAD EN MOVIMIENTO"
      title="ANIMACIONES & MOTION GRAPHICS"
      description="Algunas trabajos realizados con Affter Effects."
      bgColor="bg-[#faf9f6]"
    >
      {animacionesData.map((item) => (
        <CarouselCard
          key={item.title}
          {...item}
          minWidth="min-w-[320px] sm:min-w-[380px]"
          aspectRatio="video"
        />
      ))}
    </CarouselContainer>
  );
}
