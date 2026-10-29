const fotos = [
  "fondocebetis1.png",
  "fondocebetis2.png",
  "fondocebetis3.png",
  "fondocebetis4.png",
  "fondocebetis5.png",
  "fondocebetis6.png"
];

const contenedor = document.getElementById("fondos");

let indiceActual = 0;
const diapositivas = [];

fotos.forEach((ruta, indice) => {
  const foto = document.createElement("div");

  foto.className = "foto";
  foto.style.backgroundImage = `url("${ruta}")`;

  if (indice === 0) {
    foto.classList.add("activa");
  }

  contenedor.appendChild(foto);
  diapositivas.push(foto);
});

function cambiarFoto() {
  diapositivas[indiceActual].classList.remove("activa");

  indiceActual = (indiceActual + 1) % diapositivas.length;

  diapositivas[indiceActual].classList.add("activa");
}

// cambia las fotos cada 5seg.
if (diapositivas.length > 1) {
  setInterval(cambiarFoto, 5000);
}

window.addEventListener("load", function () {
    const pantalla = document.getElementById("pantalla-carga");

    setTimeout(function () {
        pantalla.classList.add("ocultar");
    }, 1000);
});