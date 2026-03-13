// MÓDULO DOS APUNTES

// Facemos unha función básica
function cube(x) {
  return x * x * x;
}

const foo = Math.PI + Math.SQRT2;
var graph = {
  options: {
    color: "white",
    thickness: "2px",
  },
  draw: function () {
    console.log("Desde a función draw do gráfico");
  },
};

export { cube, foo, graph };
