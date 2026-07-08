// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build
export default defineConfig({
  // Sitio estático — la invitación es una única página optimizada para mobile.
  // Publicado en GitHub Pages: https://naradirocco.github.io/marea/
  site: 'https://naradirocco.github.io',
  base: '/marea',
  compressHTML: true,
  // La raíz redirige a la invitación (ver src/pages/index.astro).
  // Las dos páginas: /invitacion y /links
});
