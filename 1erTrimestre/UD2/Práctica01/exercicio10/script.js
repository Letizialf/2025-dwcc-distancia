// 1. Conversión de Grados Centígrados a Kelvin
document
  .getElementById("convertCelsius")
  .addEventListener("click", function () {
    const celsius = parseFloat(document.getElementById("celsius").value);
    // TODO: Facer a conversión

    const kelvin = celsius + 273.15;
    document.getElementById(
      "kelvinResult"
    ).textContent = `${celsius} °C son ${kelvin.toFixed(2)} graos kelvin`;
  });

// 2. Conversión de Euros a Dólares
document.getElementById("convertEuros").addEventListener("click", function () {
  const euros = parseFloat(document.getElementById("euros").value);
  // TODO: A realizar polo alumno este fragmento de código. O resultado final gardarase na variable dollars
  const dollars = euros * 1.1;
  document.getElementById(
    "dollarResult"
  ).textContent = `${euros} € son ${dollars.toFixed(2)} dólares`;
});

// 3. Taboa de Conversión de $ a Euros
document.getElementById("generateTable").addEventListener("click", function () {
  const dollars = parseFloat(document.getElementById("dollarsTable").value);
  const exchangeRate = 0.91; // Supoñendo 1 Dólar = 0.91 Euros
  const conversionTable = document.getElementById("conversionTable");

  conversionTable.innerHTML = ""; // Limpar a lista antes de xerar
  for (let i = 1; i <= dollars; i++) {
    const euros = i * exchangeRate;
    const listItem = document.createElement("li");
    listItem.textContent = `${i} $ son ${euros.toFixed(2)} €`;
    conversionTable.appendChild(listItem);
  }
});

// 4. Conversión de Pulgadas a Centímetros
document.getElementById("convertInches").addEventListener("click", function () {
  const inches = parseFloat(document.getElementById("inches").value);
  // TODO: A realizar polo alumno este fragmento de código. O resultado final gardarase na
  let cm = inches * 2.54;
  document.getElementById(
    "cmResult"
  ).textContent = `${inches} in son ${cm.toFixed(2)} cm`;
});
