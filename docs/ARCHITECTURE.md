# Arquitectura — ecom-b2b-frontend

Misma arquitectura que `tms` (frontend), con interfaz visual propia.

React 19 + Vite 8 + TypeScript 6. Tailwind 4 + shadcn/Radix, react-hook-form + zod,
TanStack Table, Zustand, react-router-dom 7, axios (API).

## Estructura

```
src/
├── main.tsx
├── index.css                 # Tailwind + tokens de tema
├── app/
│   ├── router.tsx            # rutas (createBrowserRouter)
│   ├── paginas.ts            # pantallas con React.lazy (un chunk por pantalla)
│   └── layouts/              # AppLayout (RouterProvider) y layouts de ruta
├── features/<feature>/
│   ├── pages/                # vistas de ruta
│   ├── components/           # UI propia del feature
│   ├── services/             # acceso a la API, un archivo por operación (*.service.ts)
│   ├── mappers/              # API (snake_case) → modelo del front (*.mapper.ts)
│   ├── types/                # tipos del dominio (index.ts)
│   ├── validation/           # esquemas zod
│   └── store/                # estado del feature (Zustand)
├── shared/
│   ├── components/           # componentes transversales (common/, layout, etc.)
│   ├── constants/
│   ├── hooks/
│   ├── lib/                  # cliente HTTP (axios), manejo de errores, fechas
│   ├── store/                # stores transversales (tema, loading, sidebar)
│   ├── types/                # ServiceResponse, paginación
│   └── utils/
├── components/ui/            # primitivos shadcn
└── lib/utils.ts              # cn()
```

Alias `@/` → `src/`. Build con chunk `vendor` separado (ver `vite.config.ts`).
Deploy en Vercel con rewrite SPA (`vercel.json`).
