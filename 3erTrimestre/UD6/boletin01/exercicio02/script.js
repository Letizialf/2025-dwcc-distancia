let form = document.getElementById("commentForm");
let commentSection = document.getElementById("commentSection");

// Engadimos un evento ao formulario para cando se envíe
form.addEventListener("submit", function (event) {
  event.preventDefault();

  let nome = document.getElementById("name").value;
  let comentario = document.getElementById("comment").value;

  // Creamos o div que almacenará cada comentario
  let divComentario = document.createElement("div");
  divComentario.classList.add("comment");

  // Creamos os elementos onde se almacenará o nome e o texto do comentario
  let usuario = document.createElement("h3");
  let commentText = document.createElement("p");
  let deleteButton = document.createElement("button");

  // Asignamos os valores a cada elemento
  usuario.textContent = nome;
  commentText.textContent = comentario;
  deleteButton.textContent = "Eliminar";
  deleteButton.classList.add("delete-btn");

  // Engadimos os elementos no seu sitio
  divComentario.appendChild(usuario);
  divComentario.appendChild(commentText);
  divComentario.appendChild(deleteButton);
  commentSection.appendChild(divComentario);

  // Limpamos os campos do formulario
  form.reset();

  // Agora, para que se poidan eliminar os comentarios, temos que engadirlle funcionalidade ó botón.
  deleteButton.addEventListener("click", function () {
    commentSection.removeChild(divComentario);
  });
});
