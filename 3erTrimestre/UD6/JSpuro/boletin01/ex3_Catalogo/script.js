const products = [
  {
    id: 1,
    name: "Produto A",
    price: 10,
    description: "Descrición do Produto A",
  },
  {
    id: 2,
    name: "Produto B",
    price: 20,
    description: "Descrición do Produto B",
  },
  {
    id: 3,
    name: "Produto C",
    price: 30,
    description: "Descrición do Produto C",
  },
];
const catalog = document.getElementById("catalog");
const cart = document.getElementById("cart");

// IMPLEMENTAR A FUNCIONALIDADE DO CATÁLOGO E DO CARRITO

/** Para amosar os productos na web temos que percorrer o array de obxectos.
 *
 * Cada producto será un <div> que conterá os detalles.
 */

// Percorremos o array de productos e creamos os elementos necesarios.
products.forEach((prod) => {
  let divProduto = document.createElement("div");
  let nomeProd = document.createElement("h3");
  let prezoProd = document.createElement("p");
  let descripcionProd = document.createElement("p");
  let botonEngadir = document.createElement("button");

  // Asignámoslle aos elementos creados a propiedade correspondente do produto
  nomeProd.textContent = prod.name;
  prezoProd.textContent = `Prezo: ${prod.price}`;
  descripcionProd.textContent = prod.description;
  botonEngadir.textContent = "Engadir ao Carro";

  // Funcionalidade do botón: esta función crease despois
  botonEngadir.addEventListener("click", function () {
    addToCart(prod);
  });
  // Engadimos os elementos ao contedor e o contedor do novo produto á web para que se amosen

  divProduto.appendChild(nomeProd);
  divProduto.appendChild(prezoProd);
  divProduto.appendChild(descripcionProd);
  divProduto.appendChild(botonEngadir);

  catalog.appendChild(divProduto);
});

function addToCart(prod) {
  let prodCarro = document.createElement("li");
  let nomeProdCarro = document.createElement("h5");
  let prezoProdCarro = document.createElement("p");
  let botonEliminar = document.createElement("button");

  // Asignamos os valores aos novos elementos
  nomeProdCarro.textContent = prod.name;
  prezoProdCarro.textContent = ` - ${prod.price}€`;
  botonEliminar.textContent = "Eliminar do Carro";

  botonEliminar.addEventListener(`click`, function () {
    cart.removeChild(prodCarro);
  });

  // Engadimos os elementos ao HTML
  prodCarro.appendChild(nomeProdCarro);
  prodCarro.appendChild(prezoProdCarro);
  prodCarro.appendChild(botonEliminar);

  cart.appendChild(prodCarro);
}
