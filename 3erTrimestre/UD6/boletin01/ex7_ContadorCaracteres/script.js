// Collemos os elementos do HTML cos que traballaremos
const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");
const warningMessage = document.getElementById("warningMessage");

// Cada vez que se engada un caracter no input, temos que contalo, polo que necesitamos un evento
textInput.addEventListener("input", function () {
  let remainingChars = 100 - textInput.value.length;
  charCount.textContent = remainingChars;

  if (remainingChars < 0) {
    warningMessage.style.display = "block";
  } else {
    warningMessage.style.display = "none";
  }
});
