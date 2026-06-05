// Collemos o botón e engadímoslle o evento
const boton = document.getElementById("cambiarTexto");
console.log(boton);

boton.addEventListener("click", function () {
  let nome = document.getElementById("nome").value;
  let titulo = document.getElementById("titulo");

  titulo.textContent = `Ola, ${nome}`;
});
