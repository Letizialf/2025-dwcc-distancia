// Seleccionamos o formulario polo seu id
let formulario = document.getElementById("meuFormulario");
console.log(formulario);

// Seleccionamos o formulario polo nome
let formularioNome = document.forms["nomeFormulario"];
console.log(formularioNome);

// Seleccionamos o formulario por orde no documento
let formularioOrde = document.forms[0];
console.log(formularioOrde);

// Accedemos aos elementos do formulario
let campoNome = formulario["nome"];
let campoIdade = formulario["idade"];

console.log(campoNome, campoIdade);
