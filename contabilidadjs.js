const contenedor = document.getElementById("fondos");

const fotos = [
    "contabilidad1.png",
    "contabilidad2.png",
    "contabilidad3.png"
];

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

// Cambia únicamente las fotografías cada 5 segundos
if (diapositivas.length > 1) {
    setInterval(cambiarFoto, 5000);
}