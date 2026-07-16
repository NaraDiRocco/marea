// Workaround para despliegues en Hostinger (pnpm 11).
//
// El binario nativo de esbuild (@esbuild/<plataforma>/bin/esbuild) a veces se
// instala SIN el bit de ejecucion (+x) en el entorno de Hostinger. Cuando
// Astro/Vite intenta lanzarlo como subproceso durante `astro build`, el SO lo
// rechaza con EACCES y la compilacion falla.
//
// Este script recorre node_modules, encuentra cualquier binario de esbuild y le
// garantiza permisos de ejecucion antes de compilar. Es idempotente y no hace
// nada danino en entornos donde el binario ya es ejecutable (Mac local, etc.).

import { readdirSync, statSync, chmodSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.cwd();
const found = [];

// Rutas donde pnpm/npm dejan el binario de esbuild segun el node-linker.
const candidates = [
  join(ROOT, 'node_modules', '.pnpm'),           // pnpm (isolated)
  join(ROOT, 'node_modules', '@esbuild'),         // npm / pnpm hoisted
];

function walkPnpmStore(storeDir) {
  if (!existsSync(storeDir)) return;
  for (const entry of readdirSync(storeDir)) {
    // Solo carpetas del paquete de plataforma: @esbuild+linux-x64@0.27.7, etc.
    if (!entry.startsWith('@esbuild+')) continue;
    // Ruta real: <store>/<entry>/node_modules/@esbuild/<plat>/bin/esbuild
    const platDir = join(storeDir, entry, 'node_modules', '@esbuild');
    collectEsbuildBins(platDir);
  }
}

function collectEsbuildBins(esbuildScopeDir) {
  if (!existsSync(esbuildScopeDir)) return;
  for (const plat of readdirSync(esbuildScopeDir)) {
    const bin = join(esbuildScopeDir, plat, 'bin', 'esbuild');
    if (existsSync(bin) && statSync(bin).isFile()) found.push(bin);
  }
}

walkPnpmStore(candidates[0]);
collectEsbuildBins(candidates[1]);

let fixed = 0;
for (const bin of found) {
  try {
    chmodSync(bin, 0o755);
    fixed++;
  } catch (err) {
    console.warn(`[fix-esbuild-perms] no se pudo chmod ${bin}: ${err.message}`);
  }
}

console.log(`[fix-esbuild-perms] binarios esbuild con +x asegurado: ${fixed}`);
