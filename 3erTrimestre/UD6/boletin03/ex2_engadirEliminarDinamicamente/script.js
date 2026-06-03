// Contedor
const div = document.getElementById("zona");

// Añadir párrafo
const btnEngadir = document.querySelector("#engadir");

btnEngadir.addEventListener("click", function () {
  let p = document.createElement("p");
  p.textContent = "Parágrafo engadido";

  div.appendChild(p);
});

// Eliminar TODOS
const btnEliminar = document.getElementById("eliminar");

btnEliminar.addEventListener("click", function () {
  div.innerHTML = "";
});
