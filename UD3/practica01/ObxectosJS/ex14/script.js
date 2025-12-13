/**
 * Obter a data e hora actuais con JS
 * Converter e amosar a data en diferentes formatos
 * Mostrar todo na consola do navegador
 */

let data = new Date();
console.log(data);

// Formato por defecto -- toString
console.log(`Formato por defecto: ${data.toString()}`);

// Formato ISO 8601 -- toISOString
console.log(`Formato ISO 8601: ${data.toISOString()}`);

// Formato curto -- toLocaleDateString
console.log(`Formato curto (local): ${data.toLocaleDateString()}`);

// Formato longo (local) -- Date.toLocaleDateString con opcións:
// Nome do día da semana, mes por extenso e ano local
console.log(
  `Formato longo (local). ${data.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  })}`
);

// Formato estadounidense MM/DD/YYYY
console.log(`Formato estadounidense: ${data.toLocaleDateString("en-US")}`);

// Formato galego -- longo
console.log(
  `Formato galego: ${data.toLocaleDateString("gl-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  })}`
);

// Formato francés -- longo
console.log(
  `Formato francés: ${data.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  })}`
);

// Formato alemán -- longo
console.log(
  `Formato alemán: ${data.toLocaleDateString("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  })}`
);

//Formato japonés
console.log(
  `Formato japonés: ${data.toLocaleDateString("ja-JP-u-ca-japanese", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  })}`
);

// Formato italiano
console.log(
  `Formato italiano: ${data.toLocaleDateString("it-IT", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  })}`
);

// Formato ruso
console.log(
  `Formato ruso: ${data.toLocaleDateString("ru-RU", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  })}`
);

// Formato chino
console.log(
  `Formato chino: ${data.toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  })}`
);

// Formato hindi
console.log(
  `Formato indio: ${data.toLocaleDateString("hi-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  })}`
);

// Formato árabe Exipto
console.log(
  `Formato árabe de Exipto: ${data.toLocaleDateString("ar-EG", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  })}`
);

// Formato portugués
console.log(
  `Formato portugués: ${data.toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  })}`
);

// Formato coreano
console.log(
  `Formato coreano: ${data.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  })}`
);

// Formato árabe
console.log(
  `Formato árabe: ${data.toLocaleDateString("ar-SA", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    calendar: "islamic",
  })}`
);
