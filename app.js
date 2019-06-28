//Seleccionar los elementos del DOM y guardarlos en una variable
const container = document.querySelector(".container");
const boton = document.querySelector(".btn");
const hex = document.querySelector(".codigoHex");

//Hacer un array con los caracteres de muestra para armar el codigo hex
const numerosHex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//Escuchar el evento click del boton para asi cambiar el color de fondo
boton.addEventListener("click", () => {
  var colorHex = "#";
  for (i = 0; i < 6; i++) {
    var random = Math.floor(Math.random() * numerosHex.length);
    colorHex += numerosHex[random];
  }
  container.style.backgroundColor = colorHex;
  hex.innerHTML = colorHex;
});
