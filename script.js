// Lógica del carrusel de diapositivas

var indiceActual = 0;
var diapositivas = document.querySelectorAll('.diapositiva');
var puntos = document.querySelectorAll('.punto');

function irDiapositiva(n) {
  diapositivas[indiceActual].classList.remove('activa');
  puntos[indiceActual].classList.remove('activo');

  indiceActual = (n + diapositivas.length) % diapositivas.length;

  diapositivas[indiceActual].classList.add('activa');
  puntos[indiceActual].classList.add('activo');
}

function cambiarDiapositiva(direccion) {
  irDiapositiva(indiceActual + direccion);
}

// Avance automático de las img del carruseel cada 5 segundos
setInterval(function () {
  cambiarDiapositiva(1);
}, 5000);
