const btnMostrar = document.getElementById("mostrar");
const btnAgochar = document.getElementById("agochar");
const p = document.getElementById("texto");

btnMostrar.addEventListener("click", function () {
  p.style.display = "block";
});

btnAgochar.addEventListener("click", function () {
  p.style.display = "none";
});
