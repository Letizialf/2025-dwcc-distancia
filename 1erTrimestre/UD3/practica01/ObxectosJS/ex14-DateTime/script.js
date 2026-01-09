function mostrarDataFormatos() {
  // Obter a data actual
  let dataActual = new Date();
  // Lista de diferentes formatos usando Intl.DateTimeFormat
  let formatos = {
    "YY/MM/DD": new Intl.DateTimeFormat("en", {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
    }).format(dataActual),
    "YYYY/MM/DD": new Intl.DateTimeFormat("en", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(dataActual),
    "DD-MM-YYYY": new Intl.DateTimeFormat("en", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
      .format(dataActual)
      .replace(/\//g, "-"),
    "MM-DD-YYYY": new Intl.DateTimeFormat("en", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    }).format(dataActual),
    "DD/MM/YY": new Intl.DateTimeFormat("en", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    })
      .format(dataActual)
      .replace(/\//g, "/"),
    "DD Month YYYY": new Intl.DateTimeFormat("en", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(dataActual),
    "Month DD, YYYY": new Intl.DateTimeFormat("en", {
      month: "long",
      day: "2-digit",
      year: "numeric",
    }).format(dataActual),
    "YYYY-mm-dd (ISO)": new Intl.DateTimeFormat("sv-SE").format(dataActual), // Formato ISO-like
    "YYYY/MM/DD HH:mm": `${new Intl.DateTimeFormat("en", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(dataActual)}
${dataActual.getHours().toString().padStart(2, "0")}:${dataActual
      .getMinutes()
      .toString()
      .padStart(2, "0")}`,
    "YYYY/MM/DD HH:mm:ss": `${new Intl.DateTimeFormat("en", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(dataActual)}
${dataActual.getHours().toString().padStart(2, "0")}:${dataActual
      .getMinutes()
      .toString()
      .padStart(2, "0")}:${dataActual
      .getSeconds()
      .toString()
      .padStart(2, "0")}`,
  };
  // Mostrar os diferentes formatos na consola
  console.log("Data actual en diferentes formatos:");
  for (let [nomeFormato, valor] of Object.entries(formatos)) {
    console.log(`${nomeFormato}: ${valor}`);
  }
}
// Executar a función para amosar as datas en diferentes formatos
mostrarDataFormatos();
