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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD4JjbXWQIWU6e3g3dkUKbYSS3xrZ7FHBlMC9Fj8F0n6YuzEIyduZDhjC1IApUpwWI6HfZUPKXDKv_F8TP80OiS6G9MHs9Vtn9W27RVaK8NMGNiYhFbWOaWBrVPO4OKMa8grjvouLxPp5uNcEOl9lSbG3dhi6_J9ZI95mt_yQpkyzZK6vs4DL-MGDqPLTF5C-6fK5qrPWJ5m2aVwofehwuTINdPFiGBnJgfHqUqLu-hoR97SlI5iReX3Q",
    imageAlt: "Dynamic broadcast transition stinger bumper animation",
    topLabel: "BRANDING STINGER",
    topLabelVariant: "highlight" as const,
    bottomLabel: "00:03 // TRANSITION",
    title: "Identidad Visual Animada & Bumpers de Canal",
    description:
      "Cortinillas de corte rápido para cambios de bloque en streaming, sincronizadas con stingers de audio limpios.",
    tags: [
      { label: "Stinger Cut" },
      { label: "Logo Motion" },
      { label: "Sound FX" },
    ],
    linkText: "Ver animación",
    linkHref:
      "https://drive.google.com/file/d/1SL4W2MYaE1oNU0GYVWQVPjTwgElBpncK/view?usp=sharing",
    btnVariant: "dark" as const,
  },
  {
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAAeAl44qnkbWtdb6XD7MtbWnF7XPc6UKrbRguvrI6vKcD2-7SdCcGxrYWYiu5tjq0otNzLKxn8_62sr-ia0YeyDRT_6NKzglW-ODwQ_YbsWSStkI1XFSaHhBobdDsSzY4J_MDcE356uII8qSIORzPPMJXDx8I8xvZdeEYKXsmxlTBnIFBr4-yXpJYmt7p4eQBB0Mm1caXB41xGr70Yhypxd3gRgmpiLd0-aJOSsHXf-g6v4ePTHwcfgA",
    imageAlt:
      "Kinetic typography promotional motion reel showing bold geometric sans serif fonts",
    topLabel: "KINETIC TYPE",
    topLabelVariant: "highlight" as const,
    bottomLabel: "00:15 // PROMO",
    title: "Animación Tipográfica & Motion Promocional",
    description:
      "Tipografía con balance cinético exacto sobre voz en off comercial para lanzamientos y campañas de redes sociales.",
    tags: [
      { label: "Kinetic Motion" },
      { label: "Voice Sync" },
      { label: "9:16 & 16:9" },
    ],
    linkText: "Ver animación",
    linkHref:
      "https://drive.google.com/file/d/1fKyeTCFmJdneaV7kTEajRuun1lJmV5os/view?usp=sharing",
    btnVariant: "dark" as const,
  },
  {
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBc0jtQGh0I0keXIcWOU-4NUHbKKHYlLq0V_V22jKjgGMYEkS2yTgj5IPeaKr987B8snqRfGy1wOUv3llsGhRQFEtv8CX_dpamsBwIFHLqHFY6uZQ1MqzbCUT--HVHRS7QkTd5cHPeHm4OjgCVdh1fjK2jzxn8O4T800DOf0n9gGFC6A8kweCKHsOuws4ZkVNG57LnlmD-MFmrzZJkFUknPef0vcQT6njzmxkQwGl7_X-O2VKJVIT4Cmg",
    imageAlt: "Digital HUD alert animation badge pulsing in electric wireframe",
    topLabel: "STREAM ALERTS",
    topLabelVariant: "highlight" as const,
    bottomLabel: "LOOP // WEBM",
    title: "Stingers & Alertas Dinámicas",
    description:
      "Gráficos en bucle optimizados en WebM de peso ultra liviano para no sobrecargar el render de encoders en vivo.",
    tags: [
      { label: "WebM Alpha" },
      { label: "Ultra Liviano" },
      { label: "OBS Engine" },
    ],
    linkText: "Ver animación",
    linkHref:
      "https://drive.google.com/file/d/1swQ3ZIXTatdXgaNnNaqnpnnw4PmMRBZI/view?usp=sharing",
    btnVariant: "dark" as const,
  },
];

export default function AnimacionesCarousel() {
  return (
    <CarouselContainer
      id="animaciones"
      subtitle="03 // AFTER EFFECTS & IDENTIDAD EN MOVIMIENTO"
      title="ANIMACIONES & MOTION GRAPHICS"
      description="Packaging gráfico, zócalos de stream & bumpers: sistemas de rótulos modulares en After Effects, stingers de transición y tipografía cinética promocional."
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
