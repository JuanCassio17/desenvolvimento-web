let contadorMarcador = document.querySelector("#contador");

let numero = 0;

function verificarOpacidade() {
  let imgElementClique = document.querySelector('img[alt="clique"]');
  let imgElementVovo = document.querySelector('img[alt="vovo"]');
  let imgElementFazenda = document.querySelector('img[alt="fazenda"]');
  
  if (numero <= 100) {
    imgElementClique.style.opacity = 0.5;
    imgElementVovo.style.opacity = 0.5;
    imgElementFazenda.style.opacity = 0.5;
  } else if (numero >= 100 && numero < 120) {
    imgElementClique.style.opacity = 1;
    imgElementVovo.style.opacity = 0.5;
    imgElementFazenda.style.opacity = 0.5;
  } else if (numero >= 120 && numero < 150) {
    imgElementClique.style.opacity = 1;
    imgElementVovo.style.opacity = 1;
    imgElementFazenda.style.opacity = 0.5;
  } else if (numero >= 150) {
    imgElementClique.style.opacity = 1;
    imgElementVovo.style.opacity = 1;
    imgElementFazenda.style.opacity = 1;
  }
}

function atualizarNumero() {
  contadorMarcador.textContent = numero;
  verificarOpacidade();
}

let cookieButton = document.querySelector("#cookieButton");
cookieButton.addEventListener('click', function(){
  numero = parseInt(contadorMarcador.textContent) + 1;
  atualizarNumero();
});

// permitir evento dos teclados também
// document.addEventListener('keyup', function(){
//   numero = parseInt(contadorMarcador.textContent) + 1;    
//   atualizarNumero();
// });

let buttonReiniciar = document.querySelector("#buttonReiniciar");
buttonReiniciar.addEventListener('click', function() {
  numero = 0;
  atualizarNumero();
});
