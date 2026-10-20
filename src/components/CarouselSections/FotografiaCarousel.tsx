import CarouselContainer from "../CarouselContainer";
import CarouselCard from "../CarouselCard";

const fotografiaData = [
  {
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuANFytM3DSWV06PdIpwO4B3DmsOa3w_F1Bj1dA1bPa2LMqcUZW-4hYNkkV01pfFiTceOMz7m7HzUEuJ8yHp4xGfXlcT5kVGHcAPJ5tJ6NCQlsZdneQMnAXcnkiJXCZO49pSUVhNwUF3vpk8ICZkDT0Yu_-Z3PN3htR56jNuUUNADZ_auAoNVh10aoeBo9vaCxpIXOUs-4n2hcppw3oZRDeVAEnw6N0l07KoKSvRO-ofZHmDjwicYb2_7Q",
    imageAlt: "Powerful black and white photojournalism shot of a peaceful social protest march",
    topLabel: "FOTOPERIODISMO",
    topLabelVariant: "dark" as const,
    bottomLabel: "35mm f/1.8",
    title: "Cobertura de Protestas & Movilización Social",
    description:
      "Crónica en caliente desde el centro de la acción civil. Tensión capturada en luz natural sin artificios.",
    tags: [{ label: "En Terreno" }, { label: "Crónica Social" }],
    linkText: "Ver en Drive",
    linkHref:
      "https://drive.google.com/file/d/1teu7I3h4GnZOCAitoYOh65bZ_brBKLIA/view?usp=sharing",
    btnVariant: "default" as const,
    minWidth: "min-w-[85%] sm:min-w-[350px]",
    aspectRatio: "portrait" as const,
  },
  {
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBwPSmTpRDzXlxTvS888hr-YGc1Nb_yEGtBDzytcD9eUPNQxoK6ktCRSXN4mncvbqzgPdFM7whm0L-wAX95lz99glnwVTVcXk0j-N86z8IwyJCXESEiQ15j9qQKgKz1pJaX9T-I6Hip_VBHA6lMcV5dNTel-A5-qFYwoqzopfWpKOWWoVIx96g-VWjOtNBi3YBJhwOZ4pPzRiQdOBRLd_6s0Q52_IY8Q33IHHYqsMlKhMRsqETQsQNFDQ",
    imageAlt: "Intimate portrait of an elder artisan in rural workshop",
    topLabel: "RETRATO HUMANO",
    topLabelVariant: "dark" as const,
    bottomLabel: "50mm f/1.4",
    title: "Retrato Documental & Registro Humano",
    description:
      "Búsqueda de la mirada frontal con empatía y cercanía. Enfoque en la memoria de los rostros y la dignidad.",
    tags: [{ label: "Luz Natural" }, { label: "Testimonial" }],
    linkText: "Ver en Drive",
    linkHref:
      "https://drive.google.com/file/d/1w6BjH5DXrUiZ8Nl5wAkbR7PzMXtcrj-k/view?usp=sharing",
    btnVariant: "default" as const,
    minWidth: "min-w-[85%] sm:min-w-[350px]",
    aspectRatio: "portrait" as const,
  },
  {
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAMq6Dpdx9o7fsjg4yYoFaFe8EVU-logZlAaKRxoo2jq7ZiM8wnWlqsRacT4VTYcRFjmIJr32mms0E1BTwh80CrW6qulhyzd_g1h5T8RZzp15xucaP6OWlbI61tlP6FUWbFF7ogdmKglfe-MhX3JlpGk7RWS-OSO0s9rA9NpCQVcNHG4idEQd6VwzS8l57MqfTG9YwP4qNBMLehTROsD2lMxeiTLySWeps_qRolxAwTZ1oUqeV8rM1K8A",
    imageAlt: "Dramatic street photography scene at dusk with wet asphalt reflecting urban street lamps",
    topLabel: "URBANO",
    topLabelVariant: "dark" as const,
    bottomLabel: "24mm f/2.8",
    title: "Crónica Urbana & Espacios Colectivos",
    description:
      "Líneas de fuga y arquitectura cotidiana. La ciudad como escenario vivo de relaciones de clase y supervivencia.",
    tags: [{ label: "Líneas de Fuga" }, { label: "Ciudad Real" }],
    linkText: "Ver en Drive",
    linkHref:
      "https://drive.google.com/file/d/1y7b2QnLHqTHVFIBISzplSXBJGsAwmsIG/view?usp=sharing",
    btnVariant: "default" as const,
    minWidth: "min-w-[85%] sm:min-w-[350px]",
    aspectRatio: "portrait" as const,
  },
  {
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBQamheyCt1ZDK58plWGBiw-Kh4WHpDzfNfxJmJVwbSE8QNBOrl4Op_1hN2t9pwxer5Rn-7VTn-n6kACPr-p1n3LE6ZXKU0tv4vvHr7BlrEMVZomzOJkSyfdcW0OOS7PlrarmAx-AlkBWmZHfyWzlTQzUreQVnaWMrSkmtVX0f05QrSPJh9Yr2ap-l_IzthKUqWFNwuyLuH923SyciHuj42FMLxM6aRQwcBPGn0HDF_0-IDyYLeI5FE-g",
    imageAlt: "Community neighbourhood assembly gathering in a school gymnasium",
    topLabel: "COMUNITARIO",
    topLabelVariant: "dark" as const,
    bottomLabel: "28mm f/2.0",
    title: "Registro Comunitario & Asambleas",
    description:
      "Documentación de espacios de toma de decisión barrial. La voz compartida plasmada en composición colectiva.",
    tags: [{ label: "Asambleas" }, { label: "Base Social" }],
    linkText: "Ver en Drive",
    linkHref:
      "https://drive.google.com/file/d/13sGuammoC1EySyJlNwirqAtxlWvi3Y-u/view?usp=sharing",
    btnVariant: "default" as const,
    minWidth: "min-w-[85%] sm:min-w-[350px]",
    aspectRatio: "portrait" as const,
  },
  {
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA5etbEcXLgKpCN-KLu4mI1AlMfLj9FMc0r6tm_k0hrfcCYxnphvYTcZl-_rBs1fPtFjHxOt18CKxDopgIMJxizcTnUZIUkw-JDA9vZvN-iChvefgxZyAQIOqPZvhlrl9RLirjxvXLm_cKkoXmiXx23A6smymtj7lnPfN-_qutmTgGR02k5uNje4qia3GNv31ULjSYkekQvz-F1_DFuukmZ8FmiTSSOCTUDc5kHM0ca8C5xVkd6sDgcmA",
    imageAlt: "Traditional shoemaker hands carving leather in authentic dark workshop",
    topLabel: "PATRIMONIO",
    topLabelVariant: "dark" as const,
    bottomLabel: "85mm f/1.8",
    title: "Oficios & Patrimonio Vivencial",
    description:
      "Saber artesanal en primer plano: detalle de las manos trabajadoras y resistencia de los oficios tradicionales.",
    tags: [{ label: "Manos & Oficio" }, { label: "Patrimonio Vivo" }],
    linkText: "Ver en Drive",
    linkHref:
      "https://drive.google.com/file/d/1vENzmZNqErLBkFDB_2SMxZ3o1vGDeEKT/view?usp=sharing",
    btnVariant: "default" as const,
    minWidth: "min-w-[85%] sm:min-w-[350px]",
    aspectRatio: "portrait" as const,
  },
];

export default function FotografiaCarousel() {
  return (
    <CarouselContainer
      id="fotografia"
      subtitle="04 // FOTOPERIODISMO & CRÓNICA VISUAL"
      title="FOTOGRAFÍAS & COBERTURA DOCUMENTAL"
      description="Ojo periodístico, momento decisivo y trabajo en terreno. Registro directo de movilizaciones ciudadanas, memoria urbana y oficios colectivos."
      bgColor="bg-[#f4f3f0]"
      scrollOffset={380}
    >
      {fotografiaData.map((item) => (
        <CarouselCard key={item.title} {...item} />
      ))}
    </CarouselContainer>
  );
}
