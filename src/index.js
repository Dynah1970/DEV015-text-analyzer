import analyzer from "./analyzer.js";

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto analyzer
const boton = document.getElementById("reset-button");
const palabras = document.querySelector("li.contadores:nth-child(1)");
const caracteres = document.querySelector("li.contadores:nth-child(2)");
const caracteresSE = document.querySelector("li.contadores:nth-child(3)");
const numeros = document.querySelector("li.contadores:nth-child(4)");
const suma = document.querySelector("li.contadores:nth-child(5)");
const longitud = document.querySelector("li.contadores:nth-child(6)");
const cajaTexto = document.querySelector("textarea");

//metricas
cajaTexto.addEventListener("input", metricas);
function metricas() {
  const textoFinal = cajaTexto.value;

  //contabilizar palabras
  const wordsCount = analyzer.getWordCount(textoFinal);
  palabras.innerHTML = "Recuento de palabras:" + wordsCount;

  const charactersCount = analyzer.getCharacterCount(textoFinal);
  caracteres.innerHTML = "Recuento de caracteres: " + charactersCount;
  //contabilzar sin  espacios y sin numeros
  const characterCountEX =
    analyzer.getCharacterCountExcludingSpaces(textoFinal);
  caracteresSE.innerHTML =
    "Recuento de caracteres sin espacios y signos:" + characterCountEX;

  //contabilizar numeros
  const numberCount = analyzer.getNumberCount(textoFinal);
  numeros.innerHTML = "Recuento de  numeros:" + numberCount;

  //suma de numeros
  const sumaFinal = analyzer.getNumberSum(textoFinal);
  suma.innerHTML = "Suma total de numeros:" + sumaFinal;

  // longitud del texto
  const averageWord = analyzer.getAverageWordLength(textoFinal);
  longitud.innerHTML = "Longitud media de palabras;" + averageWord;
}

boton.addEventListener("click", function () {
  if (cajaTexto.value === "") {
    alert("El cuadro esta listo para que escribas en el ");
  } else {
    cajaTexto.value = "";
  }
  palabras.innerHTML = "Recuento de palabras:0";
  caracteres.innerHTML = "Recuento de caracteres:0";
  caracteresSE.innerHTML = "Recuento de caracteres sin espacios y signos:0";
  numeros.innerHTML = "Recuentos de numeros:0";
  suma.innerHTML = "Suma total de numeros:0";
  longitud.innerHTML = "Longitud media de palabras:0";
});

//TODO: escuchar eventos del DOM e invocar los metodos del objeto 'Analyzer'