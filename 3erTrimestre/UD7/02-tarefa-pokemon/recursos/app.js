// Primeiro temos que acceder ós elementos do DOM que imos modificar
const nomePoke = document.getElementById("pokemonName");
const tipoPoke = document.getElementById("pokemonType");
const imagePoke = document.getElementById("pokemonImage");
const btn = document.getElementById("getPokemonButton");

// Unha vez accedemos a todos os elementos necesarios podemos facer o fetch
async function fetchRandomPokemon() {
  const idRandom = Math.floor(Math.random() * 898) + 1;
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${idRandom}`);

  if (!response.ok) {
    throw new Error("Error HTTP: " + response.status);
  }

  const data = await response.json();
  console.log(data);

  // Accedemos ó nome e, como no obxecto json está en minúsculas, temos que modificalo para que a primeira letra sexa maiúscula
  nomePoke.textContent = data.name.charAt(0).toUpperCase() + data.name.slice(1);

  // Accedemos ós tipos do Pokemon
  const types = data.types.map((t) => t.type.name);
  console.log(types);

  // Engadimos os tipos ó DOM
  tipoPoke.textContent = `Tipos: ${types.join(", ")}`;

  // Agora imos ca imaxe

  imagePoke.src = data.sprites.front_default;
}

btn.addEventListener("click", fetchRandomPokemon);
