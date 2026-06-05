const productTable = document.getElementById("productTable");
const form = document.getElementById("form");

// Primeiro imos engadir o evento submit para engadir produtos á taboa mediante o formulario.
form.addEventListener("submit", function (e) {
  e.preventDefault();
  // Como imos engadir as filas no <tbody> imos acceder a él
  let tableBody = document.querySelector("#productTable tbody");

  // Recollemos os datos
  const productName = document.getElementById("productName").value;
  const productPrice = document.getElementById("productPrice").value;
  const productDescription =
    document.getElementById("productDescription").value;

  // Creamos os novos elementos para engadir na táboa: por cada produto unha tr
  let newRow = document.createElement("tr");

  // Para engadir as celdas (td) podemos engadilas de unha en unha (createElement(td) para cada valor) ou facer o seguinte:
  newRow.innerHTML = `
  <td>${productName}</td>
  <td>${productPrice}</td>
  <td>${productDescription}</td>
  <td><button onclick="removeProduct(this)">Eliminar</button></td>`; //Engadimos o botón co evento inline para evitar máis líneas de código

  // Agora engadimos a fila á táboa
  tableBody.appendChild(newRow);

  // Limpamos os campos do formulario
  form.reset();
});

// Función para eliminar produtos da táboa
function removeProduct(button) {
  button.closest("tr").remove();
}
