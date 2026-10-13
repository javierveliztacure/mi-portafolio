// Cada pantalla es un chunk aparte que se descarga al visitarla:
//   export const XPage = lazy(() => import("@/features/x/pages/XPage"));
// Va en su propio archivo porque router.tsx exporta `router`, y un archivo que
// mezcla componentes con otras exportaciones rompe el fast refresh de Vite.
export {};
