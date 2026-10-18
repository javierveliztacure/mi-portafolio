import CarouselContainer from "../CarouselContainer";
import CarouselCard from "../CarouselCard";

const edicionData = [
  {
    imageUrl: "/images/ONPE_1.png",
    imageAlt: "Intimate documentary interview frame",
    topLabel: "PODCAST",
    topLabelVariant: "highlight" as const,
    bottomLabel: "12:39 // PODCAST",
    title: "Habla ONPE: ¿Cómo votarán los peruanos en el exterior?",
    description:
      "Produje contenidos audiovisuales para fortalecer la comunicación institucional y la difusión de información electoral en plataformas digitales. Elaboré contenidos multimedia —videos y podcast— adaptados a distintos formatos y públicos, contribuyendo a una comunicación clara y accesible. Además, brindé soporte técnico y operativo durante transmisiones en vivo y eventos institucionales, garantizando la continuidad y calidad de las emisiones.",
    tags: [
      { label: "Edición" },
      { label: "Grabación" },
      { label: "Producción" },
      { label: "Transmisiones en vivo" },
      { label: "OBS" },
    ],
    linkText: "Ver",
    linkHref:
      "https://www.youtube.com/watch?v=Bu7EroEt1fM&list=PLUpjLn0TRvBWsvnxqcatVhqp9VwRP7Y8Q&index=5",
    videoUrl: "https://www.youtube.com/watch?v=Bu7EroEt1fM&list=PLUpjLn0TRvBWsvnxqcatVhqp9VwRP7Y8Q&index=5",
    btnVariant: "dark" as const,
  },
  {
    imageUrl:
      "/images/pimental_2.png",
    imageAlt: "Dynamic retail geek culture commercial showcase",
    topLabel: "ONG / TESTIMONIAL",
    topLabelVariant: "highlight" as const,
    bottomLabel: "02:49 // NARRATIVO",
    title: "Historia de Ajies 'El Pimental'",
    description:
      "Desarrollé contenidos audiovisuales, fotográficos y gráficos para fortalecer la comunicación y visibilidad de las acciones del proyecto Alianza CR3CE (de la ONG CEDRO), financiado por USAID. Documenté actividades e historias de impacto en comunidades de San Martín, Ucayali y Huánuco mediante entrevistas, fotografía y producción audiovisual, contribuyendo a visibilizar los resultados del proyecto y las experiencias de sus beneficiarios.",
    tags: [
      { label: "Edición" },
      { label: "Grabación" },
      { label: "Producción" },
      { label: "Fotografía" },
    ],
    linkText: "Ver",
    linkHref:
      "https://www.youtube.com/watch?v=XlEA0XFK5sA",
      videoUrl: "https://www.youtube.com/watch?v=XlEA0XFK5sA",
    btnVariant: "dark" as const,
  },
  {
    imageUrl:
      "/images/PHANTOM_1.png",
    imageAlt: "High energy YouTube and TikTok VOD highlight reel",
    topLabel: "PROGRAMA RETAIL",
    topLabelVariant: "highlight" as const,
    bottomLabel: "02:15 // YOUTUBE",
    title: "PhantomTv - Episodio 04",
    description:
      "Produje y edité contenidos audiovisuales para campañas de comunicación y promoción comercial, adaptados a plataformas digitales y puntos de venta. Participé en todas las etapas del proceso audiovisual, desde la grabación y planificación hasta la postproducción y entrega de piezas finales. Desarrollé contenidos orientados a fortalecer la presencia digital de la marca y apoyar las estrategias de comunicación con clientes.",
    tags: [
      { label: "Edición" },
      { label: "Grabación" },
      { label: "Producción" },
    ],
    linkText: "Ver",
    linkHref:
      "https://www.youtube.com/watch?v=Q1KjcXqNkw0&t=44s",
      videoUrl: "https://www.youtube.com/watch?v=Q1KjcXqNkw0&t=44s",
    btnVariant: "dark" as const,
  },
  {
    imageUrl:
      "/images/PHANTOM_2.png",
    imageAlt:
      "Cinematic frame of an investigative short documentary in an urban Latin American neighborhood",
    topLabel: "EVENTO RETAIL",
    topLabelVariant: "highlight" as const,
    bottomLabel: "02:53 // EVENTO",
    title: "Lanzamiento de Pokémon: Let's Go Pikachu! / Let's Go Eevee!",
    description:
      "Produje y edité contenidos audiovisuales para campañas de comunicación y promoción comercial, adaptados a plataformas digitales y puntos de venta. Participé en todas las etapas del proceso audiovisual, desde la grabación y planificación hasta la postproducción y entrega de piezas finales. Desarrollé contenidos orientados a fortalecer la presencia digital de la marca y apoyar las estrategias de comunicación con clientes.",
    tags: [
      { label: "Edición" },
      { label: "Grabación" },
      { label: "Producción" },
    ],
    linkText: "Ver",
    linkHref:
      "https://drive.google.com/file/d/1ck-sdnVokYox3OiSvt8Cg2R3x4oejI9Y/view?usp=sharing",
    btnVariant: "dark" as const,
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
