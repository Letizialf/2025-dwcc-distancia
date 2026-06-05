// Primeiro parágrafo global
const paragrafos = document.querySelectorAll("p");

if (paragrafos.length > 0) {
  paragrafos[0].style.color = "red";
}

// Último parágrafo global
if (paragrafos.length > 0) {
  paragrafos[paragrafos.length - 1].style.color = "green";
}
// Segundo fillo de cada div

// const segundos = document.querySelectorAll("div :nth-child(2)");
// segundos.forEach((el) => {
//   el.style.textDecoration = "underline";
// });

document.querySelectorAll("div").forEach((div) => {
  const fillos = div.children;
  // Comprobamos que hai polo menos dous fillos
  if (fillos.length >= 2 && fillos[1].tagName.toLowerCase() === "p") {
    fillos[1].style.textDecoration = "underline";
  }
});

// Pares e impares
paragrafos.forEach((p, index) => {
  if (index % 2 == 0) {
    p.style.backgroundColor = "#eef"; //PARES
  } else {
    p.style.backgroundColor = "pink"; //IMPARES
  }
});
