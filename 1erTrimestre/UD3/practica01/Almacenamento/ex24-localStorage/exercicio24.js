document.getElementById("gardar").addEventListener("click", function () {
  // Completa o código aquí para gardar os datos en sessionStorage e mostralos;

  let nome = document.getElementById("nome").value;
  let mensaxe = document.getElementById("mensaxe").value;

  localStorage.setItem("nome", nome);
  localStorage.setItem("mensaxe", mensaxe);

  document.getElementById("resultado").innerHTML = `<p><strong>Nome:
</strong> ${localStorage.getItem(
    "nome"
  )}</p><p><strong>Mensaxe:</strong> ${localStorage.getItem("mensaxe")}</p>`;
});
