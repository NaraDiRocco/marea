#!/usr/bin/env python3
"""
generate_placeholders.py — genera placeholders SVG propios para public/img/
de la home de Marea. Fondo con degradado de marca, icono de imagen tenue
y rotulo con el nombre del hueco + proporcion sugerida.
Sin dependencias externas: SVG puro escrito a mano.
"""
import os

OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "img")

CARBON = "#1f1f1f"
CARBON2 = "#161616"
CHAMPAGNE = "#c7a46a"
PIEDRA = "#bdb7ae"
MARFIL = "#f5f3ee"

def svg_placeholder(width, height, label, ratio_label, uid):
    icon_size = min(width, height) * 0.16
    cx, cy = width / 2, height / 2 - height * 0.04
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" width="{width}" height="{height}" role="img" aria-label="{label}">
  <defs>
    <linearGradient id="bg-{uid}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{CARBON2}"/>
      <stop offset="55%" stop-color="{CARBON}"/>
      <stop offset="100%" stop-color="#2a2724"/>
    </linearGradient>
    <linearGradient id="line-{uid}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="{CHAMPAGNE}" stop-opacity="0"/>
      <stop offset="50%" stop-color="{CHAMPAGNE}" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="{CHAMPAGNE}" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="{width}" height="{height}" fill="url(#bg-{uid})"/>
  <rect x="0" y="0" width="{width}" height="{height}" fill="none" stroke="{CHAMPAGNE}" stroke-opacity="0.18" stroke-width="1"/>
  <!-- icono de imagen, tenue -->
  <g transform="translate({cx - icon_size/2},{cy - icon_size/2})" opacity="0.35" stroke="{PIEDRA}" stroke-width="{max(1.4, icon_size*0.03)}" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <rect x="0" y="0" width="{icon_size}" height="{icon_size*0.78}" rx="{icon_size*0.06}"/>
    <circle cx="{icon_size*0.24}" cy="{icon_size*0.26}" r="{icon_size*0.09}"/>
    <path d="M0 {icon_size*0.62} L{icon_size*0.32} {icon_size*0.36} L{icon_size*0.58} {icon_size*0.56} L{icon_size*0.78} {icon_size*0.4} L{icon_size} {icon_size*0.6}"/>
  </g>
  <!-- filete dorado -->
  <rect x="{width*0.32}" y="{cy + icon_size*0.62}" width="{width*0.36}" height="1.4" fill="url(#line-{uid})"/>
  <!-- rotulo -->
  <text x="50%" y="{cy + icon_size*0.62 + 26}" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="{max(13, width*0.032)}" fill="{MARFIL}" fill-opacity="0.82">{label}</text>
  <text x="50%" y="{cy + icon_size*0.62 + 26 + max(16, width*0.024)}" text-anchor="middle" font-family="Arial, sans-serif" font-size="{max(10, width*0.02)}" letter-spacing="2" fill="{CHAMPAGNE}" fill-opacity="0.75">{ratio_label}</text>
</svg>'''

def write(name, width, height, label, ratio_label):
    path = os.path.join(OUT_DIR, name)
    with open(path, "w") as f:
        f.write(svg_placeholder(width, height, label, ratio_label, uid=name.replace(".", "-")))
    print("ok", path)

if __name__ == "__main__":
    os.makedirs(OUT_DIR, exist_ok=True)
    write("placeholder-oficinas.svg", 800, 600, "Oficinas Marea", "4:3")
    write("placeholder-punta-del-este.svg", 1600, 900, "Punta del Este", "16:9")
    write("placeholder-equipo-1.svg", 600, 800, "Equipo Marea", "3:4")
    write("placeholder-equipo-2.svg", 600, 800, "Equipo Marea", "3:4")
    write("placeholder-edificio.svg", 800, 600, "Edificio Gala Puerto", "4:3")
