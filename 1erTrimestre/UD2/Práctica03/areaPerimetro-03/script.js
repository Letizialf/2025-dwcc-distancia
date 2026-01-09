let entrada = parseFloat(
  prompt("Introduce o valor do radio da circunferencia")
);

let divArea = document.getElementById("area");
console.log(divArea);

let divPerimetro = document.getElementById("perimetro");
console.log(divPerimetro);

areaCircunferencia(entrada);
perimetroCircunferencia(entrada);

// Función que calcula a área da circunferencia dado o radio--> pi*r²
function areaCircunferencia(r) {
  let radio = validarEntrada(r);
  let area = (Math.PI * Math.pow(radio, 2)).toFixed(3);
  console.log(typeof area);

  // Creamos o elemento que almacenará o resultado da área
  let parrafoArea = document.createElement("p");
  parrafoArea.innerText = `A área da circunferencia de radio: ${radio} é = ${area}m²`;
  divArea.appendChild(parrafoArea);
}

// Función que calcula o perímetro dad circinferencia dado o radio --> 2*pi*r
function perimetroCircunferencia(r) {
  let radio = validarEntrada(r);
  let perimetro = (2 * Math.PI * radio).toFixed(3);

  // Creamos o elemento que almacenará o resultado do perímetro
  let parrafoPerimetro = document.createElement("p");
  parrafoPerimetro.innerText = `O perímetro da circunferencia de radio: ${radio} é = ${perimetro}m`;
  divPerimetro.appendChild(parrafoPerimetro);
}

// Función que valida que o dato introducido sexa válido, é dicir, un valor numérico maior ou igual a 0
function validarEntrada(entrada) {
  while (entrada === "" || isNaN(entrada) || entrada <= 0) {
    alert(
      "O radio introducido non é válido.\nComproba que introduciras un número maior ou igual a 0"
    );

    entrada = Number(prompt("Introduce o valor do radio da circunferencia"));
  }

  return entrada;
}
