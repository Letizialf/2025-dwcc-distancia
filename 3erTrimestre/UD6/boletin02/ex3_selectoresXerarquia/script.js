// Seleccionar <li> que sexan fillos directos de <ol>
let li = document.querySelectorAll("ol > li");
li.forEach((elemento) => {
  elemento.style.border = "2px solid red";
});

// Todos os <li> que se atopan dentro de un <ol>
let liGeneral = document.querySelectorAll("ol li");
liGeneral.forEach((elemento) => {
  elemento.style.backgroundColor = "#eef";
});

// 1o irmán directo do elemento con id='primeiro'
let irman = document.querySelector("#primeiro + li");
if (irman) {
  irman.style.fontWeight = "bold";
}

// TODOS os irmáns seguintes do elemento con id=primeiro
let todos = document.querySelectorAll("#primeiro ~ li");
todos.forEach((element) => {
  element.style.fontStyle = "italic";
});
