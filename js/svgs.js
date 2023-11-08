"use strict";
const containerSVG = document.getElementById("taca");
const arxiusSvg = [
    "blob.svg",
    "blob-2.svg",
    "blob-3.svg",
    "blob-4.svg",
    "blob-9.svg",
    "blob-10.svg",
];
function svgRandom() {
    const randomSvg = arxiusSvg[Math.floor(Math.random() * arxiusSvg.length)];
    // Crea un nou element object para carregar el SVG
    const nouSVG = document.createElement("object");
    nouSVG.data = `svg/${randomSvg}`; // Ruta al arxiu SVG a la carpeta 'svg'
    nouSVG.type = "image/svg+xml"; // Estableix el tipus de contingut
    // Afegeix nou SVG al contenidor
    containerSVG.innerHTML = ""; // Buida abans d'afegir
    containerSVG.appendChild(nouSVG);
}
