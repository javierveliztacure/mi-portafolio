import CarouselContainer from "../CarouselContainer";
import CarouselCard from "../CarouselCard";

const clipsData = [
  {
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA0oopTn2oXmmd2BL4dj734g7erV1Pe2dJKqka6qW1s11bbAdwo2Ecdg5cyDAjXCPi-8pxpPbYsSbVxa7Be4NwIZgsnHT8ic9d43hnmJKKOFJcLFZTyPkmzr_o45Sx-v0w5kHWXPSOyOuG--7LDIjA43kYlCXMBcEALR0r_Bv27SSGWR0uCuwaLZ4FFswgLmLdGTwkbbxBYbLg_3XZk4SFjfb41NbPzNh7ml7Zr6L_g1-HrIGl3l--zuQ",
    imageAlt:
      "Dynamic video editor timeline screenshot showing audio waveforms and comedic video montage preview",
    topLabel: "TIMING CÓMICO",
    topLabelVariant: "highlight" as const,
    bottomLabel: "00:54 // 9:16",
    title: "Remates Cómicos & Píldoras Virales",
    description:
      "Extracción de remates con edición afilada. Énfasis en pausas dramáticas, zoom-ins sutiles y remates de audio punchy.",
    tags: [
      { label: "Punchlines" },
      { label: "Sound SFX" },
      { label: "Todo Good" },
    ],
    linkText: "Ver Clip en Drive",
    linkHref:
      "https://drive.google.com/file/d/1ck-sdnVokYox3OiSvt8Cg2R3x4oejI9Y/view?usp=sharing",
  },
  {
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuALEXxh-kcTtheJ_QxPVOcKyThristXv27-qKaKMIgU8FE-XWRlwQtfo7CTtprKVtACkQ1WGQQJukSZ2lqdsgOTOuovExA8hnZs0zypOsnGWyY19uJ3eCcDgXmC5ToGOkJLg_GoCkrjffxVYAmpM7GQjhLRdzX__ZBoGGcp5e4t3g0MOxQs0Vf9Jr_SvqX5iETyGL7zHJzIHti5-egaMBs95W1F2QpgzgfHEI0jHJjBQ6jIX_VrRC2qBA",
    imageAlt:
      "Multi-camera studio podcast and live talk show setup with two creators debating",
    topLabel: "MULTICÁMARA",
    topLabelVariant: "dark" as const,
    bottomLabel: "01:42 // PODCAST",
    title: "Highlight de Debate & Momentos Clave",
    description:
      "Sincronización multicámara, subtitulado de alto contraste con resalte palabra por palabra y balance acústico sin ruido residual.",
    tags: [
      { label: "Sincro Multicam" },
      { label: "Subtítulos" },
      { label: "Podcast" },
    ],
    linkText: "Ver Clip en Drive",
    linkHref:
      "https://drive.google.com/file/d/16bEPqpgviFq7cylkwtB34U3yW4cG5LKI/view?usp=sharing",
  },
  {
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBmcwBM74gAXax-6O6o2rotLLJ2A_W2lqj3W5Ug_TnLRznce6f6-6W5xj71N5fTsgYUgmR8oiUMQLviWd1vYaDNrlKYUpLevo-3ysHGgJEXkM_w1tv7F98zAL8dDBcGt7h7eM-5unoARc3QaF2ZdQdvaGnx_op7ry60WpSygE4fJHojqihnW-0NGxomFrkmUnFmULY-v8nQCv_dZus3Oi7m_AQYhNc4faZy7DkXS9Gj6mO3dhZ2eEn0VA",
    imageAlt: "High energy esports gamer reaction moment screen capture",
    topLabel: "HOOK & REACCIÓN",
    topLabelVariant: "highlight" as const,
    bottomLabel: "00:38 // REELS",
    title: "Clip de Reacción & Cultura Gamer / Pop",
    description:
      "Pacing acelerado, tracking visual y transiciones de sonido diegético para optimizar la retención en los primeros 3 segundos de feed.",
    tags: [
      { label: "Pacing Rápido" },
      { label: "Tracking" },
      { label: "TikTok / Reels" },
    ],
    linkText: "Ver Clip en Drive",
    linkHref:
      "https://drive.google.com/file/d/1NITvFXRW6FL_k2D74Ze4K11WB-aY9-1j/view?usp=sharing",
  },
  {
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAm1YMO8qeyq1scrRU3EhfzgC5Mjy2knkLKjvi90mDLOnojS77_7g_D1g0I7PEB467tcunSIJ6DsDuomnKtOqfV8kqn2_8FMHnccBxCVx3XYzEyyVlSWADShRJbCCnqpXDUYuRUJpVCc73OQrjTYaavyNa84kCWfuuCtQ2cndo5Xtjo7-vIBRZZ-baPmlpqGnF1rWuW1ANljxUDY1rIjg6fc2GFX0p4ciQw40EDus_yok-GVN1Gfhr0Vg",
    imageAlt: "Behind the scenes studio blooper moment",
    topLabel: "BLOOPERS",
    topLabelVariant: "dark" as const,
    bottomLabel: "01:12 // RAW CUT",
    title: "Momentos Espontáneos & Bloopers",
    description:
      "Cortes rápidos, congelados de cuadro e integración de risas orgánicas conservando el pulso natural de la sesión en vivo.",
    tags: [
      { label: "Espontaneidad" },
      { label: "SFX Punch" },
      { label: "En Vivo" },
    ],
    linkText: "Ver Clip en Drive",
    linkHref:
      "https://drive.google.com/file/d/1swQ3ZIXTatdXgaNnNaqnpnnw4PmMRBZI/view?usp=sharing",
  },
];

export default function ClipsCarousel() {
  return (
    <CarouselContainer
      id="clips-todo-good"
      subtitle="01 // FORMATOS VERTICALES & STREAMING"
      title="CLIPS DE EJEMPLO TODO GOOD"
      description="Streaming, timing cómico y dinámicas de retención: recortes precisos con alta tensión narrativa, compresión de silencios cómicos y subtitulado dinámico de alto impacto visual."
      bgColor="bg-[#faf9f6]"
    >
      {clipsData.map((clip) => (
        <CarouselCard
          key={clip.title}
          {...clip}
          btnVariant="default"
          minWidth="min-w-[320px] sm:min-w-[380px]"
          aspectRatio="video"
        />
      ))}
    </CarouselContainer>
  );
}
