// Accedemos ós elementos do DOM que imos controlar
const btn = document.getElementById("getDogButton");
const image = document.getElementById("dogImage");

// Primeiro temos que facer a petición
// async function fetchRandomDogImage() {
//   try {
//     const url = "https://api.thedogapi.com/v1/images/search?live_jsHOhDg4L0sXXPYTA7X37dvgUOINLOszr9EWOe9dNHAWSQw7INy9Fgo1HOC0CCmB";
//     const response = await fetch(url);
//     console.log(response);

//     //   Comprobamos que se reciba ben a resposta
//     if (!response.ok) {
//       throw new Error("Error HTTP: " + response.status);
//     }

//     //   Almacenamos a resposta e transformamola a Json
//     const data = await response.json();
//     console.log(data);

//     //   Modificamos o atributo src de image para que o seu valor sexa a url da imaxe que nos devolve a API
//     image.src = data[0].url;
//   } catch (error) {
//     console.error("Erro ó obter a imaxe");
//   }
// }

/** FETCH CON PROMESAS */
function fetchRandomDogImage() {
  fetch(
    "https://api.thedogapi.com/v1/images/search?live_jsHOhDg4L0sXXPYTA7X37dvgUOINLOszr9EWOe9dNHAWSQw7INy9Fgo1HOC0CCmB"
  )
    .then((response) => {
      // Comprobamos o estado da petición
      if (!response.ok) {
        throw new Error("Error HTTP: " + response.status);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);

      //  Modificamos o atributo src de image para que o seu valor sexa a url da imaxe que nos devolve a API
      image.src = data[0].url;
    })
    .catch((error) => {
      console.error("Erro na obtención da imaxe", error);
    });
}
// Agora imos engadir o evento no botón
btn.addEventListener("click", fetchRandomDogImage);
