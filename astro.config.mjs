// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build
export default defineConfig({
  // Sitio estático desplegado en Hostinger, en la raíz del dominio propio.
  // Deploy: Hostinger clona este repo (marketingmecol/Marea-Web) y corre
  // `pnpm build`. El script scripts/fix-esbuild-perms.mjs evita el EACCES de
  // esbuild que rompía las compilaciones (mismo esquema que Mecol).
  //
  // Dominio de producción en Hostinger (raíz del dominio propio).
  // Sólo afecta canonical/sitemap; no cambia el funcionamiento de las rutas.
  site: 'https://mareagrp.com',
  output: 'static',
  trailingSlash: 'never',
  compressHTML: true,
  // Sin `base`: el sitio vive en la raíz del dominio.
  // Las rutas resuelven solas vía import.meta.env.BASE_URL en cada página.
  // Páginas: / (redirige a /invitacion), /invitacion y /links
});
