export const WHATSAPP_NUMBER = "51987411090";
export const WHATSAPP_DISPLAY = "+51 987 411 090";
export const CV_URL =
  "https://drive.google.com/file/d/1DAA6DvhgqNhjwkfR-XoR6f65WywdCtyR/view?usp=sharing";
export const CONTACT_EMAIL = "contacto@javierveliz.pe";

export const whatsappLink = (
  message = "Hola Javier, vi tu portafolio y quiero conversar sobre un proyecto"
) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
