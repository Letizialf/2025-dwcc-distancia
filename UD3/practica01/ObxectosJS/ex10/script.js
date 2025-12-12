document.getElementById("analisarTexto").addEventListener("click", function () {
  // Obter o texto introducido polo usuario
  let texto = document.getElementById("texto").value;
  // 1. Contar palabras no texto
  function contarPalabras(texto) {
    //TODO: a realizar polo alumnado
    let arrayTexto = texto.split(" ");

    return arrayTexto.length;
  }
  // 2. Atopar a palabra máis longa
  function palabraMaisLonga(texto) {
    //TODO: a realizar polo alumnado
    let palabras = texto.split(" ");
    let maisLonga = "";
    for (let i = 0; i < palabras.length; i++) {
      if (palabras[i].length > maisLonga.length) {
        maisLonga = palabras[i];
      }
    }

    return maisLonga;
  }
  // 3. Inverter o texto
  function inverterTexto(texto) {
    //TODO: a realizar polo alumnado
    let textoReversa = texto.split("").reverse().join("");
    return textoReversa;
  }
  // 4. Eliminar vogais do texto
  function eliminarVogais(texto) {
    //TODO: a realizar polo alumnado
    let textoSenVogais = texto.replace(/[aeiouáéíóúAEIOUÁÉÍÓÚ]/g, "");
    return textoSenVogais;
  }
  // Actualizar o contido dos parágrafos coa análise do texto
  document.getElementById("contarPalabras").textContent =
    "Número de palabras: " + contarPalabras(texto);
  document.getElementById("palabraMaisLonga").textContent =
    "Palabra máis longa: " + palabraMaisLonga(texto);
  document.getElementById("textoInvertido").textContent =
    "Texto invertido: " + inverterTexto(texto);
  document.getElementById("eliminarVogais").textContent =
    "Texto sen vogais: " + eliminarVogais(texto);
});
