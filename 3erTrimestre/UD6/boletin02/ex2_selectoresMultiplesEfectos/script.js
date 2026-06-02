// Como o programa concentra a sua funcionalidade en 2 botóns temos que acceder a eles

const btnAmosar = document.getElementById("amosar");
const btnOcultar = document.getElementById("ocultar");
const grupo2 = document.querySelectorAll(".grupo2");

btnAmosar.addEventListener("click", function (e) {
  e.preventDefault();

  grupo2.forEach((element) => {
    element.style.display = "block";
  });
});

btnOcultar.addEventListener("click", function (e) {
  e.preventDefault();

  grupo2.forEach((element) => {
    element.style.display = "none";
  });
});
