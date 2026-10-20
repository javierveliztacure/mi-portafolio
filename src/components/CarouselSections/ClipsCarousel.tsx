import CarouselContainer from "../CarouselContainer";
import CarouselCard from "../CarouselCard";

const clipsData = [
  {
    imageUrl:
      "/images/TG_1.png",
    imageAlt:
      "Dynamic video editor timeline screenshot showing audio waveforms and comedic video montage preview",
    topLabel: "CLIP 1",
    topLabelVariant: "highlight" as const,
    bottomLabel: "00:44",
    title: "La traición del pelado",
    description:
      "Furrey jamás pensó que la traición vendría de su amigo más querido.",
    tags: [
    /*   { label: "Punchlines" },
      { label: "Sound SFX" },
      { label: "Todo Good" }, */
    ],
    linkText: "Ver clip",
    linkHref:
      "https://youtube.com/shorts/6bTfAWBcMEQ?feature=share",
      videoUrl: "https://youtube.com/shorts/6bTfAWBcMEQ?feature=share",
  },
  {
    imageUrl:
      "/images/TG_2.png",
    imageAlt:
      "Multi-camera studio podcast and live talk show setup with two creators debating",
    topLabel: "CLIP 2",
    topLabelVariant: "highlight" as const,
    bottomLabel: "00:42",
    title: "Furrey disfruta de su salchicha",
    description:
      "Furrey demuestra cómo se debe comer un 'hot dog'.",
    tags: [
      /* { label: "Sincro Multicam" },
      { label: "Subtítulos" },
      { label: "Podcast" }, */
    ],
    linkText: "Ver clip",
    linkHref:
      "https://youtube.com/shorts/EDigubNyKpw?feature=share",
      videoUrl: "https://youtube.com/shorts/EDigubNyKpw?feature=share",
  },
  {
    imageUrl:
      "/images/TG_3.png",
    imageAlt: "High energy esports gamer reaction moment screen capture",
    topLabel: "CLIP 3",
    topLabelVariant: "highlight" as const,
    bottomLabel: "00:50",
    title: "¿No han kchd* en Habbo?",
    description:
      "Furrey lanza una preguna polémica y revela un oscuro secreto.",
    tags: [
    /*   { label: "Pacing Rápido" },
      { label: "Tracking" },
      { label: "TikTok / Reels" }, */
    ],
    linkText: "Ver clip",
    linkHref:
      "https://youtube.com/shorts/-2_cQbfvTws?feature=share",
      videoUrl: "https://youtube.com/shorts/-2_cQbfvTws?feature=share",
  },
 /*  {
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAm1YMO8qeyq1scrRU3EhfzgC5Mjy2knkLKjvi90mDLOnojS77_7g_D1g0I7PEB467tcunSIJ6DsDuomnKtOqfV8kqn2_8FMHnccBxCVx3XYzEyyVlSWADShRJbCCnqpXDUYuRUJpVCc73OQrjTYaavyNa84kCWfuuCtQ2cndo5Xtjo7-vIBRZZ-baPmlpqGnF1rWuW1ANljxUDY1rIjg6fc2GFX0p4ciQw40EDus_yok-GVN1Gfhr0Vg",
    imageAlt: "Behind the scenes studio blooper moment",
    topLabel: "BLOOPERS",
    topLabelVariant: "highlight" as const,
    bottomLabel: "01:12 // RAW CUT",
    title: "Momentos Espontáneos & Bloopers",
    description:
      "Cortes rápidos, congelados de cuadro e integración de risas orgánicas conservando el pulso natural de la sesión en vivo.",
    tags: [
      { label: "Espontaneidad" },
      { label: "SFX Punch" },
      { label: "En Vivo" },
    ],
    linkText: "Ver clip",
    linkHref:
      "https://drive.google.com/file/d/1swQ3ZIXTatdXgaNnNaqnpnnw4PmMRBZI/view?usp=sharing",
  }, */
];

export default function ClipsCarousel() {
  return (
    <CarouselContainer
      id="clips-todo-good"
      subtitle="01 // CLIPS "
      title="CLIPS DE EJEMPLO"
      description="Streaming, timing cómico y dinámicas de retención: recortes precisos con alta tensión narrativa, compresión de silencios cómicos y subtitulado dinámico de alto impacto visual."
      bgColor="bg-[#faf9f6]"
    >
      {clipsData.map((clip) => (
        <CarouselCard
          key={clip.title}
          {...clip}
          btnVariant="dark"
          minWidth="min-w-[85%] sm:min-w-[380px]"
          aspectRatio="video"
        />
      ))}
    </CarouselContainer>
  );
}
