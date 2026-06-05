// Necesitamos unha funcion para que cada vez que cambiemos a seleccion nos radioButtons a opción seleccionada cambie de cor

function actualizarRadios() {
  const radios = document.querySelectorAll('input[type="radio"]');

  // Unha vez temos a lista dos radioButtons, temos que acceder ao pai de cada un xa que é o que imos cambiar de cor.
  // Antes de asignarlles unha cor nova, temos que asegurarnos de limpar o anterior
  radios.forEach((inp) => {
    inp.parentElement.style.backgroundColor = "";
  });

  // Agora temos que acceder ao input seleccionado para asignarlle o color de fondo ao seu elemento pai
  const checked = document.querySelector('input[type="radio"]:checked');
  if (checked && checked.parentElement) {
    checked.parentElement.style.backgroundColor = "pink";
  }
}

// Unha vez temos a función definida, temos que engadir o evento nos inputs para que cada vez que cambien se execute a función

document.querySelectorAll('input[type="radio"]').forEach((input) => {
  input.addEventListener("change", actualizarRadios);
});

// Executamos a función aquí para que ao cargar a páxina apareza xa o fondo do radio preseleccionado
actualizarRadios();

// Agora cambiamos o fontWeight do elemento cuyo valor = 2
const valor2 = document.querySelector('input[value="2"]');

if (valor2 && valor2.parentElement) {
  valor2.parentElement.style.fontWeight = "bold";
}
