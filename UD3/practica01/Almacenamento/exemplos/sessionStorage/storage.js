function iniciar() {
  var boton = document.getElementById("grabar");
  boton.addEventListener("click", nuevoitem, false);
}
function nuevoitem() {
  var clave = document.getElementById("clave").value;
  var valor = document.getElementById("texto").value;
  sessionStorage.setItem(clave, valor);
  mostrar(clave);
}
function mostrar(clave) {
  var cajadatos = document.getElementById("cajadatos");
  var valor = sessionStorage.getItem(clave);
  var conten = "";
  for (let i = 0; i < sessionStorage.length; i++) {
    const key = sessionStorage.key(i);
    const value = sessionStorage.getItem(key);
    conten += "<div>" + key + ": " + value + "</div>";
    console.log(key + ": " + value);
  }
  cajadatos.innerHTML = "<div>" + conten + "</div>";
}
window.addEventListener("load", iniciar, false);
