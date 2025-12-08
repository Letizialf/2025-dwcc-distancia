const min = 0;
const max = 9;
const tamanox = 3;
const tamanoy = 3;

// Retorna un número aleatorio entre min e max
const aleatorio = function (min, max) {
  return Math.round(Math.random() * (max - min) + min);
};

// Retorna unha matriz aleatoria entre as dimensións indicadas como l1 e l2
const matrizAleatoria = function (l1, l2) {
  var matriz = [];
  for (let i = 0; i < l1; i++) {
    let fila = [];
    for (let j = 0; j < l2; j++) {
      fila.push(aleatorio(min, max));
    }
    matriz.push(fila);
  }
  return matriz;
};

// Función para mostrar unha matriz en formato de tabla
const mostrarMatrizTabla = function (matriz) {
  let saida = "<table> ";
  matriz.forEach((i) => (saida += generateRow(i)));
  saida += "</table>";
  return saida;
};

// Función para xerar filas da táboa
const generateRow = function (row) {
  var fila = "<tr>";
  row.forEach((i) => (fila += "<td width='10%'>" + i + "</td>"));
  fila += "</tr>";
  return fila;
};

// Función que suma dúas matrices
const summatrix = function (m1, m2) {
  let resultado = [];
  //TODO: A realiar polo alumnado.

  // Recorremos a matriz 1 polas filas e polas columnas
  for (let i = 0; i < m1.length; i++) {
    // i recorre as filas da matriz
    resultado[i] = []; // Creamos unha fila nova para almacenar o resultado
    for (let j = 0; j < m1[i].length; j++) {
      // j recorre as columnas da matriz
      resultado[i][j] = m1[i][j] + m2[i][j]; // Suma elemento por elemento en cada posición de i e j
    }
  }

  resultado = matrizAleatoria(tamanox, tamanoy); //Elimina esta liña de código que xera unha matriz aleatoria.
  return resultado;
};

// Xera dúas matrices aleatorias
let m1 = matrizAleatoria(tamanox, tamanoy);
let m2 = matrizAleatoria(tamanox, tamanoy);

// Suma das dúas matrices
let resultado = summatrix(m1, m2);

// Mostra as matrices en táboas
let tablaM1 = mostrarMatrizTabla(m1);
document.getElementById("m1").innerHTML = tablaM1;

let tablaM2 = mostrarMatrizTabla(m2);
document.getElementById("m2").innerHTML = tablaM2;

let tablaSuma = mostrarMatrizTabla(resultado);
document.getElementById("m3").innerHTML = tablaSuma;
