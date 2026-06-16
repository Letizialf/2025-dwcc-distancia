//Primeiro accedemos ós elementos do DOM cos que imos traballar
const ipForm = document.getElementById("ipForm");
const ipInput = document.getElementById("ipInput");
const divResult = document.getElementById("result");

// Asociamos unha función ó submit do formulario na que se evita que o formulario se recargue ao envialo
ipForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Limpamos todos os espazos que poida haber nos extremos da IP
  const ipUser = ipInput.value.trim();

  // Comprobamos que o campo non está vacío
  if (!ipUser) {
    mostrarErro("Debes introducir unha IP");
    return;
  }

  // Unha vez nos aseguramos de que a IP ten un valor facemos o fetch
  fetchIp(ipUser);
});

// Agora facemos o fetch, o cal recibe a ip proporcionada polo usuario
function fetchIp(ip) {
  // Agora facemos a petición para a IP introducida polo usuario
  fetch(`https://ipapi.co/${ip}/json/`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro HTTP", response.status);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      if (data.error) {
        throw new Error(data.reason);
      }

      mostrarResultado(data);
    })
    .catch((error) => {
      mostrarErro(error.message);
    });
}

// Función para amosar os erros
function mostrarErro(errorMessage) {
  divResult.innerHTML = `<div class="alert alert-danger mt-4">
        <strong>Erro:</strong>${errorMessage}
        </div>`;
}

// Amosamos os resultados da búsqueda co fetch no div correspondente
function mostrarResultado(data) {
  // Aquí creamos os elementos e amosamos todo no div #result
  divResult.innerHTML = `
        <div class="alert alert-success mt-4">
    <h4 class="alert-heading">Información da IP: <span class="fw-bold">8.8.8.8</span></h4>
    <hr>
    <ul class="list-group list-group-flush">
        <li class="list-group-item"><strong>Cidade:</strong> ${data.city}</li>
        <li class="list-group-item"><strong>Rexión:</strong> ${data.region}</li>
        <li class="list-group-item"><strong>País:</strong> ${data.country_name} (${data.country})</li>
        <li class="list-group-item"><strong>Continente:</strong> ${data.continent_code}</li>
        <li class="list-group-item"><strong>Latitude:</strong>  ${data.latitude}</li>
        <li class="list-group-item"><strong>Lonxitude:</strong> ${data.longitude}</li>
        <li class="list-group-item"><strong>Organización:</strong>  ${data.org}</li>
        <li class="list-group-item"><strong>Zona horaria:</strong> ${data.timezone}</li>
    </ul>
</div>
    `;
}
