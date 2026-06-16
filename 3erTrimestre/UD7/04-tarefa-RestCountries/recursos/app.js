// Primeiro imos acceder a todos os elementos HTML cos que queremos traballar
const countryInput = document.getElementById("country");
const divResult = document.getElementById("result");
//api.restcountries.com/countries/v5?q=canada
// Agora a función do fetch
https: function fetchCountry(nomePais) {
  fetch(`https://restcountries.com/v5?/${encodeURIComponent(nomePais)}`, {})
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error HTTP: ", response.status);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data[0]);
    });
}

function buscarPais() {
  const nomePais = countryInput.value.trim();
  if (nomePais === "") {
    console.error("Tes que introducir o nome de algún país");
    return;
  }

  fetchCountry(nomePais);
}

function mostrarResultado(data) {
  divResult.innerHTML = `<h4 id="nomePais">${data.translations.spa.common} ou ${
    data.name.common
  }</h4>
      <img src="${data.flags.svg}" alt="Bandeira de ${data.name.common}" />
      <p id="capital">${data.capital[0]}</p>
      <p id="region">${data.region}</p>
      <p id="poboacion">${data.population.toLocaleString()}</p>
  
    `;
}
