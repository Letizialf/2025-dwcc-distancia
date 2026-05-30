const form = document.getElementById("form");
const userList = document.getElementById("userList");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const age = document.getElementById("age");
  const email = document.getElementById("email");

  // Creamos os elementos para logo asignarlles o valor
  let user = document.createElement("li");
  let userName = document.createElement("h3");
  let userAge = document.createElement("p");
  let userMail = document.createElement("p");

  // Asignamos valores
  userName.textContent = name.value;
  userAge.textContent = age.value;
  userMail.textContent = email.value;

  // Engadimos os elementos á web
  user.appendChild(userName);
  user.appendChild(userAge);
  user.appendChild(userMail);

  userList.appendChild(user);
});
