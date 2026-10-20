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
    linkText: "Ver video",
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
    title: "Historia de Ajíes 'El Pimental'",
    description:
      "Desarrollé contenidos audiovisuales, fotográficos y gráficos para fortalecer la comunicación y visibilidad de las acciones del proyecto Alianza CR3CE (de la ONG CEDRO), financiado por USAID. Documenté actividades e historias de impacto en comunidades de San Martín, Ucayali y Huánuco mediante entrevistas, fotografía y producción audiovisual, contribuyendo a visibilizar los resultados del proyecto y las experiencias de sus beneficiarios.",
    tags: [
      { label: "Edición" },
      { label: "Grabación" },
      { label: "Producción" },
      { label: "Fotografía" },
    ],
    linkText: "Ver video",
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
    bottomLabel: "12:02 // YOUTUBE",
    title: "PhantomTv - Episodio 04",
    description:
      "Programa elaborado in-house para la difusión de novedades, promociones y contenido variado del rubro. Produje y edité contenidos audiovisuales para campañas de comunicación y promoción comercial, adaptados a plataformas digitales y puntos de venta. Participé en todas las etapas del proceso audiovisual, desde la grabación y planificación hasta la postproducción y entrega de piezas finales. Desarrollé contenidos orientados a fortalecer la presencia digital de la marca y apoyar las estrategias de comunicación con clientes.",
    tags: [
      { label: "Edición" },
      { label: "Grabación" },
      { label: "Producción" },
    ],
    linkText: "Ver video",
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
    title: "Lanzamiento de Pokémon: Let's Go Pikachu! / Let's Go Eevee! - Phantom",
    description:
      "Evento y venta nocturna por el lanzamiento de Pokémon: Let's Go Pikachu! / Let's Go Eevee!. Produje y edité contenidos audiovisuales para campañas de comunicación y promoción comercial, adaptados a plataformas digitales y puntos de venta. Participé en todas las etapas del proceso audiovisual, desde la grabación y planificación hasta la postproducción y entrega de piezas finales. Desarrollé contenidos orientados a fortalecer la presencia digital de la marca y apoyar las estrategias de comunicación con clientes.",
    tags: [
      { label: "Edición" },
      { label: "Grabación" },
      { label: "Producción" },
    ],
    linkText: "Ver video",
    linkHref:
      "https://www.youtube.com/watch?v=7j5L-uwGR2g",
      videoUrl: "https://www.youtube.com/watch?v=7j5L-uwGR2g",
    btnVariant: "dark" as const,
  },
  {
    imageUrl:
      "/images/PHANTOM_3.png",
    imageAlt:
      "Cinematic frame of an investigative short documentary in an urban Latin American neighborhood",
    topLabel: "EVENTO RETAIL",
    topLabelVariant: "highlight" as const,
    bottomLabel: "02:18 // EVENTO",
    title: "Lanzamiento de God Of War - Phantom",
    description:
      "Evento de lanzamiento del juego de God Of War para ps4, actividad realizada en Phantom de Larcomar. Produje y edité contenidos audiovisuales para campañas de comunicación y promoción comercial, adaptados a plataformas digitales y puntos de venta. Participé en todas las etapas del proceso audiovisual, desde la grabación y planificación hasta la postproducción y entrega de piezas finales. Desarrollé contenidos orientados a fortalecer la presencia digital de la marca y apoyar las estrategias de comunicación con clientes.",
    tags: [
      { label: "Edición" },
      { label: "Grabación" },
      { label: "Producción" },
    ],
    linkText: "Ver video",
    linkHref:
      "https://www.youtube.com/watch?v=TyNDClahVNM",
      videoUrl: "https://www.youtube.com/watch?v=TyNDClahVNM",
    btnVariant: "dark" as const,
  },
   {
    imageUrl:
      "/images/SISOL_ADULTOS.png",
    imageAlt:
      "Cinematic frame of an investigative short documentary in an urban Latin American neighborhood",
    topLabel: "SALUD / INFORMATIVO",
    topLabelVariant: "highlight" as const,
    bottomLabel: "01:37 // INFORMATIVO",
    title: "Alimentos recomendados para adultos mayores",
    description:
      "Video informativo con recomendaciones alimentarias para adultos mayores. Material elaborado para SISOL SALUD, como parte del área de Comunicaciones.",
    tags: [
      { label: "Edición" },
      { label: "Grabación" },
      { label: "Producción" },
    ],
    linkText: "Ver video",
    linkHref:
      "https://www.youtube.com/watch?v=1IVUoYZyiYU",
      videoUrl: "https://www.youtube.com/watch?v=1IVUoYZyiYU",
    btnVariant: "dark" as const,
  },
 
  // {
  //   imageUrl:
  //     "/images/SISOL_INSOMNIO.png",
  //   imageAlt:
  //     "Cinematic frame of an investigative short documentary in an urban Latin American neighborhood",
  //   topLabel: "SALUD / INFORMATIVO",
  //   topLabelVariant: "highlight" as const,
  //   bottomLabel: "01:00 // INFORMATIVO",
  //   title: "Recomendaciones para prevenir el insomnio",
  //   description:
  //     "Video informativo con recomendaciones para prevenir el insomnio. Material elaborado para SISOL SALUD, como parte del área de Comunicaciones.",
  //   tags: [
  //     { label: "Edición" },
  //     { label: "Grabación" },
  //     { label: "Producción" },
  //   ],
  //   linkText: "Ver video",
  //   linkHref:
  //     "https://www.youtube.com/shorts/VHCniwMYS8Y",
  //     videoUrl: "https://www.youtube.com/shorts/VHCniwMYS8Y",
  //   btnVariant: "dark" as const,
  // }, 

 
  {
    imageUrl:
      "/images/TABRA.png",
    imageAlt:
      "Cinematic frame of an investigative short documentary in an urban Latin American neighborhood",
    topLabel: "ONG / ACTIVIDAD",
    topLabelVariant: "highlight" as const,
    bottomLabel: "04:53 // EVENTO",
    title: "Organización Tabra - día de playa",
    description:
      "Video elaborado para la organización Tabra, iniciativa que articula espacios de integración para niños neurodivergentes.",
    tags: [
      { label: "Edición" },
      { label: "Grabación" },
      { label: "Producción" },
    ],
    linkText: "Ver video",
    linkHref:
      "https://www.youtube.com/watch?v=bJrl54HQ3bY",
      videoUrl: "https://www.youtube.com/watch?v=bJrl54HQ3bY",
    btnVariant: "dark" as const,
  },
];

export default function EdicionCarousel() {
  return (
    <CarouselContainer
      id="edicion-de-video"
      subtitle="02 // MONTAJE INFORMATIVO & COMERCIAL"
      title="EDICIONES DE VIDEO"
      description="Proyectos de distintos formatos en los que he participado desde la grabación, edición y la postproducción. Cada pieza presenta necesidades particulares de ritmo, continuidad y tratamiento visual, que abordo de acuerdo con sus objetivos y características."
      bgColor="bg-[#f4f3f0]"
      scrollOffset={400}
    >
      {edicionData.map((item) => (
        <CarouselCard
          key={item.title}
          {...item}
          minWidth="min-w-[85%] sm:min-w-[400px]"
          aspectRatio="video"
        />
      ))}
    </CarouselContainer>
  );
}
