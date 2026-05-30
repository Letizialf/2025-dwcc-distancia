// Array cos artigos
const articles = [
  { id: 1, title: "Novo smartphone lanzado", category: "tecnoloxia" },
  { id: 2, title: "Fútbol: O clásico", category: "deportes" },
  { id: 3, title: "O mellor museo de arte contemporáneo", category: "cultura" },
  {
    id: 4,
    title: "Intel lanza procesadores de nova xeración",
    category: "tecnoloxia",
  },
  { id: 5, title: "Maratón de Nova York", category: "deportes" },
];

const listaArtigos = document.getElementById("articlesList");
const select = document.getElementById("categorySelect");
console.log(select);

amosarArtigos(articles);

// Creamos unha funciion que liste os artigos e os amose na web
function amosarArtigos(articles) {
  listaArtigos.innerHTML = ""; //Limpa a lista e amosa solo os que se quere amosar
  articles.forEach((art) => {
    let artigo = document.createElement("li");
    artigo.textContent = art.title;
    listaArtigos.appendChild(artigo);
  });
}

// Para que cada vez que cambie o valor do select se actualice a lista de artigos temos que:
// Engadir o evento 'change'
// Cada vez que se dea o evento, executaráse a función de callback onde compararemos se o valor do select coincide coa categoría de algún dos artigos da lista.
// Se é así, devolveranse só esos artigos. En caso contrario amosarase a lista completa.
select.addEventListener("change", function () {
  let categoriaSeleccionada = select.value;
  let artigosFiltrados = categoriaSeleccionada
    ? articles.filter((art) => art.category === categoriaSeleccionada)
    : articles;

  amosarArtigos(artigosFiltrados);
});
