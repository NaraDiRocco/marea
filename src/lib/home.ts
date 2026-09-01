/**
 * ─────────────────────────────────────────────────────────────
 *  CONFIGURACIÓN DE LA HOME — MAREA BUSINESS
 * ─────────────────────────────────────────────────────────────
 *  Editá SOLO este archivo para cambiar los textos y datos de la
 *  landing de inicio (`/`). No hace falta tocar el diseño ni el HTML.
 */

export const marca = {
  kicker: 'Punta del Este',
  titulo: 'Marea',
  // Bajada del hero. Podés resaltar palabras envolviéndolas en <strong>…</strong>.
  bajada:
    'Un <strong>ecosistema de negocios</strong> en Punta del Este que reúne, bajo una misma casa, a estudios y empresas de <strong>confianza</strong> para acompañarte a instalarte, invertir y crecer.',
  // Claim corto, se usa como firma / cierre.
  claim: 'Confianza, claridad y visión estratégica.',
};

/**
 * NAVEGACIÓN DEL HEADER
 * ─────────────────────
 *  Anclas del menú principal (desktop y mobile).
 */
export const nav = [
  { label: 'Marea', href: '#que-es' },
  { label: 'Ecosistema', href: '#ecosistema' },
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Punta del Este', href: '#punta-del-este' },
  { label: 'Contacto', href: '#lugar' },
];

/**
 * FRANJA DE CREDENCIALES (debajo del hero)
 * ─────────────────────────────────────────
 *  Ítems cortos con icono. El icono se referencia por nombre y se
 *  resuelve en el componente (ver mapa de iconos en index.astro).
 */
export const credenciales = [
  { icono: 'balanza', texto: 'Estudio contable y legal' },
  { icono: 'llave', texto: 'Negocios inmobiliarios' },
  { icono: 'pin', texto: 'Punta del Este · Península' },
  { icono: 'globo', texto: 'Uruguay y Argentina' },
];

/**
 * QUÉ ES MAREA — VALORES
 * ────────────────────────
 *  3 valores cortos con icono, debajo del texto principal de la sección.
 */
export const valores = [
  { icono: 'escudo', titulo: 'Confianza', texto: 'Marcas con trayectoria que ya trabajan juntas.' },
  { icono: 'ojo', titulo: 'Claridad', texto: 'Procesos simples, sin letra chica ni sorpresas.' },
  { icono: 'brujula', titulo: 'Visión estratégica', texto: 'Acompañamiento pensado a mediano y largo plazo.' },
];

/**
 * IMAGEN DE LA SECCIÓN "QUÉ ES MAREA"
 * ─────────────────────────────────────
 *  Reemplazar por una foto real de las oficinas (proporción 4:3).
 */
export const imagenQueEs = {
  src: '/img/placeholder-oficinas.svg',
  alt: 'Oficinas de Marea en Punta del Este (imagen provisoria — reemplazar por foto real 4:3)',
};

/**
 * MARCAS QUE INTEGRAN EL ECOSISTEMA MAREA
 * ────────────────────────────────────────
 *  Para cada marca:
 *   - nombre:      nombre de la empresa/estudio.
 *   - rubro:        rubro breve (ej. "Estudio contable y legal").
 *   - descripcion:  1-2 líneas describiendo qué hace.
 *   - logo:         ruta al archivo dentro de /public/logos/ (ya en blanco, sin filtro).
 *   - wa:           número de WhatsApp en formato internacional sin "+" ni espacios.
 *   - web:          URL del sitio propio. Dejar '' si todavía no existe
 *                    (en ese caso el botón de web no se renderiza).
 *   - servicios:    lista corta de 2-3 servicios puntuales, para la tarjeta horizontal.
 *
 *  Para sumar una marca nueva al ecosistema, agregá un objeto más al array.
 */
export const marcas = [
  {
    nombre: 'Mecol Estudio',
    rubro: 'Estudio contable y legal',
    descripcion:
      'Asesoramiento contable, legal y notarial para instalarte y operar con orden en Uruguay.',
    logo: '/logos/mecol-blanco.png',
    wa: '59899759109',
    web: '',
    servicios: ['Apertura y gestión de empresas', 'Asesoramiento contable y fiscal', 'Trámites notariales'],
  },
  {
    nombre: 'Inmobiliaria Caetano',
    rubro: 'Negocios inmobiliarios',
    descripcion:
      'Compra, venta y alquiler de propiedades en Punta del Este, con acompañamiento en cada etapa.',
    logo: '/logos/caetano-blanco.png',
    wa: '59895559230',
    web: '',
    servicios: ['Compra y venta de propiedades', 'Alquileres', 'Escrituración y due diligence'],
  },
];

