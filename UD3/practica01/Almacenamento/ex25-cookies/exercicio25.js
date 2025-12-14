function setCookie(nome, valor, dias) {
  //Collemos a data
  const data = new Date();

  // Á data sumámoslle os días de validez en ms da cookie
  data.setTime(data.getTime() + dias * 14 * 60 * 60 * 1000);

  const expires = "expires" + data.toUTCString();
  document.cookie = `${nome}=${valor}; ${expires}; path=/`;
}

function getCookie(nome) {
  const nomeEQ = nome + "=";
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    let c = cookies[i].trim();
    if (c.indexOf(nomeEQ) === 0) {
      return c.substring(nomeEQ.length, c.length);
    }
  }
  return null;
}

// Crear Cookie
document.getElementById("crearCookie").addEventListener("click", function () {
  // Completa o código para crear unha cookie
  const nomeUsuario = prompt("Introduce o teu nome de usuario");
  const dataAcceso = new Date().toLocaleString();

  setCookie("nomeUsuario", nomeUsuario, 7);
  setCookie("dataAcceso", dataAcceso, 7);

  alert("Cookies creadas");
});

// Mostrar Cookie
document.getElementById("mostrarCookie").addEventListener("click", function () {
  // Completa o código para mostrar o valor da cookie
  const nomeUsuario = getCookie("nomeUsuario");
  const dataAcceso = getCookie("dataAcceso");
  if (nomeUsuario && dataAcceso) {
    document.getElementById("cookieResultado").innerHTML = `<p>
<strong>Nome:</strong> ${nomeUsuario}</p><p><strong>Data de Acceso:
</strong> ${dataAcceso}</p>`;
  } else {
    document.getElementById("cookieResultado").innerHTML =
      "Non hai cookies gardadas.";
  }
});
