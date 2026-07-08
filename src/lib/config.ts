/**
 * ─────────────────────────────────────────────────────────────
 *  CONFIGURACIÓN DE LA INVITACIÓN — MAREA BUSINESS
 * ─────────────────────────────────────────────────────────────
 *  Editá SOLO este archivo para cambiar los datos del evento.
 *  No hace falta tocar el diseño ni el HTML.
 */

export const evento = {
  // Título y bajada de la invitación
  kicker: 'Tenemos el agrado de invitarte a la',
  titulo: 'Inauguración',
  // Línea chica que acompaña al título del evento
  tituloDetalle: 'de nuestras nuevas instalaciones',
  subtitulo: 'Marea Business',

  // Texto de presentación (tomado del espíritu del manual de identidad).
  // Podés resaltar palabras envolviéndolas en <strong>…</strong> (se ven en negrita blanca).
  descripcion:
    'Un nuevo <strong>punto de encuentro profesional</strong> en Punta del Este, donde la <strong>confianza</strong>, la <strong>claridad</strong> y la <strong>visión estratégica</strong> se unen para acompañar operaciones inmobiliarias, legales, notariales y empresariales.',

  // ── COUNTDOWN ──────────────────────────────────────────────
  // Fecha y hora del evento en formato ISO (zona horaria de Uruguay: -03:00).
  fechaISO: '2026-09-19T18:00:00-03:00',

  // Texto legible de la fecha (se muestra al usuario)
  fechaTexto: '19 de septiembre de 2026',
  horaTexto: '18:00 hs',

  // ── LUGAR ──────────────────────────────────────────────────
  lugar: {
    nombre: 'Edificio Gala Puerto · Local 101',
    direccion: 'Calle 10 y 11, Península de Punta del Este, Maldonado',
    // Link a Google Maps (opcional; dejar '' para ocultar el botón)
    mapsUrl:
      'https://maps.google.com/?q=Edificio+Gala+Puerto,+Calle+10+y+11,+Punta+del+Este',
  },

  // ── RSVP POR WHATSAPP ──────────────────────────────────────
  // ── RSVP: dos botones, uno por estudio ─────────────────────
  rsvp: {
    titulo: 'Confirmá tu lugar',
    subtitulo: 'Confirmá tu asistencia con quien te invitó',
    // Número en formato internacional SIN + ni espacios. Uruguay: 598 + número sin el 0.
    contactos: [
      {
        nombre: 'Mecol Estudio',
        logo: '/logos/mecol-blanco.png',
        numero: '59899759109',
        mensaje: '¡Hola! Confirmo mi asistencia a la inauguración. (Mecol Estudio)',
      },
      {
        nombre: 'Inmobiliaria Caetano',
        logo: '/logos/caetano-blanco.png',
        numero: '59895559230',
        mensaje: '¡Hola! Confirmo mi asistencia a la inauguración. (Inmobiliaria Caetano)',
      },
    ],
  },

  // ── DRESS CODE (opcional; dejar '' para ocultar) ───────────
  dressCode: 'Elegante',
};

/**
 * NEGOCIOS QUE INTEGRAN MAREA BUSINESS
 * ────────────────────────────────────
 *  Para cada negocio:
 *   - nombre: se muestra debajo del logo.
 *   - rubro:  descripción corta (ej. "Inmobiliaria", "Escribanía").
 *   - logo:   ruta al archivo dentro de /public/logos/  (ej. '/logos/mi-logo.png').
 *             Si lo dejás en '' se muestra un placeholder tipográfico elegante.
 *
 *  Para agregar los logos reales: copiá los archivos a la carpeta public/logos/
 *  y completá el campo "logo" con la ruta.
 */
export const negocios = [
  { nombre: 'Mecol Estudio', rubro: 'Estudio profesional', logo: '' },
  { nombre: 'Inmobiliaria Caetano', rubro: 'Operaciones inmobiliarias', logo: '' },
];
