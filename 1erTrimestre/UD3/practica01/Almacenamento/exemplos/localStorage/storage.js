function iniciar() {
  var boton = document.getElementById("grabar");
  boton.addEventListener("click", nuevoitem, false);
}
function nuevoitem() {
  var clave = document.getElementById("clave").value;
  var valor = document.getElementById("texto").value;
  localStorage.setItem(clave, valor);
  mostrar(clave);
}
function mostrar(clave) {
  var cajadatos = document.getElementById("cajadatos");
  var valor = localStorage.getItem(clave);
  var conten = "";
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    conten += "<div>" + key + ": " + value + "</div>";
    console.log(key + ": " + value);
  }
  cajadatos.innerHTML = "<div>" + conten + "</div>";
}
window.addEventListener("load", iniciar, false);
