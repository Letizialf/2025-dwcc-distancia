document.getElementById("gardar").addEventListener("click", function () {
  // Completa o código aquí para gardar os datos en sessionStorage e mostralos;

  let nome = document.getElementById("nome").value;
  let mensaxe = document.getElementById("mensaxe").value;

  sessionStorage.setItem("nome", nome);
  sessionStorage.setItem("mensaxe", mensaxe);

  document.getElementById("resultado").innerHTML = `<p><strong>Nome:
</strong> ${nome}</p><p><strong>Mensaxe:</strong> ${mensaxe}</p>`;
});
