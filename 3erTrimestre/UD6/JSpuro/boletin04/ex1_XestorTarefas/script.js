// FUNCION 1: PERSONALIZAR SAUDO
const btnSaudo = document.getElementById("actualizarSaudo");
btnSaudo.addEventListener("click", actualizarSaudo);

function actualizarSaudo() {
  let saudo = document.getElementById("saudo");
  let nome = document.getElementById("nomeUsuario").value;

  if (nome) {
    saudo.textContent = `Benvido/a ${nome}`;
  }
}

// FUNCION 2: ENGADIR TAREFAS
const btnEngadir = document.getElementById("engadirTarefa");
const tarefa = document.getElementById("novaTarefa");
const prioridade = document.getElementById("prioridade");
const tarefas = document.getElementById("tarefas");

function crearTarefa() {
  if (tarefa.value.trim() === "") return;

  let contedor = document.createElement("div");
  contedor.classList.add("tarefa");

  if (prioridade.value === "alta") {
    contedor.classList.add("prioridade-alta");
  } else {
    contedor.classList.add("prioridade-baixa");
  }
  contedor.textContent = tarefa.value;

  // Engadimos a tarefa na lista
  tarefas.appendChild(contedor);

  // Limpamos o input
  tarefa.value = "";

  // FUNCION 3: MARCAR TAREFAS COMPLETADAS
  // Como para a seguinte funcion temos que engadir un listener sobre o div da tarefa, farémolo ao crear dita tarefa
  contedor.addEventListener("click", function () {
    contedor.classList.toggle("completada");
    //   Actualizamos o contador
    actualizarContador();
  });

  // Actualizamos o contador
  actualizarContador();
}

// EVENTO PARA ENGADIR TAREFAS
btnEngadir.addEventListener("click", crearTarefa);

// FUNCION 4: AMOSAR E AGOCHAR A LISTA
const btnMostrarOcultar = document.getElementById("mostrarLista");
const listaTarefas = document.getElementById("listaTarefas");
console.log(btnMostrarOcultar);
console.log(listaTarefas);

btnMostrarOcultar.addEventListener("click", function () {
  listaTarefas.style.display =
    listaTarefas.style.display === "none" ? "block" : "none";
});

// FUNCION 5: CONTADOR DE TAREFAS
let contador = 0;
const tarefasActivas = document.getElementById("contador");
console.log(tarefasActivas.textContent);

// Para poder actualizar o contador temos que seleccionar TODAS as tarefas que NON están completadas
function actualizarContador() {
  let tarefas = document.querySelectorAll(".tarefa:not(.completada)");
  tarefasActivas.textContent = `Tarefas activas: ${tarefas.length}`;
}

// FUNCION 6: ALTERNAR TEMAS NO CONTEDOR DA LISTA
let btnAlternar = document.getElementById("alternarTema");
btnAlternar.addEventListener("click", () => {
  listaTarefas.classList.toggle("tema-claro");
  listaTarefas.classList.toggle("tema-escuro");
});