/**
 * BENEFICIOS POR PÚBLICO
 * ───────────────────────
 *  Dos bloques: emprendedores e inversores/compradores.
 *  Evitá cifras, porcentajes o promesas de rendimiento: la propuesta es
 *  de acompañamiento y confianza, no de resultados garantizados.
 *  Cada ítem tiene su propio icono (ver mapa de iconos en index.astro).
 */
export const beneficios = [
  {
    publico: 'Para emprendedores',
    titulo: 'Instalate y operá en Uruguay',
    items: [
      { icono: 'documento', texto: 'Asesoramiento contable y legal para radicarte en Punta del Este' },
      { icono: 'maletin', texto: 'Apertura de empresa y orientación en residencia fiscal' },
      { icono: 'sello', texto: 'Acompañamiento notarial en cada trámite' },
      { icono: 'red', texto: 'Un punto de encuentro y red de contactos para hacer crecer tu proyecto' },
    ],
  },
  {
    publico: 'Para compradores e inversores',
    titulo: 'Comprá y vendé con respaldo',
    items: [
      { icono: 'llave', texto: 'Acompañamiento en la compra y venta de inmuebles' },
      { icono: 'lupa', texto: 'Escrituración y due diligence de cada operación' },
      { icono: 'balanza', texto: 'Asesoramiento legal y contable integrado a la operación inmobiliaria' },
      { icono: 'apreton', texto: 'Contacto directo con quienes conocen el mercado de Punta del Este' },
    ],
  },
];

/**
 * PUNTA DEL ESTE
 * ───────────────
 *  Sección con imagen de fondo full-bleed + texto. Sin cifras ni
 *  afirmaciones legales/fiscales específicas.
 */
export const puntaDelEste = {
  kicker: 'Por qué acá',
  titulo: 'Punta del Este',
  parrafo:
    'Un mercado maduro, cercano a Buenos Aires y con calidad de vida durante todo el año. Punta del Este combina un marco institucional estable con una escala humana que facilita instalarse, invertir y hacer negocios con tranquilidad.',
  // Imagen de fondo full-bleed. Reemplazar por foto real (16:9, apaisada).
  imagen: {
    src: '/img/placeholder-punta-del-este.svg',
    alt: 'Vista de Punta del Este (imagen provisoria — reemplazar por foto real 16:9)',
  },
};

/**
 * EQUIPO / OFICINAS
 * ───────────────────
 *  3 placeholders (2 de equipo + 1 de oficinas). Reemplazar por fotos reales.
 */
export const equipo = {
  kicker: 'Las personas',
  titulo: 'Equipo y oficinas',
  parrafo:
    'Detrás de Marea hay personas con trayectoria en cada una de las marcas del ecosistema, trabajando desde una misma casa en la Península.',
  fotos: [
    { src: '/img/placeholder-equipo-1.svg', alt: 'Integrante del equipo Marea (imagen provisoria — reemplazar por foto real 3:4)', pie: 'Equipo Marea' },
    { src: '/img/placeholder-equipo-2.svg', alt: 'Integrante del equipo Marea (imagen provisoria — reemplazar por foto real 3:4)', pie: 'Equipo Marea' },
    { src: '/img/placeholder-oficinas.svg', alt: 'Oficinas de Marea (imagen provisoria — reemplazar por foto real 4:3)', pie: 'Oficinas · Gala Puerto' },
  ],
};

export const lugar = {
  nombre: 'Edificio Gala Puerto · Local 101',
  direccion: 'Calle 10 y 11, Península de Punta del Este, Maldonado',
  // Horario de atención, dejar '' para no mostrar la línea.
  horario: 'Lunes a viernes, 9 a 18 hs',
  mapsUrl: 'https://maps.google.com/?q=Edificio+Gala+Puerto,+Calle+10+y+11,+Punta+del+Este',
  // Imagen del edificio/mapa. Reemplazar por foto real (4:3).
  imagen: {
    src: '/img/placeholder-edificio.svg',
    alt: 'Edificio Gala Puerto (imagen provisoria — reemplazar por foto real 4:3)',
  },
};

// Contacto general de la marca (WhatsApp de Mecol, con mensaje de bienvenida genérico).
export const contacto = {
  numero: '59899759109',
  mensaje: '¡Hola! Quiero conocer Marea.',
};

// Banda hacia la inauguración de las nuevas instalaciones.
export const inauguracion = {
  fechaTexto: '19 de septiembre de 2026',
  url: '/invitacion',
};

/**
 * FOOTER
 * ───────
 *  Columnas del pie de página.
 */
export const footer = {
  firma: 'Punta del Este',
  direccion: lugar.direccion,
};

// ── Metadatos SEO / Open Graph ──
export const seo = {
  titulo: 'Marea · Punta del Este',
  descripcion:
    'Marea es un ecosistema de negocios en Punta del Este: estudios y empresas de confianza para instalarte, invertir y crecer.',
};
