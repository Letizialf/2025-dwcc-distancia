const boton = document.getElementById("alternarClase");

boton.addEventListener("click", function () {
  boton.classList.toggle("rosa"); //Toggle signivica alternar
  boton.classList.toggle("azul");
});
