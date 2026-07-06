# Invitación · Inauguración Marea Business

Invitación online **mobile-first** construida con **Astro**, siguiendo el manual de
identidad de Marea Business (Vrotta Emprende). Incluye countdown en vivo, secciones
de negocios, ubicación y confirmación por WhatsApp.

## Cómo ejecutarla

```bash
pnpm install     # instalar dependencias (una sola vez)
pnpm dev         # servidor local en http://localhost:4321
pnpm build       # genera la versión final en /dist (lista para publicar)
pnpm preview     # previsualizar la versión de producción
```

## ✏️ Editar los datos del evento

Todo se cambia desde **un solo archivo**: [`src/lib/config.ts`](src/lib/config.ts)
No hace falta tocar el diseño ni el HTML.

- **Fecha y hora del countdown** → campo `fechaISO` (formato `2026-08-15T19:00:00-03:00`).
- **Fecha/hora visibles** → `fechaTexto` y `horaTexto`.
- **Lugar y mapa** → objeto `lugar`.
- **WhatsApp** → objeto `whatsapp` (poné el `numero` con código de país, sin `+` ni espacios).
- **Dress code** → campo `dressCode` (dejalo en `''` para ocultarlo).

## 🏢 Agregar los logos de los negocios

1. Copiá los archivos de logo (PNG o SVG) a la carpeta [`public/logos/`](public/logos/).
2. En `src/lib/config.ts`, dentro del array `negocios`, completá el campo `logo`
   con la ruta, por ejemplo:

   ```ts
   { nombre: 'Inmobiliaria X', rubro: 'Inmobiliaria', logo: '/logos/inmobiliaria-x.png' },
   ```

3. Si un negocio no tiene `logo`, se muestra un placeholder tipográfico elegante.

> **Nota sobre color de logos:** como el fondo es oscuro, los logos se aclaran
> automáticamente con un filtro (`brightness(0) invert(1)`), pensado para logos en
> negro. Si tu logo ya viene en claro o a color y no querés ese filtro, editá la
> regla `.negocio__logo img` en [`src/pages/index.astro`](src/pages/index.astro).

## 🎨 Identidad aplicada (del manual)

| Elemento | Valor |
|---|---|
| Negro carbón (fondo) | `#1F1F1F` |
| Blanco marfil (texto) | `#F5F3EE` |
| Gris piedra (secundario) | `#BDB7AE` |
| Champagne (acento dorado) | `#C7A46A` |
| Verde oliva | `#5F6955` |
| Nogal | `#6A4E3B` |
| Serif (títulos, ~Lovelace) | Cormorant Garamond |
| Sans (texto, ~Morisawa) | Jost |

Las variables viven en [`src/styles/global.css`](src/styles/global.css).

## 🚀 Publicar

`pnpm build` genera la carpeta `dist/` con archivos estáticos. Se puede subir tal
cual a Netlify, Vercel, Cloudflare Pages, GitHub Pages o cualquier hosting estático.
