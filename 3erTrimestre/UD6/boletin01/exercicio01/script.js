/** EXERCICIO 1 */

//Problema 1: Crea un código en JS que acceda ao elemento <a> con id='link1' e modifique o seu atributo href para que apunte a unha nova URL 'https://www.novapagina.com'

let ligazon = document.getElementById("link1"); //Accedemos
console.log(ligazon);

// ligazon.setAttribute("href", "https://www.novapagina.com"); //modificamos href
ligazon.href = "https://www.novapagina.com";
console.log(ligazon);

//Problema 2: Crea un novo párrafo dinámicamente que se engada ao final do <div> con id='contedor'
let parrafo = document.createElement("p"); //Creamos o elemento
parrafo.innerText = "Benvido á miña páxina web"; //Engadimoslle o texto

let contedor = document.getElementById("contedor"); //Seleccionamos o contedor no que engadiremos o parrafo
contedor.appendChild(parrafo); // Engadimos o parrafo ao final do contedor (Como último fillo do elemento)

//Problema 3: Cando se execute o script amosa por pantalla o contido do primeiro <p> e o do terceiro <p> utilizando a navegación entre nodos sen usar getElement

let div = document.getElementById("contedor"); //Seleccionamos o contedor que contén os párrafos

let p1 = div.firstElementChild; //Accedemos ao primeiro nodo fillo do div
let p3 = div.lastElementChild.previousElementSibling; //Accedemos ao último nodo fillo do div, pero como antes engadimos outro <p>, temos que coller o previousSibling para coller o 3 en lugar do 4

console.log(p1.textContent);
console.log(p3.textContent);
